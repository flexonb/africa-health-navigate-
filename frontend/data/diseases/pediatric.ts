import { ComprehensiveDisease } from './types';

export const pediatricDiseases: ComprehensiveDisease[] = [
  {
    id: 'malnutrition',
    name: {
      en: 'Severe Acute Malnutrition',
      fr: 'Malnutrition Aiguë Sévère',
      sw: 'Utapiamlo Mkali'
    },
    category: 'pediatric',
    severity: 'emergency',
    symptoms: {
      en: ['severe weight loss (wasting)', 'swelling (edema)', 'thin arms and legs', 'lack of energy', 'irritability', 'skin changes', 'hair loss or color change'],
      fr: ['perte de poids sévère (émaciation)', 'gonflement (œdème)', 'bras et jambes minces', 'manque d\'énergie', 'irritabilité', 'changements cutanés', 'perte de cheveux ou changement de couleur'],
      sw: ['kupungua uzito sana (kudhoofika)', 'uvimbe (edema)', 'mikono na miguu myembamba', 'ukosefu wa nguvu', 'kuwashwa', 'mabadiliko ya ngozi', 'kupoteza nywele au kubadilika rangi']
    },
    commonSymptoms: {
      en: ['severe weight loss', 'swelling', 'lack of energy'],
      fr: ['perte de poids sévère', 'gonflement', 'manque d\'énergie'],
      sw: ['kupungua uzito sana', 'uvimbe', 'ukosefu wa nguvu']
    },
    rareSymptoms: {
      en: ['hypothermia', 'hypoglycemia', 'shock', 'heart failure'],
      fr: ['hypothermie', 'hypoglycémie', 'choc', 'insuffisance cardiaque'],
      sw: ['joto la chini la mwili', 'sukari ya chini', 'mshtuko', 'kushindwa kwa moyo']
    },
    causes: {
      en: ['inadequate food intake', 'recurrent infections (diarrhea, measles)', 'poor feeding practices', 'poverty'],
      fr: ['apport alimentaire insuffisant', 'infections récurrentes (diarrhée, rougeole)', 'mauvaises pratiques d\'alimentation', 'pauvreté'],
      sw: ['ulaji duni wa chakula', 'maambukizi ya mara kwa mara (kuhara, surua)', 'mazoea mabaya ya kulisha', 'umaskini']
    },
    riskFactors: {
      en: ['poverty', 'food insecurity', 'lack of breastfeeding', 'infectious disease outbreaks', 'lack of clean water'],
      fr: ['pauvreté', 'insécurité alimentaire', 'manque d\'allaitement', 'épidémies de maladies infectieuses', 'manque d\'eau potable'],
      sw: ['umaskini', 'uhaba wa chakula', 'ukosefu wa kunyonyesha', 'milipuko ya magonjwa ya kuambukiza', 'ukosefu wa maji safi']
    },
    treatment: {
      en: 'Inpatient care with therapeutic milk (F-75, F-100) and Ready-to-Use Therapeutic Food (RUTF). Management of complications.',
      fr: 'Soins hospitaliers avec lait thérapeutique (F-75, F-100) et aliments thérapeutiques prêts à l\'emploi (ATPE). Gestion des complications.',
      sw: 'Huduma ya kulazwa na maziwa ya matibabu (F-75, F-100) na Chakula cha Matibabu Tayari Kutumika (RUTF). Usimamizi wa matatizo.'
    },
    prevention: {
      en: 'Promote breastfeeding, ensure adequate nutrition for children and mothers, improve food security, prevent and treat infections.',
      fr: 'Promouvoir l\'allaitement, assurer une nutrition adéquate pour les enfants et les mères, améliorer la sécurité alimentaire, prévenir et traiter les infections.',
      sw: 'Kuhamasisha unyonyeshaji, kuhakikisha lishe bora kwa watoto na mama, kuboresha usalama wa chakula, kuzuia na kutibu maambukizi.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate help for any child with visible severe wasting or swelling of both feet.',
      fr: 'Consultez immédiatement pour tout enfant présentant une émaciation sévère visible ou un gonflement des deux pieds.',
      sw: 'Tafuta msaada wa haraka kwa mtoto yeyote aliye na udhoofifu mkubwa unaoonekana au uvimbe wa miguu yote miwili.'
    },
    complications: {
      en: ['increased risk of death', 'impaired growth and development', 'weakened immune system', 'long-term health problems'],
      fr: ['risque accru de décès', 'retard de croissance et de développement', 'système immunitaire affaibli', 'problèmes de santé à long terme'],
      sw: ['hatari kubwa ya kifo', 'ukuaji na maendeleo duni', 'mfumo dhaifu wa kinga', 'matatizo ya afya ya muda mrefu']
    },
    diagnosis: {
      en: 'Mid-upper arm circumference (MUAC) measurement, weight-for-height z-score, presence of bilateral edema.',
      fr: 'Mesure du périmètre brachial, score z poids/taille, présence d\'œdème bilatéral.',
      sw: 'Kipimo cha mzingo wa mkono wa juu (MUAC), alama ya z ya uzito kwa urefu, uwepo wa uvimbe wa pande zote.'
    },
    prognosis: {
      en: 'Good with timely and appropriate treatment. High mortality rate if untreated.',
      fr: 'Bon avec un traitement rapide et approprié. Taux de mortalité élevé si non traité.',
      sw: 'Nzuri na matibabu ya wakati na sahihi. Kiwango cha juu cha vifo ikiwa haitatibiwa.'
    },
    source: 'who',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'pediatric',
    gender: 'all'
  },
];
