import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { medications } from '../../data/medications';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calculator, AlertTriangle, Pill, User, Baby, Sunrise, Sun, Sunset, Moon } from 'lucide-react';

const HumanFrequencyDisplay = ({ hf }: { hf: string }) => {
  const parts = hf.split(' ')[0].split('-');
  const icons = [
    { icon: Sunrise, label: 'Morning' },
    { icon: Sun, label: 'Midday' },
    { icon: Sunset, label: 'Evening' },
    { icon: Moon, label: 'Bedtime' }
  ];

  return (
    <div className="flex space-x-4">
      {parts.map((part, index) => {
        const IconComponent = icons[index]?.icon;
        if (!IconComponent) {
          return null;
        }
        return (
          <div key={index} className="flex flex-col items-center">
            <IconComponent className="h-6 w-6 text-gray-600" />
            <span className="text-lg font-bold">{part}</span>
            <span className="text-xs text-gray-500">{icons[index].label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default function DosageCalculator() {
  const { t } = useLanguage();
  const [selectedMedication, setSelectedMedication] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [patientType, setPatientType] = useState<'adult' | 'pediatric'>('adult');
  const [result, setResult] = useState<any>(null);

  const calculateDosage = () => {
    const medication = medications.find(m => m.id === selectedMedication);
    if (!medication || !weight) {
      setResult(null);
      return;
    }

    const weightNum = parseFloat(weight);
    if (isNaN(weightNum)) {
      setResult(null);
      return;
    }

    let dosageText = '';
    let maxDosePerDay = 0;
    let singleDoseRange = '';

    if (patientType === 'pediatric') {
      dosageText = medication.dosageFormula.pediatric;
      maxDosePerDay = medication.maxDose.pediatric * weightNum;

      const perDoseMatch = dosageText.match(/(\d+(\.\d+)?)-(\d+(\.\d+)?)mg\/kg per dose/);
      const perDayMatch = dosageText.match(/(\d+(\.\d+)?)-(\d+(\.\d+)?)mg\/kg\/day/);

      if (perDoseMatch) {
        const minDose = parseFloat(perDoseMatch[1]);
        const maxDose = parseFloat(perDoseMatch[3]);
        const minSingleDose = minDose * weightNum;
        const maxSingleDose = maxDose * weightNum;
        singleDoseRange = `${minSingleDose.toFixed(1)} - ${maxSingleDose.toFixed(1)} ${medication.unit}`;
      } else if (perDayMatch) {
        const minDose = parseFloat(perDayMatch[1]);
        const maxDose = parseFloat(perDayMatch[3]);
        const minDailyDose = minDose * weightNum;
        const maxDailyDose = maxDose * weightNum;
        singleDoseRange = `${minDailyDose.toFixed(1)} - ${maxDailyDose.toFixed(1)} ${medication.unit} per day`;
      }
    } else { // adult
      dosageText = medication.dosageFormula.adult;
      maxDosePerDay = medication.maxDose.adult;
      
      const adultDoseMatch = dosageText.match(/(\d+)-(\d+)mg/);
      if (adultDoseMatch) {
        singleDoseRange = `${adultDoseMatch[1]} - ${adultDoseMatch[2]} ${medication.unit}`;
      } else {
        const singleDoseMatch = dosageText.match(/(\d+)mg/);
        if (singleDoseMatch) {
          singleDoseRange = `${singleDoseMatch[1]} ${medication.unit}`;
        } else {
          singleDoseRange = dosageText;
        }
      }
    }

    setResult({
      medication,
      dosageText,
      maxDosePerDay,
      singleDoseRange,
      warnings: [...medication.warnings],
      contraindications: medication.contraindications
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Calculator className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.dosage.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.dosage.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.dosage.calculate')}</CardTitle>
            <CardDescription>
              {t('tools.dosage.enterInfo')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>{t('tools.dosage.patientType')}</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Button
                  variant={patientType === 'adult' ? 'default' : 'outline'}
                  onClick={() => setPatientType('adult')}
                  className="h-16 flex flex-col"
                >
                  <User className="h-6 w-6 mb-1" />
                  {t('tools.dosage.adult')}
                </Button>
                <Button
                  variant={patientType === 'pediatric' ? 'default' : 'outline'}
                  onClick={() => setPatientType('pediatric')}
                  className="h-16 flex flex-col"
                >
                  <Baby className="h-6 w-6 mb-1" />
                  {t('tools.dosage.pediatric')}
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="medication">{t('tools.dosage.medication')}</Label>
              <Select value={selectedMedication} onValueChange={setSelectedMedication}>
                <SelectTrigger>
                  <SelectValue placeholder={t('tools.dosage.selectMedication')} />
                </SelectTrigger>
                <SelectContent>
                  {medications.map((med) => (
                    <SelectItem key={med.id} value={med.id}>
                      {med.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="weight">{t('tools.dosage.enterWeight')}</Label>
                <Input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={t('common.weight')}
                />
              </div>
              <div>
                <Label htmlFor="age">{t('tools.dosage.enterAge')}</Label>
                <Input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder={t('common.age')}
                />
              </div>
            </div>

            <Button 
              onClick={calculateDosage}
              disabled={!selectedMedication || !weight}
              className="w-full"
            >
              {t('tools.dosage.calculate')}
            </Button>
          </CardContent>
        </Card>

        {result ? (
          <Card>
            <CardHeader>
              <CardTitle>{t('tools.dosage.recommendation')}</CardTitle>
              <CardDescription>
                {result.medication.name} - {result.medication.category}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('tools.dosage.recommendedDosage')}</h4>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-lg font-medium text-green-700">{result.singleDoseRange || result.dosageText}</p>
                  <p className="text-sm text-green-600">
                    {t('tools.dosage.frequency')} {result.medication.frequency}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {t('tools.dosage.maxDose')} {result.maxDosePerDay.toFixed(1)} {result.medication.unit}/day
                </p>
              </div>

              {result.medication.humanFrequency && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Daily Schedule</h4>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <HumanFrequencyDisplay hf={result.medication.humanFrequency} />
                    <p className="text-xs text-blue-600 mt-2">
                      (e.g., 1-1-1 means one dose in the morning, one at midday, and one in the evening)
                    </p>
                  </div>
                </div>
              )}

              {result.contraindications.length > 0 && (
                <div>
                  <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    {t('common.contraindications')}:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {result.contraindications.map((item: string, idx: number) => (
                      <Badge key={idx} variant="destructive">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {result.warnings.length > 0 && (
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">{t('common.warnings')}:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {result.warnings.map((warning: string, idx: number) => (
                      <li key={idx} className="text-sm text-orange-800">{warning}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card className="flex items-center justify-center">
            <div className="text-center text-gray-500 p-8">
              <Pill className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p>Please enter patient details and select a medication to see dosage recommendations.</p>
            </div>
          </Card>
        )}
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-900 mb-2">
              {t('tools.dosage.safetyInfo')}
            </h3>
            <p className="text-yellow-800">
              {t('tools.dosage.safetyText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
