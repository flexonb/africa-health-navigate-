import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Droplets, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ORSGuide() {
  const { t } = useLanguage();
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [dehydrationLevel, setDehydrationLevel] = useState<'mild' | 'moderate' | 'severe'>('mild');
  const [result, setResult] = useState<any>(null);

  const calculateORS = () => {
    if (!weight) return;

    const weightKg = parseFloat(weight);
    const ageNum = parseInt(age) || 0;

    let orsAmount = 0;
    let duration = '';
    let instructions = [];

    // WHO ORS calculation
    if (dehydrationLevel === 'mild') {
      orsAmount = weightKg * 50; // 50ml/kg over 4 hours
      duration = '4 hours';
      instructions = [
        'Give small, frequent sips',
        'Continue normal feeding',
        'Monitor for improvement',
        'Seek help if condition worsens'
      ];
    } else if (dehydrationLevel === 'moderate') {
      orsAmount = weightKg * 75; // 75ml/kg over 4 hours
      duration = '4 hours';
      instructions = [
        'Give ORS every 5-10 minutes',
        'Continue breastfeeding if applicable',
        'Monitor urine output',
        'Seek medical attention if no improvement'
      ];
    } else {
      orsAmount = weightKg * 100; // 100ml/kg over 4 hours
      duration = '4 hours';
      instructions = [
        'Seek immediate medical attention',
        'Start ORS while preparing for transport',
        'May need IV fluids',
        'Monitor vital signs closely'
      ];
    }

    // Calculate packets needed (each packet makes 1 liter)
    const packetsNeeded = Math.ceil(orsAmount / 1000);

    setResult({
      orsAmount: Math.round(orsAmount),
      duration,
      instructions,
      packetsNeeded,
      dehydrationLevel
    });
  };

  const getDehydrationColor = (level: string) => {
    switch (level) {
      case 'mild':
        return 'bg-yellow-100 text-yellow-800';
      case 'moderate':
        return 'bg-orange-100 text-orange-800';
      case 'severe':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Droplets className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.ors.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.ors.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.ors.calculate')}</CardTitle>
            <CardDescription>
              {t('tools.ors.enterInfo')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="weight">{t('tools.ors.weightKg')}</Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={t('tools.ors.enterWeight')}
                />
              </div>
              <div>
                <Label htmlFor="age">{t('tools.ors.ageYears')}</Label>
                <Input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder={t('tools.ors.enterAge')}
                />
              </div>
            </div>

            <div>
              <Label>{t('tools.ors.dehydrationLevel')}</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {(['mild', 'moderate', 'severe'] as const).map((level) => (
                  <Button
                    key={level}
                    variant={dehydrationLevel === level ? 'default' : 'outline'}
                    onClick={() => setDehydrationLevel(level)}
                    className="capitalize"
                  >
                    {t(`tools.ors.${level}`)}
                  </Button>
                ))}
              </div>
            </div>

            <Button 
              onClick={calculateORS}
              disabled={!weight}
              className="w-full"
            >
              {t('tools.ors.calculateAmount')}
            </Button>
          </CardContent>
        </Card>

        {result && (
          <Card>
            <CardHeader>
              <CardTitle>{t('tools.ors.recommendation')}</CardTitle>
              <CardDescription>
                {t('tools.ors.dosageBasedOnWHO')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge className={getDehydrationColor(result.dehydrationLevel)}>
                  {result.dehydrationLevel.toUpperCase()} Dehydration
                </Badge>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('tools.ors.amount')}</h4>
                <div className="text-2xl font-bold text-blue-600">
                  {result.orsAmount} ml
                </div>
                <p className="text-sm text-gray-600">
                  {t('tools.ors.overDuration', { duration: result.duration })}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('tools.ors.packetsNeeded')}</h4>
                <div className="text-lg font-medium text-gray-700">
                  {result.packetsNeeded} {t('tools.ors.packets')}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('tools.ors.instructions')}</h4>
                <ul className="list-disc list-inside space-y-1">
                  {result.instructions.map((instruction: string, idx: number) => (
                    <li key={idx} className="text-sm text-gray-700">{instruction}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.ors.preparationSteps')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">{t('tools.ors.preparation')}</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Wash hands thoroughly with soap</li>
                  <li>Use clean drinking water (1 liter)</li>
                  <li>If water is not safe, boil and cool it</li>
                  <li>Pour entire ORS packet into water</li>
                  <li>Stir until completely dissolved</li>
                  <li>Do not add sugar, salt, or other substances</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">{t('tools.ors.administration')}</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Give small, frequent sips</li>
                  <li>Use a clean cup or spoon</li>
                  <li>For infants: 1 teaspoon every 1-2 minutes</li>
                  <li>For children: 1 tablespoon every 1-2 minutes</li>
                  <li>Continue normal feeding when possible</li>
                  <li>Discard unused solution after 24 hours</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-2">
                {t('tools.ors.signsOfImprovement')}
              </h3>
              <ul className="text-green-800 space-y-1 text-sm">
                <li>• {t('tools.ors.improvement1')}</li>
                <li>• {t('tools.ors.improvement2')}</li>
                <li>• {t('tools.ors.improvement3')}</li>
                <li>• {t('tools.ors.improvement4')}</li>
                <li>• {t('tools.ors.improvement5')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-2">
                {t('tools.ors.seekHelp')}
              </h3>
              <ul className="text-red-800 space-y-1 text-sm">
                <li>• {t('tools.ors.help1')}</li>
                <li>• {t('tools.ors.help2')}</li>
                <li>• {t('tools.ors.help3')}</li>
                <li>• {t('tools.ors.help4')}</li>
                <li>• {t('tools.ors.help5')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
