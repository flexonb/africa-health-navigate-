import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Plus, X, Search, Pill } from 'lucide-react';

interface Drug {
  id: string;
  name: string;
  category: string;
  commonNames: string[];
}

interface Interaction {
  severity: 'minor' | 'moderate' | 'major';
  description: string;
  mechanism: string;
  management: string;
}

const commonDrugs: Drug[] = [
  {
    id: 'paracetamol',
    name: 'Paracetamol/Acetaminophen',
    category: 'Analgesic',
    commonNames: ['Panadol', 'Tylenol', 'Calpol']
  },
  {
    id: 'aspirin',
    name: 'Aspirin',
    category: 'NSAID',
    commonNames: ['Aspirin', 'Disprin']
  },
  {
    id: 'ibuprofen',
    name: 'Ibuprofen',
    category: 'NSAID',
    commonNames: ['Brufen', 'Advil', 'Nurofen']
  },
  {
    id: 'warfarin',
    name: 'Warfarin',
    category: 'Anticoagulant',
    commonNames: ['Coumadin', 'Warfarin']
  },
  {
    id: 'metformin',
    name: 'Metformin',
    category: 'Antidiabetic',
    commonNames: ['Glucophage', 'Metformin']
  },
  {
    id: 'amoxicillin',
    name: 'Amoxicillin',
    category: 'Antibiotic',
    commonNames: ['Amoxil', 'Augmentin']
  },
  {
    id: 'chloroquine',
    name: 'Chloroquine',
    category: 'Antimalarial',
    commonNames: ['Aralen', 'Chloroquine']
  },
  {
    id: 'artemether',
    name: 'Artemether-Lumefantrine',
    category: 'Antimalarial',
    commonNames: ['Coartem', 'Riamet']
  },
  {
    id: 'atenolol',
    name: 'Atenolol',
    category: 'Beta-blocker',
    commonNames: ['Tenormin', 'Atenolol']
  },
  {
    id: 'amlodipine',
    name: 'Amlodipine',
    category: 'Calcium Channel Blocker',
    commonNames: ['Norvasc', 'Amlodipine']
  }
];

const drugInteractions: Record<string, Interaction> = {
  'aspirin-warfarin': {
    severity: 'major',
    description: 'Increased risk of bleeding when warfarin is combined with aspirin',
    mechanism: 'Both drugs affect blood clotting through different mechanisms',
    management: 'Avoid combination or monitor INR closely. Consider alternative pain relief.'
  },
  'ibuprofen-warfarin': {
    severity: 'major',
    description: 'Significantly increased bleeding risk',
    mechanism: 'NSAIDs can displace warfarin from protein binding and affect platelet function',
    management: 'Avoid combination. Use paracetamol for pain relief instead.'
  },
  'aspirin-ibuprofen': {
    severity: 'moderate',
    description: 'Increased risk of gastrointestinal bleeding and reduced cardioprotective effect of aspirin',
    mechanism: 'Both are NSAIDs with additive GI toxicity',
    management: 'Avoid concurrent use. Space doses if both needed.'
  },
  'chloroquine-metformin': {
    severity: 'moderate',
    description: 'Chloroquine may affect blood glucose control',
    mechanism: 'Chloroquine can affect glucose metabolism',
    management: 'Monitor blood glucose more frequently during malaria treatment.'
  },
  'amlodipine-atenolol': {
    severity: 'moderate',
    description: 'Additive hypotensive effects',
    mechanism: 'Both drugs lower blood pressure through different mechanisms',
    management: 'Monitor blood pressure closely. May need dose adjustment.'
  },
  'paracetamol-warfarin': {
    severity: 'moderate',
    description: 'Paracetamol may increase the anticoagulant effect of warfarin.',
    mechanism: 'Mechanism is not fully understood, but may involve inhibition of vitamin K-dependent clotting factors.',
    management: 'Monitor INR more frequently, especially with high doses or prolonged use of paracetamol. Adjust warfarin dose as needed.'
  },
  'amoxicillin-warfarin': {
    severity: 'minor',
    description: 'Amoxicillin may slightly increase the anticoagulant effect of warfarin in some individuals.',
    mechanism: 'Alteration of gut flora may affect vitamin K synthesis.',
    management: 'Monitor INR, though significant interaction is uncommon. Be aware of potential for increased bleeding.'
  },
  'atenolol-ibuprofen': {
    severity: 'moderate',
    description: 'NSAIDs like ibuprofen may reduce the blood pressure-lowering effect of beta-blockers like atenolol.',
    mechanism: 'Inhibition of prostaglandin synthesis, which can lead to sodium and water retention.',
    management: 'Monitor blood pressure. Consider alternative pain relief if possible. Limit duration of NSAID use.'
  },
  'amlodipine-ibuprofen': {
    severity: 'moderate',
    description: 'NSAIDs may reduce the antihypertensive effect of amlodipine.',
    mechanism: 'Prostaglandin inhibition can lead to fluid retention and increased blood pressure.',
    management: 'Monitor blood pressure. Use lowest effective dose of ibuprofen for shortest duration.'
  },
  'artemether-atenolol': {
    severity: 'moderate',
    description: 'Beta-blockers may mask symptoms of hypoglycemia, which can be a side effect of artemether-lumefantrine.',
    mechanism: 'Atenolol blocks adrenergic responses to hypoglycemia, such as tremor and palpitations.',
    management: 'Monitor blood glucose levels closely, especially in diabetic patients. Advise patient on other signs of hypoglycemia like sweating and hunger.'
  },
  'ibuprofen-paracetamol': {
    severity: 'minor',
    description: 'Generally safe for short-term use, but long-term concurrent use may increase risk of kidney damage.',
    mechanism: 'Additive effects on renal prostaglandin synthesis.',
    management: 'Use for the shortest duration possible. Avoid long-term combined use without medical supervision.'
  },
  'ibuprofen-metformin': {
    severity: 'moderate',
    description: 'NSAIDs like ibuprofen can increase the risk of lactic acidosis associated with metformin by impairing renal function.',
    mechanism: 'Reduced renal clearance of metformin.',
    management: 'Use with caution, especially in elderly patients or those with renal impairment. Consider alternative pain relief.'
  },
  'artemether-chloroquine': {
    severity: 'major',
    description: 'Increased risk of QT interval prolongation and cardiac arrhythmias.',
    mechanism: 'Both drugs have the potential to prolong the QT interval.',
    management: 'Combination should be avoided. If used, ECG monitoring is required.'
  }
};

export default function DrugInteractionChecker() {
  const { t } = useLanguage();
  const [selectedDrugs, setSelectedDrugs] = useState<Drug[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [interactions, setInteractions] = useState<any[]>([]);

  const filteredDrugs = commonDrugs.filter(drug =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drug.commonNames.some(name => name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    drug.category.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(drug => !selectedDrugs.find(selected => selected.id === drug.id));

  const addDrug = (drug: Drug) => {
    setSelectedDrugs([...selectedDrugs, drug]);
    setSearchTerm('');
  };

  const removeDrug = (drugId: string) => {
    setSelectedDrugs(selectedDrugs.filter(drug => drug.id !== drugId));
  };

  const checkInteractions = () => {
    const foundInteractions: any[] = [];

    for (let i = 0; i < selectedDrugs.length; i++) {
      for (let j = i + 1; j < selectedDrugs.length; j++) {
        const drug1 = selectedDrugs[i];
        const drug2 = selectedDrugs[j];
        
        const ids = [drug1.id, drug2.id].sort();
        const interactionKey = `${ids[0]}-${ids[1]}`;
        
        const interaction = drugInteractions[interactionKey];
        
        if (interaction) {
          foundInteractions.push({
            drug1: drug1.name,
            drug2: drug2.name,
            ...interaction
          });
        }
      }
    }

    setInteractions(foundInteractions);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'major':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'moderate':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'minor':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'major':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'moderate':
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'minor':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Pill className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.drugInteraction.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.drugInteraction.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Drug Selection */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('tools.drugInteraction.addMeds')}</CardTitle>
              <CardDescription>
                {t('tools.drugInteraction.addMedsDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder={t('tools.drugInteraction.searchMeds')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {searchTerm && (
                <div className="max-h-48 overflow-y-auto border rounded-lg">
                  {filteredDrugs.map((drug) => (
                    <button
                      key={drug.id}
                      onClick={() => addDrug(drug)}
                      className="w-full text-left p-3 hover:bg-gray-50 border-b last:border-b-0"
                    >
                      <div className="font-medium">{drug.name}</div>
                      <div className="text-sm text-gray-500">{drug.category}</div>
                      <div className="text-xs text-gray-400">
                        Also known as: {drug.commonNames.join(', ')}
                      </div>
                    </button>
                  ))}
                  {filteredDrugs.length === 0 && (
                    <div className="p-3 text-gray-500 text-center">
                      {t('tools.drugInteraction.noMedsFound')}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Selected Drugs */}
          <Card>
            <CardHeader>
              <CardTitle>{t('tools.drugInteraction.selectedMeds')} ({selectedDrugs.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDrugs.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  {t('tools.drugInteraction.noMedsSelected')}
                </p>
              ) : (
                <div className="space-y-2">
                  {selectedDrugs.map((drug) => (
                    <div key={drug.id} className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div>
                        <div className="font-medium">{drug.name}</div>
                        <div className="text-sm text-gray-600">{drug.category}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeDrug(drug.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              {selectedDrugs.length >= 2 && (
                <Button onClick={checkInteractions} className="w-full mt-4">
                  {t('tools.drugInteraction.check')}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Interaction Results */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>{t('tools.drugInteraction.results')}</CardTitle>
              <CardDescription>
                {t('tools.drugInteraction.resultsDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {interactions.length === 0 ? (
                <div className="text-center py-8">
                  <Pill className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">
                    {selectedDrugs.length < 2 
                      ? t('tools.drugInteraction.prompt')
                      : t('tools.drugInteraction.noInteractions')
                    }
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {interactions.map((interaction, idx) => (
                    <Card key={idx} className={`border-l-4 ${
                      interaction.severity === 'major' ? 'border-l-red-500' :
                      interaction.severity === 'moderate' ? 'border-l-orange-500' :
                      'border-l-yellow-500'
                    }`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg flex items-center space-x-2">
                            {getSeverityIcon(interaction.severity)}
                            <span>{interaction.drug1} + {interaction.drug2}</span>
                          </CardTitle>
                          <Badge className={getSeverityColor(interaction.severity)}>
                            {interaction.severity.toUpperCase()}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{t('tools.drugInteraction.interaction')}</h4>
                          <p className="text-gray-700 text-sm">{interaction.description}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{t('tools.drugInteraction.mechanism')}</h4>
                          <p className="text-gray-700 text-sm">{interaction.mechanism}</p>
                        </div>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-900 mb-1">{t('tools.drugInteraction.management')}</h4>
                          <p className="text-blue-800 text-sm">{interaction.management}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-900 mb-2">
              {t('tools.drugInteraction.disclaimer')}
            </h3>
            <p className="text-yellow-800 text-sm">
              {t('tools.drugInteraction.disclaimerText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
