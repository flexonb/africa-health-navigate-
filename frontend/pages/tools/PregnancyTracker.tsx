import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Baby, Calendar, Heart } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface CalculationResult {
  mode: 'pregnancy' | 'ovulation';
  dueDate?: Date;
  pregnancyWeeks?: number;
  pregnancyDays?: number;
  nextOvulation?: Date;
  fertileStart?: Date;
  fertileEnd?: Date;
  nextPeriod?: Date;
}

export default function PregnancyTracker() {
  const { t } = useLanguage();
  const [trackerMode, setTrackerMode] = useState<'pregnancy' | 'ovulation'>('pregnancy');
  const [lastPeriod, setLastPeriod] = useState('');
  const [cycleLength, setCycleLength] = useState('28');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculate = () => {
    if (!lastPeriod) return;

    const lmpDate = new Date(lastPeriod);
    const today = new Date();
    
    if (trackerMode === 'pregnancy') {
      const dueDate = new Date(lmpDate);
      dueDate.setDate(lmpDate.getDate() + 280);

      const daysSinceLMP = Math.floor((today.getTime() - lmpDate.getTime()) / (1000 * 60 * 60 * 24));
      const pregnancyWeeks = Math.floor(daysSinceLMP / 7);
      const pregnancyDays = daysSinceLMP % 7;

      setResult({
        mode: 'pregnancy',
        dueDate,
        pregnancyWeeks,
        pregnancyDays,
      });
    } else { // Ovulation mode
      const cycleDays = parseInt(cycleLength) || 28;
      let nextPeriod = new Date(lmpDate);
      while (nextPeriod <= today) {
        nextPeriod.setDate(nextPeriod.getDate() + cycleDays);
      }

      const nextOvulation = new Date(nextPeriod);
      nextOvulation.setDate(nextPeriod.getDate() - 14);

      const fertileStart = new Date(nextOvulation);
      fertileStart.setDate(fertileStart.getDate() - 5);
      const fertileEnd = new Date(nextOvulation);

      setResult({
        mode: 'ovulation',
        nextOvulation,
        fertileStart,
        fertileEnd,
        nextPeriod,
      });
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Baby className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.pregnancy.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.pregnancy.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.pregnancy.calculate')}</CardTitle>
            <CardDescription>
              {t('tools.pregnancy.enterLMP')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ToggleGroup
              type="single"
              value={trackerMode}
              onValueChange={(value) => {
                if (value) {
                  setTrackerMode(value as 'pregnancy' | 'ovulation');
                  setResult(null); // Reset result when mode changes
                }
              }}
              className="grid grid-cols-2"
            >
              <ToggleGroupItem value="pregnancy">
                <Baby className="h-4 w-4 mr-2" />
                {t('tools.pregnancy.pregnancyMode')}
              </ToggleGroupItem>
              <ToggleGroupItem value="ovulation">
                <Calendar className="h-4 w-4 mr-2" />
                {t('tools.pregnancy.ovulationMode')}
              </ToggleGroupItem>
            </ToggleGroup>

            <div>
              <Label htmlFor="lastPeriod">{t('tools.pregnancy.lmp')}</Label>
              <Input
                id="lastPeriod"
                type="date"
                value={lastPeriod}
                onChange={(e) => setLastPeriod(e.target.value)}
              />
            </div>

            {trackerMode === 'ovulation' && (
              <div>
                <Label htmlFor="cycleLength">{t('tools.pregnancy.cycleLength')}</Label>
                <Input
                  id="cycleLength"
                  type="number"
                  value={cycleLength}
                  onChange={(e) => setCycleLength(e.target.value)}
                  placeholder="28"
                />
              </div>
            )}

            <Button 
              onClick={calculate}
              disabled={!lastPeriod}
              className="w-full"
            >
              {t('common.calculate')}
            </Button>
          </CardContent>
        </Card>

        {result && (
          <div className="space-y-6">
            {result.mode === 'pregnancy' && result.dueDate && (
              <Card className="border-l-4 border-l-pink-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Baby className="h-5 w-5 text-pink-500" />
                    <span>{t('tools.pregnancy.pregnancyInfo')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('tools.pregnancy.currentPregnancy')}</h4>
                    <div className="text-2xl font-bold text-pink-600">
                      {t('tools.pregnancy.weeksDays', { weeks: result.pregnancyWeeks, days: result.pregnancyDays })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('tools.pregnancy.dueDate')}</h4>
                    <div className="text-lg font-medium text-gray-700">
                      {formatDate(result.dueDate)}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('tools.pregnancy.trimester')}</h4>
                    <Badge variant="outline">
                      {result.pregnancyWeeks! <= 12 ? t('tools.pregnancy.firstTrimester') :
                       result.pregnancyWeeks! <= 27 ? t('tools.pregnancy.secondTrimester') : t('tools.pregnancy.thirdTrimester')}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {result.mode === 'ovulation' && result.nextOvulation && (
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <span>{t('tools.pregnancy.fertilityInfo')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('tools.pregnancy.nextOvulation')}</h4>
                    <div className="text-lg font-medium text-gray-700">
                      {formatDate(result.nextOvulation)}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('tools.pregnancy.fertileWindow')}</h4>
                    <div className="text-sm text-gray-600">
                      {formatDate(result.fertileStart!)} - {formatDate(result.fertileEnd!)}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('tools.pregnancy.nextPeriod')}</h4>
                    <div className="text-lg font-medium text-gray-700">
                      {formatDate(result.nextPeriod!)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.pregnancy.milestones')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <div className="font-semibold text-pink-800">{t('tools.pregnancy.firstTrimester')}</div>
                <div className="text-sm text-pink-600">{t('common.weeks')} 1-12</div>
                <div className="text-xs text-pink-500 mt-1">{t('tools.pregnancy.organDev')}</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="font-semibold text-purple-800">{t('tools.pregnancy.secondTrimester')}</div>
                <div className="text-sm text-purple-600">{t('common.weeks')} 13-27</div>
                <div className="text-xs text-purple-500 mt-1">{t('tools.pregnancy.growthMovement')}</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="font-semibold text-blue-800">{t('tools.pregnancy.thirdTrimester')}</div>
                <div className="text-sm text-blue-600">{t('common.weeks')} 28-40</div>
                <div className="text-xs text-blue-500 mt-1">{t('tools.pregnancy.finalDev')}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 bg-pink-50 border border-pink-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Heart className="h-6 w-6 text-pink-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-pink-900 mb-2">
              {t('tools.pregnancy.importantCare')}
            </h3>
            <ul className="text-pink-800 space-y-1 text-sm">
              <li>• {t('tools.pregnancy.care1')}</li>
              <li>• {t('tools.pregnancy.care2')}</li>
              <li>• {t('tools.pregnancy.care3')}</li>
              <li>• {t('tools.pregnancy.care4')}</li>
              <li>• {t('tools.pregnancy.care5')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
