import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Scale, Info } from 'lucide-react';

export default function BMICalculator() {
  const { t } = useLanguage();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [result, setResult] = useState<any>(null);

  const calculateBMI = () => {
    if (!height || !weight) return;

    const heightM = parseFloat(height) / 100;
    const weightKg = parseFloat(weight);
    const bmi = weightKg / (heightM * heightM);

    let category = '';
    let color = '';
    let recommendations = [];

    if (bmi < 18.5) {
      category = t('tools.bmi.underweight');
      color = 'bg-blue-100 text-blue-800';
      recommendations = [
        t('tools.bmi.recUnderweight1'),
        t('tools.bmi.recUnderweight2'),
        t('tools.bmi.recUnderweight3'),
        t('tools.bmi.recUnderweight4')
      ];
    } else if (bmi < 25) {
      category = t('tools.bmi.normal');
      color = 'bg-green-100 text-green-800';
      recommendations = [
        t('tools.bmi.recNormal1'),
        t('tools.bmi.recNormal2'),
        t('tools.bmi.recNormal3'),
        t('tools.bmi.recNormal4')
      ];
    } else if (bmi < 30) {
      category = t('tools.bmi.overweight');
      color = 'bg-yellow-100 text-yellow-800';
      recommendations = [
        t('tools.bmi.recOverweight1'),
        t('tools.bmi.recOverweight2'),
        t('tools.bmi.recOverweight3'),
        t('tools.bmi.recOverweight4')
      ];
    } else {
      category = t('tools.bmi.obese');
      color = 'bg-red-100 text-red-800';
      recommendations = [
        t('tools.bmi.recObese1'),
        t('tools.bmi.recObese2'),
        t('tools.bmi.recObese3'),
        t('tools.bmi.recObese4')
      ];
    }

    setResult({
      bmi: bmi.toFixed(1),
      category,
      color,
      recommendations
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Scale className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.bmi.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.bmi.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.bmi.calculate')}</CardTitle>
            <CardDescription>
              {t('tools.bmi.enterMeasurements')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="height">{t('tools.bmi.heightCm')}</Label>
                <Input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="170"
                />
              </div>
              <div>
                <Label htmlFor="weight">{t('tools.bmi.weightKg')}</Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="70"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age">{t('tools.bmi.ageYears')}</Label>
                <Input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="25"
                />
              </div>
              <div>
                <Label>{t('pages.triage.gender')}</Label>
                <Select value={gender} onValueChange={(value: 'male' | 'female') => setGender(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">{t('common.male')}</SelectItem>
                    <SelectItem value="female">{t('common.female')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={calculateBMI}
              disabled={!height || !weight}
              className="w-full"
            >
              {t('tools.bmi.calculate')}
            </Button>
          </CardContent>
        </Card>

        {result && (
          <Card>
            <CardHeader>
              <CardTitle>{t('tools.bmi.result')}</CardTitle>
              <CardDescription>
                {t('tools.bmi.resultDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {result.bmi}
                </div>
                <Badge className={result.color}>
                  {result.category}
                </Badge>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('common.recommendations')}:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {result.recommendations.map((rec: string, idx: number) => (
                    <li key={idx} className="text-sm text-gray-700">{rec}</li>
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
            <CardTitle>{t('tools.bmi.categoriesTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="font-semibold text-blue-800">{t('tools.bmi.underweight')}</div>
                <div className="text-sm text-blue-600">&lt; 18.5</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-800">{t('tools.bmi.normal')}</div>
                <div className="text-sm text-green-600">18.5 - 24.9</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="font-semibold text-yellow-800">{t('tools.bmi.overweight')}</div>
                <div className="text-sm text-yellow-600">25.0 - 29.9</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="font-semibold text-red-800">{t('tools.bmi.obese')}</div>
                <div className="text-sm text-red-600">≥ 30.0</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Info className="h-6 w-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              {t('tools.bmi.notes')}
            </h3>
            <p className="text-blue-800">
              {t('tools.bmi.notesText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
