import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Eye, MessageCircle, Hand, AlertTriangle } from 'lucide-react';

interface GCSScore {
  eye: number;
  verbal: number;
  motor: number;
  total: number;
  severity: string;
  interpretation: string;
}

export default function GlasgowComaScale() {
  const { t } = useLanguage();
  const [eyeResponse, setEyeResponse] = useState<number>(0);
  const [verbalResponse, setVerbalResponse] = useState<number>(0);
  const [motorResponse, setMotorResponse] = useState<number>(0);
  const [result, setResult] = useState<GCSScore | null>(null);

  const eyeResponses = [
    { score: 4, description: 'Eyes open spontaneously' },
    { score: 3, description: 'Eyes open to verbal command' },
    { score: 2, description: 'Eyes open to pain' },
    { score: 1, description: 'No eye opening' }
  ];

  const verbalResponses = [
    { score: 5, description: 'Oriented and converses' },
    { score: 4, description: 'Disoriented and converses' },
    { score: 3, description: 'Inappropriate words' },
    { score: 2, description: 'Incomprehensible sounds' },
    { score: 1, description: 'No verbal response' }
  ];

  const motorResponses = [
    { score: 6, description: 'Obeys commands' },
    { score: 5, description: 'Localizes pain' },
    { score: 4, description: 'Withdraws from pain' },
    { score: 3, description: 'Flexion to pain (decorticate)' },
    { score: 2, description: 'Extension to pain (decerebrate)' },
    { score: 1, description: 'No motor response' }
  ];

  const calculateGCS = () => {
    if (eyeResponse === 0 || verbalResponse === 0 || motorResponse === 0) return;

    const total = eyeResponse + verbalResponse + motorResponse;
    let severity: string;
    let interpretation: string;

    if (total >= 13) {
      severity = t('tools.gcs.mildInjury');
      interpretation = 'Minor head injury. Patient is conscious and alert.';
    } else if (total >= 9) {
      severity = t('tools.gcs.moderateInjury');
      interpretation = 'Moderate head injury. Close monitoring required.';
    } else {
      severity = t('tools.gcs.severeInjury');
      interpretation = 'Severe head injury. Immediate intensive care required.';
    }

    setResult({
      eye: eyeResponse,
      verbal: verbalResponse,
      motor: motorResponse,
      total,
      severity,
      interpretation
    });
  };

  const getSeverityColor = (severity: string) => {
    if (severity === t('tools.gcs.mildInjury')) return 'bg-green-100 text-green-800 border-green-200';
    if (severity === t('tools.gcs.moderateInjury')) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    if (severity === t('tools.gcs.severeInjury')) return 'bg-red-100 text-red-800 border-red-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getSeverityIcon = (severity: string) => {
    if (severity === t('tools.gcs.mildInjury')) return <Brain className="h-5 w-5 text-green-500" />;
    if (severity === t('tools.gcs.moderateInjury')) return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    if (severity === t('tools.gcs.severeInjury')) return <AlertTriangle className="h-5 w-5 text-red-500" />;
    return <Brain className="h-5 w-5 text-gray-500" />;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Brain className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.gcs.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.gcs.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Eye Response */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-blue-500" />
              <span>{t('tools.gcs.eyeResponse')}</span>
            </CardTitle>
            <CardDescription>
              {t('tools.gcs.eyeResponseDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {eyeResponses.map((response) => (
                <Button
                  key={response.score}
                  variant={eyeResponse === response.score ? 'default' : 'outline'}
                  onClick={() => setEyeResponse(response.score)}
                  className="w-full justify-start text-left h-auto p-3"
                >
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="min-w-[24px] h-6 flex items-center justify-center">
                      {response.score}
                    </Badge>
                    <span className="text-sm">{response.description}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Verbal Response */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-green-500" />
              <span>{t('tools.gcs.verbalResponse')}</span>
            </CardTitle>
            <CardDescription>
              {t('tools.gcs.verbalResponseDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {verbalResponses.map((response) => (
                <Button
                  key={response.score}
                  variant={verbalResponse === response.score ? 'default' : 'outline'}
                  onClick={() => setVerbalResponse(response.score)}
                  className="w-full justify-start text-left h-auto p-3"
                >
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="min-w-[24px] h-6 flex items-center justify-center">
                      {response.score}
                    </Badge>
                    <span className="text-sm">{response.description}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Motor Response */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Hand className="h-5 w-5 text-purple-500" />
              <span>{t('tools.gcs.motorResponse')}</span>
            </CardTitle>
            <CardDescription>
              {t('tools.gcs.motorResponseDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {motorResponses.map((response) => (
                <Button
                  key={response.score}
                  variant={motorResponse === response.score ? 'default' : 'outline'}
                  onClick={() => setMotorResponse(response.score)}
                  className="w-full justify-start text-left h-auto p-3"
                >
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary" className="min-w-[24px] h-6 flex items-center justify-center">
                      {response.score}
                    </Badge>
                    <span className="text-sm">{response.description}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calculate Button */}
      <div className="mt-8 text-center">
        <Button 
          onClick={calculateGCS}
          disabled={eyeResponse === 0 || verbalResponse === 0 || motorResponse === 0}
          size="lg"
          className="px-8"
        >
          {t('tools.gcs.calculate')}
        </Button>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-8">
          <Card className={`border-l-4 ${
            result.severity === t('tools.gcs.severeInjury') ? 'border-l-red-500' :
            result.severity === t('tools.gcs.moderateInjury') ? 'border-l-yellow-500' :
            'border-l-green-500'
          }`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  {getSeverityIcon(result.severity)}
                  <span>{t('tools.gcs.result')}</span>
                </CardTitle>
                <Badge className={getSeverityColor(result.severity)}>
                  {result.severity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Score Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{result.eye}</div>
                  <div className="text-sm text-blue-800">{t('tools.gcs.eyeOpening')}</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{result.verbal}</div>
                  <div className="text-sm text-green-800">{t('tools.gcs.verbalResponse')}</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{result.motor}</div>
                  <div className="text-sm text-purple-800">{t('tools.gcs.motorResponse')}</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg border-2 border-gray-300">
                  <div className="text-3xl font-bold text-gray-900">{result.total}</div>
                  <div className="text-sm text-gray-700">{t('tools.gcs.totalGCS')}</div>
                </div>
              </div>

              {/* Interpretation */}
              <div className={`p-4 rounded-lg border ${
                result.severity === t('tools.gcs.severeInjury') ? 'bg-red-50 border-red-200' :
                result.severity === t('tools.gcs.moderateInjury') ? 'bg-yellow-50 border-yellow-200' :
                'bg-green-50 border-green-200'
              }`}>
                <h4 className={`font-semibold mb-2 ${
                  result.severity === t('tools.gcs.severeInjury') ? 'text-red-900' :
                  result.severity === t('tools.gcs.moderateInjury') ? 'text-yellow-900' :
                  'text-green-900'
                }`}>
                  {t('tools.gcs.interpretation')}
                </h4>
                <p className={`text-sm ${
                  result.severity === t('tools.gcs.severeInjury') ? 'text-red-800' :
                  result.severity === t('tools.gcs.moderateInjury') ? 'text-yellow-800' :
                  'text-green-800'
                }`}>
                  {result.interpretation}
                </p>
              </div>

              {/* Score Formula */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('tools.gcs.scoreCalculation')}</h4>
                <p className="text-gray-700 font-mono">
                  GCS = E{result.eye} + V{result.verbal} + M{result.motor} = {result.total}/15
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
            <CardTitle>{t('tools.gcs.scoreInterpretation')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">13-15 points</span>
                <Badge className="bg-green-100 text-green-800">{t('tools.gcs.mildInjury')}</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium">9-12 points</span>
                <Badge className="bg-yellow-100 text-yellow-800">{t('tools.gcs.moderateInjury')}</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">3-8 points</span>
                <Badge className="bg-red-100 text-red-800">{t('tools.gcs.severeInjury')}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t('tools.gcs.guidelines')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{t('tools.gcs.guideline1')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Brain className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{t('tools.gcs.guideline2')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{t('tools.gcs.guideline3')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Eye className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{t('tools.gcs.guideline4')}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Brain className="h-6 w-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              {t('tools.gcs.notes')}
            </h3>
            <p className="text-blue-800 text-sm">
              {t('tools.gcs.notesText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
