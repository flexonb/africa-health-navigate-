import React, { useState, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { healthBuddyQA } from '../../data/healthBuddyQA';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Bot, Search, Shield, Heart, BookOpen, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HealthBuddy() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(healthBuddyQA[0].id);

  const filteredQA = useMemo(() => {
    if (!searchTerm) {
      return healthBuddyQA;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return healthBuddyQA.map(category => {
      const filteredQuestions = category.questions.filter(qa => 
        qa.question[language].toLowerCase().includes(lowerCaseSearchTerm) ||
        qa.answer[language].toLowerCase().includes(lowerCaseSearchTerm)
      );
      return { ...category, questions: filteredQuestions };
    }).filter(category => category.questions.length > 0);
  }, [searchTerm, language]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'sexual_health': return <Heart className="h-5 w-5" />;
      case 'menstrual_health': return <BookOpen className="h-5 w-5" />;
      case 'body_puberty': return <Brain className="h-5 w-5" />;
      case 'general_health': return <Shield className="h-5 w-5" />;
      default: return <Bot className="h-5 w-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-rose-500 to-fuchsia-600 rounded-xl text-white shadow-lg">
            <Bot className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent">
              {t('tools.healthBuddy.title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('tools.healthBuddy.description')}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Category Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>{t('common.categories')}</CardTitle>
              <CardDescription>{t('tools.healthBuddy.selectTopic')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {healthBuddyQA.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setActiveCategory(category.id)}
                    className="w-full justify-start text-left h-auto p-3"
                  >
                    <div className="flex items-center space-x-3">
                      {getCategoryIcon(category.id)}
                      <span>{category.title[language]}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Q&A Section */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder={t('tools.healthBuddy.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent>
              {filteredQA.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredQA.map((category) => (
                    (activeCategory === category.id || searchTerm) && category.questions.length > 0 && (
                      <div key={category.id} className="mb-4">
                        {searchTerm && (
                          <h3 className="text-lg font-semibold mb-2 text-gray-700">{category.title[language]}</h3>
                        )}
                        {category.questions.map((qa, idx) => (
                          <AccordionItem key={idx} value={`${category.id}-${idx}`}>
                            <AccordionTrigger className="text-left">
                              {qa.question[language]}
                            </AccordionTrigger>
                            <AccordionContent className="prose prose-sm max-w-none text-gray-700">
                              <p>{qa.answer[language]}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </div>
                    )
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-8">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">{t('tools.healthBuddy.noQuestionsFound')}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Shield className="h-6 w-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              {t('tools.healthBuddy.privacy')}
            </h3>
            <p className="text-blue-800 text-sm">
              {t('tools.healthBuddy.privacyText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
