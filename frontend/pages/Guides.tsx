import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { emergencyNumbers } from '../data/emergencyNumbers';
import { 
  Heart, 
  Droplets, 
  Shield, 
  Baby, 
  Sun,
  AlertTriangle,
  CheckCircle,
  Thermometer,
  Search,
  Phone
} from 'lucide-react';

export default function Guides() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const guides = useMemo(() => [
    {
      title: t('pages.guides.emergencyResponse'),
      description: t('pages.guides.emergencyResponseDesc'),
      icon: AlertTriangle,
      color: 'bg-red-500',
      content: [
        'Call emergency services immediately',
        'Check for breathing and pulse',
        'Control bleeding with direct pressure',
        'Keep patient calm and still',
        'Monitor vital signs continuously'
      ]
    },
    {
      title: t('pages.guides.malariaPrevention'),
      description: t('pages.guides.malariaPreventionDesc'),
      icon: Shield,
      color: 'bg-green-500',
      content: [
        'Use insecticide-treated bed nets every night',
        'Apply mosquito repellent on exposed skin',
        'Wear long-sleeved clothing during peak hours',
        'Remove standing water around homes',
        'Take antimalarial medication when traveling'
      ]
    },
    {
      title: t('pages.guides.handwashing'),
      description: t('pages.guides.handwashingDesc'),
      icon: Droplets,
      color: 'bg-blue-500',
      content: [
        'Wet hands with clean running water',
        'Apply soap and lather well',
        'Rub palms together',
        'Rub back of hands and between fingers',
        'Clean under fingernails',
        'Rub thumbs and wrists',
        'Rinse thoroughly with clean water',
        'Dry with clean towel or air dry',
        'Use towel to turn off tap'
      ]
    },
    {
      title: t('pages.guides.childNutrition'),
      description: t('pages.guides.childNutritionDesc'),
      icon: Baby,
      color: 'bg-pink-500',
      content: [
        'Exclusive breastfeeding for first 6 months',
        'Introduce complementary foods at 6 months',
        'Include iron-rich foods daily',
        'Provide vitamin A-rich foods',
        'Ensure adequate protein intake',
        'Monitor growth regularly'
      ]
    },
    {
      title: t('pages.guides.safeWater'),
      description: t('pages.guides.safeWaterDesc'),
      icon: Droplets,
      color: 'bg-cyan-500',
      content: [
        'Boil water for at least 1 minute',
        'Use water purification tablets',
        'Store treated water in clean containers',
        'Cover water containers to prevent contamination',
        'Use separate containers for drinking and washing',
        'Clean storage containers regularly'
      ]
    },
    {
      title: t('pages.guides.heatIllness'),
      description: t('pages.guides.heatIllnessDesc'),
      icon: Sun,
      color: 'bg-orange-500',
      content: [
        'Drink plenty of water throughout the day',
        'Avoid outdoor activities during peak heat',
        'Wear light-colored, loose-fitting clothing',
        'Seek shade when possible',
        'Take frequent breaks in cool areas',
        'Recognize signs of heat exhaustion'
      ]
    },
    {
      title: t('pages.guides.feverGuide'),
      description: t('pages.guides.feverGuideDesc'),
      icon: Thermometer,
      color: 'bg-teal-500',
      content: [
        'For fever, give Paracetamol or Ibuprofen as per dosage guide',
        'Encourage frequent sips of water, ORS, or clear fluids',
        'Dress in light clothing, avoid heavy blankets',
        'Lukewarm sponge baths can help reduce high fever',
        'Seek medical help if fever is very high, persists >3 days, or with severe symptoms'
      ]
    }
  ], [t]);

  const filteredGuides = useMemo(() => {
    if (!searchTerm) return guides;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return guides.filter(guide => 
      guide.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      guide.description.toLowerCase().includes(lowerCaseSearchTerm) ||
      guide.content.some(item => item.toLowerCase().includes(lowerCaseSearchTerm))
    );
  }, [searchTerm, guides]);

  const filteredEmergencyNumbers = useMemo(() => {
    if (!searchTerm) return emergencyNumbers;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return emergencyNumbers.filter(num => 
      num.country[language].toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm, language]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t('common.guides')}
        </h1>
        <p className="text-lg text-gray-600">
          {t('pages.guides.description')}
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search guides and emergency numbers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 text-lg"
          />
        </div>
      </div>

      {filteredGuides.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredGuides.map((guide, index) => (
            <Card key={index} className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${guide.color} text-white`}>
                    <guide.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {guide.content.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-12">
        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-yellow-600" />
              <span>{t('pages.guides.emergencyNumbers')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredEmergencyNumbers.map((num, index) => (
                <div key={index} className="p-3 bg-white rounded-lg border">
                  <h4 className="font-semibold">{num.country[language]}</h4>
                  <div className="text-sm space-y-1 mt-1">
                    <div className="flex justify-between"><span>Police:</span> <span className="font-mono">{num.police}</span></div>
                    <div className="flex justify-between"><span>Ambulance:</span> <span className="font-mono">{num.ambulance}</span></div>
                    <div className="flex justify-between"><span>Fire:</span> <span className="font-mono">{num.fire}</span></div>
                    {num.notes && <p className="text-xs text-gray-500 mt-1">{num.notes[language]}</p>}
                  </div>
                </div>
              ))}
            </div>
            {filteredEmergencyNumbers.length === 0 && searchTerm && (
              <p className="text-center text-gray-500">No emergency numbers found for "{searchTerm}".</p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <Card className="bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-green-600" />
              <span>{t('pages.guides.quickHealthTips')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-sm">{t('pages.guides.tipWashHands')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-sm">{t('pages.guides.tipDrinkWater')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-sm">{t('pages.guides.tipBedNets')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-sm">{t('pages.guides.tipBalancedMeals')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-sm">{t('pages.guides.tipExercise')}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
