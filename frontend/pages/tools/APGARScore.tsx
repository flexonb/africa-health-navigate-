import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Baby, Heart, Stethoscope, Hand, Eye, AlertTriangle } from 'lucide-react';

interface APGARScore {
  appearance: number;
  pulse: number;
  grimace: number;
  activity: number;
  respiration: number;
  total: number;
  interpretation: string;
  timePoint: string;
}

export default function APGARScore() {
  const { t } = useLanguage();
  const [timePoint, setTimePoint] = useState<'1min' | '5min' | '10min'>('1min');
  const [appearance, setAppearance] = useState<number>(0);
  const [pulse, setPulse] = useState<number>(0);
  const [grimace, setGrimace] = useState<number>(0);
  const [activity, setActivity] = useState<number>(0);
  const [respiration, setRespiration] = useState<number>(0);
  const [result, setResult] = useState<APGARScore | null>(null);

  const appearanceScores = [
    { score: 2, description: 'Pink all over' },
    { score: 1, description: 'Pink body, blue extremities' },
    { score: 0, description: 'Blue or pale all over' }
  ];

  const pulseScores = [
    { score: 2, description: '>100 bpm' },
    { score: 1, description: '<100 bpm' },
    { score: 0, description: 'Absent' }
  ];

  const grimaceScores = [
    { score: 2, description: 'Vigorous cry, cough, sneeze' },
    { score: 1, description: 'Grimace, weak cry' },
    { score: 0, description: 'No response' }
  ];

  const activityScores = [
    { score: 2, description: 'Active movement' },
    { score: 1, description: 'Some flexion' },
    { score: 0, description: 'Limp, no movement' }
  ];

  const respirationScores = [
    { score: 2, description: 'Strong cry, regular breathing' },
    { score: 1, description: 'Weak cry, irregular breathing' },
    { score: 0, description: 'Absent' }
  ];

  const calculateAPGAR = () => {
    const total = appearance + pulse + grimace + activity + respiration;
    let interpretation: string;

    if (total >= 7) {
      interpretation = 'Normal - Baby is in good condition';
    } else if (total >= 4) {
      interpretation = 'Moderately abnormal - May need some resuscitation';
    } else {
      interpretation = 'Severely abnormal - Immediate resuscitation required';
    }

    setResult({
      appearance,
      pulse,
      grimace,
      activity,
      respiration,
      total,
      interpretation,
      timePoint
    });
  };

  const getScoreColor = (total: number) => {
    if (total >= 7) return 'bg-green-100 text-green-800 border-green-200';
    if (total >= 4) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const getScoreIcon = (total: number) => {
    if (total >= 7) return <Baby className="h-5 w-5 text-green-500" />;
    if (total >= 4) return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    return <AlertTriangle className="h-5 w-5 text-red-500" />;
  };

  const resetScores = () => {
    setAppearance(0);
    setPulse(0);
    setGrimace(0);
    setActivity(0);
    setRespiration(0);
    setResult(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Baby className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.apgar.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.apgar.description')}
        </p>
      </div>

      {/* Time Point Selection */}
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.apgar.timePoint')}</CardTitle>
            <CardDescription>
              {t('tools.apgar.timePointDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '1min', label: t('tools.apgar.oneMin'), description: t('tools.apgar.oneMinDesc') },
                { value: '5min', label: t('tools.apgar.fiveMin'), description: t('tools.apgar.fiveMinDesc') },
                { value: '10min', label: t('tools.apgar.tenMin'), description: t('tools.apgar.tenMinDesc') }
              ].map((time) => (
                <Button
                  key={time.value}
                  variant={timePoint === time.value ? 'default' : 'outline'}
                  onClick={() => setTimePoint(time.value as any)}
                  className="h-auto p-4 flex flex-col items-center space-y-2"
                >
                  <span className="font-semibold">{time.label}</span>
                  <span className="text-xs text-center">{time.description}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Appearance (Color) */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-pink-500" />
              <span>{t('tools.apgar.appearance')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {appearanceScores.map((score) => (
                <Button
                  key={score.score}
                  variant={appearance === score.score ? 'default' : 'outline'}
                  onClick={() => setAppearance(score.score)}
                  className="w-full justify-start text-left h-auto p-3"
                >
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="min-w-[24px] h-6 flex items-center justify-center">
                      {score.score}
                    </Badge>
                    <span className="text-sm">{score.description}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pulse (Heart Rate) */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span>{t('tools.apgar.pulse')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {pulseScores.map((score) => (
                <Button
                  key={score.score}
                  variant={pulse === score.score ? 'default' : 'outline'}
                  onClick={() => setPulse(score.score)}
                  className="w-full justify-start text-left h-auto p-3"
                >
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="min-w-[24px] h-6 flex items-center justify-center">
                      {score.score}
                    </Badge>
                    <span className="text-sm">{score.description}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Grimace (Reflex Response) */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Stethoscope className="h-5 w-5 text-blue-500" />
              <span>{t('tools.apgar.grimace')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {grimaceScores.map((score) => (
                <Button
                  key={score.score}
                  variant={grimace === score.score ? 'default' : 'outline'}
                  onClick={() => setGrimace(score.score)}
                  className="w-full justify-start text-left h-auto p-3"
                >
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="min-w-[24px] h-6 flex items-center justify-center">
                      {score.score}
                    </Badge>
                    <span className="text-sm">{score.description}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity (Muscle Tone) */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Hand className="h-5 w-5 text-purple-500" />
              <span>{t('tools.apgar.activity')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {activityScores.map((score) => (
                <Button
                  key={score.score}
                  variant={activity === score.score ? 'default' : 'outline'}
                  onClick={() => setActivity(score.score)}
                  className="w-full justify-start text-left h-auto p-3"
                >
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="min-w-[24px] h-6 flex items-center justify-center">
                      {score.score}
                    </Badge>
                    <span className="text-sm">{score.description}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Respiration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Stethoscope className="h-5 w-5 text-green-500" />
              <span>{t('tools.apgar.respiration')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {respirationScores.map((score) => (
                <Button
                  key={score.score}
                  variant={respiration === score.score ? 'default' : 'outline'}
                  onClick={() => setRespiration(score.score)}
                  className="w-full justify-start text-left h-auto p-3"
                >
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="min-w-[24px] h-6 flex items-center justify-center">
                      {score.score}
                    </Badge>
                    <span className="text-sm">{score.description}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Score Display */}
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.apgar.currentScore')}</CardTitle>
            <CardDescription>
              {t('tools.apgar.currentScoreDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>{t('tools.apgar.appearance')}:</span>
                <Badge variant="outline">{appearance}</Badge>
              </div>
              <div className="flex justify-between">
                <span>{t('tools.apgar.pulse')}:</span>
                <Badge variant="outline">{pulse}</Badge>
              </div>
              <div className="flex justify-between">
                <span>{t('tools.apgar.grimace')}:</span>
                <Badge variant="outline">{grimace}</Badge>
              </div>
              <div className="flex justify-between">
                <span>{t('tools.apgar.activity')}:</span>
                <Badge variant="outline">{activity}</Badge>
              </div>
              <div className="flex justify-between">
                <span>{t('tools.apgar.respiration')}:</span>
                <Badge variant="outline">{respiration}</Badge>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{t('common.total')}:</span>
                <div className="text-2xl font-bold">
                  {appearance + pulse + grimace + activity + respiration}/10
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Button 
                onClick={calculateAPGAR}
                className="w-full"
              >
                {t('tools.apgar.calculate')}
              </Button>
              <Button 
                onClick={resetScores}
                variant="outline"
                className="w-full"
              >
                {t('tools.apgar.reset')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-8">
          <Card className={`border-l-4 ${
            result.total >= 7 ? 'border-l-green-500' :
            result.total >= 4 ? 'border-l-yellow-500' :
            'border-l-red-500'
          }`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  {getScoreIcon(result.total)}
                  <span>{t('tools.apgar.result', { timePoint: result.timePoint.replace('min', '') })}</span>
                </CardTitle>
                <Badge className={getScoreColor(result.total)}>
                  {result.total}/10
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Score Breakdown */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                <div className="text-center p-3 bg-pink-50 rounded-lg">
                  <div className="text-xl font-bold text-pink-600">{result.appearance}</div>
                  <div className="text-xs text-pink-800">{t('tools.apgar.appearance')}</div>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-xl font-bold text-red-600">{result.pulse}</div>
                  <div className="text-xs text-red-800">{t('tools.apgar.pulse')}</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-xl font-bold text-blue-600">{result.grimace}</div>
                  <div className="text-xs text-blue-800">{t('tools.apgar.grimace')}</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-xl font-bold text-purple-600">{result.activity}</div>
                  <div className="text-xs text-purple-800">{t('tools.apgar.activity')}</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-xl font-bold text-green-600">{result.respiration}</div>
                  <div className="text-xs text-green-800">{t('tools.apgar.respiration')}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg border-2 border-gray-300">
                  <div className="text-2xl font-bold text-gray-900">{result.total}</div>
                  <div className="text-xs text-gray-700">{t('common.total')}</div>
                </div>
              </div>

              {/* Interpretation */}
              <div className={`p-4 rounded-lg border ${
                result.total >= 7 ? 'bg-green-50 border-green-200' :
                result.total >= 4 ? 'bg-yellow-50 border-yellow-200' :
                'bg-red-50 border-red-200'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  result.total >= 7 ? 'text-green-900' :
                  result.total >= 4 ? 'text-yellow-900' :
                  'text-red-900'
                }`}>
                  {t('tools.apgar.interpretation')}
                </h4>
                <p className={`text-sm ${
                  result.total >= 7 ? 'text-green-800' :
                  result.total >= 4 ? 'text-yellow-800' :
                  'text-red-800'
                }`}>
                  {result.interpretation}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Reference Information */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.apgar.scoreInterpretation')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">7-10 points</span>
                <Badge className="bg-green-100 text-green-800">{t('tools.apgar.normal')}</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium">4-6 points</span>
                <Badge className="bg-yellow-100 text-yellow-800">{t('tools.apgar.moderatelyAbnormal')}</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">0-3 points</span>
                <Badge className="bg-red-100 text-red-800">{t('tools.apgar.severelyAbnormal')}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('tools.apgar.guidelines')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Baby className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{t('tools.apgar.guideline1')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{t('tools.apgar.guideline2')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Heart className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{t('tools.apgar.guideline3')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Stethoscope className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{t('tools.apgar.guideline4')}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Baby className="h-6 w-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              {t('tools.apgar.info')}
            </h3>
            <p className="text-blue-800 text-sm">
              {t('tools.apgar.infoText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
