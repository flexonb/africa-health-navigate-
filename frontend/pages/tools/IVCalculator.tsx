import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Droplets, Clock, AlertTriangle, Calculator } from 'lucide-react';

interface IVCalculation {
  dropsPerMinute: number;
  mlPerHour: number;
  totalTime: number;
  completionTime: Date;
}

export default function IVCalculator() {
  const { t } = useLanguage();
  const [volume, setVolume] = useState('');
  const [time, setTime] = useState('');
  const [timeUnit, setTimeUnit] = useState('hours');
  const [dropFactor, setDropFactor] = useState('20');
  const [result, setResult] = useState<IVCalculation | null>(null);

  const dropFactors = [
    { value: '10', label: t('tools.ivCalculator.bloodSet') },
    { value: '15', label: t('tools.ivCalculator.standardSet') },
    { value: '20', label: t('tools.ivCalculator.standardSet') },
    { value: '60', label: t('tools.ivCalculator.microDrip') }
  ];

  const calculateIV = () => {
    if (!volume || !time || !dropFactor) return;

    const volumeMl = parseFloat(volume);
    const timeValue = parseFloat(time);
    const drops = parseInt(dropFactor);

    if (isNaN(volumeMl) || isNaN(timeValue) || isNaN(drops)) return;

    // Convert time to hours
    let timeInHours: number;
    switch (timeUnit) {
      case 'minutes':
        timeInHours = timeValue / 60;
        break;
      case 'hours':
        timeInHours = timeValue;
        break;
      case 'days':
        timeInHours = timeValue * 24;
        break;
      default:
        timeInHours = timeValue;
    }

    // Calculate flow rates
    const mlPerHour = volumeMl / timeInHours;
    const mlPerMinute = mlPerHour / 60;
    const dropsPerMinute = mlPerMinute * drops;

    // Calculate completion time
    const now = new Date();
    const completionTime = new Date(now.getTime() + (timeInHours * 60 * 60 * 1000));

    setResult({
      dropsPerMinute: Math.round(dropsPerMinute),
      mlPerHour: Math.round(mlPerHour * 10) / 10,
      totalTime: timeInHours,
      completionTime
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getFlowRateCategory = (mlPerHour: number) => {
    if (mlPerHour < 50) return { category: t('tools.ivCalculator.slow'), color: 'bg-blue-100 text-blue-800' };
    if (mlPerHour < 125) return { category: t('tools.ivCalculator.moderate'), color: 'bg-green-100 text-green-800' };
    if (mlPerHour < 250) return { category: t('tools.ivCalculator.fast'), color: 'bg-orange-100 text-orange-800' };
    return { category: t('tools.ivCalculator.veryFast'), color: 'bg-red-100 text-red-800' };
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Droplets className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.ivCalculator.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.ivCalculator.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.ivCalculator.parameters')}</CardTitle>
            <CardDescription>
              {t('tools.ivCalculator.parametersDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="volume">{t('tools.ivCalculator.totalVolume')}</Label>
              <Input
                id="volume"
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="1000"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="time">{t('tools.ivCalculator.infusionTime')}</Label>
                <Input
                  id="time"
                  type="number"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="8"
                />
              </div>
              <div>
                <Label>{t('tools.ivCalculator.timeUnit')}</Label>
                <Select value={timeUnit} onValueChange={setTimeUnit}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minutes">{t('tools.ivCalculator.minutes')}</SelectItem>
                    <SelectItem value="hours">{t('tools.ivCalculator.hours')}</SelectItem>
                    <SelectItem value="days">{t('tools.ivCalculator.days')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>{t('tools.ivCalculator.dropFactor')}</Label>
              <Select value={dropFactor} onValueChange={setDropFactor}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {dropFactors.map((factor) => (
                    <SelectItem key={factor.value} value={factor.value}>
                      {factor.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              onClick={calculateIV}
              disabled={!volume || !time}
              className="w-full"
            >
              <Calculator className="h-4 w-4 mr-2" />
              {t('tools.ivCalculator.calculate')}
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.ivCalculator.results')}</CardTitle>
            <CardDescription>
              {t('tools.ivCalculator.resultsDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-6">
                {/* Primary Results */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {result.dropsPerMinute}
                    </div>
                    <div className="text-sm text-blue-800">{t('tools.ivCalculator.dropsPerMinute')}</div>
                  </div>
                  
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {result.mlPerHour}
                    </div>
                    <div className="text-sm text-green-800">{t('tools.ivCalculator.mlPerHour')}</div>
                  </div>
                </div>

                {/* Flow Rate Category */}
                <div className="text-center">
                  <Badge className={getFlowRateCategory(result.mlPerHour).color}>
                    {getFlowRateCategory(result.mlPerHour).category} {t('tools.ivCalculator.flowRate')}
                  </Badge>
                </div>

                {/* Additional Information */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{t('tools.ivCalculator.totalDuration')}</span>
                    <span className="text-gray-700">
                      {result.totalTime < 1 
                        ? `${Math.round(result.totalTime * 60)} ${t('tools.ivCalculator.minutes')}`
                        : `${result.totalTime.toFixed(1)} ${t('tools.ivCalculator.hours')}`
                      }
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{t('tools.ivCalculator.completionTime')}</span>
                    <span className="text-gray-700">{formatTime(result.completionTime)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{t('tools.ivCalculator.dropFactor')}:</span>
                    <span className="text-gray-700">{dropFactor} drops/mL</span>
                  </div>
                </div>

                {/* Formula */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">{t('tools.ivCalculator.formulaUsed')}</h4>
                  <div className="text-blue-800 text-sm space-y-1">
                    <div>Drops/min = (Volume × Drop Factor) ÷ (Time in minutes)</div>
                    <div>mL/hour = Volume ÷ Time in hours</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Droplets className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  {t('tools.ivCalculator.prompt')}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Reference Information */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.ivCalculator.commonDropFactors')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">{t('tools.ivCalculator.microDrip')}</span>
                <Badge variant="outline">60 drops/mL</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">{t('tools.ivCalculator.standardSet')}</span>
                <Badge variant="outline">15-20 drops/mL</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">{t('tools.ivCalculator.bloodSet')}</span>
                <Badge variant="outline">10 drops/mL</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('tools.ivCalculator.safetyGuidelines')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{t('tools.ivCalculator.guideline1')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{t('tools.ivCalculator.guideline2')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{t('tools.ivCalculator.guideline3')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Droplets className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{t('tools.ivCalculator.guideline4')}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-900 mb-2">
              {t('tools.ivCalculator.safetyNotice')}
            </h3>
            <p className="text-yellow-800 text-sm">
              {t('tools.ivCalculator.safetyText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
