import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { comprehensiveDiseases, comprehensiveSymptoms, sources, categories } from '../data/comprehensiveDiseases';
import type { ComprehensiveDisease } from '../data/diseases/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, CheckCircle, Clock, Info, Search, Stethoscope, Plus, X, TrendingUp, Users, Loader2, Brain, Filter, RotateCcw, Zap, Shield } from 'lucide-react';

interface TriageResult {
  disease: ComprehensiveDisease;
  confidence: number;
  matchedSymptoms: string[];
  severity: string;
  riskScore: number;
}

// On-device rule-based system for symptom analysis. User selects symptoms; returns ranked diagnoses with confidence, severity, risk, and next-step recommendations.
export default function Triage() {
  const { t, language } = useLanguage();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [results, setResults] = useState<TriageResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showSymptomSearch, setShowSymptomSearch] = useState(false);
  const [showFilters, setShowFilters] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowFilters(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const ageGroups = ['all', 'pediatric', 'adult', 'elderly'];
  const genders = ['all', 'male', 'female'];

  const filteredSymptoms = useMemo(() => {
    return comprehensiveSymptoms[language].filter(symptom =>
      symptom.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedSymptoms.includes(symptom)
    ).slice(0, 20); // Limit for performance
  }, [language, searchTerm, selectedSymptoms]);

  const addSymptom = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
      setSearchTerm('');
      setShowSymptomSearch(false);
    }
  };

  const removeSymptom = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
  };

  const clearAllSymptoms = () => {
    setSelectedSymptoms([]);
    setResults([]);
  };

  const analyzeSymptoms = () => {
    if (selectedSymptoms.length === 0) return;

    setIsAnalyzing(true);
    
    setTimeout(() => {
      const triageResults: TriageResult[] = [];

      let filteredDiseases = comprehensiveDiseases;
      
      // Apply filters
      if (selectedCategory !== 'all') {
        filteredDiseases = filteredDiseases.filter(d => d.category === selectedCategory);
      }
      if (selectedAgeGroup !== 'all') {
        filteredDiseases = filteredDiseases.filter(d => d.ageGroup === selectedAgeGroup || d.ageGroup === 'all');
      }
      if (selectedGender !== 'all') {
        filteredDiseases = filteredDiseases.filter(d => d.gender === selectedGender || d.gender === 'all');
      }

      filteredDiseases.forEach(disease => {
        const diseaseSymptoms = disease.symptoms[language];
        const commonSymptoms = disease.commonSymptoms[language];
        const rareSymptoms = disease.rareSymptoms[language];
        const matchedSymptoms: string[] = [];
        
        let commonMatches = 0;
        let rareMatches = 0;
        let totalMatches = 0;

        selectedSymptoms.forEach(selectedSymptom => {
          diseaseSymptoms.forEach(diseaseSymptom => {
            if (diseaseSymptom.toLowerCase().includes(selectedSymptom.toLowerCase()) || 
                selectedSymptom.toLowerCase().includes(diseaseSymptom.toLowerCase())) {
              if (!matchedSymptoms.includes(diseaseSymptom)) {
                matchedSymptoms.push(diseaseSymptom);
                totalMatches++;
                
                if (commonSymptoms.includes(diseaseSymptom)) {
                  commonMatches++;
                } else if (rareSymptoms.includes(diseaseSymptom)) {
                  rareMatches++;
                }
              }
            }
          });
        });

        if (matchedSymptoms.length > 0) {
          let baseConfidence = (totalMatches / Math.max(diseaseSymptoms.length, selectedSymptoms.length)) * 100;
          
          baseConfidence += (commonMatches * 15);
          baseConfidence += (rareMatches * 25);
          
          if (disease.prevalenceInAfrica === 'very-high') {
            baseConfidence *= 1.4;
          } else if (disease.prevalenceInAfrica === 'high') {
            baseConfidence *= 1.2;
          }

          let riskScore = 0;
          switch (disease.severity) {
            case 'emergency':
              riskScore = 90 + (commonMatches * 2) + (rareMatches * 3);
              break;
            case 'high':
              riskScore = 70 + (commonMatches * 2) + (rareMatches * 3);
              break;
            case 'medium':
              riskScore = 50 + (commonMatches * 2) + (rareMatches * 3);
              break;
            case 'low':
              riskScore = 30 + (commonMatches * 2) + (rareMatches * 3);
              break;
          }

          const confidence = Math.min(95, Math.round(baseConfidence));
          riskScore = Math.min(100, riskScore);

          triageResults.push({
            disease,
            confidence,
            matchedSymptoms,
            severity: disease.severity,
            riskScore
          });
        }
      });

      const severityOrder = {
        'emergency': 4,
        'high': 3,
        'medium': 2,
        'low': 1
      };

      triageResults.sort((a, b) => {
        if (a.confidence !== b.confidence) {
          return b.confidence - a.confidence;
        }
        if (a.riskScore !== b.riskScore) {
          return b.riskScore - a.riskScore;
        }
        const severityA = severityOrder[a.severity as keyof typeof severityOrder] || 0;
        const severityB = severityOrder[b.severity as keyof typeof severityOrder] || 0;
        return severityB - severityA;
      });

      setResults(triageResults.slice(0, 8));
      setIsAnalyzing(false);
    }, 1500);
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'emergency':
        return <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />;
      case 'high':
        return <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />;
      case 'medium':
        return <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />;
      case 'low':
        return <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />;
      default:
        return <Info className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'emergency':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getRiskColor = (riskScore: number) => {
    if (riskScore >= 80) return 'bg-red-100 text-red-800 border-red-200';
    if (riskScore >= 60) return 'bg-orange-100 text-orange-800 border-orange-200';
    if (riskScore >= 40) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  const getRecommendation = (severity: string, riskScore: number) => {
    if (severity === 'emergency' || riskScore >= 80) {
      return t('pages.triage.seekImmediate');
    } else if (severity === 'high' || riskScore >= 60) {
      return t('pages.triage.consultDoctor');
    } else if (severity === 'medium' || riskScore >= 40) {
      return t('pages.triage.monitor');
    } else {
      return t('pages.triage.selfCare');
    }
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'mayo': return '🏥';
      case 'nhs': return '🇬🇧';
      case 'nhsscot': return '🏴󠁧󠁢󠁳󠁣󠁴󠁿';
      case 'who': return '🌍';
      case 'cdc': return '🇺🇸';
      case 'illinois': return '🏛️';
      case 'ecdc': return '🇪🇺';
      default: return '📋';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl text-white shadow-lg">
              <Stethoscope className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {t('pages.triage.title')}
              </h1>
              <p className="text-sm sm:text-lg text-gray-600">
                {t('pages.triage.aiDescription')}
              </p>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
            <Card className="border-l-4 border-l-blue-500 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2">
                  <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-blue-600">{comprehensiveDiseases.length}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('pages.home.diseasesCovered')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-green-600">{comprehensiveSymptoms[language].length}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('common.symptoms')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-purple-600">{sources.length}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('common.sources')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-orange-500 bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-orange-600">{results.length}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('common.results')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
          {/* Symptom Selection */}
          <div className="xl:col-span-1">
            <Card className="mb-6 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                      <Search className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                      <span>{t('pages.triage.selectSymptoms')}</span>
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {t('pages.triage.chooseSymptoms')}
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="h-8 w-8 p-0 hover:bg-blue-50 transition-colors lg:hidden"
                  >
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Filters */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showFilters ? 'max-h-screen' : 'max-h-0'}`}>
                  <div className="grid grid-cols-1 gap-3 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200/50">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        {t('pages.triage.focusArea')}
                      </label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{t('pages.triage.allConditions')}</SelectItem>
                          {categories.map(category => (
                            <SelectItem key={category} value={category}>
                              {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          {t('pages.triage.ageGroup')}
                        </label>
                        <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
                          <SelectTrigger className="text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">{t('pages.triage.allAges')}</SelectItem>
                            <SelectItem value="pediatric">{t('pages.triage.children')}</SelectItem>
                            <SelectItem value="adult">{t('pages.triage.adults')}</SelectItem>
                            <SelectItem value="elderly">{t('pages.triage.elderly')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">
                          {t('pages.triage.gender')}
                        </label>
                        <Select value={selectedGender} onValueChange={setSelectedGender}>
                          <SelectTrigger className="text-sm">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">{t('pages.triage.allGenders')}</SelectItem>
                            <SelectItem value="male">{t('common.male')}</SelectItem>
                            <SelectItem value="female">{t('common.female')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Symptom Search */}
                <div className="relative">
                  <Button
                    variant="outline"
                    onClick={() => setShowSymptomSearch(!showSymptomSearch)}
                    className="w-full justify-start hover:bg-blue-50 transition-colors text-sm group"
                  >
                    <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 transition-transform" />
                    {t('pages.triage.addSymptom')}
                  </Button>
                  
                  {showSymptomSearch && (
                    <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-white border rounded-lg shadow-xl">
                      <div className="p-3">
                        <div className="relative">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            placeholder={t('pages.triage.searchSymptoms')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 text-sm"
                          />
                        </div>
                      </div>
                      <div className="max-h-48 overflow-y-auto">
                        {filteredSymptoms.map((symptom) => (
                          <button
                            key={symptom}
                            onClick={() => addSymptom(symptom)}
                            className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm transition-colors border-b border-gray-100 last:border-b-0"
                          >
                            {symptom}
                          </button>
                        ))}
                        {filteredSymptoms.length === 0 && searchTerm && (
                          <div className="px-3 py-2 text-sm text-gray-500">
                            {t('pages.triage.noSymptomsFound')}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Selected Symptoms */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      {t('pages.triage.selectedSymptoms')} ({selectedSymptoms.length})
                    </label>
                    {selectedSymptoms.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAllSymptoms}
                        className="h-6 text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <RotateCcw className="h-3 w-3 mr-1" />
                        {t('pages.triage.clearAll')}
                      </Button>
                    )}
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {selectedSymptoms.map((symptom) => (
                      <div key={symptom} className="flex items-center justify-between bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-2 group hover:shadow-sm transition-all">
                        <span className="text-sm text-green-800 flex-1 pr-2">{symptom}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSymptom(symptom)}
                          className="h-6 w-6 p-0 text-green-600 hover:text-red-600 hover:bg-red-50 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  onClick={analyzeSymptoms}
                  disabled={selectedSymptoms.length === 0 || isAnalyzing}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition-all shadow-lg hover:shadow-xl group"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      {t('pages.triage.analyzing')}
                    </>
                  ) : (
                    <>
                      <Brain className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                      {t('pages.triage.checkSymptoms')}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Quick Symptom Categories */}
            <Card className="shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-orange-500" />
                  <span>{t('pages.triage.commonSymptoms')}</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  {t('pages.triage.quickAdd')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-2">
                  {comprehensiveSymptoms[language].slice(0, 12).map((symptom) => (
                    <Button
                      key={symptom}
                      variant={selectedSymptoms.includes(symptom) ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => selectedSymptoms.includes(symptom) ? removeSymptom(symptom) : addSymptom(symptom)}
                      className="text-xs h-8 transition-all justify-start hover:shadow-sm"
                    >
                      {symptom}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="xl:col-span-2">
            {results.length > 0 ? (
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {t('pages.triage.results')}
                  </h2>
                  <Badge variant="outline" className="bg-white/70 backdrop-blur-sm text-sm animate-pulse">
                    {results.length} {t('pages.triage.results')}
                  </Badge>
                </div>

                {results.map((result, index) => (
                  <Card key={result.disease.id} className={`border-l-4 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group ${
                    result.severity === 'emergency' ? 'border-l-red-500' :
                    result.severity === 'high' ? 'border-l-orange-500' :
                    result.severity === 'medium' ? 'border-l-yellow-500' :
                    'border-l-green-500'
                  }`}>
                    <CardHeader className="pb-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <CardTitle className="flex items-center space-x-2 text-lg group-hover:text-green-600 transition-colors">
                          {getSeverityIcon(result.severity)}
                          <span>{result.disease.name[language]}</span>
                          {index === 0 && (
                            <Badge variant="secondary" className="text-xs bg-gradient-to-r from-blue-100 to-green-100 animate-pulse">
                              {t('pages.triage.mostLikely')}
                            </Badge>
                          )}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="bg-white/70 text-xs">
                            {t('pages.triage.confidence')}: {result.confidence}%
                          </Badge>
                          <Badge className={`${getRiskColor(result.riskScore)} text-xs`}>
                            {t('pages.triage.risk')}: {result.riskScore}%
                          </Badge>
                          <Badge className={`${getSeverityColor(result.severity)} text-xs`}>
                            {result.severity.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>{getSourceIcon(result.disease.source)}</span>
                        <span>{t('common.source')}: {result.disease.source.toUpperCase()}</span>
                        <span>•</span>
                        <span>{t('common.prevalence')}: {result.disease.prevalenceInAfrica.replace('-', ' ')}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          {t('pages.triage.matchedSymptoms')}:
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {result.matchedSymptoms.map((symptom, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-orange-50 text-orange-800 hover:bg-orange-100 transition-colors">
                              {symptom}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          {t('pages.triage.riskFactors')}:
                        </h4>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {result.disease.riskFactors[language].slice(0, 4).map((factor, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100 transition-colors">
                              {factor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          {t('common.treatment')}:
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {result.disease.treatment[language]}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                          {t('pages.triage.whenToSeekHelp')}:
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {result.disease.whenToSeekHelp[language]}
                        </p>
                      </div>

                      <div className={`p-3 rounded-lg border transition-all hover:shadow-sm ${
                        result.severity === 'emergency' || result.riskScore >= 80 ? 'bg-red-50 border-red-200' :
                        result.severity === 'high' || result.riskScore >= 60 ? 'bg-orange-50 border-orange-200' :
                        result.severity === 'medium' || result.riskScore >= 40 ? 'bg-yellow-50 border-yellow-200' :
                        'bg-green-50 border-green-200'
                      }`}>
                        <h4 className={`font-semibold mb-1 text-sm ${
                          result.severity === 'emergency' || result.riskScore >= 80 ? 'text-red-900' :
                          result.severity === 'high' || result.riskScore >= 60 ? 'text-orange-900' :
                          result.severity === 'medium' || result.riskScore >= 40 ? 'text-yellow-900' :
                          'text-green-900'
                        }`}>
                          {t('pages.triage.recommendations')}:
                        </h4>
                        <p className={`text-sm ${
                          result.severity === 'emergency' || result.riskScore >= 80 ? 'text-red-800' :
                          result.severity === 'high' || result.riskScore >= 60 ? 'text-orange-800' :
                          result.severity === 'medium' || result.riskScore >= 40 ? 'text-yellow-800' :
                          'text-green-800'
                        }`}>
                          {getRecommendation(result.severity, result.riskScore)}
                        </p>
                      </div>

                      {result.disease.complications[language].length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                            {t('pages.triage.possibleComplications')}:
                          </h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {result.disease.complications[language].slice(0, 4).map((complication, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs bg-red-50 text-red-800 border-red-200 hover:bg-red-100 transition-colors">
                                {complication}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="text-center py-8 sm:py-12">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Stethoscope className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {t('pages.triage.readyForAssessment')}
                  </h3>
                  <p className="text-gray-500 mb-6 text-sm sm:text-base">
                    {t('pages.triage.selectForGuidance')}
                  </p>
                  
                  {/* Source Information */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
                    <div className="text-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                      <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">🏥</div>
                      <div className="text-sm font-medium">{t('pages.triage.mayoClinic')}</div>
                      <div className="text-xs text-gray-600">{t('pages.triage.comprehensiveCare')}</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group">
                      <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">🇬🇧</div>
                      <div className="text-sm font-medium">{t('pages.triage.nhs')}</div>
                      <div className="text-xs text-gray-600">{t('pages.triage.ukHealth')}</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group">
                      <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">🌍</div>
                      <div className="text-sm font-medium">{t('pages.triage.who')}</div>
                      <div className="text-xs text-gray-600">{t('pages.triage.globalHealth')}</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors group">
                      <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">🇺🇸</div>
                      <div className="text-sm font-medium">{t('pages.triage.cdc')}</div>
                      <div className="text-xs text-gray-600">{t('pages.triage.diseaseControl')}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {results.length > 0 && (
          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 sm:p-6 shadow-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">
                  {t('pages.triage.disclaimer')}
                </h3>
                <p className="text-yellow-800 text-sm leading-relaxed">
                  {t('pages.triage.disclaimerText')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
