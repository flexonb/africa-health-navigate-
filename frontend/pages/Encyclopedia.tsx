import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { comprehensiveDiseases, categories, sources, searchComprehensiveDiseases } from '../data/comprehensiveDiseases';
import type { ComprehensiveDisease } from '../data/diseases/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Book, AlertTriangle, CheckCircle, Clock, Info, Globe, Shield, Filter, X, TrendingUp, Users, Stethoscope, Heart, RotateCcw } from 'lucide-react';

// Renders a comprehensive disease encyclopedia from a static JSON data source. Features client-side search and filtering by various attributes like category, prevalence, and severity.
export default function Encyclopedia() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedPrevalence, setSelectedPrevalence] = useState('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [selectedDisease, setSelectedDisease] = useState<ComprehensiveDisease | null>(null);
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

  const filteredDiseases = useMemo(() => {
    let diseases = comprehensiveDiseases;

    if (searchTerm.trim()) {
      diseases = searchComprehensiveDiseases(searchTerm);
    }

    if (selectedCategory !== 'all') {
      diseases = diseases.filter(d => d.category === selectedCategory);
    }

    if (selectedSource !== 'all') {
      diseases = diseases.filter(d => d.source === selectedSource);
    }

    if (selectedSeverity !== 'all') {
      diseases = diseases.filter(d => d.severity === selectedSeverity);
    }

    if (selectedPrevalence !== 'all') {
      diseases = diseases.filter(d => d.prevalenceInAfrica === selectedPrevalence);
    }

    if (selectedAgeGroup !== 'all') {
      diseases = diseases.filter(d => d.ageGroup === selectedAgeGroup || d.ageGroup === 'all');
    }

    return diseases;
  }, [searchTerm, selectedCategory, selectedSource, selectedSeverity, selectedPrevalence, selectedAgeGroup]);

  const getSeverityIcon = (severity?: string) => {
    switch (severity) {
      case 'emergency':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'high':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'medium':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'low':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      infectious: 'bg-red-100 text-red-800 border-red-200',
      chronic: 'bg-blue-100 text-blue-800 border-blue-200',
      emergency: 'bg-red-100 text-red-800 border-red-200',
      mental: 'bg-purple-100 text-purple-800 border-purple-200',
      maternal: 'bg-pink-100 text-pink-800 border-pink-200',
      pediatric: 'bg-green-100 text-green-800 border-green-200',
      musculoskeletal: 'bg-orange-100 text-orange-800 border-orange-200',
      autoimmune: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      skin: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      respiratory: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      cardiovascular: 'bg-red-100 text-red-800 border-red-200',
      neurological: 'bg-purple-100 text-purple-800 border-purple-200',
      endocrine: 'bg-teal-100 text-teal-800 border-teal-200',
      digestive: 'bg-amber-100 text-amber-800 border-amber-200',
      urological: 'bg-blue-100 text-blue-800 border-blue-200',
      hematological: 'bg-rose-100 text-rose-800 border-rose-200',
      oncological: 'bg-gray-100 text-gray-800 border-gray-200',
      ophthalmological: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      ent: 'bg-violet-100 text-violet-800 border-violet-200',
      reproductive: 'bg-pink-100 text-pink-800 border-pink-200',
      metabolic: 'bg-orange-100 text-orange-800 border-orange-200',
      immunological: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      environmental: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'mayo': return <Shield className="h-4 w-4 text-blue-600" />;
      case 'nhs': return <Shield className="h-4 w-4 text-blue-600" />;
      case 'nhsscot': return <Shield className="h-4 w-4 text-blue-600" />;
      case 'illinois': return <Globe className="h-4 w-4 text-green-600" />;
      case 'ecdc': return <Globe className="h-4 w-4 text-purple-600" />;
      case 'who': return <Globe className="h-4 w-4 text-blue-600" />;
      case 'cdc': return <Shield className="h-4 w-4 text-red-600" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'mayo': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'nhs': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'nhsscot': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'illinois': return 'bg-green-100 text-green-800 border-green-200';
      case 'ecdc': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'who': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cdc': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPrevalenceColor = (prevalence?: string) => {
    switch (prevalence) {
      case 'very-high': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'rare': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedSource('all');
    setSelectedSeverity('all');
    setSelectedPrevalence('all');
    setSelectedAgeGroup('all');
  };

  const hasActiveFilters = searchTerm.trim() || selectedCategory !== 'all' || selectedSource !== 'all' || selectedSeverity !== 'all' || selectedPrevalence !== 'all' || selectedAgeGroup !== 'all';

  const totalDiseases = comprehensiveDiseases.length;
  const categoryStats = categories.map(cat => ({
    category: cat,
    count: comprehensiveDiseases.filter(d => d.category === cat).length
  })).sort((a, b) => b.count - a.count);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
              <Book className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('pages.encyclopedia.title')}
              </h1>
              <p className="text-sm sm:text-lg text-gray-600">
                {t('pages.encyclopedia.description')}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
            <Card className="border-l-4 border-l-blue-500 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2">
                  <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-blue-600">{totalDiseases}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('pages.encyclopedia.totalDiseases')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-green-600">{categories.length}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('common.categories')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-purple-600">{sources.length}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('common.sources')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-orange-500 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-orange-600">{filteredDiseases.length}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{t('pages.encyclopedia.filteredResults')}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 sm:gap-8">
          {/* Sidebar - Filters and Disease List */}
          <div className="xl:col-span-1 space-y-6">
            {/* Search and Filters */}
            <Card className="shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{t('pages.encyclopedia.searchAndFilter')}</span>
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="h-8 w-8 p-0 lg:hidden"
                  >
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder={t('pages.encyclopedia.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 text-sm"
                  />
                </div>

                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showFilters ? 'max-h-screen' : 'max-h-0'}`}>
                  <div className="space-y-4 pt-4 border-t lg:border-t-0">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        {t('common.category')}
                      </label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder={t('pages.encyclopedia.allCategories')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{t('pages.encyclopedia.allCategories')}</SelectItem>
                          {categories.map(category => (
                            <SelectItem key={category} value={category}>
                              {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        {t('common.source')}
                      </label>
                      <Select value={selectedSource} onValueChange={setSelectedSource}>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder={t('pages.encyclopedia.allSources')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{t('pages.encyclopedia.allSources')}</SelectItem>
                          <SelectItem value="mayo">{t('pages.encyclopedia.mayo')}</SelectItem>
                          <SelectItem value="nhs">{t('pages.encyclopedia.nhs')}</SelectItem>
                          <SelectItem value="nhsscot">{t('pages.encyclopedia.nhsscot')}</SelectItem>
                          <SelectItem value="illinois">{t('pages.encyclopedia.illinois')}</SelectItem>
                          <SelectItem value="ecdc">{t('pages.encyclopedia.ecdc')}</SelectItem>
                          <SelectItem value="who">{t('pages.encyclopedia.who')}</SelectItem>
                          <SelectItem value="cdc">{t('pages.encyclopedia.cdc')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        {t('common.severity')}
                      </label>
                      <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder={t('pages.encyclopedia.allSeverities')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{t('pages.encyclopedia.allSeverities')}</SelectItem>
                          <SelectItem value="emergency">{t('common.emergency')}</SelectItem>
                          <SelectItem value="high">{t('common.high')}</SelectItem>
                          <SelectItem value="medium">{t('common.medium')}</SelectItem>
                          <SelectItem value="low">{t('common.low')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        {t('common.prevalence')} in Africa
                      </label>
                      <Select value={selectedPrevalence} onValueChange={setSelectedPrevalence}>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder={t('pages.encyclopedia.allPrevalences')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{t('pages.encyclopedia.allPrevalences')}</SelectItem>
                          <SelectItem value="very-high">{t('pages.encyclopedia.veryHigh')}</SelectItem>
                          <SelectItem value="high">{t('pages.encyclopedia.high')}</SelectItem>
                          <SelectItem value="medium">{t('pages.encyclopedia.medium')}</SelectItem>
                          <SelectItem value="low">{t('pages.encyclopedia.low')}</SelectItem>
                          <SelectItem value="rare">{t('pages.encyclopedia.rare')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        {t('pages.triage.ageGroup')}
                      </label>
                      <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
                        <SelectTrigger className="text-sm">
                          <SelectValue placeholder={t('pages.encyclopedia.allAgeGroups')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{t('pages.encyclopedia.allAgeGroups')}</SelectItem>
                          <SelectItem value="pediatric">{t('pages.encyclopedia.children')}</SelectItem>
                          <SelectItem value="adult">{t('pages.encyclopedia.adults')}</SelectItem>
                          <SelectItem value="elderly">{t('pages.encyclopedia.elderly')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {hasActiveFilters && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={clearFilters}
                        className="w-full text-sm"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        {t('pages.encyclopedia.clearFilters')}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disease List */}
            <Card className="shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>{t('common.symptoms')} ({filteredDiseases.length})</span>
                  {filteredDiseases.length > 0 && (
                    <Badge variant="outline" className="text-xs">
                      {Math.round((filteredDiseases.length / totalDiseases) * 100)}%
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredDiseases.map((disease) => (
                    <Button
                      key={disease.id}
                      variant={selectedDisease?.id === disease.id ? 'default' : 'ghost'}
                      onClick={() => setSelectedDisease(disease)}
                      className="w-full justify-start text-left h-auto p-3 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start space-x-3 w-full">
                        <div className="flex flex-col items-center space-y-1">
                          {getSeverityIcon(disease.severity)}
                          {disease.prevalenceInAfrica && (
                            <div className="w-2 h-2 rounded-full bg-current opacity-60" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm truncate">
                            {disease.name[language]}
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            <Badge className={`${getCategoryColor(disease.category)} text-xs`}>
                              {disease.category}
                            </Badge>
                            <Badge className={`${getSourceColor(disease.source)} text-xs`}>
                              {disease.source.toUpperCase()}
                            </Badge>
                          </div>
                          {disease.prevalenceInAfrica && (
                            <Badge className={`${getPrevalenceColor(disease.prevalenceInAfrica)} text-xs mt-1`}>
                              {disease.prevalenceInAfrica.replace('-', ' ')} {t('common.prevalence')}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>

                {filteredDiseases.length === 0 && (
                  <div className="text-center py-8">
                    <Search className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">
                      {t('pages.encyclopedia.noDiseasesFound')}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Disease Details */}
          <div className="xl:col-span-3">
            {selectedDisease ? (
              <div className="space-y-4 sm:space-y-6">
                {/* Disease Header */}
                <Card className="border-l-4 border-l-green-500 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 sm:p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white">
                          {getSeverityIcon(selectedDisease.severity)}
                        </div>
                        <div>
                          <CardTitle className="text-xl sm:text-2xl mb-2">{selectedDisease.name[language]}</CardTitle>
                          <div className="flex flex-wrap gap-2">
                            <Badge className={getCategoryColor(selectedDisease.category)}>
                              {selectedDisease.category.charAt(0).toUpperCase() + selectedDisease.category.slice(1)}
                            </Badge>
                            <Badge className={getSourceColor(selectedDisease.source)} variant="outline">
                              <div className="flex items-center space-x-1">
                                {getSourceIcon(selectedDisease.source)}
                                <span>{selectedDisease.source.toUpperCase()}</span>
                              </div>
                            </Badge>
                            {selectedDisease.severity && (
                              <Badge className={`${selectedDisease.severity === 'emergency' ? 'bg-red-100 text-red-800' : 
                                selectedDisease.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                                selectedDisease.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'}`}>
                                {selectedDisease.severity} {t('common.severity')}
                              </Badge>
                            )}
                            {selectedDisease.prevalenceInAfrica && (
                              <Badge className={getPrevalenceColor(selectedDisease.prevalenceInAfrica)}>
                                {selectedDisease.prevalenceInAfrica.replace('-', ' ')} {t('common.prevalence')}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* Symptoms */}
                  <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-lg">
                        <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                        <span>{t('common.symptoms')}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2 text-sm">{t('pages.encyclopedia.commonSymptoms')}</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {selectedDisease.commonSymptoms[language].map((symptom: string, idx: number) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-orange-50 text-orange-800">
                                {symptom}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2 text-sm">{t('pages.encyclopedia.allSymptoms')}</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {selectedDisease.symptoms[language].map((symptom: string, idx: number) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {symptom}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Causes */}
                  <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-lg">
                        <Info className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                        <span>{t('common.causes')}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {selectedDisease.causes[language].map((cause: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {cause}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Treatment */}
                <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                      <span>{t('common.treatment')}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {selectedDisease.treatment[language]}
                    </p>
                  </CardContent>
                </Card>

                {/* Prevention */}
                <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                      <span>{t('common.prevention')}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {selectedDisease.prevention[language]}
                    </p>
                  </CardContent>
                </Card>

                {/* When to Seek Help */}
                <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-red-900 text-lg">
                      <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                      <span>{t('pages.triage.whenToSeekHelp')}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-800 leading-relaxed text-sm sm:text-base">
                      {selectedDisease.whenToSeekHelp[language]}
                    </p>
                  </CardContent>
                </Card>

                {/* Additional Information Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {/* Risk Factors */}
                  {selectedDisease.riskFactors && (
                    <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-lg">
                          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                          <span>{t('pages.encyclopedia.riskFactors')}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {selectedDisease.riskFactors[language].map((factor: string, idx: number) => (
                            <Badge key={idx} variant="outline" className="text-xs bg-yellow-50 text-yellow-800 border-yellow-200">
                              {factor}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Complications */}
                  {selectedDisease.complications && (
                    <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-lg">
                          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                          <span>{t('pages.encyclopedia.possibleComplications')}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {selectedDisease.complications[language].map((complication: string, idx: number) => (
                            <Badge key={idx} variant="outline" className="text-xs bg-red-50 text-red-800 border-red-200">
                              {complication}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Diagnosis and Prognosis */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {selectedDisease.diagnosis && (
                    <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-lg">
                          <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                          <span>{t('records.diagnosis')}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {selectedDisease.diagnosis[language]}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {selectedDisease.prognosis && (
                    <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-lg">
                          <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                          <span>{t('pages.encyclopedia.prognosis')}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {selectedDisease.prognosis[language]}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            ) : (
              <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="text-center py-12 sm:py-16">
                  <div className="mb-6">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
                      <Book className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('pages.encyclopedia.selectADisease')}
                  </h3>
                  <p className="text-gray-500 mb-6 text-sm sm:text-base">
                    {t('pages.encyclopedia.selectADiseaseDesc')}
                  </p>
                  
                  {/* Category Quick Access */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                    {categoryStats.slice(0, 6).map(({ category, count }) => (
                      <Button
                        key={category}
                        variant="outline"
                        onClick={() => setSelectedCategory(category)}
                        className="text-left h-auto p-3 hover:shadow-md transition-all"
                      >
                        <div>
                          <div className="font-medium text-sm">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </div>
                          <div className="text-xs text-gray-500">{count} {t('common.symptoms')}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Footer Information */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 sm:p-6">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
                  {t('pages.encyclopedia.mayo')} & {t('pages.encyclopedia.nhs')}
                </h3>
                <p className="text-blue-800 text-xs sm:text-sm">
                  {t('pages.encyclopedia.evidenceBased')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4 sm:p-6">
            <div className="flex items-start space-x-3">
              <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">
                  {t('pages.encyclopedia.who')} & {t('pages.encyclopedia.cdc')}
                </h3>
                <p className="text-green-800 text-xs sm:text-sm">
                  {t('pages.encyclopedia.globalGuidance')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4 sm:p-6">
            <div className="flex items-start space-x-3">
              <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-purple-900 mb-2 text-sm sm:text-base">
                  {t('pages.encyclopedia.ecdc')} & {t('common.regional')}
                </h3>
                <p className="text-purple-800 text-xs sm:text-sm">
                  {t('pages.encyclopedia.regionalGuidance')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4 sm:p-6">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-orange-900 mb-2 text-sm sm:text-base">
                  {sources.length} {t('common.trusted')} {t('common.sources')}
                </h3>
                <p className="text-orange-800 text-xs sm:text-sm">
                  {t('pages.encyclopedia.trustedCompanionDesc', { count: sources.length })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-start space-x-3">
            <Info className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-2 text-sm sm:text-base">
                {t('pages.encyclopedia.disclaimer')}
              </h3>
              <p className="text-yellow-800 text-xs sm:text-sm leading-relaxed">
                {t('pages.encyclopedia.disclaimerText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
