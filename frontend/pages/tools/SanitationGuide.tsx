import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Droplets, Home, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export default function SanitationGuide() {
  const { t } = useLanguage();
  const [activeGuide, setActiveGuide] = useState<string | null>(null);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const guides = [
    {
      id: 'handwashing',
      title: 'WHO 9-Step Handwashing',
      description: 'Proper handwashing technique to prevent disease transmission',
      icon: Sparkles,
      color: 'bg-blue-500',
      duration: '20 seconds',
      steps: [
        'Wet hands with clean running water',
        'Apply enough soap to cover all hand surfaces',
        'Rub palms together',
        'Rub back of each hand with palm of other hand',
        'Rub palm to palm with fingers interlaced',
        'Rub backs of fingers to opposing palms',
        'Rub each thumb clasped in opposite hand',
        'Rub tips of fingers in opposite palm',
        'Rinse hands with water and dry with clean towel'
      ],
      tips: [
        'Wash hands for at least 20 seconds',
        'Use soap and clean running water',
        'Dry with a clean towel or air dry',
        'Use towel to turn off tap if needed'
      ]
    },
    {
      id: 'menstrual',
      title: 'Menstrual Hygiene Management',
      description: 'Safe and hygienic menstrual care practices',
      icon: Droplets,
      color: 'bg-pink-500',
      duration: 'Daily during menstruation',
      steps: [
        'Wash hands before and after changing menstrual products',
        'Change pads/tampons every 4-6 hours',
        'Wash genital area with clean water daily',
        'Use clean, dry menstrual products',
        'Dispose of used products properly',
        'Wash reusable products with soap and water',
        'Dry reusable products completely in sunlight',
        'Store clean products in a clean, dry place'
      ],
      tips: [
        'Never use the same product for more than 8 hours',
        'Avoid using cloth that is not clean',
        'Do not use harsh soaps or chemicals',
        'Maintain normal activities and diet'
      ]
    },
    {
      id: 'latrine',
      title: 'Latrine Maintenance & Safety',
      description: 'Proper latrine cleaning and maintenance procedures',
      icon: Home,
      color: 'bg-green-500',
      duration: 'Weekly cleaning',
      steps: [
        'Wear protective clothing (gloves, boots)',
        'Remove any visible waste or debris',
        'Scrub surfaces with disinfectant solution',
        'Clean toilet seat, handles, and walls',
        'Mop floor with disinfectant',
        'Empty and clean waste containers',
        'Refill hand washing station',
        'Check ventilation and lighting',
        'Dispose of cleaning materials safely'
      ],
      tips: [
        'Always wash hands after cleaning',
        'Use chlorine solution for disinfection',
        'Ensure adequate ventilation',
        'Keep cleaning supplies separate from food'
      ]
    },
    {
      id: 'water',
      title: 'Safe Water Storage',
      description: 'Guidelines for storing and treating water safely',
      icon: Droplets,
      color: 'bg-cyan-500',
      duration: 'Daily maintenance',
      steps: [
        'Use clean containers with tight-fitting lids',
        'Treat water by boiling for 1 minute',
        'Allow treated water to cool before storing',
        'Pour water into storage container (do not dip)',
        'Cover container immediately after filling',
        'Store in cool, dark place away from contamination',
        'Clean storage containers weekly',
        'Use stored water within 24-48 hours'
      ],
      tips: [
        'Never store water in containers that held chemicals',
        'Use a clean ladle or cup to remove water',
        'Do not put hands into stored water',
        'Replace storage containers regularly'
      ]
    }
  ];

  const selectedGuide = guides.find(g => g.id === activeGuide);

  const toggleStepCompletion = (stepIndex: number) => {
    const stepId = `${activeGuide}-${stepIndex}`;
    const newCompleted = new Set(completedSteps);
    
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    
    setCompletedSteps(newCompleted);
  };

  const getCompletionPercentage = () => {
    if (!selectedGuide) return 0;
    const totalSteps = selectedGuide.steps.length;
    const completedCount = selectedGuide.steps.filter((_, idx) => 
      completedSteps.has(`${activeGuide}-${idx}`)
    ).length;
    return Math.round((completedCount / totalSteps) * 100);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.sanitation.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.sanitation.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Guide Selection */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>{t('tools.sanitation.guides')}</CardTitle>
              <CardDescription>
                {t('tools.sanitation.selectGuide')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {guides.map((guide) => (
                  <Button
                    key={guide.id}
                    variant={activeGuide === guide.id ? 'default' : 'outline'}
                    onClick={() => setActiveGuide(guide.id)}
                    className="w-full justify-start text-left h-auto p-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${guide.color} text-white`}>
                        <guide.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{guide.title}</div>
                        <div className="text-xs text-gray-500">{guide.duration}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guide Content */}
        <div className="lg:col-span-2">
          {selectedGuide ? (
            <div className="space-y-6">
              {/* Guide Header */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg ${selectedGuide.color} text-white`}>
                        <selectedGuide.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle>{selectedGuide.title}</CardTitle>
                        <CardDescription>{selectedGuide.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">
                        <Clock className="h-3 w-3 mr-1" />
                        {selectedGuide.duration}
                      </Badge>
                      <div className="text-sm text-gray-600">
                        {getCompletionPercentage()}% Complete
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Steps */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('tools.sanitation.instructions')}</CardTitle>
                  <CardDescription>
                    {t('tools.sanitation.checkSteps')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedGuide.steps.map((step, idx) => {
                      const stepId = `${activeGuide}-${idx}`;
                      const isCompleted = completedSteps.has(stepId);
                      
                      return (
                        <div
                          key={idx}
                          className={`flex items-start space-x-3 p-3 rounded-lg border transition-colors ${
                            isCompleted ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                          }`}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleStepCompletion(idx)}
                            className={`mt-0.5 p-1 h-6 w-6 rounded-full ${
                              isCompleted ? 'bg-green-500 text-white' : 'border-2 border-gray-300'
                            }`}
                          >
                            {isCompleted && <CheckCircle className="h-4 w-4" />}
                          </Button>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-gray-900">
                                {t('tools.sanitation.step', { step: idx + 1 })}
                              </span>
                            </div>
                            <p className={`text-sm mt-1 ${
                              isCompleted ? 'text-green-700' : 'text-gray-700'
                            }`}>
                              {step}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardHeader>
                  <CardTitle>{t('tools.sanitation.importantTips')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {selectedGuide.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Sparkles className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  {t('tools.sanitation.selectPrompt')}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-2">
                {t('tools.sanitation.benefits')}
              </h3>
              <ul className="text-green-800 space-y-1 text-sm">
                <li>• {t('tools.sanitation.benefit1')}</li>
                <li>• {t('tools.sanitation.benefit2')}</li>
                <li>• {t('tools.sanitation.benefit3')}</li>
                <li>• {t('tools.sanitation.benefit4')}</li>
                <li>• {t('tools.sanitation.benefit5')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-orange-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-orange-900 mb-2">
                {t('tools.sanitation.seekHelp')}
              </h3>
              <ul className="text-orange-800 space-y-1 text-sm">
                <li>• {t('tools.sanitation.help1')}</li>
                <li>• {t('tools.sanitation.help2')}</li>
                <li>• {t('tools.sanitation.help3')}</li>
                <li>• {t('tools.sanitation.help4')}</li>
                <li>• {t('tools.sanitation.help5')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
