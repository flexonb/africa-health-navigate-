import { ComprehensiveDisease } from './types';

export const neurologicalDiseases: ComprehensiveDisease[] = [
  {
    id: 'epilepsy',
    name: {
      en: 'Epilepsy',
      fr: 'Épilepsie',
      sw: 'Kifafa'
    },
    category: 'neurological',
    severity: 'high',
    symptoms: {
      en: ['seizures', 'temporary confusion', 'staring spells', 'uncontrollable jerking movements', 'loss of consciousness', 'fear, anxiety, or deja vu'],
      fr: ['convulsions', 'confusion temporaire', 'absences', 'mouvements saccadés incontrôlables', 'perte de conscience', 'peur, anxiété ou déjà-vu'],
      sw: ['mshtuko', 'kuchanganyikiwa kwa muda', 'kutazama angani', 'miondoko isiyodhibitiwa', 'kupoteza fahamu', 'hofu, wasiwasi, au deja vu']
    },
    commonSymptoms: {
      en: ['seizures', 'temporary confusion', 'staring spells'],
      fr: ['convulsions', 'confusion temporaire', 'absences'],
      sw: ['mshtuko', 'kuchanganyikiwa kwa muda', 'kutazama angani']
    },
    rareSymptoms: {
      en: ['status epilepticus (prolonged seizure)', 'sudden unexpected death in epilepsy (SUDEP)'],
      fr: ['état de mal épileptique (crise prolongée)', 'mort subite inattendue en épilepsie (MSIE)'],
      sw: ['hali ya kifafa (mshtuko wa muda mrefu)', 'kifo cha ghafla kisichotarajiwa katika kifafa (SUDEP)']
    },
    causes: {
      en: ['genetic influence', 'head trauma', 'brain conditions (tumors, stroke)', 'infectious diseases (meningitis, AIDS)', 'prenatal injury'],
      fr: ['influence génétique', 'traumatisme crânien', 'affections cérébrales (tumeurs, AVC)', 'maladies infectieuses (méningite, SIDA)', 'lésion prénatale'],
      sw: ['ushawishi wa kijeni', 'jeraha la kichwa', 'hali za ubongo (uvimbe, kiharusi)', 'magonjwa ya kuambukiza (meningitis, UKIMWI)', 'jeraha la kabla ya kuzaliwa']
    },
    riskFactors: {
      en: ['age', 'family history', 'head injuries', 'stroke', 'dementia', 'brain infections'],
      fr: ['âge', 'antécédents familiaux', 'traumatismes crâniens', 'AVC', 'démence', 'infections cérébrales'],
      sw: ['umri', 'historia ya familia', 'majeraha ya kichwa', 'kiharusi', 'shida ya akili', 'maambukizi ya ubongo']
    },
    treatment: {
      en: 'Anti-seizure medications, vagus nerve stimulation, ketogenic diet, brain surgery.',
      fr: 'Médicaments anti-épileptiques, stimulation du nerf vague, régime cétogène, chirurgie cérébrale.',
      sw: 'Dawa za kuzuia mshtuko, kusisimua ujasiri wa vagus, lishe ya ketogenic, upasuaji wa ubongo.'
    },
    prevention: {
      en: 'Prevent head injuries, good prenatal care, manage risk factors for stroke.',
      fr: 'Prévenir les traumatismes crâniens, bons soins prénataux, gérer les facteurs de risque d\'AVC.',
      sw: 'Kuzuia majeraha ya kichwa, huduma nzuri kabla ya kuzaa, dhibiti sababu za hatari za kiharusi.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate help for a seizure lasting more than 5 minutes, or if a second seizure follows immediately.',
      fr: 'Consultez immédiatement si une crise dure plus de 5 minutes, ou si une deuxième crise suit immédiatement.',
      sw: 'Tafuta msaada wa haraka kwa mshtuko unaodumu zaidi ya dakika 5, au ikiwa mshtuko wa pili unafuata mara moja.'
    },
    complications: {
      en: ['falls', 'drowning', 'car accidents', 'emotional health issues', 'status epilepticus'],
      fr: ['chutes', 'noyade', 'accidents de voiture', 'problèmes de santé émotionnelle', 'état de mal épileptique'],
      sw: ['kuanguka', 'kuzama', 'ajali za gari', 'masuala ya afya ya kihisia', 'hali ya kifafa']
    },
    diagnosis: {
      en: 'Neurological exam, EEG, CT scan, MRI, blood tests.',
      fr: 'Examen neurologique, EEG, scanner, IRM, tests sanguins.',
      sw: 'Uchunguzi wa neva, EEG, CT scan, MRI, vipimo vya damu.'
    },
    prognosis: {
      en: 'Many people can control seizures with medication. Some children outgrow epilepsy.',
      fr: 'Beaucoup de gens peuvent contrôler les crises avec des médicaments. Certains enfants guérissent de l\'épilepsie en grandissant.',
      sw: 'Watu wengi wanaweza kudhibiti mishtuko kwa dawa. Watoto wengine hupona kifafa wanapokua.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
];
