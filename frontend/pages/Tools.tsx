import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useMode } from '../contexts/ModeContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calculator, 
  Scale, 
  Baby, 
  Droplets, 
  Heart, 
  Shield, 
  MapPin, 
  Brain,
  Sparkles,
  Zap,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
  Pill,
  Stethoscope,
  AlertTriangle,
  Eye,
  Bot,
  Search
} from 'lucide-react';

export default function Tools() {
  const { t } = useLanguage();
  const { mode } = useMode();
  const [searchTerm, setSearchTerm] = useState('');

  const allTools = useMemo(() => [
    {
      title: t('tools.dosage.title'),
      description: t('tools.dosage.description'),
      icon: Calculator,
      path: '/tools/dosage',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      category: 'Medical',
      priority: 'high',
      audience: ['personal', 'specialist']
    },
    {
      title: t('tools.bmi.title'),
      description: t('tools.bmi.description'),
      icon: Scale,
      path: '/tools/bmi',
      color: 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      category: 'Assessment',
      priority: 'medium',
      audience: ['personal', 'specialist']
    },
    {
      title: t('tools.pregnancy.title'),
      description: t('tools.pregnancy.description'),
      icon: Baby,
      path: '/tools/pregnancy',
      color: 'bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
      category: 'Maternal',
      priority: 'medium',
      audience: ['personal']
    },
    {
      title: t('tools.ors.title'),
      description: t('tools.ors.description'),
      icon: Droplets,
      path: '/tools/ors',
      color: 'bg-gradient-to-br from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
      category: 'Emergency',
      priority: 'high',
      audience: ['personal', 'specialist']
    },
    {
      title: t('tools.firstAid.title'),
      description: t('tools.firstAid.description'),
      icon: Heart,
      path: '/tools/first-aid',
      color: 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      category: 'Emergency',
      priority: 'high',
      audience: ['personal', 'specialist']
    },
    {
      title: t('tools.vaccination.title'),
      description: t('tools.vaccination.description'),
      icon: Shield,
      path: '/tools/vaccination',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      category: 'Prevention',
      priority: 'medium',
      audience: ['personal', 'specialist']
    },
    {
      title: t('tools.facilities.title'),
      description: t('tools.facilities.description'),
      icon: MapPin,
      path: '/tools/facilities',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      category: 'Directory',
      priority: 'low',
      audience: ['personal']
    },
    {
      title: t('tools.mentalHealth.title'),
      description: t('tools.mentalHealth.description'),
      icon: Brain,
      path: '/tools/mental-health',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      category: 'Mental Health',
      priority: 'medium',
      audience: ['personal']
    },
    {
      title: t('tools.sanitation.title'),
      description: t('tools.sanitation.description'),
      icon: Sparkles,
      path: '/tools/sanitation',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
      category: 'Education',
      priority: 'low',
      audience: ['personal', 'specialist']
    },
    {
      title: t('tools.drugInteraction.title'),
      description: t('tools.drugInteraction.description'),
      icon: Pill,
      path: '/tools/drug-interactions',
      color: 'bg-gradient-to-br from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700',
      category: 'Medical',
      priority: 'high',
      audience: ['personal', 'specialist']
    },
    {
      title: t('tools.medicalConverter.title'),
      description: t('tools.medicalConverter.description'),
      icon: Calculator,
      path: '/tools/medical-converter',
      color: 'bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      category: 'Medical',
      priority: 'medium',
      audience: ['personal', 'specialist']
    },
    {
      title: t('tools.ivCalculator.title'),
      description: t('tools.ivCalculator.description'),
      icon: Droplets,
      path: '/tools/iv-calculator',
      color: 'bg-gradient-to-br from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700',
      category: 'Medical',
      priority: 'high',
      audience: ['personal', 'specialist']
    },
    {
      title: t('tools.gcs.title'),
      description: t('tools.gcs.description'),
      icon: Brain,
      path: '/tools/glasgow-coma-scale',
      color: 'bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700',
      category: 'Assessment',
      priority: 'high',
      audience: ['personal', 'specialist']
    },
    {
      title: t('tools.apgar.title'),
      description: t('tools.apgar.description'),
      icon: Baby,
      path: '/tools/apgar-score',
      color: 'bg-gradient-to-br from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700',
      category: 'Maternal',
      priority: 'high',
      audience: ['personal', 'specialist']
    },
    {
      title: t('tools.painScale.title'),
      description: t('tools.painScale.description'),
      icon: AlertTriangle,
      path: '/tools/pain-scale',
      color: 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      category: 'Assessment',
      priority: 'high',
      audience: ['personal', 'specialist']
    },
    {
      title: t('tools.healthBuddy.title'),
      description: t('tools.healthBuddy.description'),
      icon: Bot,
      path: '/tools/health-buddy',
      color: 'bg-gradient-to-br from-rose-500 to-fuchsia-600 hover:from-rose-600 hover:to-fuchsia-700',
      category: 'Education',
      priority: 'medium',
      audience: ['personal']
    }
  ], [t]);

  const tools = useMemo(() => {
    let filtered = allTools.filter(tool => tool.audience.includes(mode));
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(tool => 
        tool.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        tool.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        tool.category.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }
    return filtered;
  }, [mode, allTools, searchTerm]);

  const categories = [...new Set(tools.map(tool => tool.category))];

  const stats = [
    { icon: Calculator, value: tools.length.toString(), label: t('common.tools'), color: 'text-blue-500' },
    { icon: Shield, value: 'WHO', label: t('tools.compliant'), color: 'text-green-500' },
    { icon: Globe, value: '3', label: t('pages.home.languages'), color: 'text-purple-500' },
    { icon: Zap, value: '100%', label: t('tools.offline'), color: 'text-orange-500' }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800 text-xs">{t('common.high')}</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800 text-xs">{t('common.medium')}</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800 text-xs">{t('common.low')}</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white shadow-lg">
              <Calculator className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {t('common.tools')}
              </h1>
              <p className="text-lg text-gray-600">
                {t('tools.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search tools by name, description, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-base"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-4 text-center">
                  <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category} className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                <Badge variant="outline" className="bg-white/70 backdrop-blur-sm">
                  {tools.filter(tool => tool.category === category).length} {t('common.tools')}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.filter(tool => tool.category === category).map((tool) => (
                  <Link key={tool.path} to={tool.path}>
                    <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer h-full group hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                      <CardHeader className="text-center pb-4 relative">
                        <div className="absolute top-3 right-3">
                          {getPriorityBadge(tool.priority)}
                        </div>
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl text-white mb-4 transition-all group-hover:scale-110 group-hover:rotate-3 ${tool.color}`}>
                          <tool.icon className="h-7 w-7" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-green-600 transition-colors">{tool.title}</CardTitle>
                        <CardDescription className="text-sm">{tool.description}</CardDescription>
                        <Badge variant="secondary" className="text-xs mt-2 w-fit mx-auto">
                          {tool.category}
                        </Badge>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No tools found matching your search.</p>
            </CardContent>
          </Card>
        )}

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-green-900">{t('tools.whoGuidelines')}</h3>
              </div>
              <p className="text-green-800 text-sm">
                {t('pages.home.whoDescription')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-blue-900">{t('pages.home.offlineFirst')}</h3>
              </div>
              <p className="text-blue-800 text-sm">
                {t('pages.home.offlineDescription')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-8 w-8 text-purple-600 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-purple-900">{t('tools.expertDesigned')}</h3>
              </div>
              <p className="text-purple-800 text-sm">
                Designed by medical experts for healthcare workers and patients, featuring intuitive interfaces and clinical accuracy.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white text-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-teal-600/20 animate-pulse"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="h-8 w-8" />
              <h3 className="text-2xl font-bold">
                Comprehensive Medical Toolkit
              </h3>
            </div>
            <p className="text-green-100 text-lg max-w-3xl mx-auto mb-6">
              {t('tools.toolkitDescription', { count: tools.length })}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-colors">
                <CheckCircle className="h-4 w-4" />
                <span>{t('tools.whoGuidelines')}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-colors">
                <CheckCircle className="h-4 w-4" />
                <span>{t('pages.home.offlineFirst')}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-colors">
                <CheckCircle className="h-4 w-4" />
                <span>{t('tools.privacyProtected')}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-colors">
                <CheckCircle className="h-4 w-4" />
                <span>{t('tools.expertDesigned')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
