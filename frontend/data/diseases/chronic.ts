import { ComprehensiveDisease } from './types';

export const chronicDiseases: ComprehensiveDisease[] = [
  {
    id: 'diabetes-mellitus',
    name: {
      en: 'Diabetes Mellitus',
      fr: 'Diabète Sucré',
      sw: 'Kisukari'
    },
    category: 'chronic',
    severity: 'high',
    symptoms: {
      en: ['frequent urination', 'increased thirst', 'unexplained weight loss', 'increased hunger', 'fatigue', 'blurred vision', 'slow-healing sores', 'frequent infections'],
      fr: ['mictions fréquentes', 'soif accrue', 'perte de poids inexpliquée', 'faim accrue', 'fatigue', 'vision floue', 'plaies à cicatrisation lente', 'infections fréquentes'],
      sw: ['kukojoa mara kwa mara', 'kiu iliyoongezeka', 'kupungua uzito bila sababu', 'njaa iliyoongezeka', 'uchovu', 'kuona vibaya', 'vidonda vinavyopona polepole', 'maambukizi ya mara kwa mara']
    },
    commonSymptoms: {
      en: ['frequent urination', 'increased thirst', 'unexplained weight loss', 'fatigue'],
      fr: ['mictions fréquentes', 'soif accrue', 'perte de poids inexpliquée', 'fatigue'],
      sw: ['kukojoa mara kwa mara', 'kiu iliyoongezeka', 'kupungua uzito bila sababu', 'uchovu']
    },
    rareSymptoms: {
      en: ['numbness or tingling in hands or feet', 'darkened skin in armpits and neck', 'fruity-smelling breath', 'nausea and vomiting'],
      fr: ['engourdissement ou picotements dans les mains ou les pieds', 'peau foncée aux aisselles et au cou', 'haleine fruitée', 'nausées et vomissements'],
      sw: ['ganzi au kuwashwa mikononi au miguuni', 'ngozi nyeusi kwenye kwapa na shingo', 'harufu ya matunda kwenye pumzi', 'kichefuchefu na kutapika']
    },
    causes: {
      en: ['insulin resistance (Type 2)', 'autoimmune destruction of beta cells (Type 1)', 'genetics', 'lifestyle factors'],
      fr: ['résistance à l\'insuline (Type 2)', 'destruction auto-immune des cellules bêta (Type 1)', 'génétique', 'facteurs de style de vie'],
      sw: ['upinzani wa insulini (Aina ya 2)', 'uharibifu wa kinga ya mwili kwa seli za beta (Aina ya 1)', 'maumbile', 'mambo ya mtindo wa maisha']
    },
    riskFactors: {
      en: ['family history', 'obesity', 'physical inactivity', 'age', 'high blood pressure', 'high cholesterol', 'gestational diabetes history'],
      fr: ['antécédents familiaux', 'obésité', 'inactivité physique', 'âge', 'hypertension artérielle', 'cholestérol élevé', 'antécédents de diabète gestationnel'],
      sw: ['historia ya familia', 'unene kupita kiasi', 'kutofanya mazoezi', 'umri', 'shinikizo la damu la juu', 'cholesterol ya juu', 'historia ya kisukari cha ujauzito']
    },
    treatment: {
      en: 'Lifestyle changes (diet, exercise), oral medications (e.g., metformin), insulin therapy, regular blood sugar monitoring.',
      fr: 'Changements de mode de vie (alimentation, exercice), médicaments oraux (par ex., metformine), insulinothérapie, surveillance régulière de la glycémie.',
      sw: 'Mabadiliko ya mtindo wa maisha (lishe, mazoezi), dawa za kumeza (k.m., metformin), tiba ya insulini, ufuatiliaji wa mara kwa mara wa sukari ya damu.'
    },
    prevention: {
      en: 'Maintain a healthy weight, regular physical activity, balanced diet, avoid sugary drinks and processed foods.',
      fr: 'Maintenir un poids santé, activité physique régulière, alimentation équilibrée, éviter les boissons sucrées et les aliments transformés.',
      sw: 'Dumisha uzito wenye afya, mazoezi ya mara kwa mara, lishe bora, epuka vinywaji vyenye sukari na vyakula vilivyosindikwa.'
    },
    whenToSeekHelp: {
      en: 'Consult a doctor for regular check-ups if at risk. Seek immediate help for signs of very high or low blood sugar (confusion, fainting).',
      fr: 'Consultez un médecin pour des contrôles réguliers si vous êtes à risque. Cherchez de l\'aide immédiate pour des signes de glycémie très élevée ou basse (confusion, évanouissement).',
      sw: 'Wasiliana na daktari kwa uchunguzi wa mara kwa mara ikiwa uko hatarini. Tafuta msaada wa haraka kwa dalili za sukari ya juu sana au ya chini sana (kuchanganyikiwa, kuzimia).'
    },
    complications: {
      en: ['heart disease', 'stroke', 'kidney disease', 'nerve damage (neuropathy)', 'eye damage (retinopathy)', 'foot problems'],
      fr: ['maladie cardiaque', 'AVC', 'maladie rénale', 'lésions nerveuses (neuropathie)', 'lésions oculaires (rétinopathie)', 'problèmes de pieds'],
      sw: ['ugonjwa wa moyo', 'kiharusi', 'ugonjwa wa figo', 'uharibifu wa neva (neuropathy)', 'uharibifu wa macho (retinopathy)', 'matatizo ya miguu']
    },
    diagnosis: {
      en: 'Fasting blood sugar test, A1C test, glucose tolerance test.',
      fr: 'Test de glycémie à jeun, test A1C, test de tolérance au glucose.',
      sw: 'Kipimo cha sukari ya damu wakati wa kufunga, kipimo cha A1C, kipimo cha uvumilivu wa glukosi.'
    },
    prognosis: {
      en: 'Manageable with proper treatment and lifestyle. Poorly controlled diabetes leads to serious complications.',
      fr: 'Gérable avec un traitement et un mode de vie appropriés. Un diabète mal contrôlé entraîne des complications graves.',
      sw: 'Inaweza kudhibitiwa na matibabu sahihi na mtindo wa maisha. Kisukari kisichodhibitiwa vizuri husababisha matatizo makubwa.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'chronic-kidney-disease',
    name: {
      en: 'Chronic Kidney Disease (CKD)',
      fr: 'Maladie Rénale Chronique (MRC)',
      sw: 'Ugonjwa Sugu wa Figo'
    },
    category: 'chronic',
    severity: 'high',
    symptoms: {
      en: ['fatigue', 'swelling in legs and feet', 'shortness of breath', 'nausea', 'loss of appetite', 'changes in urination', 'high blood pressure'],
      fr: ['fatigue', 'gonflement des jambes et des pieds', 'essoufflement', 'nausées', 'perte d\'appétit', 'changements dans la miction', 'hypertension artérielle'],
      sw: ['uchovu', 'uvimbe wa miguu na nyayo', 'kupumua kwa shida', 'kichefuchefu', 'kupoteza hamu ya kula', 'mabadiliko ya kukojoa', 'shinikizo la damu la juu']
    },
    commonSymptoms: {
      en: ['fatigue', 'swelling', 'high blood pressure'],
      fr: ['fatigue', 'gonflement', 'hypertension artérielle'],
      sw: ['uchovu', 'uvimbe', 'shinikizo la damu la juu']
    },
    rareSymptoms: {
      en: ['muscle cramps', 'itching', 'metallic taste in mouth', 'confusion'],
      fr: ['crampes musculaires', 'démangeaisons', 'goût métallique dans la bouche', 'confusion'],
      sw: ['mkazo wa misuli', 'muwasho', 'ladha ya metali mdomoni', 'kuchanganyikiwa']
    },
    causes: {
      en: ['diabetes', 'high blood pressure', 'glomerulonephritis', 'polycystic kidney disease', 'recurrent kidney infections'],
      fr: ['diabète', 'hypertension artérielle', 'glomérulonéphrite', 'polykystose rénale', 'infections rénales récurrentes'],
      sw: ['kisukari', 'shinikizo la damu la juu', 'glomerulonephritis', 'ugonjwa wa figo wa polycystic', 'maambukizi ya figo ya mara kwa mara']
    },
    riskFactors: {
      en: ['diabetes', 'high blood pressure', 'heart disease', 'family history', 'older age', 'smoking', 'obesity'],
      fr: ['diabète', 'hypertension artérielle', 'maladie cardiaque', 'antécédents familiaux', 'âge avancé', 'tabagisme', 'obésité'],
      sw: ['kisukari', 'shinikizo la damu la juu', 'ugonjwa wa moyo', 'historia ya familia', 'umri mkubwa', 'uvutaji sigara', 'unene kupita kiasi']
    },
    treatment: {
      en: 'Managing underlying cause, blood pressure control, diet changes, medications. Dialysis or transplant for end-stage disease.',
      fr: 'Gestion de la cause sous-jacente, contrôle de la tension artérielle, changements de régime, médicaments. Dialyse ou greffe pour la maladie en phase terminale.',
      sw: 'Kudhibiti chanzo, kudhibiti shinikizo la damu, mabadiliko ya lishe, dawa. Dialysis au upandikizaji kwa ugonjwa wa hatua ya mwisho.'
    },
    prevention: {
      en: 'Manage diabetes and blood pressure, healthy diet, regular exercise, avoid overuse of NSAIDs.',
      fr: 'Gérer le diabète et la tension artérielle, alimentation saine, exercice régulier, éviter la surconsommation d\'AINS.',
      sw: 'Dhibiti kisukari na shinikizo la damu, lishe bora, mazoezi ya mara kwa mara, epuka matumizi mabaya ya NSAIDs.'
    },
    complications: {
      en: ['end-stage renal disease (ESRD)', 'heart disease', 'anemia', 'bone disease', 'fluid retention'],
      fr: ['insuffisance rénale terminale (IRT)', 'maladie cardiaque', 'anémie', 'maladie osseuse', 'rétention d\'eau'],
      sw: ['ugonjwa wa figo wa hatua ya mwisho (ESRD)', 'ugonjwa wa moyo', 'anemia', 'ugonjwa wa mifupa', 'uhifadhi wa maji']
    },
    diagnosis: {
      en: 'Blood tests (creatinine, GFR), urine tests (albumin), kidney ultrasound or biopsy.',
      fr: 'Tests sanguins (créatinine, DFG), tests d\'urine (albumine), échographie ou biopsie rénale.',
      sw: 'Vipimo vya damu (creatinine, GFR), vipimo vya mkojo (albumin), ultrasound ya figo au biopsy.'
    },
    prognosis: {
      en: 'Progressive disease, but early treatment can slow progression and prevent complications.',
      fr: 'Maladie progressive, mais un traitement précoce peut ralentir la progression et prévenir les complications.',
      sw: 'Ugonjwa unaoendelea, lakini matibabu ya mapema yanaweza kupunguza kasi ya maendeleo na kuzuia matatizo.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'osteoarthritis',
    name: {
      en: 'Osteoarthritis',
      fr: 'Arthrose',
      sw: 'Ugonjwa wa Osteoarthritis'
    },
    category: 'chronic',
    severity: 'medium',
    symptoms: {
      en: ['joint pain', 'stiffness', 'limited range of motion', 'swelling', 'grating sensation'],
      fr: ['douleur articulaire', 'raideur', 'amplitude de mouvement limitée', 'gonflement', 'sensation de grincement'],
      sw: ['maumivu ya viungo', 'ugumu', 'uwezo mdogo wa kusonga', 'uvimbe', 'hisia ya kusaga']
    },
    commonSymptoms: {
      en: ['joint pain', 'stiffness', 'limited range of motion'],
      fr: ['douleur articulaire', 'raideur', 'amplitude de mouvement limitée'],
      sw: ['maumivu ya viungo', 'ugumu', 'uwezo mdogo wa kusonga']
    },
    rareSymptoms: {
      en: ['bone spurs', 'joint deformity', 'instability'],
      fr: ['éperons osseux', 'déformation articulaire', 'instabilité'],
      sw: ['vichocheo vya mifupa', 'ulemavu wa viungo', 'kutokuwa imara']
    },
    causes: {
      en: ['wear and tear of joint cartilage over time'],
      fr: ['usure du cartilage articulaire au fil du temps'],
      sw: ['uchakavu wa gegedu ya viungo kwa muda']
    },
    riskFactors: {
      en: ['older age', 'female gender', 'obesity', 'joint injuries', 'genetics', 'certain occupations'],
      fr: ['âge avancé', 'sexe féminin', 'obésité', 'lésions articulaires', 'génétique', 'certaines professions'],
      sw: ['umri mkubwa', 'jinsia ya kike', 'unene', 'majeraha ya viungo', 'maumbile', 'kazi fulani']
    },
    treatment: {
      en: 'Pain relievers (acetaminophen, NSAIDs), physical therapy, occupational therapy, joint injections, surgery (joint replacement).',
      fr: 'Analgésiques (acétaminophène, AINS), physiothérapie, ergothérapie, injections articulaires, chirurgie (remplacement articulaire).',
      sw: 'Dawa za maumivu (acetaminophen, NSAIDs), tiba ya mwili, tiba ya kazi, sindano za viungo, upasuaji (ubadilishaji wa viungo).'
    },
    prevention: {
      en: 'Maintain a healthy weight, control blood sugar, exercise regularly, avoid joint injuries.',
      fr: 'Maintenir un poids santé, contrôler la glycémie, faire de l\'exercice régulièrement, éviter les blessures articulaires.',
      sw: 'Dumisha uzito wenye afya, dhibiti sukari ya damu, fanya mazoezi mara kwa mara, epuka majeraha ya viungo.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for persistent joint pain or stiffness.',
      fr: 'Consultez un médecin en cas de douleur ou de raideur articulaire persistante.',
      sw: 'Muone daktari kwa maumivu ya viungo yanayoendelea au ugumu.'
    },
    complications: {
      en: ['chronic pain', 'disability', 'reduced quality of life', 'depression'],
      fr: ['douleur chronique', 'handicap', 'qualité de vie réduite', 'dépression'],
      sw: ['maumivu sugu', 'ulemavu', 'ubora duni wa maisha', 'unyogovu']
    },
    diagnosis: {
      en: 'Physical exam, X-rays, MRI, joint fluid analysis.',
      fr: 'Examen physique, radiographies, IRM, analyse du liquide articulaire.',
      sw: 'Uchunguzi wa kimwili, X-ray, MRI, uchambuzi wa maji ya viungo.'
    },
    prognosis: {
      en: 'Chronic condition that worsens over time, but treatment can manage symptoms.',
      fr: 'Condition chronique qui s\'aggrave avec le temps, mais le traitement peut gérer les symptômes.',
      sw: 'Hali sugu inayozidi kuwa mbaya kwa muda, lakini matibabu yanaweza kudhibiti dalili.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'elderly',
    gender: 'all'
  },
  {
    id: 'gout',
    name: {
      en: 'Gout',
      fr: 'Goutte',
      sw: 'Gauti'
    },
    category: 'chronic',
    severity: 'medium',
    symptoms: {
      en: ['intense joint pain (often big toe)', 'lingering discomfort', 'inflammation and redness', 'limited range of motion'],
      fr: ['douleur articulaire intense (souvent le gros orteil)', 'inconfort persistant', 'inflammation et rougeur', 'amplitude de mouvement limitée'],
      sw: ['maumivu makali ya viungo (mara nyingi kidole gumba)', 'usumbufu unaoendelea', 'uvimbe na wekundu', 'uwezo mdogo wa kusonga']
    },
    commonSymptoms: {
      en: ['intense joint pain', 'inflammation and redness'],
      fr: ['douleur articulaire intense', 'inflammation et rougeur'],
      sw: ['maumivu makali ya viungo', 'uvimbe na wekundu']
    },
    rareSymptoms: {
      en: ['tophi (lumps of urate crystals)', 'kidney stones'],
      fr: ['tophi (nodules de cristaux d\'urate)', 'calculs rénaux'],
      sw: ['tophi (uvimbe wa fuwele za urate)', 'mawe kwenye figo']
    },
    causes: {
      en: ['buildup of uric acid in the body, forming sharp crystals in a joint'],
      fr: ['accumulation d\'acide urique dans le corps, formant des cristaux pointus dans une articulation'],
      sw: ['mkusanyiko wa asidi ya mkojo mwilini, na kutengeneza fuwele kali kwenye kiungo']
    },
    riskFactors: {
      en: ['diet high in purines (red meat, seafood)', 'alcohol (especially beer)', 'obesity', 'high blood pressure', 'diabetes', 'family history'],
      fr: ['régime riche en purines (viande rouge, fruits de mer)', 'alcool (surtout la bière)', 'obésité', 'hypertension', 'diabète', 'antécédents familiaux'],
      sw: ['lishe yenye purines nyingi (nyama nyekundu, dagaa)', 'pombe (hasa bia)', 'unene', 'shinikizo la damu la juu', 'kisukari', 'historia ya familia']
    },
    treatment: {
      en: 'NSAIDs, colchicine, corticosteroids for attacks. Medications to block uric acid production (allopurinol) or improve removal (probenecid).',
      fr: 'AINS, colchicine, corticostéroïdes pour les crises. Médicaments pour bloquer la production d\'acide urique (allopurinol) ou améliorer son élimination (probénécide).',
      sw: 'NSAIDs, colchicine, corticosteroids kwa mashambulizi. Dawa za kuzuia uzalishaji wa asidi ya mkojo (allopurinol) au kuboresha uondoaji (probenecid).'
    },
    prevention: {
      en: 'Limit alcohol and purine-rich foods, drink plenty of fluids, maintain a healthy weight.',
      fr: 'Limiter l\'alcool et les aliments riches en purines, boire beaucoup de liquides, maintenir un poids santé.',
      sw: 'Punguza pombe na vyakula vyenye purines nyingi, kunywa maji mengi, dumisha uzito wenye afya.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for sudden, intense joint pain.',
      fr: 'Consultez un médecin en cas de douleur articulaire soudaine et intense.',
      sw: 'Muone daktari kwa maumivu ya ghafla, makali ya viungo.'
    },
    complications: {
      en: ['recurrent gout', 'advanced gout (tophi)', 'kidney stones'],
      fr: ['goutte récurrente', 'goutte avancée (tophi)', 'calculs rénaux'],
      sw: ['gauti ya mara kwa mara', 'gauti ya hali ya juu (tophi)', 'mawe kwenye figo']
    },
    diagnosis: {
      en: 'Joint fluid test, blood test for uric acid, X-ray, ultrasound.',
      fr: 'Analyse du liquide articulaire, test sanguin pour l\'acide urique, radiographie, échographie.',
      sw: 'Kipimo cha maji ya viungo, kipimo cha damu cha asidi ya mkojo, X-ray, ultrasound.'
    },
    prognosis: {
      en: 'Highly treatable with medication and lifestyle changes.',
      fr: 'Très traitable avec des médicaments et des changements de mode de vie.',
      sw: 'Inatibika sana na dawa na mabadiliko ya mtindo wa maisha.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'male'
  },
  {
    id: 'osteoporosis',
    name: {
      en: 'Osteoporosis',
      fr: 'Ostéoporose',
      sw: 'Osteoporosis (Mifupa Legevu)'
    },
    category: 'chronic',
    severity: 'medium',
    symptoms: {
      en: ['often no symptoms until a fracture', 'back pain', 'loss of height over time', 'stooped posture', 'bone that breaks easily'],
      fr: ['souvent aucun symptôme jusqu\'à une fracture', 'mal de dos', 'perte de taille au fil du temps', 'posture voûtée', 'os qui se casse facilement'],
      sw: ['mara nyingi hakuna dalili hadi kuvunjika', 'maumivu ya mgongo', 'kupungua urefu kwa muda', 'mkao ulioinama', 'mfupa unaovunjika kwa urahisi']
    },
    commonSymptoms: {
      en: ['back pain', 'loss of height', 'fracture from minor fall'],
      fr: ['mal de dos', 'perte de taille', 'fracture suite à une chute mineure'],
      sw: ['maumivu ya mgongo', 'kupungua urefu', 'kuvunjika kutokana na kuanguka kidogo']
    },
    rareSymptoms: {
      en: ['gum inflammation', 'weakened grip strength'],
      fr: ['inflammation des gencives', 'faiblesse de la force de préhension'],
      sw: ['uvimbe wa fizi', 'nguvu dhaifu ya kushika']
    },
    causes: {
      en: ['bone mass is lost faster than it is created', 'hormonal changes (menopause)', 'low calcium intake'],
      fr: ['la masse osseuse est perdue plus rapidement qu\'elle n\'est créée', 'changements hormonaux (ménopause)', 'faible apport en calcium'],
      sw: ['uzito wa mfupa unapotea haraka kuliko unavyotengenezwa', 'mabadiliko ya homoni (kukoma hedhi)', 'ulaji mdogo wa kalsiamu']
    },
    riskFactors: {
      en: ['female gender', 'older age', 'family history', 'small body frame', 'low calcium and vitamin D intake', 'sedentary lifestyle', 'smoking', 'excessive alcohol'],
      fr: ['sexe féminin', 'âge avancé', 'antécédents familiaux', 'petite corpulence', 'faible apport en calcium et en vitamine D', 'mode de vie sédentaire', 'tabagisme', 'alcool excessif'],
      sw: ['jinsia ya kike', 'umri mkubwa', 'historia ya familia', 'mwili mdogo', 'ulaji mdogo wa kalsiamu na vitamini D', 'mtindo wa maisha wa kukaa', 'uvutaji sigara', 'pombe nyingi']
    },
    treatment: {
      en: 'Bisphosphonates, hormone-related therapy, bone-building medications, calcium and vitamin D supplements.',
      fr: 'Bisphosphonates, thérapie hormonale, médicaments de renforcement osseux, suppléments de calcium et de vitamine D.',
      sw: 'Bisphosphonates, tiba inayohusiana na homoni, dawa za kujenga mifupa, virutubisho vya kalsiamu na vitamini D.'
    },
    prevention: {
      en: 'Adequate calcium and vitamin D, regular weight-bearing exercise, avoid smoking and excessive alcohol.',
      fr: 'Apport adéquat en calcium et en vitamine D, exercice régulier avec mise en charge, éviter le tabagisme et l\'alcool excessif.',
      sw: 'Kalsiamu na vitamini D za kutosha, mazoezi ya mara kwa mara ya kubeba uzito, epuka uvutaji sigara na pombe nyingi.'
    },
    whenToSeekHelp: {
      en: 'Talk to a doctor about osteoporosis risk, especially after menopause or if you have a fracture.',
      fr: 'Parlez à un médecin du risque d\'ostéoporose, surtout après la ménopause ou si vous avez une fracture.',
      sw: 'Zungumza na daktari kuhusu hatari ya osteoporosis, hasa baada ya kukoma hedhi au ikiwa umevunjika.'
    },
    complications: {
      en: ['bone fractures, particularly in the spine or hip', 'chronic pain', 'disability'],
      fr: ['fractures osseuses, en particulier de la colonne vertébrale ou de la hanche', 'douleur chronique', 'handicap'],
      sw: ['kuvunjika kwa mifupa, hasa kwenye uti wa mgongo au nyonga', 'maumivu sugu', 'ulemavu']
    },
    diagnosis: {
      en: 'Bone density scan (DEXA scan).',
      fr: 'Ostéodensitométrie (scan DEXA).',
      sw: 'Uchunguzi wa msongamano wa mifupa (DEXA scan).'
    },
    prognosis: {
      en: 'Manageable with treatment to prevent fractures. Cannot be cured.',
      fr: 'Gérable avec un traitement pour prévenir les fractures. Ne peut pas être guéri.',
      sw: 'Inaweza kudhibitiwa na matibabu kuzuia kuvunjika. Haiwezi kuponywa.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'medium',
    ageGroup: 'elderly',
    gender: 'female'
  },
  {
    id: 'endometriosis',
    name: {
      en: 'Endometriosis',
      fr: 'Endométriose',
      sw: 'Endometriosis'
    },
    category: 'chronic',
    severity: 'medium',
    symptoms: {
      en: ['painful periods (dysmenorrhea)', 'pain with intercourse', 'pain with bowel movements or urination', 'excessive bleeding', 'infertility', 'fatigue', 'diarrhea', 'constipation', 'bloating'],
      fr: ['règles douloureuses (dysménorrhée)', 'douleur pendant les rapports sexuels', 'douleur lors des selles ou de la miction', 'saignements excessifs', 'infertilité', 'fatigue', 'diarrhée', 'constipation', 'ballonnements'],
      sw: ['hedhi yenye maumivu (dysmenorrhea)', 'maumivu wakati wa kujamiiana', 'maumivu wakati wa haja kubwa au ndogo', 'kutokwa damu nyingi', 'utasa', 'uchovu', 'kuhara', 'choo kigumu', 'kuvimbiwa']
    },
    commonSymptoms: {
      en: ['painful periods', 'pain with intercourse', 'chronic pelvic pain'],
      fr: ['règles douloureuses', 'douleur pendant les rapports sexuels', 'douleur pelvienne chronique'],
      sw: ['hedhi yenye maumivu', 'maumivu wakati wa kujamiiana', 'maumivu sugu ya nyonga']
    },
    rareSymptoms: {
      en: ['chest pain or coughing up blood (thoracic endometriosis)', 'leg pain (sciatic endometriosis)'],
      fr: ['douleur thoracique ou crachats de sang (endométriose thoracique)', 'douleur à la jambe (endométriose sciatique)'],
      sw: ['maumivu ya kifua au kukohoa damu (endometriosis ya kifua)', 'maumivu ya mguu (endometriosis ya siatiki)']
    },
    causes: {
      en: ['unknown', 'retrograde menstruation', 'immune system disorder', 'genetic factors'],
      fr: ['inconnue', 'menstruation rétrograde', 'trouble du système immunitaire', 'facteurs génétiques'],
      sw: ['haijulikani', 'hedhi ya kurudi nyuma', 'ugonjwa wa mfumo wa kinga', 'sababu za kijeni']
    },
    riskFactors: {
      en: ['never giving birth', 'starting period at an early age', 'menopause at an older age', 'short menstrual cycles', 'family history'],
      fr: ['n\'avoir jamais accouché', 'début des règles à un jeune âge', 'ménopause à un âge avancé', 'cycles menstruels courts', 'antécédents familiaux'],
      sw: ['kutowahi kuzaa', 'kuanza hedhi katika umri mdogo', 'kukoma hedhi katika umri mkubwa', 'mizunguko mifupi ya hedhi', 'historia ya familia']
    },
    treatment: {
      en: 'Pain medication, hormone therapy (birth control pills, GnRH agonists), conservative surgery, hysterectomy.',
      fr: 'Analgésiques, hormonothérapie (pilules contraceptives, agonistes de la GnRH), chirurgie conservatrice, hystérectomie.',
      sw: 'Dawa za maumivu, tiba ya homoni (vidonge vya kuzuia mimba, agonisti za GnRH), upasuaji wa kuhifadhi, hysterectomy.'
    },
    prevention: {
      en: 'No known prevention.',
      fr: 'Pas de prévention connue.',
      sw: 'Hakuna kinga inayojulikana.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for severe menstrual pain or if you have symptoms of endometriosis.',
      fr: 'Consultez un médecin en cas de douleurs menstruelles sévères ou si vous présentez des symptômes d\'endométriose.',
      sw: 'Muone daktari kwa maumivu makali ya hedhi au ikiwa una dalili za endometriosis.'
    },
    complications: {
      en: ['infertility', 'ovarian cancer', 'chronic pain', 'adhesions and cysts'],
      fr: ['infertilité', 'cancer de l\'ovaire', 'douleur chronique', 'adhérences et kystes'],
      sw: ['utasa', 'saratani ya ovari', 'maumivu sugu', 'viambatisho na uvimbe']
    },
    diagnosis: {
      en: 'Pelvic exam, ultrasound, MRI, laparoscopy (only definitive way).',
      fr: 'Examen pelvien, échographie, IRM, laparoscopie (seul moyen définitif).',
      sw: 'Uchunguzi wa nyonga, ultrasound, MRI, laparoscopy (njia pekee ya uhakika).'
    },
    prognosis: {
      en: 'Chronic condition that can be managed with treatment. Symptoms often improve after menopause.',
      fr: 'Condition chronique qui peut être gérée avec un traitement. Les symptômes s\'améliorent souvent après la ménopause.',
      sw: 'Hali sugu inayoweza kudhibitiwa na matibabu. Dalili mara nyingi huboreka baada ya kukoma hedhi.'
    },
    source: 'who',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'female'
  }
];
