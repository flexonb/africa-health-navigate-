import { ComprehensiveDisease } from './types';

export const cardiovascularDiseases: ComprehensiveDisease[] = [
  {
    id: 'hypertension',
    name: {
      en: 'High Blood Pressure (Hypertension)',
      fr: 'Hypertension Artérielle',
      sw: 'Shinikizo la Damu la Juu'
    },
    category: 'cardiovascular',
    severity: 'medium',
    symptoms: {
      en: ['often no symptoms', 'headaches', 'dizziness', 'nosebleeds', 'chest pain', 'shortness of breath', 'fatigue'],
      fr: ['souvent aucun symptôme', 'maux de tête', 'étourdissements', 'saignements de nez', 'douleur thoracique', 'essoufflement', 'fatigue'],
      sw: ['mara nyingi hakuna dalili', 'maumivu ya kichwa', 'kizunguzungu', 'kutoka damu puani', 'maumivu ya kifua', 'kupumua kwa shida', 'uchovu']
    },
    commonSymptoms: {
      en: ['headaches', 'dizziness', 'fatigue'],
      fr: ['maux de tête', 'étourdissements', 'fatigue'],
      sw: ['maumivu ya kichwa', 'kizunguzungu', 'uchovu']
    },
    rareSymptoms: {
      en: ['severe headache', 'confusion', 'seizures', 'chest pain', 'vision changes'],
      fr: ['mal de tête sévère', 'confusion', 'convulsions', 'douleur thoracique', 'changements de vision'],
      sw: ['maumivu makali ya kichwa', 'kuchanganyikiwa', 'mshtuko', 'maumivu ya kifua', 'mabadiliko ya macho']
    },
    causes: {
      en: ['unknown (primary)', 'kidney disease', 'hormonal disorders', 'medications', 'lifestyle factors', 'genetics'],
      fr: ['inconnue (primaire)', 'maladie rénale', 'troubles hormonaux', 'médicaments', 'facteurs de mode de vie', 'génétique'],
      sw: ['haijulikani (ya msingi)', 'ugonjwa wa figo', 'matatizo ya homoni', 'dawa', 'mambo ya mtindo wa maisha', 'maumbile']
    },
    riskFactors: {
      en: ['age', 'family history', 'obesity', 'smoking', 'high salt diet', 'stress', 'lack of exercise', 'alcohol'],
      fr: ['âge', 'antécédents familiaux', 'obésité', 'tabagisme', 'régime riche en sel', 'stress', 'manque d\'exercice', 'alcool'],
      sw: ['umri', 'historia ya familia', 'unene kupita kiasi', 'sigara', 'chakula chenye chumvi nyingi', 'msongo', 'ukosefu wa mazoezi', 'pombe']
    },
    treatment: {
      en: 'Lifestyle changes, ACE inhibitors, diuretics, calcium channel blockers, beta-blockers, regular monitoring.',
      fr: 'Changements de mode de vie, inhibiteurs de l\'ECA, diurétiques, bloqueurs des canaux calciques, bêta-bloquants, surveillance régulière.',
      sw: 'Mabadiliko ya mtindo wa maisha, dawa za ACE inhibitors, dawa za mkojo, calcium channel blockers, beta-blockers, ufuatiliaji wa kawaida.'
    },
    prevention: {
      en: 'Reduce salt intake, exercise regularly, maintain healthy weight, limit alcohol, quit smoking, manage stress.',
      fr: 'Réduire l\'apport en sel, faire de l\'exercice régulièrement, maintenir un poids santé, limiter l\'alcool, arrêter de fumer, gérer le stress.',
      sw: 'Kupunguza ulaji wa chumvi, mazoezi ya kawaida, kudumisha uzito wa afya, kupunguza pombe, kuacha sigara, kusimamia msongo.'
    },
    whenToSeekHelp: {
      en: 'Get regular blood pressure checks, seek immediate care for severe headache, chest pain, or vision changes.',
      fr: 'Faites vérifier régulièrement votre tension artérielle, consultez immédiatement pour des maux de tête sévères, des douleurs thoraciques ou des changements de vision.',
      sw: 'Pima shinikizo la damu mara kwa mara, tafuta matibabu ya haraka kwa maumivu makali ya kichwa, maumivu ya kifua, au mabadiliko ya macho.'
    },
    complications: {
      en: ['heart attack', 'stroke', 'kidney disease', 'heart failure', 'vision loss', 'aneurysm'],
      fr: ['crise cardiaque', 'accident vasculaire cérébral', 'maladie rénale', 'insuffisance cardiaque', 'perte de vision', 'anévrisme'],
      sw: ['mshtuko wa moyo', 'kiharusi', 'ugonjwa wa figo', 'kushindwa kwa moyo', 'kupoteza macho', 'aneurysm']
    },
    diagnosis: {
      en: 'Blood pressure measurements, 24-hour monitoring, blood tests, ECG, echocardiogram.',
      fr: 'Mesures de tension artérielle, surveillance 24 heures, tests sanguins, ECG, échocardiogramme.',
      sw: 'Vipimo vya shinikizo la damu, ufuatiliaji wa masaa 24, vipimo vya damu, ECG, echocardiogram.'
    },
    prognosis: {
      en: 'Excellent with proper treatment and lifestyle changes. Uncontrolled hypertension can lead to serious complications.',
      fr: 'Excellent avec un traitement approprié et des changements de mode de vie. L\'hypertension non contrôlée peut entraîner des complications graves.',
      sw: 'Bora sana na matibabu sahihi na mabadiliko ya mtindo wa maisha. Shinikizo la damu lisilodhibitiwa linaweza kusababisha matatizo makubwa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'heart-attack',
    name: {
      en: 'Heart Attack (Myocardial Infarction)',
      fr: 'Crise Cardiaque (Infarctus du Myocarde)',
      sw: 'Mshtuko wa Moyo'
    },
    category: 'cardiovascular',
    severity: 'emergency',
    symptoms: {
      en: ['chest pain', 'shortness of breath', 'nausea', 'sweating', 'arm pain', 'jaw pain', 'back pain', 'fatigue'],
      fr: ['douleur thoracique', 'essoufflement', 'nausée', 'transpiration', 'douleur au bras', 'douleur à la mâchoire', 'mal de dos', 'fatigue'],
      sw: ['maumivu ya kifua', 'kupumua kwa shida', 'kichefuchefu', 'jasho', 'maumivu ya mkono', 'maumivu ya taya', 'maumivu ya mgongo', 'uchovu']
    },
    commonSymptoms: {
      en: ['chest pain', 'shortness of breath', 'sweating', 'nausea'],
      fr: ['douleur thoracique', 'essoufflement', 'transpiration', 'nausée'],
      sw: ['maumivu ya kifua', 'kupumua kwa shida', 'jasho', 'kichefuchefu']
    },
    rareSymptoms: {
      en: ['silent heart attack', 'upper back pain', 'extreme fatigue', 'lightheadedness'],
      fr: ['crise cardiaque silencieuse', 'douleur du haut du dos', 'fatigue extrême', 'étourdissement'],
      sw: ['mshtuko wa moyo wa kimya', 'maumivu ya mgongo wa juu', 'uchovu mkuu', 'kizunguzungu']
    },
    causes: {
      en: ['coronary artery disease', 'blood clot', 'plaque rupture', 'coronary spasm', 'drug use'],
      fr: ['maladie coronarienne', 'caillot sanguin', 'rupture de plaque', 'spasme coronaire', 'usage de drogues'],
      sw: ['ugonjwa wa mishipa ya moyo', 'ganda la damu', 'kuvunjika kwa plaque', 'mshtuko wa mishipa ya moyo', 'matumizi ya dawa za kulevya']
    },
    riskFactors: {
      en: ['age', 'smoking', 'high cholesterol', 'high blood pressure', 'diabetes', 'family history', 'obesity', 'stress'],
      fr: ['âge', 'tabagisme', 'cholestérol élevé', 'hypertension', 'diabète', 'antécédents familiaux', 'obésité', 'stress'],
      sw: ['umri', 'sigara', 'cholesterol ya juu', 'shinikizo la damu la juu', 'kisukari', 'historia ya familia', 'unene kupita kiasi', 'msongo']
    },
    treatment: {
      en: 'Emergency treatment (angioplasty, thrombolysis), medications (aspirin, statins), cardiac rehabilitation, lifestyle changes.',
      fr: 'Traitement d\'urgence (angioplastie, thrombolyse), médicaments (aspirine, statines), réadaptation cardiaque, changements de mode de vie.',
      sw: 'Matibabu ya dharura (angioplasty, thrombolysis), dawa (aspirin, statins), urekebishaji wa moyo, mabadiliko ya mtindo wa maisha.'
    },
    prevention: {
      en: 'Healthy lifestyle, control risk factors, regular exercise, healthy diet, no smoking, manage stress.',
      fr: 'Mode de vie sain, contrôler les facteurs de risque, exercice régulier, alimentation saine, ne pas fumer, gérer le stress.',
      sw: 'Mtindo wa maisha wa afya, kudhibiti sababu za hatari, mazoezi ya kawaida, chakula chenye afya, kutovuta sigara, kusimamia msongo.'
    },
    whenToSeekHelp: {
      en: 'Call emergency services immediately for chest pain or heart attack symptoms. Time is critical.',
      fr: 'Appelez immédiatement les services d\'urgence pour des douleurs thoraciques ou des symptômes de crise cardiaque. Le temps est critique.',
      sw: 'Piga simu ya huduma za dharura mara moja kwa maumivu ya kifua au dalili za mshtuko wa moyo. Muda ni muhimu.'
    },
    complications: {
      en: ['heart failure', 'arrhythmias', 'cardiogenic shock', 'death', 'pericarditis', 'ventricular rupture'],
      fr: ['insuffisance cardiaque', 'arythmies', 'choc cardiogénique', 'décès', 'péricardite', 'rupture ventriculaire'],
      sw: ['kushindwa kwa moyo', 'mapigo yasiyokawaida ya moyo', 'mshtuko wa moyo', 'kifo', 'uvimbe wa mfuko wa moyo', 'kuvunjika kwa ventricle']
    },
    diagnosis: {
      en: 'ECG, blood tests (troponin), chest X-ray, echocardiogram, cardiac catheterization.',
      fr: 'ECG, tests sanguins (troponine), radiographie thoracique, échocardiogramme, cathétérisme cardiaque.',
      sw: 'ECG, vipimo vya damu (troponin), X-ray ya kifua, echocardiogram, catheterization ya moyo.'
    },
    prognosis: {
      en: 'Depends on extent of damage and speed of treatment. Early treatment improves outcomes significantly.',
      fr: 'Dépend de l\'étendue des dommages et de la rapidité du traitement. Un traitement précoce améliore considérablement les résultats.',
      sw: 'Inategemea kiwango cha uharibifu na kasi ya matibabu. Matibabu ya mapema yanaboresha matokeo sana.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'heart-failure',
    name: {
      en: 'Heart Failure',
      fr: 'Insuffisance Cardiaque',
      sw: 'Kushindwa kwa Moyo'
    },
    category: 'cardiovascular',
    severity: 'high',
    symptoms: {
      en: ['shortness of breath', 'fatigue', 'swollen legs', 'rapid heartbeat', 'persistent cough', 'weight gain', 'reduced exercise tolerance'],
      fr: ['essoufflement', 'fatigue', 'jambes enflées', 'rythme cardiaque rapide', 'toux persistante', 'prise de poids', 'tolérance réduite à l\'exercice'],
      sw: ['kupumua kwa shida', 'uchovu', 'uvimbe wa miguu', 'mapigo ya moyo ya haraka', 'kikohozi kisichokwisha', 'kuongezeka uzito', 'kupungua kwa uvumilivu wa mazoezi']
    },
    commonSymptoms: {
      en: ['shortness of breath', 'fatigue', 'swollen legs', 'rapid heartbeat'],
      fr: ['essoufflement', 'fatigue', 'jambes enflées', 'rythme cardiaque rapide'],
      sw: ['kupumua kwa shida', 'uchovu', 'uvimbe wa miguu', 'mapigo ya moyo ya haraka']
    },
    rareSymptoms: {
      en: ['sudden weight gain', 'confusion', 'memory problems', 'decreased appetite', 'nausea'],
      fr: ['prise de poids soudaine', 'confusion', 'problèmes de mémoire', 'diminution de l\'appétit', 'nausée'],
      sw: ['kuongezeka uzito ghafla', 'kuchanganyikiwa', 'matatizo ya kumbukumbu', 'kupungua hamu ya chakula', 'kichefuchefu']
    },
    causes: {
      en: ['coronary artery disease', 'high blood pressure', 'diabetes', 'heart attack', 'cardiomyopathy', 'heart valve disease'],
      fr: ['maladie coronarienne', 'hypertension', 'diabète', 'crise cardiaque', 'cardiomyopathie', 'maladie des valves cardiaques'],
      sw: ['ugonjwa wa mishipa ya moyo', 'shinikizo la damu la juu', 'kisukari', 'mshtuko wa moyo', 'cardiomyopathy', 'ugonjwa wa valvu za moyo']
    },
    riskFactors: {
      en: ['high blood pressure', 'diabetes', 'heart attack', 'obesity', 'smoking', 'alcohol abuse', 'sleep apnea'],
      fr: ['hypertension', 'diabète', 'crise cardiaque', 'obésité', 'tabagisme', 'abus d\'alcool', 'apnée du sommeil'],
      sw: ['shinikizo la damu la juu', 'kisukari', 'mshtuko wa moyo', 'unene kupita kiasi', 'sigara', 'matumizi mabaya ya pombe', 'apnea ya usingizi']
    },
    treatment: {
      en: 'Medications (ACE inhibitors, beta-blockers, diuretics), lifestyle changes, pacemakers, surgery if needed.',
      fr: 'Médicaments (inhibiteurs de l\'ECA, bêta-bloquants, diurétiques), changements de mode de vie, stimulateurs cardiaques, chirurgie si nécessaire.',
      sw: 'Dawa (ACE inhibitors, beta-blockers, diuretics), mabadiliko ya mtindo wa maisha, pacemakers, upasuaji ikiwa inahitajika.'
    },
    prevention: {
      en: 'Control blood pressure, manage diabetes, healthy diet, regular exercise, quit smoking, limit alcohol.',
      fr: 'Contrôler la tension artérielle, gérer le diabète, alimentation saine, exercice régulier, arrêter de fumer, limiter l\'alcool.',
      sw: 'Dhibiti shinikizo la damu, simamia kisukari, chakula chenye afya, mazoezi ya kawaida, acha sigara, punguza pombe.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for sudden worsening of shortness of breath, chest pain, or fainting.',
      fr: 'Consultez immédiatement pour une aggravation soudaine de l\'essoufflement, des douleurs thoraciques ou un évanouissement.',
      sw: 'Tafuta matibabu ya haraka kwa kuzorota ghafla kwa kupumua, maumivu ya kifua, au kuzimia.'
    },
    complications: {
      en: ['kidney damage', 'liver damage', 'pulmonary edema', 'arrhythmias', 'sudden cardiac arrest'],
      fr: ['lésions rénales', 'lésions hépatiques', 'œdème pulmonaire', 'arythmies', 'arrêt cardiaque soudain'],
      sw: ['uharibifu wa figo', 'uharibifu wa ini', 'edema ya mapafu', 'arrhythmias', 'kusimama kwa moyo ghafla']
    },
    diagnosis: {
      en: 'Echocardiogram, ECG, chest X-ray, blood tests (BNP), stress test, cardiac catheterization.',
      fr: 'Échocardiogramme, ECG, radiographie thoracique, tests sanguins (BNP), test d\'effort, cathétérisme cardiaque.',
      sw: 'Echocardiogram, ECG, X-ray ya kifua, vipimo vya damu (BNP), kipimo cha msongo, catheterization ya moyo.'
    },
    prognosis: {
      en: 'Chronic condition that requires lifelong management. Treatment can improve symptoms and quality of life.',
      fr: 'Condition chronique qui nécessite une gestion à vie. Le traitement peut améliorer les symptômes et la qualité de vie.',
      sw: 'Hali ya kudumu inayohitaji usimamizi wa maisha yote. Matibabu yanaweza kuboresha dalili na ubora wa maisha.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'stroke',
    name: {
      en: 'Stroke',
      fr: 'Accident Vasculaire Cérébral',
      sw: 'Kiharusi'
    },
    category: 'cardiovascular',
    severity: 'emergency',
    symptoms: {
      en: ['sudden weakness', 'facial drooping', 'speech problems', 'vision loss', 'severe headache', 'dizziness', 'confusion', 'loss of coordination'],
      fr: ['faiblesse soudaine', 'affaissement facial', 'problèmes d\'élocution', 'perte de vision', 'mal de tête sévère', 'étourdissement', 'confusion', 'perte de coordination'],
      sw: ['udhaifu wa ghafla', 'kuanguka kwa uso', 'matatizo ya mazungumzo', 'kupoteza macho', 'maumivu makali ya kichwa', 'kizunguzungu', 'kuchanganyikiwa', 'kupoteza uratibu']
    },
    commonSymptoms: {
      en: ['sudden weakness', 'facial drooping', 'speech problems', 'vision loss'],
      fr: ['faiblesse soudaine', 'affaissement facial', 'problèmes d\'élocution', 'perte de vision'],
      sw: ['udhaifu wa ghafla', 'kuanguka kwa uso', 'matatizo ya mazungumzo', 'kupoteza macho']
    },
    rareSymptoms: {
      en: ['coma', 'seizures', 'memory loss', 'personality changes'],
      fr: ['coma', 'convulsions', 'perte de mémoire', 'changements de personnalité'],
      sw: ['usingizi mzito', 'mshtuko', 'kupoteza kumbukumbu', 'mabadiliko ya tabia']
    },
    causes: {
      en: ['blood clot', 'bleeding in brain', 'high blood pressure', 'atrial fibrillation', 'diabetes', 'carotid artery disease'],
      fr: ['caillot sanguin', 'saignement dans le cerveau', 'hypertension', 'fibrillation auriculaire', 'diabète', 'maladie de l\'artère carotide'],
      sw: ['ganda la damu', 'kutokwa damu ubongoni', 'shinikizo la damu la juu', 'fibrillation ya atrial', 'kisukari', 'ugonjwa wa mishipa ya carotid']
    },
    riskFactors: {
      en: ['age', 'high blood pressure', 'smoking', 'diabetes', 'atrial fibrillation', 'high cholesterol', 'obesity'],
      fr: ['âge', 'hypertension', 'tabagisme', 'diabète', 'fibrillation auriculaire', 'cholestérol élevé', 'obésité'],
      sw: ['umri', 'shinikizo la damu la juu', 'sigara', 'kisukari', 'fibrillation ya atrial', 'cholesterol ya juu', 'unene kupita kiasi']
    },
    treatment: {
      en: 'Emergency treatment (thrombolysis), rehabilitation, medications to prevent recurrence, surgery if needed.',
      fr: 'Traitement d\'urgence (thrombolyse), réhabilitation, médicaments pour prévenir la récurrence, chirurgie si nécessaire.',
      sw: 'Matibabu ya dharura (thrombolysis), urekebishaji, dawa za kuzuia kurudi, upasuaji ikiwa inahitajika.'
    },
    prevention: {
      en: 'Control blood pressure, quit smoking, exercise, healthy diet, manage diabetes, limit alcohol.',
      fr: 'Contrôler la tension artérielle, arrêter de fumer, faire de l\'exercice, alimentation saine, gérer le diabète, limiter l\'alcool.',
      sw: 'Dhibiti shinikizo la damu, acha sigara, fanya mazoezi, chakula chenye afya, simamia kisukari, punguza pombe.'
    },
    whenToSeekHelp: {
      en: 'Call emergency services immediately for any stroke symptoms (FAST test: Face, Arms, Speech, Time).',
      fr: 'Appelez immédiatement les services d\'urgence pour tout symptôme d\'AVC (test FAST : Visage, Bras, Parole, Temps).',
      sw: 'Piga simu ya dharura mara moja kwa dalili zozote za kiharusi (mtihani wa FAST: Uso, Mikono, Usemi, Wakati).'
    },
    complications: {
      en: ['brain damage', 'speech problems', 'memory loss', 'paralysis', 'death'],
      fr: ['lésions cérébrales', 'problèmes d\'élocution', 'perte de mémoire', 'paralysie', 'décès'],
      sw: ['uharibifu wa ubongo', 'matatizo ya kuongea', 'kupoteza kumbukumbu', 'kupooza', 'kifo']
    },
    diagnosis: {
      en: 'CT scan, MRI, physical exam, blood tests, carotid ultrasound.',
      fr: 'Scanner, IRM, examen physique, tests sanguins, échographie carotidienne.',
      sw: 'CT scan, MRI, uchunguzi wa kimwili, vipimo vya damu, ultrasound ya carotid.'
    },
    prognosis: {
      en: 'Depends on severity and speed of treatment. Rehabilitation can improve function.',
      fr: 'Dépend de la gravité et de la rapidité du traitement. La rééducation peut améliorer la fonction.',
      sw: 'Inategemea ukali na kasi ya matibabu. Ukarabati unaweza kuboresha utendaji.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'rheumatic-heart-disease',
    name: {
      en: 'Rheumatic Heart Disease',
      fr: 'Rhumatisme Articulaire Aigu',
      sw: 'Ugonjwa wa Moyo wa Baridi Yabisi'
    },
    category: 'cardiovascular',
    severity: 'high',
    symptoms: {
      en: ['shortness of breath', 'chest pain', 'swelling', 'fatigue', 'heart palpitations', 'fever'],
      fr: ['essoufflement', 'douleur thoracique', 'gonflement', 'fatigue', 'palpitations cardiaques', 'fièvre'],
      sw: ['kupumua kwa shida', 'maumivu ya kifua', 'uvimbe', 'uchovu', 'mapigo ya moyo', 'homa']
    },
    commonSymptoms: {
      en: ['shortness of breath', 'fatigue', 'swelling'],
      fr: ['essoufflement', 'fatigue', 'gonflement'],
      sw: ['kupumua kwa shida', 'uchovu', 'uvimbe']
    },
    rareSymptoms: {
      en: ['stroke', 'heart failure', 'infective endocarditis'],
      fr: ['AVC', 'insuffisance cardiaque', 'endocardite infectieuse'],
      sw: ['kiharusi', 'kushindwa kwa moyo', 'endocarditis ya kuambukiza']
    },
    causes: {
      en: ['complication of untreated streptococcal (strep) throat infection'],
      fr: ['complication d\'une infection à streptocoques (angine) non traitée'],
      sw: ['shida ya maambukizi ya koo ya streptococcal (strep) yasiyotibiwa']
    },
    riskFactors: {
      en: ['poverty', 'overcrowding', 'lack of access to healthcare'],
      fr: ['pauvreté', 'surpopulation', 'manque d\'accès aux soins de santé'],
      sw: ['umaskini', 'msongamano', 'ukosefu wa huduma za afya']
    },
    treatment: {
      en: 'Antibiotics to treat strep infection, anti-inflammatory drugs, heart valve surgery in severe cases.',
      fr: 'Antibiotiques pour traiter l\'infection à streptocoques, anti-inflammatoires, chirurgie valvulaire cardiaque dans les cas graves.',
      sw: 'Antibiotiki kutibu maambukizi ya strep, dawa za kuzuia uvimbe, upasuaji wa valvu ya moyo katika hali mbaya.'
    },
    prevention: {
      en: 'Prompt treatment of strep throat with antibiotics. Regular penicillin injections for those with rheumatic fever.',
      fr: 'Traitement rapide de l\'angine à streptocoques avec des antibiotiques. Injections régulières de pénicilline pour ceux qui ont un rhumatisme articulaire aigu.',
      sw: 'Matibabu ya haraka ya maumivu ya koo ya strep na antibiotiki. Sindano za mara kwa mara za penicillin kwa wale walio na homa ya baridi yabisi.'
    },
    whenToSeekHelp: {
      en: 'Seek help for sore throat with fever. Seek immediate help for chest pain or severe shortness of breath.',
      fr: 'Consultez pour un mal de gorge avec de la fièvre. Consultez immédiatement pour des douleurs thoraciques ou un essoufflement sévère.',
      sw: 'Tafuta msaada kwa maumivu ya koo na homa. Tafuta msaada wa haraka kwa maumivu ya kifua au kupumua kwa shida sana.'
    },
    complications: {
      en: ['heart failure', 'damaged heart valves', 'atrial fibrillation', 'stroke'],
      fr: ['insuffisance cardiaque', 'valves cardiaques endommagées', 'fibrillation auriculaire', 'AVC'],
      sw: ['kushindwa kwa moyo', 'valvu za moyo zilizoharibika', 'fibrillation ya atria', 'kiharusi']
    },
    diagnosis: {
      en: 'Echocardiogram, ECG, chest X-ray, blood tests.',
      fr: 'Échocardiogramme, ECG, radiographie thoracique, tests sanguins.',
      sw: 'Echocardiogram, ECG, X-ray ya kifua, vipimo vya damu.'
    },
    prognosis: {
      en: 'Varies depending on severity of valve damage. Can be a lifelong condition.',
      fr: 'Varie en fonction de la gravité des lésions valvulaires. Peut être une condition à vie.',
      sw: 'Inatofautiana kulingana na ukali wa uharibifu wa valvu. Inaweza kuwa hali ya maisha yote.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'arrhythmia',
    name: {
      en: 'Arrhythmia',
      fr: 'Arythmie',
      sw: 'Mapigo ya Moyo Yasiyo ya Kawaida'
    },
    category: 'cardiovascular',
    severity: 'medium',
    symptoms: {
      en: ['fluttering in chest', 'racing heartbeat (tachycardia)', 'slow heartbeat (bradycardia)', 'chest pain', 'shortness of breath', 'dizziness', 'fainting'],
      fr: ['battements dans la poitrine', 'rythme cardiaque rapide (tachycardie)', 'rythme cardiaque lent (bradycardie)', 'douleur thoracique', 'essoufflement', 'étourdissements', 'évanouissement'],
      sw: ['moyo kudunda kifuani', 'mapigo ya moyo ya haraka (tachycardia)', 'mapigo ya moyo ya polepole (bradycardia)', 'maumivu ya kifua', 'kupumua kwa shida', 'kizunguzungu', 'kuzimia']
    },
    commonSymptoms: {
      en: ['fluttering in chest', 'racing heartbeat', 'dizziness'],
      fr: ['battements dans la poitrine', 'rythme cardiaque rapide', 'étourdissements'],
      sw: ['moyo kudunda kifuani', 'mapigo ya moyo ya haraka', 'kizunguzungu']
    },
    rareSymptoms: {
      en: ['sweating', 'anxiety', 'fatigue'],
      fr: ['transpiration', 'anxiété', 'fatigue'],
      sw: ['kutokwa na jasho', 'wasiwasi', 'uchovu']
    },
    causes: {
      en: ['heart attack', 'coronary artery disease', 'high blood pressure', 'diabetes', 'thyroid problems', 'stress', 'certain medications'],
      fr: ['crise cardiaque', 'maladie coronarienne', 'hypertension', 'diabète', 'problèmes de thyroïde', 'stress', 'certains médicaments'],
      sw: ['mshtuko wa moyo', 'ugonjwa wa mishipa ya moyo', 'shinikizo la damu la juu', 'kisukari', 'matatizo ya tezi', 'msongo', 'dawa fulani']
    },
    riskFactors: {
      en: ['heart disease', 'high blood pressure', 'thyroid disease', 'alcohol abuse', 'caffeine', 'smoking'],
      fr: ['maladie cardiaque', 'hypertension', 'maladie thyroïdienne', 'abus d\'alcool', 'caféine', 'tabagisme'],
      sw: ['ugonjwa wa moyo', 'shinikizo la damu la juu', 'ugonjwa wa tezi', 'matumizi mabaya ya pombe', 'kafeini', 'uvutaji sigara']
    },
    treatment: {
      en: 'Medications (beta-blockers, calcium channel blockers), pacemakers, cardioversion, catheter ablation, lifestyle changes.',
      fr: 'Médicaments (bêta-bloquants, inhibiteurs calciques), stimulateurs cardiaques, cardioversion, ablation par cathéter, changements de mode de vie.',
      sw: 'Dawa (beta-blockers, calcium channel blockers), pacemaker, cardioversion, catheter ablation, mabadiliko ya mtindo wa maisha.'
    },
    prevention: {
      en: 'Healthy diet, regular exercise, manage stress, limit alcohol and caffeine, quit smoking.',
      fr: 'Alimentation saine, exercice régulier, gérer le stress, limiter l\'alcool et la caféine, arrêter de fumer.',
      sw: 'Lishe bora, mazoezi ya mara kwa mara, kudhibiti msongo, kupunguza pombe na kafeini, kuacha kuvuta sigara.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for chest pain, shortness of breath, or fainting. See a doctor for persistent palpitations.',
      fr: 'Consultez immédiatement pour des douleurs thoraciques, un essoufflement ou un évanouissement. Consultez un médecin pour des palpitations persistantes.',
      sw: 'Tafuta huduma ya haraka kwa maumivu ya kifua, upungufu wa pumzi, au kuzimia. Muone daktari kwa mapigo ya moyo yanayoendelea.'
    },
    complications: {
      en: ['stroke', 'heart failure', 'sudden cardiac arrest'],
      fr: ['AVC', 'insuffisance cardiaque', 'arrêt cardiaque soudain'],
      sw: ['kiharusi', 'kushindwa kwa moyo', 'kusimama kwa moyo ghafla']
    },
    diagnosis: {
      en: 'ECG, Holter monitor, event monitor, echocardiogram, stress test.',
      fr: 'ECG, moniteur Holter, moniteur d\'événements, échocardiogramme, test d\'effort.',
      sw: 'ECG, Holter monitor, event monitor, echocardiogram, kipimo cha msongo.'
    },
    prognosis: {
      en: 'Varies widely depending on the type and underlying cause. Many arrhythmias are treatable.',
      fr: 'Varie considérablement selon le type et la cause sous-jacente. De nombreuses arythmies sont traitables.',
      sw: 'Inatofautiana sana kulingana na aina na chanzo. Arrhythmia nyingi zinatibika.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'atherosclerosis',
    name: {
      en: 'Atherosclerosis',
      fr: 'Athérosclérose',
      sw: 'Atherosclerosis (Ugumu wa Mishipa)'
    },
    category: 'cardiovascular',
    severity: 'high',
    symptoms: {
      en: ['often no symptoms until severe', 'chest pain (angina)', 'shortness of breath', 'pain in legs when walking (claudication)', 'sudden weakness or numbness'],
      fr: ['souvent aucun symptôme jusqu\'à un stade avancé', 'douleur thoracique (angine de poitrine)', 'essoufflement', 'douleur dans les jambes à la marche (claudication)', 'faiblesse ou engourdissement soudain'],
      sw: ['mara nyingi hakuna dalili hadi iwe kali', 'maumivu ya kifua (angina)', 'upungufu wa pumzi', 'maumivu ya miguu wakati wa kutembea (claudication)', 'udhaifu wa ghafla au ganzi']
    },
    commonSymptoms: {
      en: ['chest pain', 'shortness of breath', 'leg pain'],
      fr: ['douleur thoracique', 'essoufflement', 'douleur à la jambe'],
      sw: ['maumivu ya kifua', 'upungufu wa pumzi', 'maumivu ya mguu']
    },
    rareSymptoms: {
      en: ['erectile dysfunction', 'kidney failure symptoms', 'confusion (if affecting brain arteries)'],
      fr: ['dysfonction érectile', 'symptômes d\'insuffisance rénale', 'confusion (si affectant les artères cérébrales)'],
      sw: ['shida za nguvu za kiume', 'dalili za kushindwa kwa figo', 'kuchanganyikiwa (ikiathiri mishipa ya ubongo)']
    },
    causes: {
      en: ['buildup of fats, cholesterol and other substances in and on the artery walls (plaque)'],
      fr: ['accumulation de graisses, de cholestérol et d\'autres substances dans et sur les parois des artères (plaque)'],
      sw: ['mkusanyiko wa mafuta, kolesteroli na vitu vingine ndani na kwenye kuta za mishipa (plaque)']
    },
    riskFactors: {
      en: ['high cholesterol', 'high blood pressure', 'smoking', 'diabetes', 'obesity', 'family history', 'lack of exercise'],
      fr: ['cholestérol élevé', 'hypertension', 'tabagisme', 'diabète', 'obésité', 'antécédents familiaux', 'manque d\'exercice'],
      sw: ['kolesteroli ya juu', 'shinikizo la damu la juu', 'uvutaji sigara', 'kisukari', 'unene', 'historia ya familia', 'ukosefu wa mazoezi']
    },
    treatment: {
      en: 'Lifestyle changes, medications (statins, blood pressure drugs, anti-platelets), angioplasty, stenting, bypass surgery.',
      fr: 'Changements de mode de vie, médicaments (statines, antihypertenseurs, antiplaquettaires), angioplastie, pose de stent, pontage chirurgical.',
      sw: 'Mabadiliko ya mtindo wa maisha, dawa (statins, dawa za shinikizo la damu, anti-platelets), angioplasty, stenting, upasuaji wa bypass.'
    },
    prevention: {
      en: 'Healthy diet, regular exercise, quit smoking, manage weight, control blood pressure and cholesterol.',
      fr: 'Alimentation saine, exercice régulier, arrêter de fumer, gérer son poids, contrôler la tension artérielle et le cholestérol.',
      sw: 'Lishe bora, mazoezi ya mara kwa mara, kuacha kuvuta sigara, kudhibiti uzito, kudhibiti shinikizo la damu na kolesteroli.'
    },
    whenToSeekHelp: {
      en: 'Regular check-ups for risk factors. Seek immediate help for symptoms of heart attack or stroke.',
      fr: 'Contrôles réguliers pour les facteurs de risque. Consultez immédiatement pour des symptômes de crise cardiaque ou d\'AVC.',
      sw: 'Uchunguzi wa mara kwa mara kwa sababu za hatari. Tafuta msaada wa haraka kwa dalili za mshtuko wa moyo au kiharusi.'
    },
    complications: {
      en: ['heart attack', 'stroke', 'aneurysm', 'peripheral artery disease', 'chronic kidney disease'],
      fr: ['crise cardiaque', 'AVC', 'anévrisme', 'maladie artérielle périphérique', 'maladie rénale chronique'],
      sw: ['mshtuko wa moyo', 'kiharusi', 'aneurysm', 'ugonjwa wa mishipa ya pembeni', 'ugonjwa sugu wa figo']
    },
    diagnosis: {
      en: 'Blood tests, Doppler ultrasound, ankle-brachial index (ABI), ECG, stress test, cardiac catheterization.',
      fr: 'Tests sanguins, échographie Doppler, indice de pression systolique (IPS), ECG, test d\'effort, cathétérisme cardiaque.',
      sw: 'Vipimo vya damu, Doppler ultrasound, ankle-brachial index (ABI), ECG, kipimo cha msongo, catheterization ya moyo.'
    },
    prognosis: {
      en: 'Progressive disease, but can be managed effectively to prevent complications.',
      fr: 'Maladie progressive, mais peut être gérée efficacement pour prévenir les complications.',
      sw: 'Ugonjwa unaoendelea, lakini unaweza kudhibitiwa ipasavyo kuzuia matatizo.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'cardiomyopathy',
    name: {
      en: 'Cardiomyopathy',
      fr: 'Cardiomyopathie',
      sw: 'Ugonjwa wa Misuli ya Moyo'
    },
    category: 'cardiovascular',
    severity: 'high',
    symptoms: {
      en: ['shortness of breath', 'fatigue', 'swelling in legs, ankles and feet', 'dizziness', 'lightheadedness', 'fainting', 'arrhythmias'],
      fr: ['essoufflement', 'fatigue', 'gonflement des jambes, des chevilles et des pieds', 'étourdissements', 'vertiges', 'évanouissement', 'arythmies'],
      sw: ['upungufu wa pumzi', 'uchovu', 'uvimbe wa miguu, vifundo na nyayo', 'kizunguzungu', 'kuhisi wepesi kichwani', 'kuzimia', 'mapigo ya moyo yasiyo ya kawaida']
    },
    commonSymptoms: {
      en: ['shortness of breath', 'fatigue', 'swelling in legs'],
      fr: ['essoufflement', 'fatigue', 'gonflement des jambes'],
      sw: ['upungufu wa pumzi', 'uchovu', 'uvimbe wa miguu']
    },
    rareSymptoms: {
      en: ['chest pain', 'cough when lying down', 'heart murmurs'],
      fr: ['douleur thoracique', 'toux en position allongée', 'souffles cardiaques'],
      sw: ['maumivu ya kifua', 'kikohozi ukiwa umelala', 'sauti za moyo zisizo za kawaida']
    },
    causes: {
      en: ['often unknown', 'genetic conditions', 'high blood pressure', 'heart tissue damage from heart attack', 'viral infections', 'alcohol abuse'],
      fr: ['souvent inconnue', 'conditions génétiques', 'hypertension', 'lésions du tissu cardiaque après une crise cardiaque', 'infections virales', 'abus d\'alcool'],
      sw: ['mara nyingi haijulikani', 'hali za kijeni', 'shinikizo la damu la juu', 'uharibifu wa tishu za moyo kutokana na mshtuko wa moyo', 'maambukizi ya virusi', 'matumizi mabaya ya pombe']
    },
    riskFactors: {
      en: ['family history', 'high blood pressure', 'obesity', 'diabetes', 'alcoholism'],
      fr: ['antécédents familiaux', 'hypertension', 'obésité', 'diabète', 'alcoolisme'],
      sw: ['historia ya familia', 'shinikizo la damu la juu', 'unene', 'kisukari', 'ulevi']
    },
    treatment: {
      en: 'Medications (ACE inhibitors, beta-blockers, diuretics), surgically implanted devices (pacemaker, ICD), heart transplant in severe cases.',
      fr: 'Médicaments (inhibiteurs de l\'ECA, bêta-bloquants, diurétiques), dispositifs implantés chirurgicalement (stimulateur cardiaque, DAI), greffe de cœur dans les cas graves.',
      sw: 'Dawa (ACE inhibitors, beta-blockers, diuretics), vifaa vilivyopandikizwa kwa upasuaji (pacemaker, ICD), upandikizaji wa moyo katika hali mbaya.'
    },
    prevention: {
      en: 'Control risk factors like high blood pressure and diabetes. Avoid alcohol and drug abuse.',
      fr: 'Contrôler les facteurs de risque comme l\'hypertension et le diabète. Éviter l\'abus d\'alcool et de drogues.',
      sw: 'Dhibiti sababu za hatari kama shinikizo la damu la juu na kisukari. Epuka matumizi mabaya ya pombe na dawa za kulevya.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for shortness of breath, fatigue, or swelling. Seek immediate help for fainting or severe chest pain.',
      fr: 'Consultez un médecin pour un essoufflement, de la fatigue ou un gonflement. Consultez immédiatement en cas d\'évanouissement ou de douleur thoracique sévère.',
      sw: 'Muone daktari kwa upungufu wa pumzi, uchovu, au uvimbe. Tafuta msaada wa haraka kwa kuzimia au maumivu makali ya kifua.'
    },
    complications: {
      en: ['heart failure', 'blood clots', 'valve problems', 'sudden cardiac arrest'],
      fr: ['insuffisance cardiaque', 'caillots sanguins', 'problèmes valvulaires', 'arrêt cardiaque soudain'],
      sw: ['kushindwa kwa moyo', 'mabonge ya damu', 'matatizo ya valvu', 'kusimama kwa moyo ghafla']
    },
    diagnosis: {
      en: 'Echocardiogram, ECG, chest X-ray, cardiac MRI, stress test, genetic testing.',
      fr: 'Échocardiogramme, ECG, radiographie thoracique, IRM cardiaque, test d\'effort, tests génétiques.',
      sw: 'Echocardiogram, ECG, X-ray ya kifua, MRI ya moyo, kipimo cha msongo, vipimo vya kijeni.'
    },
    prognosis: {
      en: 'Varies by type and severity. Can be a progressive disease, but treatment can manage symptoms and slow progression.',
      fr: 'Varie selon le type et la gravité. Peut être une maladie progressive, mais le traitement peut gérer les symptômes et ralentir la progression.',
      sw: 'Inatofautiana kulingana na aina na ukali. Inaweza kuwa ugonjwa unaoendelea, lakini matibabu yanaweza kudhibiti dalili na kupunguza kasi ya maendeleo.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'congenital-heart-disease',
    name: {
      en: 'Congenital Heart Disease',
      fr: 'Cardiopathie Congénitale',
      sw: 'Ugonjwa wa Moyo wa Kuzaliwa'
    },
    category: 'cardiovascular',
    severity: 'high',
    symptoms: {
      en: ['blue skin (cyanosis)', 'rapid breathing', 'poor feeding (in infants)', 'shortness of breath during exercise', 'swelling in legs or abdomen', 'fatigue'],
      fr: ['peau bleue (cyanose)', 'respiration rapide', 'mauvaise alimentation (chez les nourrissons)', 'essoufflement à l\'effort', 'gonflement des jambes ou de l\'abdomen', 'fatigue'],
      sw: ['ngozi ya bluu (cyanosis)', 'kupumua haraka', 'ulaji duni (kwa watoto wachanga)', 'upungufu wa pumzi wakati wa mazoezi', 'uvimbe wa miguu au tumbo', 'uchovu']
    },
    commonSymptoms: {
      en: ['blue skin', 'rapid breathing', 'poor feeding'],
      fr: ['peau bleue', 'respiration rapide', 'mauvaise alimentation'],
      sw: ['ngozi ya bluu', 'kupumua haraka', 'ulaji duni']
    },
    rareSymptoms: {
      en: ['clubbing of fingers and toes', 'fainting', 'chest pain'],
      fr: ['hippocratisme digital', 'évanouissement', 'douleur thoracique'],
      sw: ['vidole vya ngoma', 'kuzimia', 'maumivu ya kifua']
    },
    causes: {
      en: ['problems with heart development in the womb', 'genetic factors', 'maternal infections (e.g., rubella)', 'maternal diabetes'],
      fr: ['problèmes de développement cardiaque dans l\'utérus', 'facteurs génétiques', 'infections maternelles (par ex., rubéole)', 'diabète maternel'],
      sw: ['matatizo ya ukuaji wa moyo tumboni', 'sababu za kijeni', 'maambukizi ya mama (k.m., rubella)', 'kisukari cha mama']
    },
    riskFactors: {
      en: ['family history', 'maternal rubella', 'maternal diabetes', 'certain medications during pregnancy', 'alcohol use during pregnancy'],
      fr: ['antécédents familiaux', 'rubéole maternelle', 'diabète maternel', 'certains médicaments pendant la grossesse', 'consommation d\'alcool pendant la grossesse'],
      sw: ['historia ya familia', 'rubella ya mama', 'kisukari cha mama', 'dawa fulani wakati wa ujauzito', 'matumizi ya pombe wakati wa ujauzito']
    },
    treatment: {
      en: 'Varies by defect. Medications, catheter procedures, open-heart surgery, heart transplant.',
      fr: 'Varie selon le défaut. Médicaments, procédures par cathéter, chirurgie à cœur ouvert, greffe de cœur.',
      sw: 'Inatofautiana kulingana na kasoro. Dawa, taratibu za catheter, upasuaji wa moyo wazi, upandikizaji wa moyo.'
    },
    prevention: {
      en: 'Vaccination (e.g., rubella), good prenatal care, avoiding alcohol and certain drugs during pregnancy.',
      fr: 'Vaccination (par ex., rubéole), bons soins prénataux, éviter l\'alcool et certains médicaments pendant la grossesse.',
      sw: 'Chanjo (k.m., rubella), huduma nzuri kabla ya kuzaa, kuepuka pombe na dawa fulani wakati wa ujauzito.'
    },
    whenToSeekHelp: {
      en: 'Diagnosed at birth or during childhood. Seek help for blue skin, poor feeding, or rapid breathing in infants.',
      fr: 'Diagnostiqué à la naissance ou pendant l\'enfance. Consultez pour une peau bleue, une mauvaise alimentation ou une respiration rapide chez les nourrissons.',
      sw: 'Hugunduliwa wakati wa kuzaliwa au utotoni. Tafuta msaada kwa ngozi ya bluu, ulaji duni, au kupumua haraka kwa watoto wachanga.'
    },
    complications: {
      en: ['heart failure', 'pulmonary hypertension', 'arrhythmias', 'endocarditis', 'developmental delays'],
      fr: ['insuffisance cardiaque', 'hypertension pulmonaire', 'arythmies', 'endocardite', 'retards de développement'],
      sw: ['kushindwa kwa moyo', 'shinikizo la damu la mapafu', 'mapigo ya moyo yasiyo ya kawaida', 'endocarditis', 'ucheleweshaji wa ukuaji']
    },
    diagnosis: {
      en: 'Pulse oximetry screening, echocardiogram, ECG, chest X-ray, cardiac catheterization.',
      fr: 'Dépistage par oxymétrie de pouls, échocardiogramme, ECG, radiographie thoracique, cathétérisme cardiaque.',
      sw: 'Uchunguzi wa pulse oximetry, echocardiogram, ECG, X-ray ya kifua, catheterization ya moyo.'
    },
    prognosis: {
      en: 'Greatly improved with modern surgery and care. Many children grow up to lead normal lives.',
      fr: 'Grandement amélioré avec la chirurgie et les soins modernes. De nombreux enfants grandissent pour mener une vie normale.',
      sw: 'Imeboreshwa sana na upasuaji na huduma za kisasa. Watoto wengi hukua na kuishi maisha ya kawaida.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'pediatric',
    gender: 'all'
  },
  {
    id: 'deep-vein-thrombosis',
    name: {
      en: 'Deep Vein Thrombosis (DVT)',
      fr: 'Thrombose Veineuse Profonde (TVP)',
      sw: 'Thrombosis ya Mshipa wa Kina (DVT)'
    },
    category: 'cardiovascular',
    severity: 'high',
    symptoms: {
      en: ['swelling in one leg', 'pain or tenderness in leg', 'warmth in the affected area', 'red or discolored skin on the leg'],
      fr: ['gonflement d\'une jambe', 'douleur ou sensibilité dans la jambe', 'chaleur dans la zone affectée', 'peau rouge ou décolorée sur la jambe'],
      sw: ['uvimbe katika mguu mmoja', 'maumivu au ulaini kwenye mguu', 'joto katika eneo lililoathirika', 'ngozi nyekundu au iliyobadilika rangi kwenye mguu']
    },
    commonSymptoms: {
      en: ['leg swelling', 'leg pain', 'warmth'],
      fr: ['gonflement de la jambe', 'douleur à la jambe', 'chaleur'],
      sw: ['uvimbe wa mguu', 'maumivu ya mguu', 'joto']
    },
    rareSymptoms: {
      en: ['often no symptoms', 'fever', 'visible surface veins'],
      fr: ['souvent aucun symptôme', 'fièvre', 'veines de surface visibles'],
      sw: ['mara nyingi hakuna dalili', 'homa', 'mishipa inayoonekana juu ya ngozi']
    },
    causes: {
      en: ['blood clot forming in a deep vein, usually in the legs', 'damage to a vein', 'slow blood flow', 'hypercoagulability'],
      fr: ['caillot de sang se formant dans une veine profonde, généralement dans les jambes', 'lésion d\'une veine', 'flux sanguin lent', 'hypercoagulabilité'],
      sw: ['bonge la damu linaloundwa katika mshipa wa kina, kawaida kwenye miguu', 'uharibifu wa mshipa', 'mtiririko wa damu wa polepole', 'kuganda kwa damu kupita kiasi']
    },
    riskFactors: {
      en: ['prolonged immobility', 'surgery', 'cancer', 'pregnancy', 'obesity', 'smoking', 'family history', 'birth control pills'],
      fr: ['immobilité prolongée', 'chirurgie', 'cancer', 'grossesse', 'obésité', 'tabagisme', 'antécédents familiaux', 'pilules contraceptives'],
      sw: ['kutotembea kwa muda mrefu', 'upasuaji', 'saratani', 'ujauzito', 'unene', 'uvutaji sigara', 'historia ya familia', 'vidonge vya kuzuia mimba']
    },
    treatment: {
      en: 'Anticoagulants (blood thinners), thrombolytics, compression stockings, filters (in vena cava).',
      fr: 'Anticoagulants, thrombolytiques, bas de contention, filtres (dans la veine cave).',
      sw: 'Dawa za kuzuia kuganda kwa damu, thrombolytics, soksi za kubana, vichungi (kwenye vena cava).'
    },
    prevention: {
      en: 'Regular movement, leg exercises during long travel, compression stockings, medication for high-risk individuals.',
      fr: 'Mouvement régulier, exercices des jambes lors de longs voyages, bas de contention, médicaments pour les personnes à haut risque.',
      sw: 'Harakati za mara kwa mara, mazoezi ya miguu wakati wa safari ndefu, soksi za kubana, dawa kwa watu walio katika hatari kubwa.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate help for sudden shortness of breath or chest pain (signs of pulmonary embolism). See a doctor for leg swelling or pain.',
      fr: 'Consultez immédiatement pour un essoufflement soudain ou une douleur thoracique (signes d\'embolie pulmonaire). Consultez un médecin pour un gonflement ou une douleur à la jambe.',
      sw: 'Tafuta msaada wa haraka kwa upungufu wa pumzi wa ghafla au maumivu ya kifua (dalili za embolism ya mapafu). Muone daktari kwa uvimbe au maumivu ya mguu.'
    },
    complications: {
      en: ['pulmonary embolism (life-threatening)', 'post-thrombotic syndrome (leg pain, swelling)'],
      fr: ['embolie pulmonaire (potentiellement mortelle)', 'syndrome post-thrombotique (douleur, gonflement de la jambe)'],
      sw: ['embolism ya mapafu (hatari kwa maisha)', 'ugonjwa wa baada ya thrombosis (maumivu ya mguu, uvimbe)']
    },
    diagnosis: {
      en: 'Ultrasound, D-dimer blood test, venography, CT or MRI scan.',
      fr: 'Échographie, test sanguin D-dimères, phlébographie, scanner ou IRM.',
      sw: 'Ultrasound, kipimo cha damu cha D-dimer, venography, CT au MRI scan.'
    },
    prognosis: {
      en: 'Good with prompt treatment. The main risk is pulmonary embolism.',
      fr: 'Bon avec un traitement rapide. Le principal risque est l\'embolie pulmonaire.',
      sw: 'Nzuri na matibabu ya haraka. Hatari kuu ni embolism ya mapafu.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'all'
  }
];
