import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calculator, ArrowRightLeft, Thermometer, Scale, Ruler } from 'lucide-react';

interface ConversionResult {
  value: number;
  unit: string;
  formula: string;
}

export default function MedicalConverter() {
  const { t } = useLanguage();
  const [activeConverter, setActiveConverter] = useState<'temperature' | 'weight' | 'height' | 'pressure' | 'lab'>('temperature');
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [substance, setSubstance] = useState('glucose');

  const converters = {
    temperature: {
      title: t('tools.medicalConverter.tempConverter'),
      icon: Thermometer,
      units: [
        { value: 'celsius', label: '°C (Celsius)', factor: 1 },
        { value: 'fahrenheit', label: '°F (Fahrenheit)', factor: 1 },
        { value: 'kelvin', label: 'K (Kelvin)', factor: 1 }
      ]
    },
    weight: {
      title: t('tools.medicalConverter.weightConverter'),
      icon: Scale,
      units: [
        { value: 'kg', label: 'kg (Kilograms)', factor: 1 },
        { value: 'g', label: 'g (Grams)', factor: 0.001 },
        { value: 'lb', label: 'lb (Pounds)', factor: 0.453592 },
        { value: 'oz', label: 'oz (Ounces)', factor: 0.0283495 },
        { value: 'stone', label: 'st (Stone)', factor: 6.35029 }
      ]
    },
    height: {
      title: t('tools.medicalConverter.heightConverter'),
      icon: Ruler,
      units: [
        { value: 'cm', label: 'cm (Centimeters)', factor: 1 },
        { value: 'm', label: 'm (Meters)', factor: 100 },
        { value: 'mm', label: 'mm (Millimeters)', factor: 0.1 },
        { value: 'in', label: 'in (Inches)', factor: 2.54 },
        { value: 'ft', label: 'ft (Feet)', factor: 30.48 }
      ]
    },
    pressure: {
      title: t('tools.medicalConverter.pressureConverter'),
      icon: Calculator,
      units: [
        { value: 'mmhg', label: 'mmHg', factor: 1 },
        { value: 'kpa', label: 'kPa', factor: 7.50062 },
        { value: 'psi', label: 'psi', factor: 0.0193368 }
      ]
    },
    lab: {
      title: t('tools.medicalConverter.labConverter'),
      icon: Calculator,
      units: [
        { value: 'mg_dl', label: 'mg/dL', factor: 1 },
        { value: 'mmol_l', label: 'mmol/L', factor: 1 },
        { value: 'g_l', label: 'g/L', factor: 1 },
        { value: 'ug_ml', label: 'μg/mL', factor: 1 },
        { value: 'umol_l', label: 'μmol/L', factor: 1 }
      ]
    }
  };

  const convertTemperature = (value: number, from: string, to: string): ConversionResult => {
    let celsius: number;
    
    // Convert to Celsius first
    switch (from) {
      case 'celsius':
        celsius = value;
        break;
      case 'fahrenheit':
        celsius = (value - 32) * 5/9;
        break;
      case 'kelvin':
        celsius = value - 273.15;
        break;
      default:
        celsius = value;
    }
    
    // Convert from Celsius to target
    let result: number;
    let formula: string;
    
    switch (to) {
      case 'celsius':
        result = celsius;
        formula = from === 'fahrenheit' ? '(°F - 32) × 5/9' : from === 'kelvin' ? 'K - 273.15' : '°C';
        break;
      case 'fahrenheit':
        result = (celsius * 9/5) + 32;
        formula = from === 'celsius' ? '(°C × 9/5) + 32' : from === 'kelvin' ? '(K - 273.15) × 9/5 + 32' : '°F';
        break;
      case 'kelvin':
        result = celsius + 273.15;
        formula = from === 'celsius' ? '°C + 273.15' : from === 'fahrenheit' ? '(°F - 32) × 5/9 + 273.15' : 'K';
        break;
      default:
        result = celsius;
        formula = '°C';
    }
    
    return { value: result, unit: to, formula };
  };

  const convertStandard = (value: number, from: string, to: string, units: any[]): ConversionResult => {
    const fromFactor = units.find(u => u.value === from)?.factor || 1;
    const toFactor = units.find(u => u.value === to)?.factor || 1;
    
    // Convert to base unit, then to target unit
    const baseValue = value * fromFactor;
    const result = baseValue / toFactor;
    
    const fromLabel = units.find(u => u.value === from)?.label || from;
    const toLabel = units.find(u => u.value === to)?.label || to;
    
    return {
      value: result,
      unit: to,
      formula: `${value} ${fromLabel} = ${result.toFixed(4)} ${toLabel}`
    };
  };

  const convertLabValues = (value: number, from: string, to: string, substance: string): ConversionResult => {
    // Common lab value conversions (glucose example)
    const conversions: Record<string, Record<string, number>> = {
      glucose: {
        'mg_dl_to_mmol_l': 0.0555,
        'mmol_l_to_mg_dl': 18.0182
      },
      cholesterol: {
        'mg_dl_to_mmol_l': 0.0259,
        'mmol_l_to_mg_dl': 38.67
      },
      creatinine: {
        'mg_dl_to_umol_l': 88.4,
        'umol_l_to_mg_dl': 0.0113
      }
    };

    const conversionKey = `${from}_to_${to}`;
    const factor = conversions[substance]?.[conversionKey] || 1;
    
    return {
      value: value * factor,
      unit: to,
      formula: `${value} × ${factor}`
    };
  };

  const performConversion = () => {
    if (!inputValue || !fromUnit || !toUnit) return;

    const value = parseFloat(inputValue);
    if (isNaN(value)) return;

    let conversionResult: ConversionResult;

    switch (activeConverter) {
      case 'temperature':
        conversionResult = convertTemperature(value, fromUnit, toUnit);
        break;
      case 'lab':
        conversionResult = convertLabValues(value, fromUnit, toUnit, substance);
        break;
      default:
        conversionResult = convertStandard(value, fromUnit, toUnit, converters[activeConverter].units);
    }

    setResult(conversionResult);
  };

  const currentConverter = converters[activeConverter];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Calculator className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.medicalConverter.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.medicalConverter.description')}
        </p>
      </div>

      {/* Converter Selection */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
        {Object.entries(converters).map(([key, converter]) => (
          <Button
            key={key}
            variant={activeConverter === key ? 'default' : 'outline'}
            onClick={() => setActiveConverter(key as any)}
            className="h-auto p-3 flex flex-col items-center space-y-2"
          >
            <converter.icon className="h-5 w-5" />
            <span className="text-xs text-center">{converter.title}</span>
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Converter Input */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <currentConverter.icon className="h-5 w-5" />
              <span>{currentConverter.title}</span>
            </CardTitle>
            <CardDescription>
              {t('tools.medicalConverter.enterValue')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeConverter === 'lab' && (
              <div>
                <Label>{t('tools.medicalConverter.substance')}</Label>
                <Select value={substance} onValueChange={setSubstance}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('tools.medicalConverter.selectSubstance')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="glucose">{t('tools.medicalConverter.glucose')}</SelectItem>
                    <SelectItem value="cholesterol">{t('tools.medicalConverter.cholesterol')}</SelectItem>
                    <SelectItem value="creatinine">{t('tools.medicalConverter.creatinine')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            <div>
              <Label htmlFor="inputValue">{t('tools.medicalConverter.value')}</Label>
              <Input
                id="inputValue"
                type="number"
                step="any"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t('tools.medicalConverter.enterValuePlaceholder')}
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label>{t('tools.medicalConverter.from')}</Label>
                <Select value={fromUnit} onValueChange={setFromUnit}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('tools.medicalConverter.selectUnit')} />
                  </SelectTrigger>
                  <SelectContent>
                    {currentConverter.units.map((unit) => (
                      <SelectItem key={unit.value} value={unit.value}>
                        {unit.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-center">
                <ArrowRightLeft className="h-6 w-6 text-gray-400" />
              </div>

              <div>
                <Label>{t('tools.medicalConverter.to')}</Label>
                <Select value={toUnit} onValueChange={setToUnit}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('tools.medicalConverter.selectUnit')} />
                  </SelectTrigger>
                  <SelectContent>
                    {currentConverter.units.map((unit) => (
                      <SelectItem key={unit.value} value={unit.value}>
                        {unit.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={performConversion}
              disabled={!inputValue || !fromUnit || !toUnit}
              className="w-full"
            >
              {t('common.calculate')}
            </Button>
          </CardContent>
        </Card>

        {/* Conversion Result */}
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.medicalConverter.result')}</CardTitle>
            <CardDescription>
              {t('tools.medicalConverter.resultDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {result.value.toFixed(4)}
                  </div>
                  <Badge variant="outline" className="text-lg px-3 py-1">
                    {currentConverter.units.find(u => u.value === result.unit)?.label || result.unit}
                  </Badge>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{t('tools.medicalConverter.formula')}</h4>
                  <p className="text-gray-700 font-mono text-sm">{result.formula}</p>
                </div>

                <div className="text-center text-sm text-gray-600">
                  {inputValue} {currentConverter.units.find(u => u.value === fromUnit)?.label} = {result.value.toFixed(4)} {currentConverter.units.find(u => u.value === toUnit)?.label}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  {t('tools.medicalConverter.prompt')}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Common Conversions Reference */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.medicalConverter.commonConversions')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('tools.medicalConverter.temperature')}</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{t('tools.medicalConverter.normalBody')}: 37°C = 98.6°F</li>
                  <li>{t('tools.medicalConverter.fever')}: &gt;38°C = &gt;100.4°F</li>
                  <li>{t('tools.medicalConverter.hypothermia')}: &lt;35°C = &lt;95°F</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('common.weight')}</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>1 kg = 2.205 lb</li>
                  <li>1 lb = 453.6 g</li>
                  <li>1 stone = 6.35 kg</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('common.height')}</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>1 m = 100 cm = 3.28 ft</li>
                  <li>1 ft = 12 in = 30.48 cm</li>
                  <li>1 in = 2.54 cm</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('pages.records.bloodPressure')}</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{t('tools.medicalConverter.normal')}: 120/80 mmHg</li>
                  <li>1 mmHg = 0.133 kPa</li>
                  <li>1 kPa = 7.5 mmHg</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('tools.medicalConverter.glucose')}</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>{t('tools.medicalConverter.normal')}: 70-100 mg/dL</li>
                  <li>= 3.9-5.6 mmol/L</li>
                  <li>1 mg/dL = 0.0555 mmol/L</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('tools.medicalConverter.volume')}</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>1 L = 1000 mL</li>
                  <li>1 fl oz = 29.57 mL</li>
                  <li>1 cup = 240 mL</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
