import { ComprehensiveDisease } from './types';

export const geneticDiseases: ComprehensiveDisease[] = [
  {
    id: 'sickle-cell-disease',
    name: {
      en: 'Sickle Cell Disease',
      fr: 'Drépanocytose',
      sw: 'Ugonjwa wa Selimundu'
    },
    category: 'genetic',
    severity: 'high',
    symptoms: {
      en: ['anemia', 'episodes of pain (pain crises)', 'swelling of hands and feet', 'frequent infections', 'delayed growth', 'vision problems', 'jaundice'],
      fr: ['anémie', 'épisodes de douleur (crises douloureuses)', 'gonflement des mains et des pieds', 'infections fréquentes', 'retard de croissance', 'problèmes de vision', 'jaunisse'],
      sw: ['upungufu wa damu', 'vipindi vya maumivu (shida za maumivu)', 'uvimbe wa mikono na miguu', 'maambukizi ya mara kwa mara', 'ukuaji uliochelewa', 'matatizo ya kuona', 'manjano']
    },
    commonSymptoms: {
      en: ['anemia', 'episodes of pain', 'swelling of hands and feet', 'fatigue'],
      fr: ['anémie', 'épisodes de douleur', 'gonflement des mains et des pieds', 'fatigue'],
      sw: ['upungufu wa damu', 'vipindi vya maumivu', 'uvimbe wa mikono na miguu', 'uchovu']
    },
    rareSymptoms: {
      en: ['stroke', 'acute chest syndrome', 'pulmonary hypertension', 'organ damage', 'priapism'],
      fr: ['AVC', 'syndrome thoracique aigu', 'hypertension pulmonaire', 'lésions d\'organes', 'priapisme'],
      sw: ['kiharusi', 'ugonjwa wa kifua wa ghafla', 'shinikizo la damu la mapafu', 'uharibifu wa viungo', 'priapism']
    },
    causes: {
      en: ['inherited genetic mutation affecting hemoglobin'],
      fr: ['mutation génétique héréditaire affectant l\'hémoglobine'],
      sw: ['mabadiliko ya maumbile ya kurithi yanayoathiri hemoglobini']
    },
    riskFactors: {
      en: ['both parents carrying the sickle cell trait', 'african, mediterranean, or south asian ancestry'],
      fr: ['les deux parents porteurs du trait drépanocytaire', 'ascendance africaine, méditerranéenne ou sud-asiatique'],
      sw: ['wazazi wote wawili kuwa na chembe za selimundu', 'asili ya kiafrika, mediterania, au asia ya kusini']
    },
    treatment: {
      en: 'Pain management, hydroxyurea, blood transfusions, folic acid supplements, bone marrow transplant.',
      fr: 'Gestion de la douleur, hydroxyurée, transfusions sanguines, suppléments d\'acide folique, greffe de moelle osseuse.',
      sw: 'Udhibiti wa maumivu, hydroxyurea, kuongezewa damu, virutubisho vya folic acid, upandikizaji wa uboho.'
    },
    prevention: {
      en: 'Genetic counseling for carriers. Newborn screening for early diagnosis and management.',
      fr: 'Conseil génétique pour les porteurs. Dépistage néonatal pour un diagnostic et une prise en charge précoces.',
      sw: 'Ushauri wa kijenetiki kwa wenye chembe. Uchunguzi wa watoto wachanga kwa utambuzi na usimamizi wa mapema.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate help for severe pain, fever, difficulty breathing, stroke symptoms, or sudden vision changes.',
      fr: 'Consultez immédiatement en cas de douleur intense, de fièvre, de difficultés respiratoires, de symptômes d\'AVC ou de changements de vision soudains.',
      sw: 'Tafuta msaada wa haraka kwa maumivu makali, homa, shida ya kupumua, dalili za kiharusi, au mabadiliko ya ghafla ya kuona.'
    },
    complications: {
      en: ['stroke', 'acute chest syndrome', 'organ damage', 'blindness', 'leg ulcers', 'gallstones'],
      fr: ['AVC', 'syndrome thoracique aigu', 'lésions d\'organes', 'cécité', 'ulcères de jambe', 'calculs biliaires'],
      sw: ['kiharusi', 'ugonjwa wa kifua wa ghafla', 'uharibifu wa viungo', 'upofu', 'vidonda vya miguu', 'mawe kwenye nyongo']
    },
    diagnosis: {
      en: 'Blood test (hemoglobin electrophoresis), newborn screening.',
      fr: 'Analyse de sang (électrophorèse de l\'hémoglobine), dépistage néonatal.',
      sw: 'Kipimo cha damu (hemoglobin electrophoresis), uchunguzi wa watoto wachanga.'
    },
    prognosis: {
      en: 'Lifelong illness, but with modern care, many live into their 50s and beyond. Varies greatly.',
      fr: 'Maladie à vie, mais avec les soins modernes, beaucoup vivent jusqu\'à la cinquantaine et au-delà. Varie considérablement.',
      sw: 'Ugonjwa wa maisha yote, lakini kwa huduma za kisasa, wengi huishi hadi miaka ya 50 na zaidi. Inatofautiana sana.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'thalassemia',
    name: {
      en: 'Thalassemia',
      fr: 'Thalassémie',
      sw: 'Thalassemia'
    },
    category: 'genetic',
    severity: 'high',
    symptoms: {
      en: ['fatigue', 'weakness', 'pale or yellowish skin', 'facial bone deformities', 'slow growth', 'dark urine', 'abdominal swelling'],
      fr: ['fatigue', 'faiblesse', 'peau pâle ou jaunâtre', 'déformations des os du visage', 'croissance lente', 'urine foncée', 'gonflement abdominal'],
      sw: ['uchovu', 'udhaifu', 'ngozi nyeupe au ya manjano', 'kasoro za mifupa ya uso', 'ukuaji wa polepole', 'mkojo mweusi', 'uvimbe wa tumbo']
    },
    commonSymptoms: {
      en: ['fatigue', 'weakness', 'pale skin'],
      fr: ['fatigue', 'faiblesse', 'peau pâle'],
      sw: ['uchovu', 'udhaifu', 'ngozi nyeupe']
    },
    rareSymptoms: {
      en: ['heart problems', 'enlarged spleen', 'bone problems'],
      fr: ['problèmes cardiaques', 'rate hypertrophiée', 'problèmes osseux'],
      sw: ['matatizo ya moyo', 'wengu lililopanuka', 'matatizo ya mifupa']
    },
    causes: {
      en: ['inherited genetic mutations that affect hemoglobin production'],
      fr: ['mutations génétiques héréditaires qui affectent la production d\'hémoglobine'],
      sw: ['mabadiliko ya kijeni ya kurithi yanayoathiri uzalishaji wa hemoglobini']
    },
    riskFactors: {
      en: ['family history', 'ancestry from Mediterranean, Southeast Asian, or African regions'],
      fr: ['antécédents familiaux', 'ascendance des régions méditerranéennes, d\'Asie du Sud-Est ou d\'Afrique'],
      sw: ['historia ya familia', 'asili kutoka maeneo ya Mediterania, Asia ya Kusini-Mashariki, au Afrika']
    },
    treatment: {
      en: 'Blood transfusions, iron chelation therapy, folic acid supplements, bone marrow transplant.',
      fr: 'Transfusions sanguines, thérapie par chélation du fer, suppléments d\'acide folique, greffe de moelle osseuse.',
      sw: 'Kuongezewa damu, tiba ya kuondoa chuma, virutubisho vya asidi ya foliki, upandikizaji wa uboho.'
    },
    prevention: {
      en: 'Genetic counseling for carriers.',
      fr: 'Conseil génétique pour les porteurs.',
      sw: 'Ushauri wa kijeni kwa wabebaji.'
    },
    whenToSeekHelp: {
      en: 'Seek help for persistent fatigue, jaundice, or slow growth in children.',
      fr: 'Consultez en cas de fatigue persistante, de jaunisse ou de retard de croissance chez les enfants.',
      sw: 'Tafuta msaada kwa uchovu unaoendelea, manjano, au ukuaji wa polepole kwa watoto.'
    },
    complications: {
      en: ['iron overload', 'bone deformities', 'enlarged spleen', 'heart problems', 'infections'],
      fr: ['surcharge en fer', 'déformations osseuses', 'rate hypertrophiée', 'problèmes cardiaques', 'infections'],
      sw: ['chuma kupita kiasi', 'kasoro za mifupa', 'wengu lililopanuka', 'matatizo ya moyo', 'maambukizi']
    },
    diagnosis: {
      en: 'Blood tests (CBC, hemoglobin electrophoresis), genetic testing.',
      fr: 'Tests sanguins (NFS, électrophorèse de l\'hémoglobine), tests génétiques.',
      sw: 'Vipimo vya damu (CBC, electrophoresis ya hemoglobini), vipimo vya kijeni.'
    },
    prognosis: {
      en: 'Varies by type. Major forms require lifelong treatment. Minor forms may have no symptoms.',
      fr: 'Varie selon le type. Les formes majeures nécessitent un traitement à vie. Les formes mineures peuvent ne présenter aucun symptôme.',
      sw: 'Inatofautiana kulingana na aina. Aina kuu zinahitaji matibabu ya maisha yote. Aina ndogo zinaweza zisiwe na dalili.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
];
