import { ComprehensiveDisease } from './types';

export const mentalDiseases: ComprehensiveDisease[] = [
  {
    id: 'depression',
    name: {
      en: 'Depression',
      fr: 'Dépression',
      sw: 'Unyogovu'
    },
    category: 'mental',
    severity: 'high',
    symptoms: {
      en: ['persistent sad mood', 'loss of interest or pleasure', 'changes in appetite or weight', 'sleep disturbances', 'fatigue', 'feelings of worthlessness or guilt', 'difficulty concentrating', 'thoughts of death or suicide'],
      fr: ['humeur triste persistante', 'perte d\'intérêt ou de plaisir', 'changements d\'appétit ou de poids', 'troubles du sommeil', 'fatigue', 'sentiments d\'inutilité ou de culpabilité', 'difficulté à se concentrer', 'pensées de mort ou de suicide'],
      sw: ['hali ya huzuni ya kudumu', 'kupoteza hamu au raha', 'mabadiliko ya hamu ya kula au uzito', 'matatizo ya usingizi', 'uchovu', 'hisia za kutokuwa na thamani au hatia', 'ugumu wa kuzingatia', 'mawazo ya kifo au kujiua']
    },
    commonSymptoms: {
      en: ['persistent sad mood', 'loss of interest or pleasure', 'fatigue', 'sleep disturbances'],
      fr: ['humeur triste persistante', 'perte d\'intérêt ou de plaisir', 'fatigue', 'troubles du sommeil'],
      sw: ['hali ya huzuni ya kudumu', 'kupoteza hamu au raha', 'uchovu', 'matatizo ya usingizi']
    },
    rareSymptoms: {
      en: ['psychosis (hallucinations, delusions)', 'physical aches and pains without clear cause', 'irritability', 'anger outbursts'],
      fr: ['psychose (hallucinations, délires)', 'douleurs physiques sans cause claire', 'irritabilité', 'accès de colère'],
      sw: ['saikolojia (maono, udanganyifu)', 'maumivu ya mwili bila sababu dhahiri', 'kuwashwa', 'milipuko ya hasira']
    },
    causes: {
      en: ['brain chemistry', 'genetics', 'stressful life events', 'chronic illness', 'hormonal changes'],
      fr: ['chimie du cerveau', 'génétique', 'événements de vie stressants', 'maladie chronique', 'changements hormonaux'],
      sw: ['kemia ya ubongo', 'maumbile', 'matukio ya maisha yenye msongo', 'ugonjwa sugu', 'mabadiliko ya homoni']
    },
    riskFactors: {
      en: ['family history', 'trauma or stress', 'chronic physical illness', 'substance abuse', 'major life changes', 'lack of social support'],
      fr: ['antécédents familiaux', 'traumatisme ou stress', 'maladie physique chronique', 'abus de substances', 'changements de vie majeurs', 'manque de soutien social'],
      sw: ['historia ya familia', 'kiwewe au msongo', 'ugonjwa sugu wa kimwili', 'matumizi mabaya ya dawa za kulevya', 'mabadiliko makubwa ya maisha', 'ukosefu wa msaada wa kijamii']
    },
    treatment: {
      en: 'Psychotherapy (counseling), antidepressant medications, lifestyle changes (exercise, diet), support groups.',
      fr: 'Psychothérapie (conseil), médicaments antidépresseurs, changements de mode de vie (exercice, alimentation), groupes de soutien.',
      sw: 'Tiba ya kisaikolojia (ushauri), dawa za kupunguza unyogovu, mabadiliko ya mtindo wa maisha (mazoezi, lishe), vikundi vya msaada.'
    },
    prevention: {
      en: 'Building resilience, stress management techniques, strong social support network, early treatment of symptoms.',
      fr: 'Renforcer la résilience, techniques de gestion du stress, réseau de soutien social solide, traitement précoce des symptômes.',
      sw: 'Kujenga ustahimilivu, mbinu za kudhibiti msongo, mtandao imara wa msaada wa kijamii, matibabu ya mapema ya dalili.'
    },
    whenToSeekHelp: {
      en: 'If you feel depressed, make an appointment to see a doctor or mental health professional. If you have thoughts of harming yourself, seek help immediately.',
      fr: 'Si vous vous sentez déprimé, prenez rendez-vous avec un médecin ou un professionnel de la santé mentale. Si vous avez des pensées suicidaires, cherchez de l\'aide immédiatement.',
      sw: 'Ikiwa unajisikia unyogovu, panga miadi na daktari au mtaalamu wa afya ya akili. Ikiwa una mawazo ya kujidhuru, tafuta msaada mara moja.'
    },
    complications: {
      en: ['suicide', 'substance abuse', 'social isolation', 'relationship problems', 'work or school problems', 'self-harm'],
      fr: ['suicide', 'abus de substances', 'isolement social', 'problèmes relationnels', 'problèmes professionnels ou scolaires', 'automutilation'],
      sw: ['kujiua', 'matumizi mabaya ya dawa za kulevya', 'kujitenga na jamii', 'matatizo ya uhusiano', 'matatizo ya kazini au shuleni', 'kujidhuru']
    },
    diagnosis: {
      en: 'Clinical evaluation by a mental health professional, using criteria from the DSM-5.',
      fr: 'Évaluation clinique par un professionnel de la santé mentale, en utilisant les critères du DSM-5.',
      sw: 'Tathmini ya kliniki na mtaalamu wa afya ya akili, kwa kutumia vigezo kutoka DSM-5.'
    },
    prognosis: {
      en: 'Highly treatable. Most people see improvements with medication, psychotherapy, or both.',
      fr: 'Très traitable. La plupart des gens voient des améliorations avec des médicaments, une psychothérapie, ou les deux.',
      sw: 'Inatibika sana. Watu wengi huona nafuu kwa dawa, tiba ya kisaikolojia, au zote mbili.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'anxiety-disorder',
    name: {
      en: 'Anxiety Disorder',
      fr: 'Trouble Anxieux',
      sw: 'Ugonjwa wa Wasiwasi'
    },
    category: 'mental',
    severity: 'medium',
    symptoms: {
      en: ['excessive worry', 'restlessness', 'fatigue', 'difficulty concentrating', 'irritability', 'muscle tension', 'sleep problems', 'panic attacks'],
      fr: ['inquiétude excessive', 'agitation', 'fatigue', 'difficulté à se concentrer', 'irritabilité', 'tension musculaire', 'problèmes de sommeil', 'attaques de panique'],
      sw: ['wasiwasi kupita kiasi', 'kutotulia', 'uchovu', 'ugumu wa kuzingatia', 'kuwashwa', 'mvutano wa misuli', 'matatizo ya usingizi', 'mashambulizi ya hofu']
    },
    commonSymptoms: {
      en: ['excessive worry', 'restlessness', 'difficulty concentrating', 'irritability'],
      fr: ['inquiétude excessive', 'agitation', 'difficulté à se concentrer', 'irritabilité'],
      sw: ['wasiwasi kupita kiasi', 'kutotulia', 'ugumu wa kuzingatia', 'kuwashwa']
    },
    rareSymptoms: {
      en: ['derealization', 'depersonalization', 'fear of losing control'],
      fr: ['déréalisation', 'dépersonnalisation', 'peur de perdre le contrôle'],
      sw: ['kuhisi mazingira si halisi', 'kujihisi si halisi', 'hofu ya kupoteza udhibiti']
    },
    causes: {
      en: ['genetics', 'brain chemistry', 'stressful life events', 'medical conditions'],
      fr: ['génétique', 'chimie du cerveau', 'événements de vie stressants', 'conditions médicales'],
      sw: ['maumbile', 'kemia ya ubongo', 'matukio ya maisha yenye msongo', 'hali za kiafya']
    },
    riskFactors: {
      en: ['trauma', 'stress buildup', 'personality type', 'other mental health disorders', 'family history'],
      fr: ['traumatisme', 'accumulation de stress', 'type de personnalité', 'autres troubles de santé mentale', 'antécédents familiaux'],
      sw: ['kiwewe', 'mkusanyiko wa msongo', 'aina ya utu', 'magonjwa mengine ya akili', 'historia ya familia']
    },
    treatment: {
      en: 'Psychotherapy (CBT), medications (antidepressants, anti-anxiety drugs), stress management techniques.',
      fr: 'Psychothérapie (TCC), médicaments (antidépresseurs, anxiolytiques), techniques de gestion du stress.',
      sw: 'Tiba ya kisaikolojia (CBT), dawa (dawa za unyogovu, dawa za wasiwasi), mbinu za kudhibiti msongo.'
    },
    prevention: {
      en: 'Early intervention, stress management, avoiding caffeine and alcohol, regular exercise.',
      fr: 'Intervention précoce, gestion du stress, éviter la caféine et l\'alcool, exercice régulier.',
      sw: 'Kuingilia mapema, kudhibiti msongo, kuepuka kafeini na pombe, mazoezi ya mara kwa mara.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if worry interferes with daily life, is distressing, or difficult to control.',
      fr: 'Consultez un médecin si l\'inquiétude interfère avec la vie quotidienne, est angoissante ou difficile à contrôler.',
      sw: 'Muone daktari ikiwa wasiwasi unaingilia maisha ya kila siku, unasumbua, au ni vigumu kudhibiti.'
    },
    complications: {
      en: ['depression', 'substance abuse', 'insomnia', 'social isolation', 'impaired quality of life'],
      fr: ['dépression', 'abus de substances', 'insomnie', 'isolement social', 'qualité de vie altérée'],
      sw: ['unyogovu', 'matumizi mabaya ya dawa za kulevya', 'kukosa usingizi', 'kujitenga na jamii', 'ubora duni wa maisha']
    },
    diagnosis: {
      en: 'Clinical evaluation by a mental health professional.',
      fr: 'Évaluation clinique par un professionnel de la santé mentale.',
      sw: 'Tathmini ya kliniki na mtaalamu wa afya ya akili.'
    },
    prognosis: {
      en: 'Good with treatment. Many people can manage their symptoms effectively.',
      fr: 'Bon avec traitement. De nombreuses personnes peuvent gérer efficacement leurs symptômes.',
      sw: 'Nzuri na matibabu. Watu wengi wanaweza kudhibiti dalili zao kwa ufanisi.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
];
