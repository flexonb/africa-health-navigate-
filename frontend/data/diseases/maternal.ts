import { ComprehensiveDisease } from './types';

export const maternalDiseases: ComprehensiveDisease[] = [
  {
    id: 'preeclampsia',
    name: {
      en: 'Preeclampsia',
      fr: 'Pré-éclampsie',
      sw: 'Kifafa cha Mimba'
    },
    category: 'maternal',
    severity: 'high',
    symptoms: {
      en: ['high blood pressure', 'protein in urine', 'severe headaches', 'vision changes', 'upper abdominal pain', 'swelling (edema)'],
      fr: ['hypertension artérielle', 'protéines dans les urines', 'maux de tête sévères', 'changements de vision', 'douleur abdominale supérieure', 'gonflement (œdème)'],
      sw: ['shinikizo la damu la juu', 'protini kwenye mkojo', 'maumivu makali ya kichwa', 'mabadiliko ya kuona', 'maumivu ya juu ya tumbo', 'uvimbe (edema)']
    },
    commonSymptoms: {
      en: ['high blood pressure', 'protein in urine', 'swelling'],
      fr: ['hypertension artérielle', 'protéines dans les urines', 'gonflement'],
      sw: ['shinikizo la damu la juu', 'protini kwenye mkojo', 'uvimbe']
    },
    rareSymptoms: {
      en: ['seizures (eclampsia)', 'HELLP syndrome', 'shortness of breath'],
      fr: ['convulsions (éclampsie)', 'syndrome HELLP', 'essoufflement'],
      sw: ['mshtuko (eclampsia)', 'ugonjwa wa HELLP', 'kupumua kwa shida']
    },
    causes: {
      en: ['unknown, thought to be related to problems with the placenta'],
      fr: ['inconnue, on pense qu\'elle est liée à des problèmes avec le placenta'],
      sw: ['haijulikani, inadhaniwa kuhusiana na matatizo ya kondo la nyuma']
    },
    riskFactors: {
      en: ['first pregnancy', 'history of preeclampsia', 'multiple pregnancy', 'obesity', 'age over 35', 'pre-existing high blood pressure or kidney disease'],
      fr: ['première grossesse', 'antécédents de pré-éclampsie', 'grossesse multiple', 'obésité', 'âge supérieur à 35 ans', 'hypertension ou maladie rénale préexistante'],
      sw: ['mimba ya kwanza', 'historia ya kifafa cha mimba', 'mimba ya mapacha', 'unene kupita kiasi', 'umri zaidi ya miaka 35', 'shinikizo la damu la juu au ugonjwa wa figo uliokuwepo']
    },
    treatment: {
      en: 'Delivery of the baby is the only cure. Management includes blood pressure medication, corticosteroids, and close monitoring.',
      fr: 'L\'accouchement est le seul remède. La gestion comprend des médicaments pour la tension artérielle, des corticostéroïdes et une surveillance étroite.',
      sw: 'Kujifungua mtoto ndio tiba pekee. Usimamizi unajumuisha dawa za shinikizo la damu, corticosteroids, na ufuatiliaji wa karibu.'
    },
    prevention: {
      en: 'Low-dose aspirin may be recommended for high-risk women. Regular prenatal care is crucial.',
      fr: 'Une faible dose d\'aspirine peut être recommandée pour les femmes à haut risque. Les soins prénataux réguliers sont cruciaux.',
      sw: 'Aspirini ya kiwango cha chini inaweza kupendekezwa kwa wanawake walio katika hatari kubwa. Huduma za mara kwa mara kabla ya kuzaa ni muhimu.'
    },
    whenToSeekHelp: {
      en: 'Report any symptoms like severe headache, vision changes, or abdominal pain to your doctor immediately.',
      fr: 'Signalez immédiatement à votre médecin tout symptôme tel que des maux de tête sévères, des changements de vision ou des douleurs abdominales.',
      sw: 'Ripoti dalili zozote kama maumivu makali ya kichwa, mabadiliko ya kuona, au maumivu ya tumbo kwa daktari wako mara moja.'
    },
    complications: {
      en: ['eclampsia', 'HELLP syndrome', 'placental abruption', 'fetal growth restriction', 'preterm birth', 'organ damage'],
      fr: ['éclampsie', 'syndrome HELLP', 'décollement placentaire', 'retard de croissance fœtal', 'naissance prématurée', 'lésions d\'organes'],
      sw: ['eclampsia', 'ugonjwa wa HELLP', 'kondo la nyuma kujitenga', 'ukuaji duni wa kijusi', 'kuzaliwa kabla ya wakati', 'uharibifu wa viungo']
    },
    diagnosis: {
      en: 'Blood pressure monitoring, urine tests for protein, blood tests for liver and kidney function.',
      fr: 'Surveillance de la tension artérielle, tests d\'urine pour les protéines, tests sanguins pour la fonction hépatique et rénale.',
      sw: 'Ufuatiliaji wa shinikizo la damu, vipimo vya mkojo kwa protini, vipimo vya damu kwa utendaji wa ini na figo.'
    },
    prognosis: {
      en: 'Good with timely diagnosis and management. Can be life-threatening if untreated.',
      fr: 'Bon avec un diagnostic et une gestion rapides. Peut être mortel si non traité.',
      sw: 'Nzuri na utambuzi na usimamizi wa wakati. Inaweza kuwa hatari kwa maisha ikiwa haitatibiwa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'female'
  },
];
