import { ComprehensiveDisease } from './types';

export const autoimmuneDiseases: ComprehensiveDisease[] = [
  {
    id: 'rheumatoid-arthritis',
    name: {
      en: 'Rheumatoid Arthritis',
      fr: 'Polyarthrite Rhumatoïde',
      sw: 'Arthritis ya Rheumatoid'
    },
    category: 'autoimmune',
    severity: 'high',
    symptoms: {
      en: ['tender, warm, swollen joints', 'joint stiffness (worse in mornings)', 'fatigue', 'fever', 'loss of appetite', 'rheumatoid nodules'],
      fr: ['articulations sensibles, chaudes, enflées', 'raideur articulaire (pire le matin)', 'fatigue', 'fièvre', 'perte d\'appétit', 'nodules rhumatoïdes'],
      sw: ['viungo laini, vya joto, vilivyovimba', 'ugumu wa viungo (mbaya zaidi asubuhi)', 'uchovu', 'homa', 'kupoteza hamu ya kula', 'vinundu vya rheumatoid']
    },
    commonSymptoms: {
      en: ['swollen joints', 'joint stiffness', 'fatigue'],
      fr: ['articulations enflées', 'raideur articulaire', 'fatigue'],
      sw: ['viungo vilivyovimba', 'ugumu wa viungo', 'uchovu']
    },
    rareSymptoms: {
      en: ['inflammation of eyes, lungs, heart, blood vessels'],
      fr: ['inflammation des yeux, des poumons, du cœur, des vaisseaux sanguins'],
      sw: ['uvimbe wa macho, mapafu, moyo, mishipa ya damu']
    },
    causes: {
      en: ['autoimmune disorder where the immune system attacks the body\'s own tissues, specifically the synovium'],
      fr: ['trouble auto-immun où le système immunitaire attaque les propres tissus du corps, en particulier la synovie'],
      sw: ['ugonjwa wa kinga ambapo mfumo wa kinga hushambulia tishu za mwili, hasa synovium']
    },
    riskFactors: {
      en: ['female gender', 'age (40-60)', 'family history', 'smoking', 'environmental exposures'],
      fr: ['sexe féminin', 'âge (40-60 ans)', 'antécédents familiaux', 'tabagisme', 'expositions environnementales'],
      sw: ['jinsia ya kike', 'umri (miaka 40-60)', 'historia ya familia', 'uvutaji sigara', 'mfichuo wa kimazingira']
    },
    treatment: {
      en: 'NSAIDs, steroids, DMARDs (disease-modifying antirheumatic drugs), biologics, physical therapy.',
      fr: 'AINS, stéroïdes, DMARD (antirhumatismaux modificateurs de la maladie), produits biologiques, physiothérapie.',
      sw: 'NSAIDs, steroids, DMARDs (dawa za kurekebisha ugonjwa wa baridi yabisi), biologics, tiba ya mwili.'
    },
    prevention: {
      en: 'No known prevention. Quitting smoking may reduce risk.',
      fr: 'Pas de prévention connue. Arrêter de fumer peut réduire le risque.',
      sw: 'Hakuna kinga inayojulikana. Kuacha kuvuta sigara kunaweza kupunguza hatari.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for persistent joint discomfort and swelling.',
      fr: 'Consultez un médecin en cas d\'inconfort et de gonflement articulaires persistants.',
      sw: 'Muone daktari kwa usumbufu na uvimbe wa viungo unaoendelea.'
    },
    complications: {
      en: ['joint damage and deformity', 'osteoporosis', 'carpal tunnel syndrome', 'heart problems', 'lung disease'],
      fr: ['lésions et déformations articulaires', 'ostéoporose', 'syndrome du canal carpien', 'problèmes cardiaques', 'maladie pulmonaire'],
      sw: ['uharibifu na ulemavu wa viungo', 'osteoporosis', 'ugonjwa wa carpal tunnel', 'matatizo ya moyo', 'ugonjwa wa mapafu']
    },
    diagnosis: {
      en: 'Blood tests (rheumatoid factor, anti-CCP), imaging (X-ray, MRI, ultrasound).',
      fr: 'Tests sanguins (facteur rhumatoïde, anti-CCP), imagerie (radiographie, IRM, échographie).',
      sw: 'Vipimo vya damu (kipengele cha rheumatoid, anti-CCP), picha (X-ray, MRI, ultrasound).'
    },
    prognosis: {
      en: 'Chronic, progressive disease. Early, aggressive treatment can slow progression and prevent joint damage.',
      fr: 'Maladie chronique et progressive. Un traitement précoce et agressif peut ralentir la progression et prévenir les lésions articulaires.',
      sw: 'Ugonjwa sugu, unaoendelea. Matibabu ya mapema na ya nguvu yanaweza kupunguza kasi ya maendeleo na kuzuia uharibifu wa viungo.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'systemic-lupus-erythematosus',
    name: {
      en: 'Systemic Lupus Erythematosus (SLE)',
      fr: 'Lupus Érythémateux Systémique (LES)',
      sw: 'Systemic Lupus Erythematosus (SLE)'
    },
    category: 'autoimmune',
    severity: 'high',
    symptoms: {
      en: ['fatigue', 'fever', 'joint pain', 'butterfly-shaped rash on face', 'skin lesions that worsen with sun exposure', 'shortness of breath', 'chest pain', 'dry eyes'],
      fr: ['fatigue', 'fièvre', 'douleur articulaire', 'éruption cutanée en forme de papillon sur le visage', 'lésions cutanées qui s\'aggravent avec l\'exposition au soleil', 'essoufflement', 'douleur thoracique', 'yeux secs'],
      sw: ['uchovu', 'homa', 'maumivu ya viungo', 'upele wa kipepeo usoni', 'vidonda vya ngozi vinavyozidi na jua', 'upungufu wa pumzi', 'maumivu ya kifua', 'macho makavu']
    },
    commonSymptoms: {
      en: ['fatigue', 'joint pain', 'butterfly rash', 'fever'],
      fr: ['fatigue', 'douleur articulaire', 'éruption en papillon', 'fièvre'],
      sw: ['uchovu', 'maumivu ya viungo', 'upele wa kipepeo', 'homa']
    },
    rareSymptoms: {
      en: ['kidney problems', 'seizures', 'psychosis', 'blood clots'],
      fr: ['problèmes rénaux', 'convulsions', 'psychose', 'caillots sanguins'],
      sw: ['matatizo ya figo', 'mshtuko', 'saikolojia', 'mabonge ya damu']
    },
    causes: {
      en: ['autoimmune disease, combination of genetics and environmental triggers'],
      fr: ['maladie auto-immune, combinaison de génétique et de déclencheurs environnementaux'],
      sw: ['ugonjwa wa kinga, mchanganyiko wa maumbile na vichocheo vya mazingira']
    },
    riskFactors: {
      en: ['female gender (age 15-45)', 'family history', 'sunlight exposure', 'infections', 'certain medications'],
      fr: ['sexe féminin (âge 15-45 ans)', 'antécédents familiaux', 'exposition au soleil', 'infections', 'certains médicaments'],
      sw: ['jinsia ya kike (umri 15-45)', 'historia ya familia', 'mfichuo wa jua', 'maambukizi', 'dawa fulani']
    },
    treatment: {
      en: 'NSAIDs, antimalarial drugs (hydroxychloroquine), corticosteroids, immunosuppressants, biologics.',
      fr: 'AINS, antipaludiques (hydroxychloroquine), corticostéroïdes, immunosuppresseurs, produits biologiques.',
      sw: 'NSAIDs, dawa za malaria (hydroxychloroquine), corticosteroids, vizuizi vya kinga, biologics.'
    },
    prevention: {
      en: 'No known prevention. Avoid triggers like sun exposure and manage stress.',
      fr: 'Pas de prévention connue. Éviter les déclencheurs comme l\'exposition au soleil et gérer le stress.',
      sw: 'Hakuna kinga inayojulikana. Epuka vichocheo kama mfichuo wa jua na dhibiti msongo.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for unexplained rash, persistent fever, and achy joints.',
      fr: 'Consultez un médecin pour une éruption cutanée inexpliquée, une fièvre persistante et des articulations douloureuses.',
      sw: 'Muone daktari kwa upele usioelezeka, homa inayoendelea, na viungo vinavyouma.'
    },
    complications: {
      en: ['kidney failure', 'heart problems', 'lung problems', 'nervous system problems', 'increased risk of cancer'],
      fr: ['insuffisance rénale', 'problèmes cardiaques', 'problèmes pulmonaires', 'problèmes du système nerveux', 'risque accru de cancer'],
      sw: ['kushindwa kwa figo', 'matatizo ya moyo', 'matatizo ya mapafu', 'matatizo ya mfumo wa neva', 'hatari kubwa ya saratani']
    },
    diagnosis: {
      en: 'Blood tests (ANA), urine tests, imaging, biopsy.',
      fr: 'Tests sanguins (AAN), tests d\'urine, imagerie, biopsie.',
      sw: 'Vipimo vya damu (ANA), vipimo vya mkojo, picha, biopsy.'
    },
    prognosis: {
      en: 'Chronic condition with flares and remissions. Most people can live a full life with treatment.',
      fr: 'Condition chronique avec des poussées et des rémissions. La plupart des gens peuvent vivre une vie pleine avec un traitement.',
      sw: 'Hali sugu na milipuko na nafuu. Watu wengi wanaweza kuishi maisha kamili na matibabu.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'celiac-disease',
    name: {
      en: 'Celiac Disease',
      fr: 'Maladie Cœliaque',
      sw: 'Ugonjwa wa Siliaki'
    },
    category: 'autoimmune',
    severity: 'medium',
    symptoms: {
      en: ['diarrhea', 'fatigue', 'weight loss', 'bloating and gas', 'abdominal pain', 'nausea and vomiting', 'constipation', 'skin rash (dermatitis herpetiformis)'],
      fr: ['diarrhée', 'fatigue', 'perte de poids', 'ballonnements et gaz', 'douleur abdominale', 'nausées et vomissements', 'constipation', 'éruption cutanée (dermatite herpétiforme)'],
      sw: ['kuhara', 'uchovu', 'kupungua uzito', 'kuvimbiwa na gesi', 'maumivu ya tumbo', 'kichefuchefu na kutapika', 'choo kigumu', 'upele wa ngozi (dermatitis herpetiformis)']
    },
    commonSymptoms: {
      en: ['diarrhea', 'fatigue', 'bloating', 'abdominal pain'],
      fr: ['diarrhée', 'fatigue', 'ballonnements', 'douleur abdominale'],
      sw: ['kuhara', 'uchovu', 'kuvimbiwa', 'maumivu ya tumbo']
    },
    rareSymptoms: {
      en: ['anemia', 'loss of bone density', 'headaches', 'mouth ulcers', 'joint pain', 'reduced spleen function'],
      fr: ['anémie', 'perte de densité osseuse', 'maux de tête', 'ulcères buccaux', 'douleurs articulaires', 'fonction réduite de la rate'],
      sw: ['anemia', 'kupungua kwa msongamano wa mifupa', 'maumivu ya kichwa', 'vidonda mdomoni', 'maumivu ya viungo', 'kupungua kwa utendaji wa wengu']
    },
    causes: {
      en: ['autoimmune reaction to eating gluten (a protein found in wheat, barley, and rye)'],
      fr: ['réaction auto-immune à la consommation de gluten (une protéine présente dans le blé, l\'orge et le seigle)'],
      sw: ['mwitikio wa kinga dhidi ya kula gluteni (protini inayopatikana katika ngano, shayiri, na rai)']
    },
    riskFactors: {
      en: ['family history', 'type 1 diabetes', 'Down syndrome or Turner syndrome', 'autoimmune thyroid disease'],
      fr: ['antécédents familiaux', 'diabète de type 1', 'syndrome de Down ou de Turner', 'maladie thyroïdienne auto-immune'],
      sw: ['historia ya familia', 'kisukari cha aina ya 1', 'ugonjwa wa Down au Turner', 'ugonjwa wa tezi wa kinga']
    },
    treatment: {
      en: 'Strict, lifelong gluten-free diet. Vitamin and mineral supplements.',
      fr: 'Régime strict sans gluten à vie. Suppléments de vitamines et de minéraux.',
      sw: 'Lishe kali isiyo na gluteni maishani. Virutubisho vya vitamini na madini.'
    },
    prevention: {
      en: 'No prevention, but a gluten-free diet prevents symptoms and complications.',
      fr: 'Pas de prévention, mais un régime sans gluten prévient les symptômes et les complications.',
      sw: 'Hakuna kinga, lakini lishe isiyo na gluteni huzuia dalili na matatizo.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if you have digestive discomfort that lasts for more than two weeks.',
      fr: 'Consultez un médecin si vous avez un inconfort digestif qui dure plus de deux semaines.',
      sw: 'Muone daktari ikiwa una usumbufu wa usagaji chakula unaodumu kwa zaidi ya wiki mbili.'
    },
    complications: {
      en: ['malnutrition', 'bone weakening', 'infertility and miscarriage', 'lactose intolerance', 'cancer', 'neurological problems'],
      fr: ['malnutrition', 'fragilisation des os', 'infertilité et fausse couche', 'intolérance au lactose', 'cancer', 'problèmes neurologiques'],
      sw: ['utapiamlo', 'kudhoofika kwa mifupa', 'utasa na kuharibika kwa mimba', 'kutovumilia lactose', 'saratani', 'matatizo ya neva']
    },
    diagnosis: {
      en: 'Blood tests for antibodies, genetic testing, endoscopy with biopsy of small intestine.',
      fr: 'Tests sanguins pour les anticorps, tests génétiques, endoscopie avec biopsie de l\'intestin grêle.',
      sw: 'Vipimo vya damu kwa kingamwili, vipimo vya kijeni, endoscopy na biopsy ya utumbo mdogo.'
    },
    prognosis: {
      en: 'Excellent with a strict gluten-free diet. Symptoms improve and intestinal damage heals.',
      fr: 'Excellent avec un régime sans gluten strict. Les symptômes s\'améliorent et les dommages intestinaux guérissent.',
      sw: 'Nzuri sana na lishe kali isiyo na gluteni. Dalili huboreka na uharibifu wa utumbo hupona.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'low',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'crohns-disease',
    name: {
      en: 'Crohn\'s Disease',
      fr: 'Maladie de Crohn',
      sw: 'Ugonjwa wa Crohn'
    },
    category: 'autoimmune',
    severity: 'high',
    symptoms: {
      en: ['diarrhea', 'abdominal pain and cramping', 'blood in stool', 'fever', 'fatigue', 'weight loss', 'mouth sores'],
      fr: ['diarrhée', 'douleur abdominale et crampes', 'sang dans les selles', 'fièvre', 'fatigue', 'perte de poids', 'aphtes buccaux'],
      sw: ['kuhara', 'maumivu ya tumbo na mkazo', 'damu kwenye kinyesi', 'homa', 'uchovu', 'kupungua uzito', 'vidonda mdomoni']
    },
    commonSymptoms: {
      en: ['diarrhea', 'abdominal pain', 'weight loss', 'fatigue'],
      fr: ['diarrhée', 'douleur abdominale', 'perte de poids', 'fatigue'],
      sw: ['kuhara', 'maumivu ya tumbo', 'kupungua uzito', 'uchovu']
    },
    rareSymptoms: {
      en: ['inflammation of skin, eyes, and joints', 'inflammation of liver or bile ducts', 'kidney stones', 'fistulas'],
      fr: ['inflammation de la peau, des yeux et des articulations', 'inflammation du foie ou des voies biliaires', 'calculs rénaux', 'fistules'],
      sw: ['uvimbe wa ngozi, macho, na viungo', 'uvimbe wa ini au mirija ya nyongo', 'mawe kwenye figo', 'fistula']
    },
    causes: {
      en: ['unknown, likely immune system malfunction and genetics'],
      fr: ['inconnue, probablement un dysfonctionnement du système immunitaire et la génétique'],
      sw: ['haijulikani, huenda ni utendakazi mbaya wa mfumo wa kinga na maumbile']
    },
    riskFactors: {
      en: ['age (usually before 30)', 'family history', 'smoking', 'use of NSAIDs'],
      fr: ['âge (généralement avant 30 ans)', 'antécédents familiaux', 'tabagisme', 'utilisation d\'AINS'],
      sw: ['umri (kawaida kabla ya miaka 30)', 'historia ya familia', 'uvutaji sigara', 'matumizi ya NSAIDs']
    },
    treatment: {
      en: 'Anti-inflammatory drugs, immune system suppressors, biologics, antibiotics, nutritional therapy, surgery.',
      fr: 'Anti-inflammatoires, immunosuppresseurs, produits biologiques, antibiotiques, thérapie nutritionnelle, chirurgie.',
      sw: 'Dawa za kuzuia uvimbe, vizuizi vya mfumo wa kinga, biologics, antibiotiki, tiba ya lishe, upasuaji.'
    },
    prevention: {
      en: 'No known prevention. Managing risk factors like smoking may help.',
      fr: 'Pas de prévention connue. La gestion des facteurs de risque comme le tabagisme peut aider.',
      sw: 'Hakuna kinga inayojulikana. Kudhibiti sababu za hatari kama uvutaji sigara kunaweza kusaidia.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for persistent changes in bowel habits or if you have signs of Crohn\'s disease.',
      fr: 'Consultez un médecin pour des changements persistants dans vos habitudes intestinales ou si vous présentez des signes de la maladie de Crohn.',
      sw: 'Muone daktari kwa mabadiliko yanayoendelea ya tabia ya haja au ikiwa una dalili za ugonjwa wa Crohn.'
    },
    complications: {
      en: ['bowel obstruction', 'ulcers', 'fistulas', 'anal fissure', 'malnutrition', 'colon cancer'],
      fr: ['occlusion intestinale', 'ulcères', 'fistules', 'fissure anale', 'malnutrition', 'cancer du côlon'],
      sw: ['kuziba kwa utumbo', 'vidonda', 'fistula', 'mpasuko wa mkundu', 'utapiamlo', 'saratani ya utumbo mpana']
    },
    diagnosis: {
      en: 'Colonoscopy, endoscopy, CT scan, MRI, blood tests, stool studies.',
      fr: 'Coloscopie, endoscopie, scanner, IRM, tests sanguins, études des selles.',
      sw: 'Colonoscopy, endoscopy, CT scan, MRI, vipimo vya damu, uchunguzi wa kinyesi.'
    },
    prognosis: {
      en: 'Chronic condition with periods of remission and relapse. No cure, but treatment can manage symptoms.',
      fr: 'Condition chronique avec des périodes de rémission et de rechute. Pas de remède, mais le traitement peut gérer les symptômes.',
      sw: 'Hali ya kudumu na vipindi vya nafuu na kurudia. Hakuna tiba, lakini matibabu yanaweza kudhibiti dalili.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'ulcerative-colitis',
    name: {
      en: 'Ulcerative Colitis',
      fr: 'Rectocolite Hémorragique',
      sw: 'Kolitis ya Vidonda'
    },
    category: 'autoimmune',
    severity: 'high',
    symptoms: {
      en: ['bloody diarrhea', 'abdominal pain', 'rectal pain', 'urgency to defecate', 'fatigue', 'weight loss', 'fever'],
      fr: ['diarrhée sanglante', 'douleur abdominale', 'douleur rectale', 'urgence de déféquer', 'fatigue', 'perte de poids', 'fièvre'],
      sw: ['kuhara damu', 'maumivu ya tumbo', 'maumivu ya rektamu', 'haraka ya haja kubwa', 'uchovu', 'kupungua uzito', 'homa']
    },
    commonSymptoms: {
      en: ['bloody diarrhea', 'abdominal pain', 'rectal pain', 'urgency'],
      fr: ['diarrhée sanglante', 'douleur abdominale', 'douleur rectale', 'urgence'],
      sw: ['kuhara damu', 'maumivu ya tumbo', 'maumivu ya rektamu', 'haraka']
    },
    rareSymptoms: {
      en: ['joint pain', 'skin lesions', 'eye inflammation', 'liver disease'],
      fr: ['douleurs articulaires', 'lésions cutanées', 'inflammation oculaire', 'maladie du foie'],
      sw: ['maumivu ya viungo', 'vidonda vya ngozi', 'uvimbe wa macho', 'ugonjwa wa ini']
    },
    causes: {
      en: ['unknown, likely immune system malfunction and genetics'],
      fr: ['inconnue, probablement un dysfonctionnement du système immunitaire et la génétique'],
      sw: ['haijulikani, huenda ni utendakazi mbaya wa mfumo wa kinga na maumbile']
    },
    riskFactors: {
      en: ['family history', 'age (usually before 30 or after 60)'],
      fr: ['antécédents familiaux', 'âge (généralement avant 30 ans ou après 60 ans)'],
      sw: ['historia ya familia', 'umri (kawaida kabla ya miaka 30 au baada ya 60)']
    },
    treatment: {
      en: 'Anti-inflammatory drugs (5-ASAs), corticosteroids, immune system suppressors, biologics, surgery (colectomy).',
      fr: 'Anti-inflammatoires (5-ASA), corticostéroïdes, immunosuppresseurs, produits biologiques, chirurgie (colectomie).',
      sw: 'Dawa za kuzuia uvimbe (5-ASAs), corticosteroids, vizuizi vya mfumo wa kinga, biologics, upasuaji (colectomy).'
    },
    prevention: {
      en: 'No known prevention.',
      fr: 'Pas de prévention connue.',
      sw: 'Hakuna kinga inayojulikana.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for persistent diarrhea, abdominal pain, or blood in your stool.',
      fr: 'Consultez un médecin en cas de diarrhée persistante, de douleurs abdominales ou de sang dans vos selles.',
      sw: 'Muone daktari kwa kuhara kunakoendelea, maumivu ya tumbo, au damu kwenye kinyesi chako.'
    },
    complications: {
      en: ['severe bleeding', 'perforated colon', 'toxic megacolon', 'increased risk of colon cancer', 'dehydration'],
      fr: ['saignement sévère', 'côlon perforé', 'mégacôlon toxique', 'risque accru de cancer du côlon', 'déshydratation'],
      sw: ['kutokwa damu sana', 'utumbo uliotoboka', 'toxic megacolon', 'hatari kubwa ya saratani ya utumbo mpana', 'upungufu wa maji mwilini']
    },
    diagnosis: {
      en: 'Colonoscopy with biopsy, flexible sigmoidoscopy, stool studies, blood tests, CT or MRI scan.',
      fr: 'Coloscopie avec biopsie, sigmoïdoscopie flexible, études des selles, tests sanguins, scanner ou IRM.',
      sw: 'Colonoscopy na biopsy, sigmoidoscopy inayobadilika, uchunguzi wa kinyesi, vipimo vya damu, CT au MRI scan.'
    },
    prognosis: {
      en: 'Chronic condition with periods of remission and relapse. Treatment can manage symptoms and induce remission.',
      fr: 'Condition chronique avec des périodes de rémission et de rechute. Le traitement peut gérer les symptômes et induire une rémission.',
      sw: 'Hali ya kudumu na vipindi vya nafuu na kurudia. Matibabu yanaweza kudhibiti dalili na kuleta nafuu.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'multiple-sclerosis',
    name: {
      en: 'Multiple Sclerosis (MS)',
      fr: 'Sclérose en Plaques (SEP)',
      sw: 'Multiple Sclerosis (MS)'
    },
    category: 'autoimmune',
    severity: 'high',
    symptoms: {
      en: ['numbness or weakness in limbs', 'vision problems (double vision, vision loss)', 'fatigue', 'dizziness', 'tingling or pain', 'electric-shock sensations', 'problems with balance and coordination', 'slurred speech'],
      fr: ['engourdissement ou faiblesse dans les membres', 'problèmes de vision (vision double, perte de vision)', 'fatigue', 'étourdissements', 'picotements ou douleur', 'sensations de choc électrique', 'problèmes d\'équilibre et de coordination', 'parole pâteuse'],
      sw: ['ganzi au udhaifu wa viungo', 'matatizo ya kuona (kuona mara mbili, kupoteza uwezo wa kuona)', 'uchovu', 'kizunguzungu', 'kuchomwa au maumivu', 'hisia za mshtuko wa umeme', 'matatizo ya usawa na uratibu', 'usemi usiokuwa wazi']
    },
    commonSymptoms: {
      en: ['numbness or weakness', 'vision problems', 'fatigue', 'dizziness'],
      fr: ['engourdissement ou faiblesse', 'problèmes de vision', 'fatigue', 'étourdissements'],
      sw: ['ganzi au udhaifu', 'matatizo ya kuona', 'uchovu', 'kizunguzungu']
    },
    rareSymptoms: {
      en: ['seizures', 'hearing loss', 'swallowing problems', 'breathing problems'],
      fr: ['convulsions', 'perte auditive', 'problèmes de déglutition', 'problèmes respiratoires'],
      sw: ['mshtuko', 'kupoteza kusikia', 'matatizo ya kumeza', 'matatizo ya kupumua']
    },
    causes: {
      en: ['autoimmune disease where the immune system attacks the protective sheath (myelin) that covers nerve fibers'],
      fr: ['maladie auto-immune où le système immunitaire attaque la gaine protectrice (myéline) qui recouvre les fibres nerveuses'],
      sw: ['ugonjwa wa kinga ambapo mfumo wa kinga hushambulia ala ya kinga (myelin) inayofunika nyuzi za neva']
    },
    riskFactors: {
      en: ['age (20-40)', 'female gender', 'family history', 'certain infections (Epstein-Barr virus)', 'living in temperate climates', 'other autoimmune diseases'],
      fr: ['âge (20-40 ans)', 'sexe féminin', 'antécédents familiaux', 'certaines infections (virus d\'Epstein-Barr)', 'vivre dans des climats tempérés', 'autres maladies auto-immunes'],
      sw: ['umri (miaka 20-40)', 'jinsia ya kike', 'historia ya familia', 'maambukizi fulani (virusi vya Epstein-Barr)', 'kuishi katika hali ya hewa ya wastani', 'magonjwa mengine ya kinga']
    },
    treatment: {
      en: 'No cure exists. Treatments focus on managing symptoms and slowing disease progression with disease-modifying therapies (DMTs), corticosteroids for relapses, and physical therapy.',
      fr: 'Aucun remède n\'existe. Les traitements visent à gérer les symptômes et à ralentir la progression de la maladie avec des thérapies modificatrices de la maladie (TMM), des corticostéroïdes pour les poussées et de la physiothérapie.',
      sw: 'Hakuna tiba. Matibabu hulenga kudhibiti dalili na kupunguza kasi ya ugonjwa na tiba za kurekebisha ugonjwa (DMTs), corticosteroids kwa kurudia, na tiba ya mwili.'
    },
    prevention: {
      en: 'No known prevention.',
      fr: 'Pas de prévention connue.',
      sw: 'Hakuna kinga inayojulikana.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for unexplained numbness, vision changes, or persistent fatigue and weakness.',
      fr: 'Consultez un médecin en cas d\'engourdissement inexpliqué, de changements de vision ou de fatigue et de faiblesse persistantes.',
      sw: 'Muone daktari kwa ganzi isiyoelezeka, mabadiliko ya kuona, au uchovu na udhaifu unaoendelea.'
    },
    complications: {
      en: ['muscle stiffness or spasms', 'paralysis', 'bladder, bowel or sexual function problems', 'epilepsy', 'depression'],
      fr: ['raideur ou spasmes musculaires', 'paralysie', 'problèmes de vessie, d\'intestin ou de fonction sexuelle', 'épilepsie', 'dépression'],
      sw: ['ugumu au mshtuko wa misuli', 'kupooza', 'matatizo ya kibofu, utumbo au kazi ya ngono', 'kifafa', 'unyogovu']
    },
    diagnosis: {
      en: 'MRI of brain and spinal cord, evoked potential studies, lumbar puncture.',
      fr: 'IRM du cerveau et de la moelle épinière, études des potentiels évoqués, ponction lombaire.',
      sw: 'MRI ya ubongo na uti wa mgongo, tafiti za uwezo ulioamshwa, kuchomwa kwa uti wa mgongo.'
    },
    prognosis: {
      en: 'Varies widely. Most people have a normal or near-normal life expectancy with management.',
      fr: 'Varie considérablement. La plupart des gens ont une espérance de vie normale ou quasi normale avec une prise en charge.',
      sw: 'Inatofautiana sana. Watu wengi wana matarajio ya maisha ya kawaida au karibu na kawaida na usimamizi.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'type-1-diabetes',
    name: {
      en: 'Type 1 Diabetes',
      fr: 'Diabète de Type 1',
      sw: 'Kisukari Aina ya 1'
    },
    category: 'autoimmune',
    severity: 'high',
    symptoms: {
      en: ['increased thirst', 'frequent urination', 'extreme hunger', 'unintended weight loss', 'fatigue and weakness', 'blurred vision', 'mood changes'],
      fr: ['soif accrue', 'mictions fréquentes', 'faim extrême', 'perte de poids involontaire', 'fatigue et faiblesse', 'vision floue', 'changements d\'humeur'],
      sw: ['kiu iliyoongezeka', 'kukojoa mara kwa mara', 'njaa kali', 'kupungua uzito bila kukusudia', 'uchovu na udhaifu', 'kuona vibaya', 'mabadiliko ya hisia']
    },
    commonSymptoms: {
      en: ['increased thirst', 'frequent urination', 'unintended weight loss', 'fatigue'],
      fr: ['soif accrue', 'mictions fréquentes', 'perte de poids involontaire', 'fatigue'],
      sw: ['kiu iliyoongezeka', 'kukojoa mara kwa mara', 'kupungua uzito bila kukusudia', 'uchovu']
    },
    rareSymptoms: {
      en: ['diabetic ketoacidosis (nausea, vomiting, abdominal pain, fruity-smelling breath)', 'bed-wetting in children'],
      fr: ['acidocétose diabétique (nausées, vomissements, douleur abdominale, haleine fruitée)', 'énurésie nocturne chez les enfants'],
      sw: ['ketoacidosis ya kisukari (kichefuchefu, kutapika, maumivu ya tumbo, pumzi yenye harufu ya matunda)', 'kukojoa kitandani kwa watoto']
    },
    causes: {
      en: ['autoimmune destruction of insulin-producing (beta) cells in the pancreas'],
      fr: ['destruction auto-immune des cellules productrices d\'insuline (bêta) dans le pancréas'],
      sw: ['uharibifu wa kinga ya mwili kwa seli zinazozalisha insulini (beta) kwenye kongosho']
    },
    riskFactors: {
      en: ['family history', 'genetics', 'geography (more common further from the equator)', 'age (often appears in childhood or adolescence)'],
      fr: ['antécédents familiaux', 'génétique', 'géographie (plus fréquent loin de l\'équateur)', 'âge (apparaît souvent dans l\'enfance ou l\'adolescence)'],
      sw: ['historia ya familia', 'maumbile', 'jiografia (kawaida zaidi mbali na ikweta)', 'umri (mara nyingi huonekana utotoni au ujana)']
    },
    treatment: {
      en: 'Lifelong insulin therapy (injections or insulin pump), regular blood sugar monitoring, carbohydrate counting, healthy diet and exercise.',
      fr: 'Insulinothérapie à vie (injections ou pompe à insuline), surveillance régulière de la glycémie, comptage des glucides, alimentation saine et exercice.',
      sw: 'Tiba ya insulini ya maisha yote (sindano au pampu ya insulini), ufuatiliaji wa mara kwa mara wa sukari ya damu, kuhesabu wanga, lishe bora na mazoezi.'
    },
    prevention: {
      en: 'No known way to prevent type 1 diabetes.',
      fr: 'Aucun moyen connu de prévenir le diabète de type 1.',
      sw: 'Hakuna njia inayojulikana ya kuzuia kisukari cha aina ya 1.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for signs of diabetic ketoacidosis (fruity breath, nausea, vomiting, severe abdominal pain).',
      fr: 'Consultez immédiatement pour des signes d\'acidocétose diabétique (haleine fruitée, nausées, vomissements, douleur abdominale sévère).',
      sw: 'Tafuta huduma ya haraka kwa dalili za ketoacidosis ya kisukari (pumzi yenye harufu ya matunda, kichefuchefu, kutapika, maumivu makali ya tumbo).'
    },
    complications: {
      en: ['heart and blood vessel disease', 'nerve damage (neuropathy)', 'kidney damage (nephropathy)', 'eye damage (retinopathy)', 'foot damage'],
      fr: ['maladies cardiaques et vasculaires', 'lésions nerveuses (neuropathie)', 'lésions rénales (néphropathie)', 'lésions oculaires (rétinopathie)', 'lésions des pieds'],
      sw: ['ugonjwa wa moyo na mishipa ya damu', 'uharibifu wa neva (neuropathy)', 'uharibifu wa figo (nephropathy)', 'uharibifu wa macho (retinopathy)', 'uharibifu wa miguu']
    },
    diagnosis: {
      en: 'Glycated hemoglobin (A1C) test, random blood sugar test, fasting blood sugar test, autoantibody tests.',
      fr: 'Test d\'hémoglobine glyquée (A1C), test de glycémie aléatoire, test de glycémie à jeun, tests d\'auto-anticorps.',
      sw: 'Kipimo cha hemoglobini ya glycated (A1C), kipimo cha sukari ya damu bila mpangilio, kipimo cha sukari ya damu wakati wa kufunga, vipimo vya kingamwili.'
    },
    prognosis: {
      en: 'Manageable with diligent care. Life expectancy is slightly reduced but improving with modern technology.',
      fr: 'Gérable avec des soins diligents. L\'espérance de vie est légèrement réduite mais s\'améliore avec la technologie moderne.',
      sw: 'Inaweza kudhibitiwa na utunzaji wa bidii. Matarajio ya maisha yamepungua kidogo lakini yanaboreshwa na teknolojia ya kisasa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'low',
    ageGroup: 'pediatric',
    gender: 'all'
  },
  {
    id: 'psoriasis',
    name: {
      en: 'Psoriasis',
      fr: 'Psoriasis',
      sw: 'Psoriasis'
    },
    category: 'autoimmune',
    severity: 'medium',
    symptoms: {
      en: ['red patches of skin with thick, silvery scales', 'dry, cracked skin that may bleed or itch', 'itching, burning or soreness', 'thickened, pitted or ridged nails', 'swollen and stiff joints'],
      fr: ['plaques de peau rouges avec des squames épaisses et argentées', 'peau sèche et craquelée qui peut saigner ou démanger', 'démangeaisons, brûlures ou douleurs', 'ongles épaissis, piqués ou striés', 'articulations enflées et raides'],
      sw: ['mabaka mekundu ya ngozi yenye magamba manene, ya fedha', 'ngozi kavu, iliyopasuka ambayo inaweza kutokwa na damu au kuwasha', 'kuwasha, kuungua au maumivu', 'kucha nene, zenye mashimo au mistari', 'viungo vilivyovimba na kuganda']
    },
    commonSymptoms: {
      en: ['red skin patches with scales', 'itching', 'dry skin'],
      fr: ['plaques de peau rouges avec squames', 'démangeaisons', 'peau sèche'],
      sw: ['mabaka mekundu ya ngozi yenye magamba', 'kuwasha', 'ngozi kavu']
    },
    rareSymptoms: {
      en: ['pustular psoriasis (pus-filled blisters)', 'erythrodermic psoriasis (widespread fiery redness)'],
      fr: ['psoriasis pustuleux (cloques remplies de pus)', 'psoriasis érythrodermique (rougeur ardente généralisée)'],
      sw: ['psoriasis ya pustular (malengelenge yaliyojaa usaha)', 'psoriasis ya erythrodermic (wekundu mkali ulioenea)']
    },
    causes: {
      en: ['autoimmune condition causing rapid skin cell growth. Triggers include infections, stress, and certain medications.'],
      fr: ['affection auto-immune provoquant une croissance rapide des cellules de la peau. Les déclencheurs incluent les infections, le stress et certains médicaments.'],
      sw: ['hali ya kinga inayosababisha ukuaji wa haraka wa seli za ngozi. Vichocheo ni pamoja na maambukizi, msongo, na dawa fulani.']
    },
    riskFactors: {
      en: ['family history', 'smoking', 'obesity', 'stress', 'infections (e.g., strep throat)'],
      fr: ['antécédents familiaux', 'tabagisme', 'obésité', 'stress', 'infections (par ex., angine streptococcique)'],
      sw: ['historia ya familia', 'uvutaji sigara', 'unene', 'msongo', 'maambukizi (k.m., koo la strep)']
    },
    treatment: {
      en: 'Topical treatments (corticosteroids, vitamin D analogues), light therapy (phototherapy), oral or injected medications (methotrexate, biologics).',
      fr: 'Traitements topiques (corticostéroïdes, analogues de la vitamine D), luminothérapie (photothérapie), médicaments oraux ou injectés (méthotrexate, produits biologiques).',
      sw: 'Matibabu ya kupaka (corticosteroids, analogi za vitamini D), tiba ya mwanga (phototherapy), dawa za kumeza au sindano (methotrexate, biologics).'
    },
    prevention: {
      en: 'No prevention. Managing triggers can help reduce flare-ups.',
      fr: 'Pas de prévention. La gestion des déclencheurs peut aider à réduire les poussées.',
      sw: 'Hakuna kinga. Kudhibiti vichocheo kunaweza kusaidia kupunguza milipuko.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if psoriasis is widespread, causes significant discomfort, or is associated with joint pain.',
      fr: 'Consultez un médecin si le psoriasis est étendu, provoque un inconfort important ou est associé à des douleurs articulaires.',
      sw: 'Muone daktari ikiwa psoriasis imeenea, inasababisha usumbufu mkubwa, au inahusishwa na maumivu ya viungo.'
    },
    complications: {
      en: ['psoriatic arthritis', 'eye conditions', 'obesity', 'type 2 diabetes', 'cardiovascular disease', 'mental health issues'],
      fr: ['arthrite psoriasique', 'affections oculaires', 'obésité', 'diabète de type 2', 'maladie cardiovasculaire', 'problèmes de santé mentale'],
      sw: ['arthritis ya psoriatic', 'hali za macho', 'unene', 'kisukari cha aina ya 2', 'ugonjwa wa moyo na mishipa', 'masuala ya afya ya akili']
    },
    diagnosis: {
      en: 'Physical examination of skin, nails, and scalp. Skin biopsy may be performed.',
      fr: 'Examen physique de la peau, des ongles et du cuir chevelu. Une biopsie cutanée peut être effectuée.',
      sw: 'Uchunguzi wa kimwili wa ngozi, kucha, na ngozi ya kichwa. Biopsy ya ngozi inaweza kufanywa.'
    },
    prognosis: {
      en: 'Chronic disease with periods of remission and flares. Treatable but not curable.',
      fr: 'Maladie chronique avec des périodes de rémission et de poussées. Traitable mais non guérissable.',
      sw: 'Ugonjwa sugu na vipindi vya nafuu na milipuko. Unatibika lakini hauponywi.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'hashimotos-thyroiditis',
    name: {
      en: 'Hashimoto\'s Thyroiditis',
      fr: 'Thyroïdite de Hashimoto',
      sw: 'Ugonjwa wa Hashimoto'
    },
    category: 'autoimmune',
    severity: 'medium',
    symptoms: {
      en: ['fatigue', 'weight gain', 'cold intolerance', 'dry skin', 'constipation', 'puffy face', 'hoarseness', 'goiter (enlarged thyroid)'],
      fr: ['fatigue', 'prise de poids', 'intolérance au froid', 'peau sèche', 'constipation', 'visage bouffi', 'enrouement', 'goitre (thyroïde hypertrophiée)'],
      sw: ['uchovu', 'kuongezeka uzito', 'kutovumilia baridi', 'ngozi kavu', 'choo kigumu', 'uso uliovimba', 'sauti ya chini', 'goita (tezi iliyopanuka)']
    },
    commonSymptoms: {
      en: ['fatigue', 'weight gain', 'goiter'],
      fr: ['fatigue', 'prise de poids', 'goitre'],
      sw: ['uchovu', 'kuongezeka uzito', 'goita']
    },
    rareSymptoms: {
      en: ['myxedema coma (severe hypothyroidism)', 'depression', 'slowed heart rate'],
      fr: ['coma myxœdémateux (hypothyroïdie sévère)', 'dépression', 'rythme cardiaque ralenti'],
      sw: ['koma ya myxedema (hypothyroidism kali)', 'unyogovu', 'mapigo ya moyo ya polepole']
    },
    causes: {
      en: ['autoimmune disorder where the immune system creates antibodies that attack the thyroid gland'],
      fr: ['trouble auto-immun où le système immunitaire crée des anticorps qui attaquent la glande thyroïde'],
      sw: ['ugonjwa wa kinga ambapo mfumo wa kinga huunda kingamwili zinazoshambulia tezi']
    },
    riskFactors: {
      en: ['female gender', 'middle age', 'family history of thyroid or autoimmune diseases', 'excessive iodine intake'],
      fr: ['sexe féminin', 'âge mûr', 'antécédents familiaux de maladies thyroïdiennes ou auto-immunes', 'apport excessif en iode'],
      sw: ['jinsia ya kike', 'umri wa kati', 'historia ya familia ya magonjwa ya tezi au kinga', 'ulaji mwingi wa iodini']
    },
    treatment: {
      en: 'Thyroid hormone replacement therapy with levothyroxine.',
      fr: 'Thérapie de remplacement de l\'hormone thyroïdienne avec de la lévothyroxine.',
      sw: 'Tiba ya uingizwaji wa homoni ya tezi na levothyroxine.'
    },
    prevention: {
      en: 'No known prevention.',
      fr: 'Pas de prévention connue.',
      sw: 'Hakuna kinga inayojulikana.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for persistent fatigue, unexplained weight gain, or a noticeable swelling at the base of your neck.',
      fr: 'Consultez un médecin en cas de fatigue persistante, de prise de poids inexpliquée ou de gonflement notable à la base de votre cou.',
      sw: 'Muone daktari kwa uchovu unaoendelea, kuongezeka uzito bila sababu, au uvimbe unaoonekana chini ya shingo yako.'
    },
    complications: {
      en: ['goiter', 'heart problems', 'mental health issues', 'myxedema coma', 'birth defects in babies of untreated mothers'],
      fr: ['goitre', 'problèmes cardiaques', 'problèmes de santé mentale', 'coma myxœdémateux', 'malformations congénitales chez les bébés de mères non traitées'],
      sw: ['goita', 'matatizo ya moyo', 'masuala ya afya ya akili', 'koma ya myxedema', 'kasoro za kuzaliwa kwa watoto wa mama wasiotibiwa']
    },
    diagnosis: {
      en: 'Blood tests for TSH, T4, and thyroid antibodies (TPO antibodies).',
      fr: 'Tests sanguins pour la TSH, la T4 et les anticorps thyroïdiens (anticorps anti-TPO).',
      sw: 'Vipimo vya damu kwa TSH, T4, na kingamwili za tezi (kingamwili za TPO).'
    },
    prognosis: {
      en: 'Excellent with lifelong hormone replacement therapy.',
      fr: 'Excellent avec une thérapie de remplacement hormonal à vie.',
      sw: 'Nzuri sana na tiba ya uingizwaji wa homoni maishani.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'graves-disease',
    name: {
      en: 'Graves\' Disease',
      fr: 'Maladie de Basedow',
      sw: 'Ugonjwa wa Graves'
    },
    category: 'autoimmune',
    severity: 'medium',
    symptoms: {
      en: ['anxiety and irritability', 'tremor of hands or fingers', 'heat sensitivity', 'weight loss', 'rapid or irregular heartbeat (palpitations)', 'goiter', 'bulging eyes (Graves\' ophthalmopathy)'],
      fr: ['anxiété et irritabilité', 'tremblement des mains ou des doigts', 'sensibilité à la chaleur', 'perte de poids', 'rythme cardiaque rapide ou irrégulier (palpitations)', 'goitre', 'yeux exorbités (ophtalmopathie de Basedow)'],
      sw: ['wasiwasi na kuwashwa', 'mtetemeko wa mikono au vidole', 'unyeti wa joto', 'kupungua uzito', 'mapigo ya moyo ya haraka au yasiyo ya kawaida (palpitations)', 'goita', 'macho yanayotokeza (Graves\' ophthalmopathy)']
    },
    commonSymptoms: {
      en: ['anxiety', 'weight loss', 'rapid heartbeat', 'bulging eyes'],
      fr: ['anxiété', 'perte de poids', 'rythme cardiaque rapide', 'yeux exorbités'],
      sw: ['wasiwasi', 'kupungua uzito', 'mapigo ya moyo ya haraka', 'macho yanayotokeza']
    },
    rareSymptoms: {
      en: ['thick, red skin on shins (Graves\' dermopathy)', 'thyroid storm (life-threatening hyperthyroidism)'],
      fr: ['peau épaisse et rouge sur les tibias (dermopathie de Basedow)', 'crise thyréotoxique (hyperthyroïdie potentiellement mortelle)'],
      sw: ['ngozi nene, nyekundu kwenye miguu (Graves\' dermopathy)', 'dhoruba ya tezi (hyperthyroidism hatari kwa maisha)']
    },
    causes: {
      en: ['autoimmune disorder where the immune system produces antibodies that mimic TSH, causing the thyroid to overproduce hormones'],
      fr: ['trouble auto-immun où le système immunitaire produit des anticorps qui imitent la TSH, amenant la thyroïde à surproduire des hormones'],
      sw: ['ugonjwa wa kinga ambapo mfumo wa kinga hutoa kingamwili zinazoiga TSH, na kusababisha tezi kutoa homoni nyingi']
    },
    riskFactors: {
      en: ['family history', 'female gender', 'age under 40', 'other autoimmune disorders', 'stress', 'pregnancy', 'smoking'],
      fr: ['antécédents familiaux', 'sexe féminin', 'âge inférieur à 40 ans', 'autres troubles auto-immuns', 'stress', 'grossesse', 'tabagisme'],
      sw: ['historia ya familia', 'jinsia ya kike', 'umri chini ya miaka 40', 'magonjwa mengine ya kinga', 'msongo', 'ujauzito', 'uvutaji sigara']
    },
    treatment: {
      en: 'Radioactive iodine therapy, anti-thyroid medications, beta-blockers, or surgery to remove the thyroid.',
      fr: 'Thérapie à l\'iode radioactif, médicaments antithyroïdiens, bêta-bloquants ou chirurgie pour enlever la thyroïde.',
      sw: 'Tiba ya iodini ya mionzi, dawa za kuzuia tezi, beta-blockers, au upasuaji wa kuondoa tezi.'
    },
    prevention: {
      en: 'No known prevention.',
      fr: 'Pas de prévention connue.',
      sw: 'Hakuna kinga inayojulikana.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for unexplained weight loss, rapid heartbeat, or vision changes. Seek emergency care for signs of thyroid storm (high fever, agitation, delirium).',
      fr: 'Consultez un médecin en cas de perte de poids inexpliquée, de rythme cardiaque rapide ou de changements de vision. Consultez les urgences pour des signes de crise thyréotoxique (fièvre élevée, agitation, délire).',
      sw: 'Muone daktari kwa kupungua uzito bila sababu, mapigo ya moyo ya haraka, au mabadiliko ya kuona. Tafuta huduma ya dharura kwa dalili za dhoruba ya tezi (homa kali, msukosuko, wazimu).'
    },
    complications: {
      en: ['pregnancy complications', 'heart disorders', 'thyroid storm', 'brittle bones', 'eye problems'],
      fr: ['complications de la grossesse', 'troubles cardiaques', 'crise thyréotoxique', 'os fragiles', 'problèmes oculaires'],
      sw: ['matatizo ya ujauzito', 'magonjwa ya moyo', 'dhoruba ya tezi', 'mifupa dhaifu', 'matatizo ya macho']
    },
    diagnosis: {
      en: 'Blood tests (TSH, T3, T4, TRAb), radioactive iodine uptake test, ultrasound.',
      fr: 'Tests sanguins (TSH, T3, T4, TRAb), test de captation de l\'iode radioactif, échographie.',
      sw: 'Vipimo vya damu (TSH, T3, T4, TRAb), kipimo cha upokeaji wa iodini ya mionzi, ultrasound.'
    },
    prognosis: {
      en: 'Treatable, but may require lifelong management, especially if the thyroid is removed or destroyed.',
      fr: 'Traitable, mais peut nécessiter une gestion à vie, surtout si la thyroïde est enlevée ou détruite.',
      sw: 'Inatibika, lakini inaweza kuhitaji usimamizi wa maisha yote, hasa ikiwa tezi imeondolewa au kuharibiwa.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'low',
    ageGroup: 'adult',
    gender: 'female'
  }
];
