import { ComprehensiveDisease } from './types';

export const endocrineDiseases: ComprehensiveDisease[] = [
  {
    id: 'hypothyroidism',
    name: {
      en: 'Hypothyroidism (Underactive Thyroid)',
      fr: 'Hypothyroïdie (Thyroïde Paresseuse)',
      sw: 'Hypothyroidism (Tezi Duni)'
    },
    category: 'endocrine',
    severity: 'medium',
    symptoms: {
      en: ['fatigue', 'weight gain', 'cold intolerance', 'dry skin', 'constipation', 'depression', 'muscle weakness', 'hoarseness'],
      fr: ['fatigue', 'prise de poids', 'intolérance au froid', 'peau sèche', 'constipation', 'dépression', 'faiblesse musculaire', 'enrouement'],
      sw: ['uchovu', 'kuongezeka uzito', 'kutovumilia baridi', 'ngozi kavu', 'choo kigumu', 'unyogovu', 'udhaifu wa misuli', 'sauti ya chini']
    },
    commonSymptoms: {
      en: ['fatigue', 'weight gain', 'cold intolerance', 'dry skin'],
      fr: ['fatigue', 'prise de poids', 'intolérance au froid', 'peau sèche'],
      sw: ['uchovu', 'kuongezeka uzito', 'kutovumilia baridi', 'ngozi kavu']
    },
    rareSymptoms: {
      en: ['myxedema coma', 'goiter', 'slow heart rate', 'memory problems'],
      fr: ['coma myxœdémateux', 'goitre', 'rythme cardiaque lent', 'problèmes de mémoire'],
      sw: ['koma ya myxedema', 'goita', 'mapigo ya moyo ya polepole', 'matatizo ya kumbukumbu']
    },
    causes: {
      en: ['autoimmune disease (Hashimoto\'s thyroiditis)', 'iodine deficiency', 'thyroid surgery', 'radiation therapy'],
      fr: ['maladie auto-immune (thyroïdite de Hashimoto)', 'carence en iode', 'chirurgie de la thyroïde', 'radiothérapie'],
      sw: ['ugonjwa wa kinga (ugonjwa wa Hashimoto)', 'upungufu wa iodini', 'upasuaji wa tezi', 'tiba ya mionzi']
    },
    riskFactors: {
      en: ['female gender', 'age over 60', 'family history', 'other autoimmune diseases'],
      fr: ['sexe féminin', 'âge supérieur à 60 ans', 'antécédents familiaux', 'autres maladies auto-immunes'],
      sw: ['jinsia ya kike', 'umri zaidi ya miaka 60', 'historia ya familia', 'magonjwa mengine ya kinga']
    },
    treatment: {
      en: 'Thyroid hormone replacement therapy (levothyroxine).',
      fr: 'Thérapie de remplacement de l\'hormone thyroïdienne (lévothyroxine).',
      sw: 'Tiba ya ubadilishaji wa homoni ya tezi (levothyroxine).'
    },
    prevention: {
      en: 'Adequate iodine intake. No prevention for autoimmune causes.',
      fr: 'Apport adéquat en iode. Pas de prévention pour les causes auto-immunes.',
      sw: 'Ulaji wa kutosha wa iodini. Hakuna kinga kwa sababu za kinga.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for persistent fatigue, unexplained weight gain, or other symptoms.',
      fr: 'Consultez un médecin en cas de fatigue persistante, de prise de poids inexpliquée ou d\'autres symptômes.',
      sw: 'Muone daktari kwa uchovu unaoendelea, kuongezeka uzito bila sababu, au dalili zingine.'
    },
    complications: {
      en: ['goiter', 'heart problems', 'infertility', 'myxedema coma'],
      fr: ['goitre', 'problèmes cardiaques', 'infertilité', 'coma myxœdémateux'],
      sw: ['goita', 'matatizo ya moyo', 'utasa', 'koma ya myxedema']
    },
    diagnosis: {
      en: 'Blood tests to measure TSH and thyroxine levels.',
      fr: 'Tests sanguins pour mesurer les niveaux de TSH et de thyroxine.',
      sw: 'Vipimo vya damu kupima viwango vya TSH na thyroxine.'
    },
    prognosis: {
      en: 'Excellent with lifelong hormone replacement therapy.',
      fr: 'Excellent avec une thérapie de remplacement hormonal à vie.',
      sw: 'Nzuri sana na tiba ya ubadilishaji wa homoni maishani.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'female'
  },
];
