import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export default function FirstAid() {
  const { t } = useLanguage();
  const [selectedEmergency, setSelectedEmergency] = useState<string | null>(null);

  const emergencies = [
    {
      id: 'cpr',
      title: 'CPR (Cardiopulmonary Resuscitation)',
      severity: 'emergency',
      steps: [
        'Check responsiveness - tap shoulders and shout',
        'Call for help immediately (emergency services)',
        'Check for breathing (look, listen, feel for 10 seconds)',
        'Place heel of hand on center of chest between nipples',
        'Place other hand on top, interlace fingers',
        'Push hard and fast at least 2 inches deep',
        'Allow complete chest recoil between compressions',
        'Compress at rate of 100-120 per minute',
        'Give 30 compressions, then 2 rescue breaths',
        'Continue cycles until help arrives'
      ],
      warnings: [
        'Only perform if person is unresponsive and not breathing',
        'Do not stop CPR until professional help takes over',
        'If untrained in rescue breathing, continuous chest compressions are better than nothing'
      ]
    },
    {
      id: 'choking',
      title: 'Choking',
      severity: 'emergency',
      steps: [
        'Ask "Are you choking?" - if they can speak, encourage coughing',
        'If unable to speak/cough, stand behind person',
        'Place arms around waist',
        'Make fist with one hand, place thumb side against abdomen above navel',
        'Grasp fist with other hand',
        'Give quick upward thrusts into abdomen',
        'Repeat until object is expelled or person becomes unconscious',
        'If unconscious, begin CPR',
        'Check mouth for visible objects before rescue breaths'
      ],
      warnings: [
        'Do not perform on pregnant women or infants',
        'For infants: use back blows and chest thrusts',
        'Seek medical attention even if object is removed'
      ]
    },
    {
      id: 'bleeding',
      title: 'Severe Bleeding',
      severity: 'high',
      steps: [
        'Ensure scene safety',
        'Wear gloves if available',
        'Apply direct pressure to wound with clean cloth',
        'Maintain continuous pressure',
        'If blood soaks through, add more layers (do not remove)',
        'Elevate injured area above heart if possible',
        'Apply pressure to pressure points if bleeding continues',
        'Apply tourniquet only if trained and bleeding is life-threatening',
        'Monitor for shock symptoms',
        'Get medical help immediately'
      ],
      warnings: [
        'Do not remove embedded objects',
        'Do not use tourniquet unless trained',
        'Watch for signs of shock'
      ]
    },
    {
      id: 'burns',
      title: 'Burns',
      severity: 'medium',
      steps: [
        'Remove person from heat source safely',
        'Cool burn with cool (not cold) running water for 10-20 minutes',
        'Remove jewelry/clothing before swelling occurs',
        'Do not break blisters',
        'Cover with sterile, non-adhesive bandage',
        'Give over-the-counter pain medication if needed',
        'Monitor for signs of infection',
        'Seek medical attention for large or deep burns'
      ],
      warnings: [
        'Do not use ice, butter, or home remedies',
        'Do not break blisters',
        'Seek immediate help for burns on face, hands, feet, or genitals'
      ]
    },
    {
      id: 'snakebite',
      title: 'Snake Bite',
      severity: 'emergency',
      steps: [
        'Keep victim calm and still',
        'Remove jewelry before swelling occurs',
        'Position bitten area below heart level',
        'Clean wound gently with soap and water',
        'Cover with clean, dry bandage',
        'Mark swelling progression with pen',
        'Get to hospital immediately',
        'Try to identify snake if safe to do so',
        'Monitor breathing and consciousness'
      ],
      warnings: [
        'Do not cut the wound',
        'Do not try to suck out venom',
        'Do not apply ice or tourniquet',
        'Do not give alcohol or caffeine'
      ]
    },
    {
      id: 'fracture',
      title: 'Fractures',
      severity: 'medium',
      steps: [
        'Do not move person unless in immediate danger',
        'Check for circulation below injury',
        'Immobilize the injured area',
        'Use splints to prevent movement',
        'Support joints above and below fracture',
        'Apply ice wrapped in cloth',
        'Monitor for shock',
        'Get medical attention',
        'Do not try to realign bones'
      ],
      warnings: [
        'Do not move if spinal injury suspected',
        'Do not give food or water',
        'Watch for signs of shock'
      ]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'emergency':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'emergency':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'high':
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'medium':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  const selectedEmergencyData = emergencies.find(e => e.id === selectedEmergency);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Heart className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.firstAid.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.firstAid.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Emergency List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>{t('tools.firstAid.selectEmergency')}</CardTitle>
              <CardDescription>
                {t('tools.firstAid.selectEmergencyDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {emergencies.map((emergency) => (
                  <Button
                    key={emergency.id}
                    variant={selectedEmergency === emergency.id ? 'default' : 'outline'}
                    onClick={() => setSelectedEmergency(emergency.id)}
                    className="w-full justify-start text-left h-auto p-3"
                  >
                    <div className="flex items-center space-x-2">
                      {getSeverityIcon(emergency.severity)}
                      <div>
                        <div className="font-medium">{emergency.title}</div>
                        <Badge className={`${getSeverityColor(emergency.severity)} text-xs`}>
                          {emergency.severity.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Details */}
        <div className="lg:col-span-2">
          {selectedEmergencyData ? (
            <div className="space-y-6">
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      {getSeverityIcon(selectedEmergencyData.severity)}
                      <span>{selectedEmergencyData.title}</span>
                    </CardTitle>
                    <Badge className={getSeverityColor(selectedEmergencyData.severity)}>
                      {selectedEmergencyData.severity.toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        {t('tools.firstAid.procedure')}
                      </h4>
                      <ol className="list-decimal list-inside space-y-2">
                        {selectedEmergencyData.steps.map((step, idx) => (
                          <li key={idx} className="text-gray-700 leading-relaxed">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        {t('common.warnings')}:
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedEmergencyData.warnings.map((warning, idx) => (
                          <li key={idx} className="text-yellow-800 text-sm">
                            {warning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  {t('tools.firstAid.selectEmergencyPrompt')}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-2">
                {t('tools.firstAid.emergencyNumbers')}
              </h3>
              <div className="text-red-800 space-y-1 text-sm">
                <div>Nigeria: 199, 112</div>
                <div>Kenya: 999, 112</div>
                <div>South Africa: 10177, 112</div>
                <div>Ghana: 193, 112</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">
                {t('tools.firstAid.principles')}
              </h3>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• {t('tools.firstAid.principle1')}</li>
                <li>• {t('tools.firstAid.principle2')}</li>
                <li>• {t('tools.firstAid.principle3')}</li>
                <li>• {t('tools.firstAid.principle4')}</li>
                <li>• {t('tools.firstAid.principle5')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
