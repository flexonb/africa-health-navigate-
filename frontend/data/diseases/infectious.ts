import { ComprehensiveDisease } from './types';

export const infectiousDiseases: ComprehensiveDisease[] = [
  {
    id: 'malaria',
    name: {
      en: 'Malaria',
      fr: 'Paludisme',
      sw: 'Malaria'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['fever', 'chills', 'headache', 'nausea', 'vomiting', 'muscle pain', 'fatigue', 'sweating', 'abdominal pain', 'diarrhea'],
      fr: ['fièvre', 'frissons', 'mal de tête', 'nausée', 'vomissement', 'douleur musculaire', 'fatigue', 'transpiration', 'douleur abdominale', 'diarrhée'],
      sw: ['homa', 'baridi', 'maumivu ya kichwa', 'kichefuchefu', 'kutapika', 'maumivu ya misuli', 'uchovu', 'jasho', 'maumivu ya tumbo', 'kuhara']
    },
    commonSymptoms: {
      en: ['fever', 'chills', 'headache', 'muscle pain', 'fatigue'],
      fr: ['fièvre', 'frissons', 'mal de tête', 'douleur musculaire', 'fatigue'],
      sw: ['homa', 'baridi', 'maumivu ya kichwa', 'maumivu ya misuli', 'uchovu']
    },
    rareSymptoms: {
      en: ['seizures', 'confusion', 'difficulty breathing', 'yellow skin', 'dark urine', 'bleeding'],
      fr: ['convulsions', 'confusion', 'difficulté à respirer', 'peau jaune', 'urine foncée', 'saignement'],
      sw: ['mshtuko', 'kuchanganyikiwa', 'shida ya kupumua', 'ngozi ya manjano', 'mkojo wa giza', 'kutokwa damu']
    },
    causes: {
      en: ['plasmodium parasites', 'anopheles mosquito bites', 'contaminated blood transfusion', 'shared needles'],
      fr: ['parasites plasmodium', 'piqûres de moustiques anophèles', 'transfusion sanguine contaminée', 'aiguilles partagées'],
      sw: ['vimelea vya plasmodium', 'kuumwa na mbu wa anopheles', 'kuhamishiwa damu iliyochafuliwa', 'kushiriki sindano']
    },
    riskFactors: {
      en: ['living in endemic areas', 'travel to malaria zones', 'pregnancy', 'young children', 'immunocompromised', 'lack of bed nets'],
      fr: ['vivre dans des zones endémiques', 'voyage vers des zones de paludisme', 'grossesse', 'jeunes enfants', 'immunodéprimé', 'manque de moustiquaires'],
      sw: ['kuishi katika maeneo ya maambukizi', 'kusafiri kwenye maeneo ya malaria', 'ujauzito', 'watoto wadogo', 'upungufu wa kinga', 'ukosefu wa chandarua']
    },
    treatment: {
      en: 'Antimalarial medications (artemisinin-based combination therapy), supportive care, hospitalization for severe cases. Treatment depends on parasite species and severity.',
      fr: 'Médicaments antipaludiques (thérapie combinée à base d\'artémisinine), soins de soutien, hospitalisation pour les cas graves. Le traitement dépend de l\'espèce de parasite et de la gravité.',
      sw: 'Dawa za malaria (matibabu ya mchanganyiko wa artemisinin), huduma za msaada, kulazwa hospitalini kwa hali mbaya. Matibabu yanategemea aina ya vimelea na ukali.'
    },
    prevention: {
      en: 'Use insecticide-treated bed nets, indoor spraying, antimalarial drugs for travelers, eliminate standing water, wear protective clothing, use repellents.',
      fr: 'Utilisez des moustiquaires imprégnées d\'insecticide, pulvérisation intérieure, médicaments antipaludiques pour les voyageurs, éliminez l\'eau stagnante, portez des vêtements de protection, utilisez des répulsifs.',
      sw: 'Tumia chandarua zilizotiwa dawa za wadudu, kunyunyiza ndani ya nyumba, dawa za malaria kwa wasafiri, ondoa maji yaliyosimama, vaa nguo za kujikinga, tumia dawa za kuzuia wadudu.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate medical help if fever persists for more than 24 hours, especially with severe headache, vomiting, confusion, or difficulty breathing.',
      fr: 'Consultez immédiatement un médecin si la fièvre persiste plus de 24 heures, surtout avec des maux de tête sévères, des vomissements, de la confusion ou des difficultés respiratoires.',
      sw: 'Tafuta msaada wa matibabu mara moja ikiwa homa inaendelea kwa zaidi ya masaa 24, hasa na maumivu makali ya kichwa, kutapika, kuchanganyikiwa, au shida ya kupumua.'
    },
    complications: {
      en: ['cerebral malaria', 'severe anemia', 'respiratory distress', 'kidney failure', 'hypoglycemia', 'acidosis', 'coma', 'death'],
      fr: ['paludisme cérébral', 'anémie sévère', 'détresse respiratoire', 'insuffisance rénale', 'hypoglycémie', 'acidose', 'coma', 'décès'],
      sw: ['malaria ya ubongo', 'upungufu mkuu wa damu', 'shida ya kupumua', 'kushindwa kwa figo', 'upungufu wa sukari', 'asidi', 'usingizi mzito', 'kifo']
    },
    diagnosis: {
      en: 'Blood tests (microscopy, rapid diagnostic tests, PCR), clinical examination, travel history assessment.',
      fr: 'Tests sanguins (microscopie, tests de diagnostic rapide, PCR), examen clinique, évaluation de l\'historique de voyage.',
      sw: 'Vipimo vya damu (darubini, vipimo vya haraka vya utambuzi, PCR), uchunguzi wa kimatibabu, tathmini ya historia ya kusafiri.'
    },
    prognosis: {
      en: 'Good with early diagnosis and appropriate treatment. Severe malaria can be fatal without prompt treatment.',
      fr: 'Bon avec un diagnostic précoce et un traitement approprié. Le paludisme sévère peut être mortel sans traitement rapide.',
      sw: 'Nzuri na utambuzi wa mapema na matibabu sahihi. Malaria kali inaweza kuua bila matibabu ya haraka.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'tuberculosis',
    name: {
      en: 'Tuberculosis (TB)',
      fr: 'Tuberculose',
      sw: 'Kifua Kikuu'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['persistent cough', 'coughing blood', 'chest pain', 'weight loss', 'night sweats', 'fever', 'fatigue', 'loss of appetite', 'shortness of breath'],
      fr: ['toux persistante', 'toux avec sang', 'douleur thoracique', 'perte de poids', 'sueurs nocturnes', 'fièvre', 'fatigue', 'perte d\'appétit', 'essoufflement'],
      sw: ['kikohozi kisichokwisha', 'kikohozi na damu', 'maumivu ya kifua', 'kupungua uzito', 'jasho la usiku', 'homa', 'uchovu', 'kupoteza hamu ya chakula', 'kupumua kwa shida']
    },
    commonSymptoms: {
      en: ['persistent cough', 'weight loss', 'night sweats', 'fatigue', 'fever'],
      fr: ['toux persistante', 'perte de poids', 'sueurs nocturnes', 'fatigue', 'fièvre'],
      sw: ['kikohozi kisichokwisha', 'kupungua uzito', 'jasho la usiku', 'uchovu', 'homa']
    },
    rareSymptoms: {
      en: ['bone pain', 'confusion', 'abdominal pain', 'back pain', 'swollen lymph nodes', 'skin lesions'],
      fr: ['douleur osseuse', 'confusion', 'douleur abdominale', 'mal de dos', 'ganglions lymphatiques enflés', 'lésions cutanées'],
      sw: ['maumivu ya mifupa', 'kuchanganyikiwa', 'maumivu ya tumbo', 'maumivu ya mgongo', 'uvimbe wa tezi', 'vidonda vya ngozi']
    },
    causes: {
      en: ['mycobacterium tuberculosis', 'airborne transmission', 'close contact with infected person', 'weakened immune system'],
      fr: ['mycobacterium tuberculosis', 'transmission aérienne', 'contact étroit avec une personne infectée', 'système immunitaire affaibli'],
      sw: ['bakteria ya mycobacterium tuberculosis', 'maambukizi ya anga', 'mawasiliano ya karibu na mtu aliyeambukizwa', 'mfumo wa kinga uliodhoofika']
    },
    riskFactors: {
      en: ['HIV infection', 'malnutrition', 'diabetes', 'smoking', 'overcrowded living conditions', 'poverty', 'alcohol abuse'],
      fr: ['infection VIH', 'malnutrition', 'diabète', 'tabagisme', 'conditions de vie surpeuplées', 'pauvreté', 'abus d\'alcool'],
      sw: ['maambukizi ya VVU', 'utapiamlo', 'kisukari', 'sigara', 'mazingira ya msongamano', 'umaskini', 'matumizi mabaya ya pombe']
    },
    treatment: {
      en: 'Long-term antibiotic therapy (6-9 months), directly observed treatment (DOTS), combination therapy with multiple drugs.',
      fr: 'Thérapie antibiotique à long terme (6-9 mois), traitement sous observation directe (DOTS), thérapie combinée avec plusieurs médicaments.',
      sw: 'Matibabu ya antibiotiki ya muda mrefu (miezi 6-9), matibabu wa ufuatiliaji wa moja kwa moja (DOTS), matibabu ya mchanganyiko wa dawa nyingi.'
    },
    prevention: {
      en: 'BCG vaccination, good ventilation, infection control measures, early detection and treatment, avoid crowded spaces, improve nutrition.',
      fr: 'Vaccination BCG, bonne ventilation, mesures de contrôle des infections, détection et traitement précoces, éviter les espaces bondés, améliorer la nutrition.',
      sw: 'Chanjo ya BCG, uingizaji hewa mzuri, hatua za kudhibiti maambukizi, kutambua na kutibu mapema, epuka maeneo yenye msongamano, boresha lishe.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if you have a cough lasting more than 3 weeks, especially with blood, weight loss, night sweats, or fever.',
      fr: 'Consultez un médecin si vous avez une toux qui dure plus de 3 semaines, surtout avec du sang, une perte de poids, des sueurs nocturnes ou de la fièvre.',
      sw: 'Ona daktari ikiwa una kikohozi kinachoendelea kwa zaidi ya wiki 3, hasa na damu, kupungua uzito, jasho la usiku, au homa.'
    },
    complications: {
      en: ['lung damage', 'spinal tuberculosis', 'meningitis', 'kidney tuberculosis', 'drug resistance', 'respiratory failure'],
      fr: ['dommages pulmonaires', 'tuberculose spinale', 'méningite', 'tuberculose rénale', 'résistance aux médicaments', 'insuffisance respiratoire'],
      sw: ['uharibifu wa mapafu', 'kifua kikuu cha uti wa mgongo', 'meningitis', 'kifua kikuu cha figo', 'upinzani wa dawa', 'kushindwa kwa kupumua']
    },
    diagnosis: {
      en: 'Chest X-ray, sputum tests, tuberculin skin test, interferon-gamma release assays, CT scan.',
      fr: 'Radiographie thoracique, tests d\'expectoration, test cutané à la tuberculine, tests de libération d\'interféron-gamma, scanner.',
      sw: 'X-ray ya kifua, vipimo vya makohozi, kipimo cha ngozi cha tuberculin, vipimo vya kutolewa kwa interferon-gamma, CT scan.'
    },
    prognosis: {
      en: 'Excellent with proper treatment completion. Drug-resistant TB requires longer treatment and has worse outcomes.',
      fr: 'Excellent avec l\'achèvement du traitement approprié. La TB résistante aux médicaments nécessite un traitement plus long et a de moins bons résultats.',
      sw: 'Bora sana na kukamilisha matibabu sahihi. Kifua kikuu kinachopinga dawa kinahitaji matibabu ya muda mrefu na matokeo mabaya zaidi.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'covid-19',
    name: {
      en: 'COVID-19',
      fr: 'COVID-19',
      sw: 'COVID-19'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['fever', 'cough', 'shortness of breath', 'fatigue', 'body aches', 'headache', 'loss of taste', 'loss of smell', 'sore throat', 'congestion'],
      fr: ['fièvre', 'toux', 'essoufflement', 'fatigue', 'courbatures', 'mal de tête', 'perte de goût', 'perte d\'odorat', 'mal de gorge', 'congestion'],
      sw: ['homa', 'kikohozi', 'kupumua kwa shida', 'uchovu', 'maumivu ya mwili', 'maumivu ya kichwa', 'kupoteza ladha', 'kupoteza harufu', 'maumivu ya koo', 'kizuizi']
    },
    commonSymptoms: {
      en: ['fever', 'cough', 'fatigue', 'body aches', 'headache'],
      fr: ['fièvre', 'toux', 'fatigue', 'courbatures', 'mal de tête'],
      sw: ['homa', 'kikohozi', 'uchovu', 'maumivu ya mwili', 'maumivu ya kichwa']
    },
    rareSymptoms: {
      en: ['blood clots', 'heart problems', 'kidney damage', 'neurological symptoms', 'skin rash', 'digestive issues'],
      fr: ['caillots sanguins', 'problèmes cardiaques', 'dommages rénaux', 'symptômes neurologiques', 'éruption cutanée', 'problèmes digestifs'],
      sw: ['maganda ya damu', 'matatizo ya moyo', 'uharibifu wa figo', 'dalili za neva', 'upele wa ngozi', 'matatizo ya tumbo']
    },
    causes: {
      en: ['SARS-CoV-2 virus', 'respiratory droplets', 'airborne transmission', 'contaminated surfaces'],
      fr: ['virus SARS-CoV-2', 'gouttelettes respiratoires', 'transmission aérienne', 'surfaces contaminées'],
      sw: ['virusi ya SARS-CoV-2', 'matone ya kupumua', 'maambukizi ya anga', 'vinyago vilivyochafuliwa']
    },
    riskFactors: {
      en: ['older age', 'chronic diseases', 'immunocompromised', 'obesity', 'diabetes', 'heart disease', 'lung disease'],
      fr: ['âge avancé', 'maladies chroniques', 'immunodéprimé', 'obésité', 'diabète', 'maladie cardiaque', 'maladie pulmonaire'],
      sw: ['umri mkubwa', 'magonjwa ya kudumu', 'upungufu wa kinga', 'unene kupita kiasi', 'kisukari', 'ugonjwa wa moyo', 'ugonjwa wa mapafu']
    },
    treatment: {
      en: 'Supportive care, antiviral medications for severe cases, oxygen therapy, corticosteroids, monoclonal antibodies.',
      fr: 'Soins de soutien, médicaments antiviraux pour les cas graves, oxygénothérapie, corticostéroïdes, anticorps monoclonaux.',
      sw: 'Huduma za msaada, dawa za virusi kwa hali mbaya, matibabu ya oksijeni, corticosteroids, kingamwili wa monoclonal.'
    },
    prevention: {
      en: 'Vaccination, wear masks, social distancing, hand hygiene, avoid crowded spaces, improve ventilation.',
      fr: 'Vaccination, porter des masques, distanciation sociale, hygiène des mains, éviter les espaces bondés, améliorer la ventilation.',
      sw: 'Chanjo, vaa barakoa, umbali wa kijamii, usafi wa mikono, epuka maeneo yenye msongamano, boresha uingizaji hewa.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for difficulty breathing, persistent chest pain, confusion, inability to wake up, or bluish lips.',
      fr: 'Consultez immédiatement pour des difficultés respiratoires, des douleurs thoraciques persistantes, de la confusion, l\'incapacité de se réveiller ou des lèvres bleuâtres.',
      sw: 'Tafuta matibabu ya haraka kwa shida ya kupumua, maumivu ya kifua yanayoendelea, kuchanganyikiwa, kutoweza kuamka, au midomo ya buluu.'
    },
    complications: {
      en: ['pneumonia', 'ARDS', 'heart problems', 'blood clots', 'kidney failure', 'long COVID', 'death'],
      fr: ['pneumonie', 'SDRA', 'problèmes cardiaques', 'caillots sanguins', 'insuffisance rénale', 'COVID long', 'décès'],
      sw: ['nimonia', 'ARDS', 'matatizo ya moyo', 'maganda ya damu', 'kushindwa kwa figo', 'COVID ya muda mrefu', 'kifo']
    },
    diagnosis: {
      en: 'PCR test, rapid antigen test, chest imaging, blood tests, clinical assessment.',
      fr: 'Test PCR, test antigénique rapide, imagerie thoracique, tests sanguins, évaluation clinique.',
      sw: 'Kipimo cha PCR, kipimo cha haraka cha antigen, picha za kifua, vipimo vya damu, tathmini ya kimatibabu.'
    },
    prognosis: {
      en: 'Most people recover completely. Severe cases may have long-term complications. Vaccination reduces severity.',
      fr: 'La plupart des gens se rétablissent complètement. Les cas graves peuvent avoir des complications à long terme. La vaccination réduit la gravité.',
      sw: 'Watu wengi wanapona kabisa. Hali mbaya zinaweza kuwa na matatizo ya muda mrefu. Chanjo inapunguza ukali.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'cholera',
    name: {
      en: 'Cholera',
      fr: 'Choléra',
      sw: 'Kipindupindu'
    },
    category: 'infectious',
    severity: 'emergency',
    symptoms: {
      en: ['severe diarrhea', 'vomiting', 'dehydration', 'muscle cramps', 'rapid heart rate', 'low blood pressure', 'thirst', 'dry mouth'],
      fr: ['diarrhée sévère', 'vomissement', 'déshydratation', 'crampes musculaires', 'rythme cardiaque rapide', 'tension artérielle basse', 'soif', 'bouche sèche'],
      sw: ['kuhara kwingi', 'kutapika', 'upungufu wa maji mwilini', 'mshtuko wa misuli', 'mapigo ya moyo ya haraka', 'shinikizo la damu la chini', 'kiu', 'mdomo mkavu']
    },
    commonSymptoms: {
      en: ['severe diarrhea', 'vomiting', 'dehydration', 'muscle cramps'],
      fr: ['diarrhée sévère', 'vomissement', 'déshydratation', 'crampes musculaires'],
      sw: ['kuhara kwingi', 'kutapika', 'upungufu wa maji mwilini', 'mshtuko wa misuli']
    },
    rareSymptoms: {
      en: ['shock', 'kidney failure', 'coma', 'seizures', 'low blood sugar'],
      fr: ['choc', 'insuffisance rénale', 'coma', 'convulsions', 'hypoglycémie'],
      sw: ['mshtuko', 'kushindwa kwa figo', 'usingizi mzito', 'mshtuko', 'upungufu wa sukari']
    },
    causes: {
      en: ['vibrio cholerae bacteria', 'contaminated water', 'poor sanitation', 'contaminated food', 'poor hygiene'],
      fr: ['bactérie vibrio cholerae', 'eau contaminée', 'mauvais assainissement', 'nourriture contaminée', 'mauvaise hygiène'],
      sw: ['bakteria ya vibrio cholerae', 'maji yaliyochafuliwa', 'usafi mbaya wa mazingira', 'chakula kilichochafuliwa', 'usafi mbaya']
    },
    riskFactors: {
      en: ['poor sanitation', 'contaminated water sources', 'crowded conditions', 'travel to endemic areas', 'poor hygiene'],
      fr: ['mauvais assainissement', 'sources d\'eau contaminées', 'conditions surpeuplées', 'voyage vers des zones endémiques', 'mauvaise hygiène'],
      sw: ['usafi mbaya wa mazingira', 'vyanzo vya maji vilivyochafuliwa', 'mazingira ya msongamano', 'kusafiri kwenye maeneo ya maambukizi', 'usafi mbaya']
    },
    treatment: {
      en: 'Immediate oral rehydration therapy (ORS), IV fluids in severe cases, antibiotics if needed, zinc supplements.',
      fr: 'Thérapie de réhydratation orale immédiate (SRO), liquides IV dans les cas graves, antibiotiques si nécessaire, suppléments de zinc.',
      sw: 'Matibabu ya haraka ya kurudisha maji kwa mdomo (ORS), maji ya mishipa katika hali mbaya, antibiotiki ikiwa inahitajika, viongezeo vya zinki.'
    },
    prevention: {
      en: 'Safe water, proper sanitation, good food hygiene, vaccination in high-risk areas, wash hands frequently.',
      fr: 'Eau sûre, assainissement approprié, bonne hygiène alimentaire, vaccination dans les zones à haut risque, lavez-vous les mains fréquemment.',
      sw: 'Maji salama, usafi wa mazingira, usafi mzuri wa chakula, chanjo katika maeneo ya hatari kubwa, nawa mikono mara kwa mara.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate emergency care for severe diarrhea with dehydration, especially if unable to keep fluids down.',
      fr: 'Consultez immédiatement les urgences pour une diarrhée sévère avec déshydratation, surtout si vous ne pouvez pas garder les liquides.',
      sw: 'Tafuta huduma za dharura mara moja kwa kuhara kwingi na upungufu wa maji, hasa ikiwa huwezi kushika maji.'
    },
    complications: {
      en: ['severe dehydration', 'shock', 'kidney failure', 'electrolyte imbalance', 'death', 'hypoglycemia'],
      fr: ['déshydratation sévère', 'choc', 'insuffisance rénale', 'déséquilibre électrolytique', 'décès', 'hypoglycémie'],
      sw: ['upungufu mkuu wa maji', 'mshtuko', 'kushindwa kwa figo', 'kutokubaliana kwa electrolyte', 'kifo', 'upungufu wa sukari']
    },
    diagnosis: {
      en: 'Stool culture, rapid diagnostic tests, clinical assessment, travel history.',
      fr: 'Culture de selles, tests de diagnostic rapide, évaluation clinique, historique de voyage.',
      sw: 'Kilimo cha kinyesi, vipimo vya haraka vya utambuzi, tathmini ya kimatibabu, historia ya kusafiri.'
    },
    prognosis: {
      en: 'Excellent with prompt rehydration. Can be fatal without treatment due to severe dehydration.',
      fr: 'Excellent avec une réhydratation rapide. Peut être mortel sans traitement en raison d\'une déshydratation sévère.',
      sw: 'Bora sana na kurudisha maji haraka. Inaweza kuua bila matibabu kwa sababu ya upungufu mkuu wa maji.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'typhoid',
    name: {
      en: 'Typhoid Fever',
      fr: 'Fièvre Typhoïde',
      sw: 'Homa ya Typhoid'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['high fever', 'headache', 'stomach pain', 'weakness', 'diarrhea', 'constipation', 'rose spots on chest', 'loss of appetite', 'fatigue'],
      fr: ['fièvre élevée', 'mal de tête', 'douleur abdominale', 'faiblesse', 'diarrhée', 'constipation', 'taches roses sur la poitrine', 'perte d\'appétit', 'fatigue'],
      sw: ['homa kali', 'maumivu ya kichwa', 'maumivu ya tumbo', 'udhaifu', 'kuhara', 'msongo wa tumbo', 'madoa ya waridi kifuani', 'kupoteza hamu ya chakula', 'uchovu']
    },
    commonSymptoms: {
      en: ['high fever', 'headache', 'stomach pain', 'weakness', 'loss of appetite'],
      fr: ['fièvre élevée', 'mal de tête', 'douleur abdominale', 'faiblesse', 'perte d\'appétit'],
      sw: ['homa kali', 'maumivu ya kichwa', 'maumivu ya tumbo', 'udhaifu', 'kupoteza hamu ya chakula']
    },
    rareSymptoms: {
      en: ['confusion', 'delirium', 'intestinal bleeding', 'perforation', 'pneumonia', 'meningitis'],
      fr: ['confusion', 'délire', 'saignement intestinal', 'perforation', 'pneumonie', 'méningite'],
      sw: ['kuchanganyikiwa', 'wazimu', 'kutokwa damu tumboni', 'kutoboa', 'nimonia', 'meningitis']
    },
    causes: {
      en: ['salmonella typhi bacteria', 'contaminated food and water', 'poor hygiene', 'fecal-oral transmission'],
      fr: ['bactérie salmonella typhi', 'nourriture et eau contaminées', 'mauvaise hygiène', 'transmission fécale-orale'],
      sw: ['bakteria ya salmonella typhi', 'chakula na maji yaliyochafuliwa', 'usafi mbaya', 'maambukizi ya kinywa-kinyesi']
    },
    riskFactors: {
      en: ['travel to endemic areas', 'poor sanitation', 'contaminated water', 'close contact with carriers', 'poor hygiene'],
      fr: ['voyage vers des zones endémiques', 'mauvais assainissement', 'eau contaminée', 'contact étroit avec des porteurs', 'mauvaise hygiène'],
      sw: ['kusafiri kwenye maeneo ya maambukizi', 'usafi mbaya wa mazingira', 'maji yaliyochafuliwa', 'mawasiliano ya karibu na wabeba virusi', 'usafi mbaya']
    },
    treatment: {
      en: 'Antibiotics (ciprofloxacin, azithromycin), hospitalization for severe cases, supportive care, fluid replacement.',
      fr: 'Antibiotiques (ciprofloxacine, azithromycine), hospitalisation pour les cas graves, soins de soutien, remplacement de liquides.',
      sw: 'Antibiotiki (ciprofloxacin, azithromycin), kulazwa hospitalini kwa hali mbaya, huduma za msaada, kubadilisha maji.'
    },
    prevention: {
      en: 'Vaccination, safe water and food, good hygiene practices, avoid raw foods in endemic areas, proper sanitation.',
      fr: 'Vaccination, eau et nourriture sûres, bonnes pratiques d\'hygiène, éviter les aliments crus dans les zones endémiques, assainissement approprié.',
      sw: 'Chanjo, maji na chakula salama, mazoea mazuri ya usafi, epuka chakula mbichi katika maeneo ya maambukizi, usafi sahihi wa mazingira.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for persistent high fever with headache and stomach pain, especially after travel to endemic areas.',
      fr: 'Consultez un médecin pour une fièvre élevée persistante avec maux de tête et douleurs abdominales, surtout après un voyage vers des zones endémiques.',
      sw: 'Tafuta matibabu kwa homa kali inayoendelea na maumivu ya kichwa na tumbo, hasa baada ya kusafiri kwenye maeneo ya maambukizi.'
    },
    complications: {
      en: ['intestinal bleeding', 'perforation', 'pneumonia', 'meningitis', 'myocarditis', 'neurological complications'],
      fr: ['saignement intestinal', 'perforation', 'pneumonie', 'méningite', 'myocardite', 'complications neurologiques'],
      sw: ['kutokwa damu tumboni', 'kutoboa', 'nimonia', 'meningitis', 'myocarditis', 'matatizo ya neva']
    },
    diagnosis: {
      en: 'Blood culture, stool culture, bone marrow culture, Widal test, molecular tests.',
      fr: 'Culture sanguine, culture de selles, culture de moelle osseuse, test de Widal, tests moléculaires.',
      sw: 'Kilimo cha damu, kilimo cha kinyesi, kilimo cha ubongo wa mfupa, kipimo cha Widal, vipimo vya molekuli.'
    },
    prognosis: {
      en: 'Good with early antibiotic treatment. Can be serious or fatal without proper treatment.',
      fr: 'Bon avec un traitement antibiotique précoce. Peut être grave ou mortel sans traitement approprié.',
      sw: 'Nzuri na matibabu ya mapema ya antibiotiki. Inaweza kuwa mbaya au kuua bila matibabu sahihi.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'hepatitis-b',
    name: {
      en: 'Hepatitis B',
      fr: 'Hépatite B',
      sw: 'Hepatitis B'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['jaundice', 'fatigue', 'abdominal pain', 'loss of appetite', 'nausea', 'dark urine', 'joint pain', 'fever'],
      fr: ['jaunisse', 'fatigue', 'douleur abdominale', 'perte d\'appétit', 'nausée', 'urine foncée', 'douleur articulaire', 'fièvre'],
      sw: ['manjano', 'uchovu', 'maumivu ya tumbo', 'kupoteza hamu ya chakula', 'kichefuchefu', 'mkojo wa giza', 'maumivu ya viungo', 'homa']
    },
    commonSymptoms: {
      en: ['jaundice', 'fatigue', 'abdominal pain', 'loss of appetite'],
      fr: ['jaunisse', 'fatigue', 'douleur abdominale', 'perte d\'appétit'],
      sw: ['manjano', 'uchovu', 'maumivu ya tumbo', 'kupoteza hamu ya chakula']
    },
    rareSymptoms: {
      en: ['liver failure', 'cirrhosis', 'liver cancer', 'kidney problems'],
      fr: ['insuffisance hépatique', 'cirrhose', 'cancer du foie', 'problèmes rénaux'],
      sw: ['kushindwa kwa ini', 'cirrhosis', 'saratani ya ini', 'matatizo ya figo']
    },
    causes: {
      en: ['hepatitis B virus', 'blood contact', 'sexual transmission', 'mother to child transmission', 'contaminated needles'],
      fr: ['virus de l\'hépatite B', 'contact sanguin', 'transmission sexuelle', 'transmission mère-enfant', 'aiguilles contaminées'],
      sw: ['virusi ya hepatitis B', 'mawasiliano ya damu', 'maambukizi ya kingono', 'maambukizi ya mama kwa mtoto', 'sindano zilizochafuliwa']
    },
    riskFactors: {
      en: ['unprotected sex', 'sharing needles', 'healthcare exposure', 'mother with hepatitis B', 'multiple partners'],
      fr: ['rapports sexuels non protégés', 'partage d\'aiguilles', 'exposition aux soins de santé', 'mère avec hépatite B', 'partenaires multiples'],
      sw: ['ngono zisizo salama', 'kushiriki sindano', 'kufichuliwa katika huduma za afya', 'mama mwenye hepatitis B', 'washirika wengi']
    },
    treatment: {
      en: 'Antiviral medications, regular monitoring, liver transplant in severe cases, supportive care.',
      fr: 'Médicaments antiviraux, surveillance régulière, transplantation hépatique dans les cas graves, soins de soutien.',
      sw: 'Dawa za virusi, ufuatiliaji wa kawaida, kupandikiza ini katika hali mbaya, huduma za msaada.'
    },
    prevention: {
      en: 'Vaccination, safe injection practices, protected sex, screening blood products, avoid sharing personal items.',
      fr: 'Vaccination, pratiques d\'injection sûres, rapports sexuels protégés, dépistage des produits sanguins, éviter le partage d\'objets personnels.',
      sw: 'Chanjo, mazoea salama ya sindano, ngono salama, kuchunguza bidhaa za damu, epuka kushiriki vitu vya kibinafsi.'
    },
    whenToSeekHelp: {
      en: 'See doctor for persistent fatigue, jaundice, or abdominal pain. Get tested if at risk.',
      fr: 'Consultez un médecin pour une fatigue persistante, une jaunisse ou des douleurs abdominales. Faites-vous tester si vous êtes à risque.',
      sw: 'Ona daktari kwa uchovu unaoendelea, manjano, au maumivu ya tumbo. Pima ikiwa una hatari.'
    },
    complications: {
      en: ['chronic hepatitis', 'cirrhosis', 'liver cancer', 'liver failure', 'kidney disease'],
      fr: ['hépatite chronique', 'cirrhose', 'cancer du foie', 'insuffisance hépatique', 'maladie rénale'],
      sw: ['hepatitis ya kudumu', 'cirrhosis', 'saratani ya ini', 'kushindwa kwa ini', 'ugonjwa wa figo']
    },
    diagnosis: {
      en: 'Blood tests (HBsAg, anti-HBc, anti-HBs), liver function tests, viral load testing.',
      fr: 'Tests sanguins (HBsAg, anti-HBc, anti-HBs), tests de fonction hépatique, test de charge virale.',
      sw: 'Vipimo vya damu (HBsAg, anti-HBc, anti-HBs), vipimo vya utendaji wa ini, kipimo cha mzigo wa virusi.'
    },
    prognosis: {
      en: 'Good with treatment. Chronic infection requires lifelong monitoring. Vaccination prevents infection.',
      fr: 'Bon avec traitement. L\'infection chronique nécessite une surveillance à vie. La vaccination prévient l\'infection.',
      sw: 'Nzuri na matibabu. Maambukizi ya kudumu yanahitaji ufuatiliaji wa maisha yote. Chanjo inazuia maambukizi.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'hiv-aids',
    name: {
      en: 'HIV/AIDS',
      fr: 'VIH/SIDA',
      sw: 'VVU/UKIMWI'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['fever', 'fatigue', 'swollen lymph nodes', 'weight loss', 'night sweats', 'opportunistic infections', 'skin rash', 'diarrhea'],
      fr: ['fièvre', 'fatigue', 'ganglions lymphatiques enflés', 'perte de poids', 'sueurs nocturnes', 'infections opportunistes', 'éruption cutanée', 'diarrhée'],
      sw: ['homa', 'uchovu', 'uvimbe wa tezi', 'kupungua uzito', 'jasho la usiku', 'maambukizi ya fursa', 'upele wa ngozi', 'kuhara']
    },
    commonSymptoms: {
      en: ['fever', 'fatigue', 'swollen lymph nodes', 'weight loss'],
      fr: ['fièvre', 'fatigue', 'ganglions lymphatiques enflés', 'perte de poids'],
      sw: ['homa', 'uchovu', 'uvimbe wa tezi', 'kupungua uzito']
    },
    rareSymptoms: {
      en: ['neurological symptoms', 'severe infections', 'cancers', 'organ failure'],
      fr: ['symptômes neurologiques', 'infections graves', 'cancers', 'défaillance d\'organe'],
      sw: ['dalili za neva', 'maambukizi makali', 'saratani', 'kushindwa kwa viungo']
    },
    causes: {
      en: ['human immunodeficiency virus', 'sexual transmission', 'blood contact', 'mother to child transmission', 'sharing needles'],
      fr: ['virus de l\'immunodéficience humaine', 'transmission sexuelle', 'contact sanguin', 'transmission mère-enfant', 'partage d\'aiguilles'],
      sw: ['virusi ya upungufu wa kinga', 'maambukizi ya kingono', 'mawasiliano ya damu', 'maambukizi ya mama kwa mtoto', 'kushiriki sindano']
    },
    riskFactors: {
      en: ['unprotected sex', 'multiple partners', 'sharing needles', 'blood transfusions', 'mother with HIV'],
      fr: ['rapports sexuels non protégés', 'partenaires multiples', 'partage d\'aiguilles', 'transfusions sanguines', 'mère avec VIH'],
      sw: ['ngono zisizo salama', 'washirika wengi', 'kushiriki sindano', 'kuhamishiwa damu', 'mama mwenye VVU']
    },
    treatment: {
      en: 'Antiretroviral therapy (ART), opportunistic infection treatment, regular monitoring, supportive care.',
      fr: 'Thérapie antirétrovirale (TAR), traitement des infections opportunistes, surveillance régulière, soins de soutien.',
      sw: 'Matibabu ya antiretroviral (ART), matibabu ya maambukizi ya fursa, ufuatiliaji wa kawaida, huduma za msaada.'
    },
    prevention: {
      en: 'Safe sex practices, PrEP, needle exchange programs, testing and treatment, avoid sharing personal items.',
      fr: 'Pratiques sexuelles sûres, PrEP, programmes d\'échange d\'aiguilles, dépistage et traitement, éviter le partage d\'objets personnels.',
      sw: 'Mazoea salama ya ngono, PrEP, mipango ya kubadilishana sindano, kupima na kutibu, epuka kushiriki vitu vya kibinafsi.'
    },
    whenToSeekHelp: {
      en: 'Get tested regularly if at risk, seek immediate care for opportunistic infections or severe symptoms.',
      fr: 'Faites-vous tester régulièrement si vous êtes à risque, consultez immédiatement pour les infections opportunistes ou les symptômes graves.',
      sw: 'Pima mara kwa mara ikiwa una hatari, tafuta matibabu ya haraka kwa maambukizi ya fursa au dalili kali.'
    },
    complications: {
      en: ['AIDS', 'opportunistic infections', 'cancers', 'neurological complications', 'organ failure'],
      fr: ['SIDA', 'infections opportunistes', 'cancers', 'complications neurologiques', 'défaillance d\'organe'],
      sw: ['UKIMWI', 'maambukizi ya fursa', 'saratani', 'matatizo ya neva', 'kushindwa kwa viungo']
    },
    diagnosis: {
      en: 'HIV antibody tests, viral load testing, CD4 count, rapid tests, confirmatory testing.',
      fr: 'Tests d\'anticorps VIH, test de charge virale, numération CD4, tests rapides, tests de confirmation.',
      sw: 'Vipimo vya kingamwili vya VVU, kipimo cha mzigo wa virusi, hesabu ya CD4, vipimo vya haraka, vipimo vya kuthibitisha.'
    },
    prognosis: {
      en: 'Excellent with early treatment and ART. People with HIV can live normal lifespans with proper care.',
      fr: 'Excellent avec traitement précoce et TAR. Les personnes avec VIH peuvent vivre une durée de vie normale avec des soins appropriés.',
      sw: 'Bora sana na matibabu ya mapema na ART. Watu wenye VVU wanaweza kuishi maisha ya kawaida na huduma sahihi.'
    },
    source: 'who',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'meningitis',
    name: {
      en: 'Meningitis',
      fr: 'Méningite',
      sw: 'Meningitis'
    },
    category: 'infectious',
    severity: 'emergency',
    symptoms: {
      en: ['severe headache', 'neck stiffness', 'fever', 'sensitivity to light', 'confusion', 'rash', 'vomiting', 'seizures'],
      fr: ['mal de tête sévère', 'raideur de la nuque', 'fièvre', 'sensibilité à la lumière', 'confusion', 'éruption cutanée', 'vomissement', 'convulsions'],
      sw: ['maumivu makali ya kichwa', 'ugumu wa shingo', 'homa', 'kuogopa mwanga', 'kuchanganyikiwa', 'upele', 'kutapika', 'mshtuko']
    },
    commonSymptoms: {
      en: ['severe headache', 'neck stiffness', 'fever', 'sensitivity to light'],
      fr: ['mal de tête sévère', 'raideur de la nuque', 'fièvre', 'sensibilité à la lumière'],
      sw: ['maumivu makali ya kichwa', 'ugumu wa shingo', 'homa', 'kuogopa mwanga']
    },
    rareSymptoms: {
      en: ['coma', 'brain damage', 'hearing loss', 'learning disabilities'],
      fr: ['coma', 'lésions cérébrales', 'perte auditive', 'troubles d\'apprentissage'],
      sw: ['usingizi mzito', 'uharibifu wa ubongo', 'kupoteza kusikia', 'matatizo ya kujifunza']
    },
    causes: {
      en: ['bacterial infection', 'viral infection', 'fungal infection', 'parasitic infection', 'non-infectious causes'],
      fr: ['infection bactérienne', 'infection virale', 'infection fongique', 'infection parasitaire', 'causes non infectieuses'],
      sw: ['maambukizi ya bakteria', 'maambukizi ya virusi', 'maambukizi ya kuvu', 'maambukizi ya vimelea', 'sababu zisizo za maambukizi']
    },
    riskFactors: {
      en: ['age (infants and young adults)', 'crowded conditions', 'weakened immune system', 'travel to endemic areas', 'lack of vaccination'],
      fr: ['âge (nourrissons et jeunes adultes)', 'conditions surpeuplées', 'système immunitaire affaibli', 'voyage vers des zones endémiques', 'manque de vaccination'],
      sw: ['umri (watoto wachanga na vijana)', 'mazingira ya msongamano', 'mfumo wa kinga uliodhoofika', 'kusafiri kwenye maeneo ya maambukizi', 'ukosefu wa chanjo']
    },
    treatment: {
      en: 'Emergency hospitalization, IV antibiotics, supportive care, corticosteroids, close monitoring.',
      fr: 'Hospitalisation d\'urgence, antibiotiques IV, soins de soutien, corticostéroïdes, surveillance étroite.',
      sw: 'Kulazwa hospitalini kwa dharura, antibiotiki za mishipa, huduma za msaada, corticosteroids, ufuatiliaji wa karibu.'
    },
    prevention: {
      en: 'Vaccination (meningococcal, Hib, pneumococcal), avoid close contact with infected persons, good hygiene.',
      fr: 'Vaccination (méningococcique, Hib, pneumococcique), éviter le contact étroit avec les personnes infectées, bonne hygiène.',
      sw: 'Chanjo (meningococcal, Hib, pneumococcal), epuka mawasiliano ya karibu na watu walioambukizwa, usafi mzuri.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate emergency care for severe headache with neck stiffness and fever. This is a medical emergency.',
      fr: 'Consultez immédiatement les urgences pour un mal de tête sévère avec raideur de la nuque et fièvre. C\'est une urgence médicale.',
      sw: 'Tafuta huduma za dharura mara moja kwa maumivu makali ya kichwa na ugumu wa shingo na homa. Hii ni dharura ya kimatibabu.'
    },
    complications: {
      en: ['brain damage', 'hearing loss', 'seizures', 'death', 'learning disabilities', 'memory problems'],
      fr: ['lésions cérébrales', 'perte auditive', 'convulsions', 'décès', 'troubles d\'apprentissage', 'problèmes de mémoire'],
      sw: ['uharibifu wa ubongo', 'kupoteza kusikia', 'mshtuko', 'kifo', 'matatizo ya kujifunza', 'matatizo ya kumbukumbu']
    },
    diagnosis: {
      en: 'Lumbar puncture, blood tests, CT scan, MRI, clinical examination.',
      fr: 'Ponction lombaire, tests sanguins, scanner, IRM, examen clinique.',
      sw: 'Kuchoma uti wa mgongo, vipimo vya damu, CT scan, MRI, uchunguzi wa kimatibabu.'
    },
    prognosis: {
      en: 'Good with early treatment. Delayed treatment can result in serious complications or death.',
      fr: 'Bon avec traitement précoce. Un traitement retardé peut entraîner des complications graves ou la mort.',
      sw: 'Nzuri na matibabu ya mapema. Matibabu ya kuchelewa yanaweza kusababisha matatizo makubwa au kifo.'
    },
    source: 'who',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'yellow-fever',
    name: {
      en: 'Yellow Fever',
      fr: 'Fièvre Jaune',
      sw: 'Homa ya Manjano'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['fever', 'headache', 'muscle pain', 'nausea', 'vomiting', 'jaundice', 'bleeding', 'fatigue'],
      fr: ['fièvre', 'mal de tête', 'douleur musculaire', 'nausée', 'vomissement', 'jaunisse', 'saignement', 'fatigue'],
      sw: ['homa', 'maumivu ya kichwa', 'maumivu ya misuli', 'kichefuchefu', 'kutapika', 'manjano', 'kutokwa damu', 'uchovu']
    },
    commonSymptoms: {
      en: ['fever', 'headache', 'muscle pain', 'nausea'],
      fr: ['fièvre', 'mal de tête', 'douleur musculaire', 'nausée'],
      sw: ['homa', 'maumivu ya kichwa', 'maumivu ya misuli', 'kichefuchefu']
    },
    rareSymptoms: {
      en: ['liver failure', 'kidney failure', 'shock', 'coma'],
      fr: ['insuffisance hépatique', 'insuffisance rénale', 'choc', 'coma'],
      sw: ['kushindwa kwa ini', 'kushindwa kwa figo', 'mshtuko', 'usingizi mzito']
    },
    causes: {
      en: ['yellow fever virus', 'aedes mosquito bites', 'jungle transmission', 'urban transmission'],
      fr: ['virus de la fièvre jaune', 'piqûres de moustiques aedes', 'transmission de la jungle', 'transmission urbaine'],
      sw: ['virusi ya homa ya manjano', 'kuumwa na mbu wa aedes', 'maambukizi ya msituni', 'maambukizi ya mijini']
    },
    riskFactors: {
      en: ['travel to endemic areas', 'lack of vaccination', 'mosquito exposure', 'living in tropical areas'],
      fr: ['voyage vers des zones endémiques', 'manque de vaccination', 'exposition aux moustiques', 'vivre dans des zones tropicales'],
      sw: ['kusafiri kwenye maeneo ya maambukizi', 'ukosefu wa chanjo', 'kufichuliwa na mbu', 'kuishi katika maeneo ya kitropiki']
    },
    treatment: {
      en: 'Supportive care, no specific antiviral treatment, hospitalization for severe cases, manage complications.',
      fr: 'Soins de soutien, pas de traitement antiviral spécifique, hospitalisation pour les cas graves, gérer les complications.',
      sw: 'Huduma za msaada, hakuna matibabu maalum ya virusi, kulazwa hospitalini kwa hali mbaya, kusimamia matatizo.'
    },
    prevention: {
      en: 'Vaccination (required for travel), mosquito control, use repellents, wear protective clothing.',
      fr: 'Vaccination (obligatoire pour les voyages), contrôle des moustiques, utiliser des répulsifs, porter des vêtements de protection.',
      sw: 'Chanjo (inahitajika kwa kusafiri), kudhibiti mbu, tumia dawa za kuzuia wadudu, vaa nguo za kujikinga.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate medical care for fever and symptoms after travel to endemic areas or mosquito exposure.',
      fr: 'Consultez immédiatement un médecin pour de la fièvre et des symptômes après un voyage vers des zones endémiques ou une exposition aux moustiques.',
      sw: 'Tafuta matibabu ya haraka kwa homa na dalili baada ya kusafiri kwenye maeneo ya maambukizi au kufichuliwa na mbu.'
    },
    complications: {
      en: ['liver failure', 'kidney failure', 'bleeding disorders', 'shock', 'death'],
      fr: ['insuffisance hépatique', 'insuffisance rénale', 'troubles de la coagulation', 'choc', 'décès'],
      sw: ['kushindwa kwa ini', 'kushindwa kwa figo', 'matatizo ya kutokwa damu', 'mshtuko', 'kifo']
    },
    diagnosis: {
      en: 'Blood tests, viral detection, serology, clinical assessment, travel history.',
      fr: 'Tests sanguins, détection virale, sérologie, évaluation clinique, historique de voyage.',
      sw: 'Vipimo vya damu, kutambua virusi, serology, tathmini ya kimatibabu, historia ya kusafiri.'
    },
    prognosis: {
      en: 'Good with mild cases. Severe cases have high mortality rate. Vaccination provides lifelong immunity.',
      fr: 'Bon avec les cas légers. Les cas graves ont un taux de mortalité élevé. La vaccination fournit une immunité à vie.',
      sw: 'Nzuri na hali nyepesi. Hali mbaya zina kiwango cha juu cha kifo. Chanjo inatoa kinga ya maisha yote.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'dengue',
    name: {
      en: 'Dengue Fever',
      fr: 'Fièvre Dengue',
      sw: 'Homa ya Dengue'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['high fever', 'severe headache', 'eye pain', 'muscle pain', 'joint pain', 'skin rash', 'nausea', 'vomiting'],
      fr: ['fièvre élevée', 'mal de tête sévère', 'douleur oculaire', 'douleur musculaire', 'douleur articulaire', 'éruption cutanée', 'nausée', 'vomissement'],
      sw: ['homa kali', 'maumivu makali ya kichwa', 'maumivu ya macho', 'maumivu ya misuli', 'maumivu ya viungo', 'upele wa ngozi', 'kichefuchefu', 'kutapika']
    },
    commonSymptoms: {
      en: ['high fever', 'severe headache', 'eye pain', 'muscle pain'],
      fr: ['fièvre élevée', 'mal de tête sévère', 'douleur oculaire', 'douleur musculaire'],
      sw: ['homa kali', 'maumivu makali ya kichwa', 'maumivu ya macho', 'maumivu ya misuli']
    },
    rareSymptoms: {
      en: ['bleeding', 'plasma leakage', 'organ impairment', 'shock'],
      fr: ['saignement', 'fuite de plasma', 'altération d\'organe', 'choc'],
      sw: ['kutokwa damu', 'kuvuja kwa plasma', 'uharibifu wa viungo', 'mshtuko']
    },
    causes: {
      en: ['dengue virus', 'aedes mosquito bites', 'four virus serotypes', 'urban transmission'],
      fr: ['virus de la dengue', 'piqûres de moustiques aedes', 'quatre sérotypes de virus', 'transmission urbaine'],
      sw: ['virusi ya dengue', 'kuumwa na mbu wa aedes', 'aina nne za virusi', 'maambukizi ya mijini']
    },
    riskFactors: {
      en: ['living in tropical areas', 'previous dengue infection', 'mosquito exposure', 'urban environments'],
      fr: ['vivre dans des zones tropicales', 'infection dengue antérieure', 'exposition aux moustiques', 'environnements urbains'],
      sw: ['kuishi katika maeneo ya kitropiki', 'maambukizi ya dengue ya awali', 'kufichuliwa na mbu', 'mazingira ya mijini']
    },
    treatment: {
      en: 'Supportive care, fluid management, pain relief (avoid aspirin), monitor for complications, no specific antiviral.',
      fr: 'Soins de soutien, gestion des fluides, soulagement de la douleur (éviter l\'aspirine), surveiller les complications, pas d\'antiviral spécifique.',
      sw: 'Huduma za msaada, usimamizi wa maji, kupunguza maumivu (epuka aspirin), fuatilia matatizo, hakuna dawa maalum ya virusi.'
    },
    prevention: {
      en: 'Mosquito control, eliminate breeding sites, use repellents, protective clothing, vaccination where available.',
      fr: 'Contrôle des moustiques, éliminer les sites de reproduction, utiliser des répulsifs, vêtements de protection, vaccination si disponible.',
      sw: 'Kudhibiti mbu, ondoa maeneo ya kuzaana, tumia dawa za kuzuia wadudu, nguo za kujikinga, chanjo ikiwa inapatikana.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for high fever with severe headache and body pain, especially with bleeding or shock signs.',
      fr: 'Consultez un médecin pour une fièvre élevée avec des maux de tête sévères et des douleurs corporelles, surtout avec des signes de saignement ou de choc.',
      sw: 'Tafuta matibabu kwa homa kali na maumivu makali ya kichwa na mwili, hasa na dalili za kutokwa damu au mshtuko.'
    },
    complications: {
      en: ['dengue hemorrhagic fever', 'dengue shock syndrome', 'plasma leakage', 'organ failure'],
      fr: ['fièvre hémorragique dengue', 'syndrome de choc dengue', 'fuite de plasma', 'défaillance d\'organe'],
      sw: ['homa ya dengue ya kutokwa damu', 'ugonjwa wa mshtuko wa dengue', 'kuvuja kwa plasma', 'kushindwa kwa viungo']
    },
    diagnosis: {
      en: 'Blood tests, viral detection, serology, platelet count, clinical assessment.',
      fr: 'Tests sanguins, détection virale, sérologie, numération plaquettaire, évaluation clinique.',
      sw: 'Vipimo vya damu, kutambua virusi, serology, hesabu ya platelet, tathmini ya kimatibabu.'
    },
    prognosis: {
      en: 'Good with proper care. Severe dengue can be fatal without appropriate treatment.',
      fr: 'Bon avec des soins appropriés. La dengue sévère peut être mortelle sans traitement approprié.',
      sw: 'Nzuri na huduma sahihi. Dengue kali inaweza kuua bila matibabu sahihi.'
    },
    source: 'who',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'ebola',
    name: {
      en: 'Ebola Virus Disease',
      fr: 'Maladie à Virus Ebola',
      sw: 'Ugonjwa wa Virusi ya Ebola'
    },
    category: 'infectious',
    severity: 'emergency',
    symptoms: {
      en: ['fever', 'severe headache', 'muscle pain', 'weakness', 'fatigue', 'diarrhea', 'vomiting', 'bleeding'],
      fr: ['fièvre', 'mal de tête sévère', 'douleur musculaire', 'faiblesse', 'fatigue', 'diarrhée', 'vomissement', 'saignement'],
      sw: ['homa', 'maumivu makali ya kichwa', 'maumivu ya misuli', 'udhaifu', 'uchovu', 'kuhara', 'kutapika', 'kutokwa damu']
    },
    commonSymptoms: {
      en: ['fever', 'severe headache', 'muscle pain', 'weakness'],
      fr: ['fièvre', 'mal de tête sévère', 'douleur musculaire', 'faiblesse'],
      sw: ['homa', 'maumivu makali ya kichwa', 'maumivu ya misuli', 'udhaifu']
    },
    rareSymptoms: {
      en: ['internal bleeding', 'external bleeding', 'organ failure', 'shock'],
      fr: ['saignement interne', 'saignement externe', 'défaillance d\'organe', 'choc'],
      sw: ['kutokwa damu ndani', 'kutokwa damu nje', 'kushindwa kwa viungo', 'mshtuko']
    },
    causes: {
      en: ['ebola virus', 'contact with infected animals', 'human-to-human transmission', 'contaminated objects'],
      fr: ['virus ebola', 'contact avec des animaux infectés', 'transmission humain-humain', 'objets contaminés'],
      sw: ['virusi ya ebola', 'mawasiliano na wanyamapori walioambukizwa', 'maambukizi ya mtu kwa mtu', 'vitu vilivyochafuliwa']
    },
    riskFactors: {
      en: ['contact with infected persons', 'healthcare workers', 'funeral practices', 'bushmeat consumption'],
      fr: ['contact avec des personnes infectées', 'travailleurs de la santé', 'pratiques funéraires', 'consommation de viande de brousse'],
      sw: ['mawasiliano na watu walioambukizwa', 'wafanyakazi wa afya', 'mazoea ya mazishi', 'kula nyama za mwituni']
    },
    treatment: {
      en: 'Supportive care, experimental treatments, isolation, fluid management, treat complications.',
      fr: 'Soins de soutien, traitements expérimentaux, isolement, gestion des fluides, traiter les complications.',
      sw: 'Huduma za msaada, matibabu ya majaribio, kutengwa, usimamizi wa maji, tibu matatizo.'
    },
    prevention: {
      en: 'Avoid contact with infected persons, proper hygiene, safe burial practices, avoid bushmeat, vaccination.',
      fr: 'Éviter le contact avec les personnes infectées, hygiène appropriée, pratiques d\'enterrement sûres, éviter la viande de brousse, vaccination.',
      sw: 'Epuka mawasiliano na watu walioambukizwa, usafi sahihi, mazoea salama ya mazishi, epuka nyama za mwituni, chanjo.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate medical care for fever and symptoms with potential exposure. Report to health authorities.',
      fr: 'Consultez immédiatement un médecin pour de la fièvre et des symptômes avec exposition potentielle. Signalez aux autorités sanitaires.',
      sw: 'Tafuta matibabu ya haraka kwa homa na dalili na uwezekano wa kufichuliwa. Ripoti kwa mamlaka za afya.'
    },
    complications: {
      en: ['organ failure', 'severe bleeding', 'shock', 'death', 'secondary infections'],
      fr: ['défaillance d\'organe', 'saignement sévère', 'choc', 'décès', 'infections secondaires'],
      sw: ['kushindwa kwa viungo', 'kutokwa damu kwingi', 'mshtuko', 'kifo', 'maambukizi ya pili']
    },
    diagnosis: {
      en: 'Laboratory tests, viral detection, clinical assessment, contact tracing.',
      fr: 'Tests de laboratoire, détection virale, évaluation clinique, recherche de contacts.',
      sw: 'Vipimo vya maabara, kutambua virusi, tathmini ya kimatibabu, kufuatilia mawasiliano.'
    },
    prognosis: {
      en: 'Variable, depends on early treatment and supportive care. High mortality rate without treatment.',
      fr: 'Variable, dépend du traitement précoce et des soins de soutien. Taux de mortalité élevé sans traitement.',
      sw: 'Inatofautiana, inategemea matibabu ya mapema na huduma za msaada. Kiwango cha juu cha kifo bila matibabu.'
    },
    source: 'who',
    prevalenceInAfrica: 'low',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'lassa-fever',
    name: {
      en: 'Lassa Fever',
      fr: 'Fièvre de Lassa',
      sw: 'Homa ya Lassa'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['fever', 'headache', 'sore throat', 'muscle pain', 'chest pain', 'nausea', 'vomiting', 'diarrhea'],
      fr: ['fièvre', 'mal de tête', 'mal de gorge', 'douleur musculaire', 'douleur thoracique', 'nausée', 'vomissement', 'diarrhée'],
      sw: ['homa', 'maumivu ya kichwa', 'maumivu ya koo', 'maumivu ya misuli', 'maumivu ya kifua', 'kichefuchefu', 'kutapika', 'kuhara']
    },
    commonSymptoms: {
      en: ['fever', 'headache', 'sore throat', 'muscle pain'],
      fr: ['fièvre', 'mal de tête', 'mal de gorge', 'douleur musculaire'],
      sw: ['homa', 'maumivu ya kichwa', 'maumivu ya koo', 'maumivu ya misuli']
    },
    rareSymptoms: {
      en: ['bleeding', 'facial swelling', 'hearing loss', 'shock'],
      fr: ['saignement', 'gonflement facial', 'perte auditive', 'choc'],
      sw: ['kutokwa damu', 'uvimbe wa uso', 'kupoteza kusikia', 'mshtuko']
    },
    causes: {
      en: ['lassa virus', 'contact with infected rodents', 'contaminated food', 'human-to-human transmission'],
      fr: ['virus lassa', 'contact avec des rongeurs infectés', 'nourriture contaminée', 'transmission humain-humain'],
      sw: ['virusi ya lassa', 'mawasiliano na panya walioambukizwa', 'chakula kilichochafuliwa', 'maambukizi ya mtu kwa mtu']
    },
    riskFactors: {
      en: ['living in endemic areas', 'poor sanitation', 'contact with rodents', 'healthcare exposure'],
      fr: ['vivre dans des zones endémiques', 'mauvais assainissement', 'contact avec des rongeurs', 'exposition aux soins de santé'],
      sw: ['kuishi katika maeneo ya maambukizi', 'usafi mbaya wa mazingira', 'mawasiliano na panya', 'kufichuliwa katika huduma za afya']
    },
    treatment: {
      en: 'Antiviral medication (ribavirin), supportive care, early treatment improves outcomes.',
      fr: 'Médicament antiviral (ribavirine), soins de soutien, traitement précoce améliore les résultats.',
      sw: 'Dawa ya virusi (ribavirin), huduma za msaada, matibabu ya mapema yanaboresha matokeo.'
    },
    prevention: {
      en: 'Rodent control, proper food storage, good hygiene, avoid contact with rodent excreta.',
      fr: 'Contrôle des rongeurs, stockage approprié des aliments, bonne hygiène, éviter le contact avec les excréments de rongeurs.',
      sw: 'Kudhibiti panya, kuhifadhi chakula vizuri, usafi mzuri, epuka mawasiliano na kinyesi cha panya.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for fever and flu-like symptoms in endemic areas, especially with rodent exposure.',
      fr: 'Consultez un médecin pour de la fièvre et des symptômes grippaux dans les zones endémiques, surtout avec exposition aux rongeurs.',
      sw: 'Tafuta matibabu kwa homa na dalili za homa ya mafua katika maeneo ya maambukizi, hasa na kufichuliwa na panya.'
    },
    complications: {
      en: ['hearing loss', 'bleeding', 'shock', 'organ failure', 'death'],
      fr: ['perte auditive', 'saignement', 'choc', 'défaillance d\'organe', 'décès'],
      sw: ['kupoteza kusikia', 'kutokwa damu', 'mshtuko', 'kushindwa kwa viungo', 'kifo']
    },
    diagnosis: {
      en: 'Laboratory tests, viral detection, serology, clinical assessment.',
      fr: 'Tests de laboratoire, détection virale, sérologie, évaluation clinique.',
      sw: 'Vipimo vya maabara, kutambua virusi, serology, tathmini ya kimatibabu.'
    },
    prognosis: {
      en: 'Good with early antiviral treatment. Mortality rate varies with severity and treatment timing.',
      fr: 'Bon avec traitement antiviral précoce. Le taux de mortalité varie avec la gravité et le moment du traitement.',
      sw: 'Nzuri na matibabu ya mapema ya virusi. Kiwango cha kifo kinatofautiana na ukali na muda wa matibabu.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'schistosomiasis',
    name: {
      en: 'Schistosomiasis (Bilharzia)',
      fr: 'Schistosomiase (Bilharziose)',
      sw: 'Kichocho'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['rash or itchy skin', 'fever', 'chills', 'cough', 'muscle aches', 'abdominal pain', 'bloody urine', 'bloody stool'],
      fr: ['éruption cutanée ou démangeaisons', 'fièvre', 'frissons', 'toux', 'douleurs musculaires', 'douleur abdominale', 'urine sanglante', 'selles sanglantes'],
      sw: ['upele au ngozi inayowasha', 'homa', 'baridi', 'kikohozi', 'maumivu ya misuli', 'maumivu ya tumbo', 'mkojo wenye damu', 'kinyesi chenye damu']
    },
    commonSymptoms: {
      en: ['abdominal pain', 'bloody urine', 'bloody stool'],
      fr: ['douleur abdominale', 'urine sanglante', 'selles sanglantes'],
      sw: ['maumivu ya tumbo', 'mkojo wenye damu', 'kinyesi chenye damu']
    },
    rareSymptoms: {
      en: ['seizures', 'paralysis', 'liver damage', 'bladder cancer'],
      fr: ['convulsions', 'paralysie', 'lésions hépatiques', 'cancer de la vessie'],
      sw: ['mshtuko', 'kupooza', 'uharibifu wa ini', 'saratani ya kibofu']
    },
    causes: {
      en: ['parasitic worms (Schistosoma)', 'contact with contaminated freshwater'],
      fr: ['vers parasites (Schistosoma)', 'contact avec de l\'eau douce contaminée'],
      sw: ['minyoo ya vimelea (Schistosoma)', 'mawasiliano na maji baridi yaliyochafuliwa']
    },
    riskFactors: {
      en: ['wading, swimming, or bathing in contaminated water'],
      fr: ['patauger, nager ou se baigner dans de l\'eau contaminée'],
      sw: ['kutembea, kuogelea, au kuoga katika maji yaliyochafuliwa']
    },
    treatment: {
      en: 'Praziquantel is the recommended treatment.',
      fr: 'Le praziquantel est le traitement recommandé.',
      sw: 'Praziquantel ndiyo matibabu yanayopendekezwa.'
    },
    prevention: {
      en: 'Avoid contact with contaminated freshwater. Drink safe water. Control snail populations.',
      fr: 'Éviter le contact avec l\'eau douce contaminée. Boire de l\'eau potable. Contrôler les populations d\'escargots.',
      sw: 'Epuka kugusa maji baridi yaliyochafuliwa. Kunywa maji salama. Dhibiti idadi ya konokono.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if you have symptoms after being in contaminated water.',
      fr: 'Consultez un médecin si vous présentez des symptômes après avoir été dans de l\'eau contaminée.',
      sw: 'Muone daktari ikiwa una dalili baada ya kuwa kwenye maji yaliyochafuliwa.'
    },
    complications: {
      en: ['liver damage', 'kidney failure', 'bladder cancer', 'infertility', 'seizures'],
      fr: ['lésions hépatiques', 'insuffisance rénale', 'cancer de la vessie', 'infertilité', 'convulsions'],
      sw: ['uharibifu wa ini', 'kushindwa kwa figo', 'saratani ya kibofu', 'utasa', 'mshtuko']
    },
    diagnosis: {
      en: 'Stool or urine samples to look for parasite eggs. Blood tests.',
      fr: 'Échantillons de selles ou d\'urine pour rechercher des œufs de parasites. Tests sanguins.',
      sw: 'Sampuli za kinyesi au mkojo kutafuta mayai ya vimelea. Vipimo vya damu.'
    },
    prognosis: {
      en: 'Good with treatment. Chronic infection can lead to severe organ damage.',
      fr: 'Bon avec traitement. L\'infection chronique peut entraîner des lésions organiques graves.',
      sw: 'Nzuri na matibabu. Maambukizi ya muda mrefu yanaweza kusababisha uharibifu mkubwa wa viungo.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'measles',
    name: {
      en: 'Measles',
      fr: 'Rougeole',
      sw: 'Surua'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['high fever', 'cough', 'runny nose', 'red watery eyes', 'skin rash', 'white spots in mouth'],
      fr: ['fièvre élevée', 'toux', 'nez qui coule', 'yeux rouges larmoyants', 'éruption cutanée', 'taches blanches dans la bouche'],
      sw: ['homa kali', 'kikohozi', 'mafua', 'macho mekundu yenye machozi', 'upele wa ngozi', 'madoa meupe mdomoni']
    },
    commonSymptoms: {
      en: ['high fever', 'cough', 'runny nose', 'red watery eyes', 'skin rash'],
      fr: ['fièvre élevée', 'toux', 'nez qui coule', 'yeux rouges larmoyants', 'éruption cutanée'],
      sw: ['homa kali', 'kikohozi', 'mafua', 'macho mekundu yenye machozi', 'upele wa ngozi']
    },
    rareSymptoms: {
      en: ['pneumonia', 'encephalitis', 'severe diarrhea', 'blindness'],
      fr: ['pneumonie', 'encéphalite', 'diarrhée sévère', 'cécité'],
      sw: ['nimonia', 'encephalitis', 'kuhara kwingi', 'upofu']
    },
    causes: {
      en: ['measles virus', 'airborne transmission', 'highly contagious'],
      fr: ['virus de la rougeole', 'transmission aérienne', 'très contagieux'],
      sw: ['virusi ya surua', 'maambukizi ya anga', 'inaambukiza sana']
    },
    riskFactors: {
      en: ['lack of vaccination', 'vitamin A deficiency', 'young age', 'immunocompromised'],
      fr: ['manque de vaccination', 'carence en vitamine A', 'jeune âge', 'immunodéprimé'],
      sw: ['ukosefu wa chanjo', 'upungufu wa vitamini A', 'umri mdogo', 'upungufu wa kinga']
    },
    treatment: {
      en: 'Supportive care, vitamin A supplements, fever management, prevent complications.',
      fr: 'Soins de soutien, suppléments de vitamine A, gestion de la fièvre, prévenir les complications.',
      sw: 'Huduma za msaada, virutubisho vya vitamini A, kudhibiti homa, kuzuia matatizo.'
    },
    prevention: {
      en: 'MMR vaccination, vitamin A supplementation, isolation of infected persons.',
      fr: 'Vaccination ROR, supplémentation en vitamine A, isolement des personnes infectées.',
      sw: 'Chanjo ya MMR, kuongeza vitamini A, kutengwa kwa watu walioambukizwa.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for high fever with rash, especially in unvaccinated children.',
      fr: 'Consultez un médecin pour une fièvre élevée avec éruption cutanée, surtout chez les enfants non vaccinés.',
      sw: 'Tafuta matibabu kwa homa kali na upele, hasa kwa watoto wasiopata chanjo.'
    },
    complications: {
      en: ['pneumonia', 'encephalitis', 'severe diarrhea', 'blindness', 'death'],
      fr: ['pneumonie', 'encéphalite', 'diarrhée sévère', 'cécité', 'décès'],
      sw: ['nimonia', 'encephalitis', 'kuhara kwingi', 'upofu', 'kifo']
    },
    diagnosis: {
      en: 'Clinical diagnosis, blood tests, viral detection.',
      fr: 'Diagnostic clinique, tests sanguins, détection virale.',
      sw: 'Utambuzi wa kimatibabu, vipimo vya damu, kutambua virusi.'
    },
    prognosis: {
      en: 'Good with supportive care. Complications more common in malnourished children.',
      fr: 'Bon avec soins de soutien. Complications plus fréquentes chez les enfants malnutris.',
      sw: 'Nzuri na huduma za msaada. Matatizo ni ya kawaida zaidi kwa watoto wenye utapiamlo.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'pediatric',
    gender: 'all'
  },
  {
    id: 'brucellosis',
    name: {
      en: 'Brucellosis',
      fr: 'Brucellose',
      sw: 'Brucellosis'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['fever', 'sweats', 'headache', 'back pain', 'weakness', 'weight loss'],
      fr: ['fièvre', 'sueurs', 'mal de tête', 'mal de dos', 'faiblesse', 'perte de poids'],
      sw: ['homa', 'jasho', 'maumivu ya kichwa', 'maumivu ya mgongo', 'udhaifu', 'kupungua uzito']
    },
    commonSymptoms: {
      en: ['fever', 'sweats', 'headache', 'back pain'],
      fr: ['fièvre', 'sueurs', 'mal de tête', 'mal de dos'],
      sw: ['homa', 'jasho', 'maumivu ya kichwa', 'maumivu ya mgongo']
    },
    rareSymptoms: {
      en: ['arthritis', 'endocarditis', 'meningitis', 'depression'],
      fr: ['arthrite', 'endocardite', 'méningite', 'dépression'],
      sw: ['ugonjwa wa viungo', 'endocarditis', 'meningitis', 'unyogovu']
    },
    causes: {
      en: ['brucella bacteria', 'contact with infected animals', 'unpasteurized dairy products', 'contaminated meat'],
      fr: ['bactérie brucella', 'contact avec des animaux infectés', 'produits laitiers non pasteurisés', 'viande contaminée'],
      sw: ['bakteria ya brucella', 'mawasiliano na wanyamapori walioambukizwa', 'bidhaa za maziwa zisizopikwa', 'nyama iliyochafuliwa']
    },
    riskFactors: {
      en: ['contact with livestock', 'consuming unpasteurized dairy', 'veterinary work', 'laboratory exposure'],
      fr: ['contact avec le bétail', 'consommation de produits laitiers non pasteurisés', 'travail vétérinaire', 'exposition en laboratoire'],
      sw: ['mawasiliano na mifugo', 'kula bidhaa za maziwa zisizopikwa', 'kazi ya uganga wa wanyamapori', 'kufichuliwa maabara']
    },
    treatment: {
      en: 'Combination antibiotics (doxycycline and rifampin), long treatment duration (6 weeks or more).',
      fr: 'Antibiotiques en combinaison (doxycycline et rifampine), durée de traitement longue (6 semaines ou plus).',
      sw: 'Antibiotiki za mchanganyiko (doxycycline na rifampin), muda mrefu wa matibabu (wiki 6 au zaidi).'
    },
    prevention: {
      en: 'Avoid unpasteurized dairy products, use protective equipment when handling animals, vaccination of livestock.',
      fr: 'Éviter les produits laitiers non pasteurisés, utiliser un équipement de protection lors de la manipulation d\'animaux, vaccination du bétail.',
      sw: 'Epuka bidhaa za maziwa zisizopikwa, tumia vifaa vya kujikinga wakati wa kushughulikia wanyamapori, chanjo za mifugo.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for persistent fever with sweats and body aches, especially with animal exposure.',
      fr: 'Consultez un médecin pour une fièvre persistante avec sueurs et douleurs corporelles, surtout avec exposition animale.',
      sw: 'Tafuta matibabu kwa homa inayoendelea na jasho na maumivu ya mwili, hasa na kufichuliwa na wanyamapori.'
    },
    complications: {
      en: ['chronic infection', 'arthritis', 'endocarditis', 'meningitis', 'depression'],
      fr: ['infection chronique', 'arthrite', 'endocardite', 'méningite', 'dépression'],
      sw: ['maambukizi ya kudumu', 'ugonjwa wa viungo', 'endocarditis', 'meningitis', 'unyogovu']
    },
    diagnosis: {
      en: 'Blood culture, serology tests, bone marrow culture.',
      fr: 'Culture sanguine, tests sérologiques, culture de moelle osseuse.',
      sw: 'Kilimo cha damu, vipimo vya serology, kilimo cha ubongo wa mfupa.'
    },
    prognosis: {
      en: 'Good with appropriate antibiotic treatment. May become chronic if untreated.',
      fr: 'Bon avec un traitement antibiotique approprié. Peut devenir chronique si non traité.',
      sw: 'Nzuri na matibabu sahihi ya antibiotiki. Inaweza kuwa ya kudumu ikiwa haitatibiwa.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'hepatitis-a',
    name: {
      en: 'Hepatitis A',
      fr: 'Hépatite A',
      sw: 'Hepatitis A'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['fatigue', 'nausea', 'vomiting', 'abdominal pain', 'loss of appetite', 'fever', 'dark urine', 'jaundice'],
      fr: ['fatigue', 'nausées', 'vomissements', 'douleur abdominale', 'perte d\'appétit', 'fièvre', 'urine foncée', 'jaunisse'],
      sw: ['uchovu', 'kichefuchefu', 'kutapika', 'maumivu ya tumbo', 'kupoteza hamu ya kula', 'homa', 'mkojo mweusi', 'manjano']
    },
    commonSymptoms: {
      en: ['fatigue', 'nausea', 'jaundice'],
      fr: ['fatigue', 'nausées', 'jaunisse'],
      sw: ['uchovu', 'kichefuchefu', 'manjano']
    },
    rareSymptoms: {
      en: ['acute liver failure'],
      fr: ['insuffisance hépatique aiguë'],
      sw: ['kushindwa kwa ini kwa ghafla']
    },
    causes: {
      en: ['hepatitis A virus', 'contaminated food or water', 'fecal-oral route'],
      fr: ['virus de l\'hépatite A', 'aliments ou eau contaminés', 'voie fécale-orale'],
      sw: ['virusi ya hepatitis A', 'chakula au maji yaliyochafuliwa', 'njia ya kinyesi-mdomo']
    },
    riskFactors: {
      en: ['poor sanitation', 'lack of safe water', 'close contact with infected person'],
      fr: ['mauvais assainissement', 'manque d\'eau potable', 'contact étroit avec une personne infectée'],
      sw: ['usafi duni', 'ukosefu wa maji salama', 'mawasiliano ya karibu na mtu aliyeambukizwa']
    },
    treatment: {
      en: 'Supportive care, rest, proper nutrition, and hydration. No specific antiviral treatment.',
      fr: 'Soins de soutien, repos, nutrition et hydratation adéquates. Pas de traitement antiviral spécifique.',
      sw: 'Huduma za msaada, kupumzika, lishe bora, na maji. Hakuna matibabu maalum ya kuzuia virusi.'
    },
    prevention: {
      en: 'Vaccination, good hygiene, safe food and water practices.',
      fr: 'Vaccination, bonne hygiène, pratiques alimentaires et hydriques sûres.',
      sw: 'Chanjo, usafi bora, mazoea salama ya chakula na maji.'
    },
    whenToSeekHelp: {
      en: 'Seek help for jaundice, severe abdominal pain, or persistent vomiting.',
      fr: 'Consultez en cas de jaunisse, de douleurs abdominales sévères ou de vomissements persistants.',
      sw: 'Tafuta msaada kwa manjano, maumivu makali ya tumbo, au kutapika kunakoendelea.'
    },
    complications: {
      en: ['acute liver failure (rare)'],
      fr: ['insuffisance hépatique aiguë (rare)'],
      sw: ['kushindwa kwa ini kwa ghafla (nadra)']
    },
    diagnosis: {
      en: 'Blood tests for hepatitis A antibodies (IgM).',
      fr: 'Tests sanguins pour les anticorps de l\'hépatite A (IgM).',
      sw: 'Vipimo vya damu kwa kingamwili za hepatitis A (IgM).'
    },
    prognosis: {
      en: 'Most people recover fully without long-term liver damage.',
      fr: 'La plupart des gens se rétablissent complètement sans dommages hépatiques à long terme.',
      sw: 'Watu wengi hupona kabisa bila uharibifu wa ini wa muda mrefu.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'hepatitis-c',
    name: {
      en: 'Hepatitis C',
      fr: 'Hépatite C',
      sw: 'Hepatitis C'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['often asymptomatic', 'fatigue', 'nausea', 'loss of appetite', 'jaundice', 'dark urine', 'abdominal pain'],
      fr: ['souvent asymptomatique', 'fatigue', 'nausées', 'perte d\'appétit', 'jaunisse', 'urine foncée', 'douleur abdominale'],
      sw: ['mara nyingi bila dalili', 'uchovu', 'kichefuchefu', 'kupoteza hamu ya kula', 'manjano', 'mkojo mweusi', 'maumivu ya tumbo']
    },
    commonSymptoms: {
      en: ['fatigue', 'jaundice'],
      fr: ['fatigue', 'jaunisse'],
      sw: ['uchovu', 'manjano']
    },
    rareSymptoms: {
      en: ['cirrhosis', 'liver cancer', 'liver failure'],
      fr: ['cirrhose', 'cancer du foie', 'insuffisance hépatique'],
      sw: ['ugonjwa wa ini', 'saratani ya ini', 'kushindwa kwa ini']
    },
    causes: {
      en: ['hepatitis C virus', 'contact with infected blood', 'unsafe injections', 'blood transfusions'],
      fr: ['virus de l\'hépatite C', 'contact avec du sang infecté', 'injections non sécurisées', 'transfusions sanguines'],
      sw: ['virusi ya hepatitis C', 'mawasiliano na damu iliyoambukizwa', 'sindano zisizo salama', 'kuongezewa damu']
    },
    riskFactors: {
      en: ['sharing needles', 'healthcare exposure', 'unsterilized medical equipment', 'mother with hepatitis C'],
      fr: ['partage d\'aiguilles', 'exposition aux soins de santé', 'équipement médical non stérilisé', 'mère atteinte d\'hépatite C'],
      sw: ['kushiriki sindano', 'kufichuliwa katika huduma za afya', 'vifaa vya matibabu visivyosafishwa', 'mama mwenye hepatitis C']
    },
    treatment: {
      en: 'Direct-acting antiviral (DAA) medications can cure most cases of hepatitis C.',
      fr: 'Les médicaments antiviraux à action directe (AAD) peuvent guérir la plupart des cas d\'hépatite C.',
      sw: 'Dawa za kuzuia virusi za moja kwa moja (DAA) zinaweza kuponya visa vingi vya hepatitis C.'
    },
    prevention: {
      en: 'No vaccine available. Prevention includes safe injection practices, screening blood products, and avoiding sharing personal items.',
      fr: 'Aucun vaccin disponible. La prévention comprend des pratiques d\'injection sûres, le dépistage des produits sanguins et l\'évitement du partage d\'objets personnels.',
      sw: 'Hakuna chanjo. Kinga inajumuisha mazoea salama ya sindano, uchunguzi wa bidhaa za damu, na kuepuka kushiriki vitu vya kibinafsi.'
    },
    whenToSeekHelp: {
      en: 'Get tested if you have risk factors. Seek help for persistent fatigue or jaundice.',
      fr: 'Faites-vous tester si vous avez des facteurs de risque. Consultez en cas de fatigue persistante ou de jaunisse.',
      sw: 'Pima ikiwa una sababu za hatari. Tafuta msaada kwa uchovu unaoendelea au manjano.'
    },
    complications: {
      en: ['chronic hepatitis C', 'cirrhosis', 'liver cancer', 'liver failure'],
      fr: ['hépatite C chronique', 'cirrhose', 'cancer du foie', 'insuffisance hépatique'],
      sw: ['hepatitis C ya kudumu', 'ugonjwa wa ini', 'saratani ya ini', 'kushindwa kwa ini']
    },
    diagnosis: {
      en: 'Blood tests for hepatitis C antibodies and viral RNA.',
      fr: 'Tests sanguins pour les anticorps de l\'hépatite C et l\'ARN viral.',
      sw: 'Vipimo vya damu kwa kingamwili za hepatitis C na RNA ya virusi.'
    },
    prognosis: {
      en: 'Curable with modern antiviral treatment. Untreated chronic infection can lead to severe liver disease.',
      fr: 'Guérissable avec un traitement antiviral moderne. L\'infection chronique non traitée peut entraîner une maladie hépatique grave.',
      sw: 'Inaponyeka na matibabu ya kisasa ya kuzuia virusi. Maambukizi ya kudumu yasiyotibiwa yanaweza kusababisha ugonjwa mbaya wa ini.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'rabies',
    name: {
      en: 'Rabies',
      fr: 'Rage',
      sw: 'Kichaa cha Mbwa'
    },
    category: 'infectious',
    severity: 'emergency',
    symptoms: {
      en: ['fever', 'headache', 'nausea', 'anxiety', 'confusion', 'hydrophobia (fear of water)', 'agitation', 'paralysis', 'coma'],
      fr: ['fièvre', 'mal de tête', 'nausées', 'anxiété', 'confusion', 'hydrophobie (peur de l\'eau)', 'agitation', 'paralysie', 'coma'],
      sw: ['homa', 'maumivu ya kichwa', 'kichefuchefu', 'wasiwasi', 'kuchanganyikiwa', 'hofu ya maji', 'msukosuko', 'kupooza', 'koma']
    },
    commonSymptoms: {
      en: ['fever', 'headache', 'anxiety', 'confusion'],
      fr: ['fièvre', 'mal de tête', 'anxiété', 'confusion'],
      sw: ['homa', 'maumivu ya kichwa', 'wasiwasi', 'kuchanganyikiwa']
    },
    rareSymptoms: {
      en: ['aerophobia (fear of drafts or fresh air)'],
      fr: ['aérophobie (peur des courants d\'air ou de l\'air frais)'],
      sw: ['hofu ya hewa']
    },
    causes: {
      en: ['rabies virus', 'bite or scratch from an infected animal (dogs, bats, monkeys)'],
      fr: ['virus de la rage', 'morsure ou griffure d\'un animal infecté (chiens, chauves-souris, singes)'],
      sw: ['virusi ya kichaa cha mbwa', 'kuumwa au kukwaruzwa na mnyama aliyeambukizwa (mbwa, popo, nyani)']
    },
    riskFactors: {
      en: ['contact with wild or unvaccinated domestic animals', 'travel to high-risk areas', 'veterinary work'],
      fr: ['contact avec des animaux sauvages ou domestiques non vaccinés', 'voyage dans des zones à haut risque', 'travail vétérinaire'],
      sw: ['mawasiliano na wanyama wa porini au wa nyumbani wasiochanjwa', 'kusafiri kwenda maeneo yenye hatari kubwa', 'kazi ya mifugo']
    },
    treatment: {
      en: 'Post-exposure prophylaxis (PEP) with rabies vaccine and immunoglobulin is highly effective if given immediately after exposure. Once symptoms appear, the disease is almost always fatal.',
      fr: 'La prophylaxie post-exposition (PPE) avec le vaccin antirabique et l\'immunoglobuline est très efficace si elle est administrée immédiatement après l\'exposition. Une fois les symptômes apparus, la maladie est presque toujours mortelle.',
      sw: 'Kinga baada ya kuambukizwa (PEP) na chanjo ya kichaa cha mbwa na immunoglobulini ni nzuri sana ikiwa itatolewa mara tu baada ya kuambukizwa. Dalili zikionekana, ugonjwa huu karibu kila mara huua.'
    },
    prevention: {
      en: 'Vaccination of domestic animals (especially dogs), pre-exposure vaccination for high-risk individuals, avoiding contact with wild animals.',
      fr: 'Vaccination des animaux domestiques (en particulier les chiens), vaccination pré-exposition pour les personnes à haut risque, éviter le contact avec les animaux sauvages.',
      sw: 'Chanjo ya wanyama wa nyumbani (haswa mbwa), chanjo ya kabla ya kuambukizwa kwa watu walio katika hatari kubwa, kuepuka mawasiliano na wanyama wa porini.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate medical care after any bite or scratch from an animal that could have rabies.',
      fr: 'Consultez immédiatement un médecin après toute morsure ou griffure d\'un animal susceptible d\'avoir la rage.',
      sw: 'Tafuta huduma ya matibabu ya haraka baada ya kuumwa au kukwaruzwa na mnyama yeyote anayeweza kuwa na kichaa cha mbwa.'
    },
    complications: {
      en: ['paralysis', 'coma', 'death'],
      fr: ['paralysie', 'coma', 'décès'],
      sw: ['kupooza', 'koma', 'kifo']
    },
    diagnosis: {
      en: 'Diagnosis is difficult before symptom onset. Tests on saliva, skin, or brain tissue can confirm.',
      fr: 'Le diagnostic est difficile avant l\'apparition des symptômes. Des tests sur la salive, la peau ou le tissu cérébral peuvent confirmer.',
      sw: 'Utambuzi ni mgumu kabla ya dalili kuanza. Vipimo vya mate, ngozi, au tishu za ubongo vinaweza kuthibitisha.'
    },
    prognosis: {
      en: 'Almost 100% fatal once symptoms develop. Survival is extremely rare.',
      fr: 'Presque 100% mortel une fois les symptômes développés. La survie est extrêmement rare.',
      sw: 'Karibu 100% huua mara tu dalili zinapoanza. Kupona ni nadra sana.'
    },
    source: 'who',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'tetanus',
    name: {
      en: 'Tetanus (Lockjaw)',
      fr: 'Tétanos',
      sw: 'Pepopunda'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['jaw cramping', 'muscle stiffness', 'painful muscle spasms', 'difficulty swallowing', 'fever', 'sweating', 'high blood pressure'],
      fr: ['crampes à la mâchoire', 'raideur musculaire', 'spasmes musculaires douloureux', 'difficulté à avaler', 'fièvre', 'transpiration', 'hypertension artérielle'],
      sw: ['kukakamaa kwa taya', 'ugumu wa misuli', 'mshtuko wa misuli wenye maumivu', 'ugumu wa kumeza', 'homa', 'kutokwa na jasho', 'shinikizo la damu la juu']
    },
    commonSymptoms: {
      en: ['jaw cramping', 'muscle stiffness', 'painful muscle spasms'],
      fr: ['crampes à la mâchoire', 'raideur musculaire', 'spasmes musculaires douloureux'],
      sw: ['kukakamaa kwa taya', 'ugumu wa misuli', 'mshtuko wa misuli wenye maumivu']
    },
    rareSymptoms: {
      en: ['breathing problems', 'bone fractures from spasms', 'cardiac arrest'],
      fr: ['problèmes respiratoires', 'fractures osseuses dues aux spasmes', 'arrêt cardiaque'],
      sw: ['matatizo ya kupumua', 'kuvunjika kwa mifupa kutokana na mshtuko', 'kusimama kwa moyo']
    },
    causes: {
      en: ['clostridium tetani bacteria spores entering a wound'],
      fr: ['spores de la bactérie clostridium tetani entrant dans une plaie'],
      sw: ['spora za bakteria ya clostridium tetani kuingia kwenye jeraha']
    },
    riskFactors: {
      en: ['unvaccinated or incomplete vaccination', 'puncture wounds', 'burns', 'animal bites', 'unclean childbirth'],
      fr: ['non vacciné ou vaccination incomplète', 'plaies perforantes', 'brûlures', 'morsures d\'animaux', 'accouchement non hygiénique'],
      sw: ['kutopata chanjo au chanjo isiyokamilika', 'vidonda vya kuchomwa', 'kuungua', 'kuumwa na wanyama', 'uzazi usio safi']
    },
    treatment: {
      en: 'Hospitalization, tetanus immune globulin (TIG), wound care, medications to control spasms, and supportive care.',
      fr: 'Hospitalisation, immunoglobuline tétanique (IGT), soins des plaies, médicaments pour contrôler les spasmes et soins de soutien.',
      sw: 'Kulazwa hospitalini, globulini ya kinga ya pepopunda (TIG), utunzaji wa jeraha, dawa za kudhibiti mshtuko, na huduma za msaada.'
    },
    prevention: {
      en: 'Tetanus vaccination (DTP, Tdap, Td). Booster shots every 10 years.',
      fr: 'Vaccination contre le tétanos (DTC, Tdap, Td). Rappels tous les 10 ans.',
      sw: 'Chanjo ya pepopunda (DTP, Tdap, Td). Chanjo ya nyongeza kila baada ya miaka 10.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate medical care for any deep or contaminated wound, especially if vaccination status is unknown.',
      fr: 'Consultez immédiatement un médecin pour toute plaie profonde ou contaminée, surtout si le statut vaccinal est inconnu.',
      sw: 'Tafuta huduma ya matibabu ya haraka kwa jeraha lolote la kina au lililochafuliwa, hasa ikiwa hali ya chanjo haijulikani.'
    },
    complications: {
      en: ['breathing difficulty', 'pneumonia', 'death'],
      fr: ['difficulté respiratoire', 'pneumonie', 'décès'],
      sw: ['ugumu wa kupumua', 'nimonia', 'kifo']
    },
    diagnosis: {
      en: 'Clinical diagnosis based on symptoms. There are no lab tests for tetanus.',
      fr: 'Diagnostic clinique basé sur les symptômes. Il n\'y a pas de tests de laboratoire pour le tétanos.',
      sw: 'Utambuzi wa kimatibabu kulingana na dalili. Hakuna vipimo vya maabara vya pepopunda.'
    },
    prognosis: {
      en: 'Can be fatal, especially in infants and the elderly. Recovery is slow.',
      fr: 'Peut être mortel, en particulier chez les nourrissons et les personnes âgées. La guérison est lente.',
      sw: 'Inaweza kuua, hasa kwa watoto wachanga na wazee. Kupona ni polepole.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'leprosy',
    name: {
      en: 'Leprosy (Hansen\'s Disease)',
      fr: 'Lèpre (Maladie de Hansen)',
      sw: 'Ukoma (Ugonjwa wa Hansen)'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['discolored skin patches', 'numbness in affected areas', 'muscle weakness', 'thickened nerves', 'eye problems', 'stuffy nose'],
      fr: ['taches cutanées décolorées', 'engourdissement dans les zones touchées', 'faiblesse musculaire', 'nerfs épaissis', 'problèmes oculaires', 'nez bouché'],
      sw: ['mabaka ya ngozi yaliyobadilika rangi', 'ganzi katika maeneo yaliyoathirika', 'udhaifu wa misuli', 'mishipa iliyonenepa', 'matatizo ya macho', 'pua iliyoziba']
    },
    commonSymptoms: {
      en: ['discolored skin patches', 'numbness', 'muscle weakness'],
      fr: ['taches cutanées décolorées', 'engourdissement', 'faiblesse musculaire'],
      sw: ['mabaka ya ngozi yaliyobadilika rangi', 'ganzi', 'udhaifu wa misuli']
    },
    rareSymptoms: {
      en: ['loss of fingers and toes', 'blindness', 'facial disfigurement'],
      fr: ['perte des doigts et des orteils', 'cécité', 'défiguration faciale'],
      sw: ['kupoteza vidole vya mikono na miguu', 'upofu', 'kuharibika kwa uso']
    },
    causes: {
      en: ['mycobacterium leprae bacteria', 'prolonged close contact with an untreated person'],
      fr: ['bactérie mycobacterium leprae', 'contact étroit et prolongé avec une personne non traitée'],
      sw: ['bakteria ya mycobacterium leprae', 'mawasiliano ya karibu ya muda mrefu na mtu asiyetibiwa']
    },
    riskFactors: {
      en: ['living in endemic areas', 'close contact with untreated patients', 'weakened immune system'],
      fr: ['vivre dans des zones endémiques', 'contact étroit avec des patients non traités', 'système immunitaire affaibli'],
      sw: ['kuishi katika maeneo ya maambukizi', 'mawasiliano ya karibu na wagonjwa wasiotibiwa', 'mfumo dhaifu wa kinga']
    },
    treatment: {
      en: 'Multi-drug therapy (MDT) with antibiotics (dapsone, rifampicin, clofazimine) for 6-12 months.',
      fr: 'Polychimiothérapie (PCT) avec des antibiotiques (dapsone, rifampicine, clofazimine) pendant 6-12 mois.',
      sw: 'Tiba ya dawa nyingi (MDT) na antibiotiki (dapsone, rifampicin, clofazimine) kwa miezi 6-12.'
    },
    prevention: {
      en: 'Early diagnosis and treatment of infected individuals to prevent spread.',
      fr: 'Diagnostic et traitement précoces des personnes infectées pour prévenir la propagation.',
      sw: 'Utambuzi wa mapema na matibabu ya watu walioambukizwa ili kuzuia kuenea.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for any persistent skin patches with loss of sensation.',
      fr: 'Consultez un médecin pour toute tache cutanée persistante avec perte de sensation.',
      sw: 'Muone daktari kwa mabaka yoyote ya ngozi yanayoendelea na kupoteza hisia.'
    },
    complications: {
      en: ['nerve damage', 'disability', 'disfigurement', 'blindness'],
      fr: ['lésions nerveuses', 'handicap', 'défiguration', 'cécité'],
      sw: ['uharibifu wa neva', 'ulemavu', 'kuharibika kwa mwili', 'upofu']
    },
    diagnosis: {
      en: 'Clinical examination of skin and nerves, skin smear or biopsy.',
      fr: 'Examen clinique de la peau et des nerfs, frottis cutané ou biopsie.',
      sw: 'Uchunguzi wa kimatibabu wa ngozi na neva, kupaka ngozi au biopsy.'
    },
    prognosis: {
      en: 'Curable with MDT. Early treatment prevents disability.',
      fr: 'Guérissable avec la PCT. Un traitement précoce prévient le handicap.',
      sw: 'Inaponyeka na MDT. Matibabu ya mapema huzuia ulemavu.'
    },
    source: 'who',
    prevalenceInAfrica: 'low',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'trachoma',
    name: {
      en: 'Trachoma',
      fr: 'Trachome',
      sw: 'Trakoma'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['eye discharge', 'swollen eyelids', 'itchy eyes', 'light sensitivity', 'in-turned eyelashes (trichiasis)'],
      fr: ['écoulement oculaire', 'paupières enflées', 'démangeaisons oculaires', 'sensibilité à la lumière', 'cils retournés vers l\'intérieur (trichiasis)'],
      sw: ['kutokwa na usaha machoni', 'kuvimba kwa kope', 'macho kuwasha', 'kuogopa mwanga', 'kope zilizoingia ndani (trichiasis)']
    },
    commonSymptoms: {
      en: ['eye discharge', 'itchy eyes', 'swollen eyelids'],
      fr: ['écoulement oculaire', 'démangeaisons oculaires', 'paupières enflées'],
      sw: ['kutokwa na usaha machoni', 'macho kuwasha', 'kuvimba kwa kope']
    },
    rareSymptoms: {
      en: ['corneal scarring', 'blindness'],
      fr: ['cicatrisation cornéenne', 'cécité'],
      sw: ['makovu kwenye konea', 'upofu']
    },
    causes: {
      en: ['chlamydia trachomatis bacteria', 'contact with eye/nose discharge of infected people', 'flies'],
      fr: ['bactérie chlamydia trachomatis', 'contact avec les sécrétions oculaires/nasales de personnes infectées', 'mouches'],
      sw: ['bakteria ya chlamydia trachomatis', 'mawasiliano na majimaji ya macho/pua ya watu walioambukizwa', 'nzi']
    },
    riskFactors: {
      en: ['poor hygiene', 'crowded households', 'lack of clean water', 'young children'],
      fr: ['mauvaise hygiène', 'ménages surpeuplés', 'manque d\'eau potable', 'jeunes enfants'],
      sw: ['usafi duni', 'nyumba zenye msongamano', 'ukosefu wa maji safi', 'watoto wadogo']
    },
    treatment: {
      en: 'Antibiotics (azithromycin). Surgery for in-turned eyelashes (trichiasis).',
      fr: 'Antibiotiques (azithromycine). Chirurgie pour les cils retournés (trichiasis).',
      sw: 'Antibiotiki (azithromycin). Upasuaji kwa kope zilizoingia ndani (trichiasis).'
    },
    prevention: {
      en: 'WHO SAFE strategy: Surgery, Antibiotics, Facial cleanliness, Environmental improvement.',
      fr: 'Stratégie SAFE de l\'OMS : Chirurgie, Antibiotiques, propreté du Visage, Environnement amélioré.',
      sw: 'Mkakati wa WHO SAFE: Upasuaji, Antibiotiki, Usafi wa uso, Uboreshaji wa mazingira.'
    },
    whenToSeekHelp: {
      en: 'Seek help for persistent eye irritation, discharge, or if eyelashes are rubbing on the eye.',
      fr: 'Consultez en cas d\'irritation oculaire persistante, d\'écoulement ou si les cils frottent sur l\'œil.',
      sw: 'Tafuta msaada kwa muwasho wa macho unaoendelea, kutokwa na usaha, au ikiwa kope zinasugua jicho.'
    },
    complications: {
      en: ['corneal scarring', 'blindness'],
      fr: ['cicatrisation cornéenne', 'cécité'],
      sw: ['makovu kwenye konea', 'upofu']
    },
    diagnosis: {
      en: 'Clinical examination of the eyelids and cornea.',
      fr: 'Examen clinique des paupières et de la cornée.',
      sw: 'Uchunguzi wa kimatibabu wa kope na konea.'
    },
    prognosis: {
      en: 'Good with early treatment. Advanced stages can lead to irreversible blindness.',
      fr: 'Bon avec un traitement précoce. Les stades avancés peuvent entraîner une cécité irréversible.',
      sw: 'Nzuri na matibabu ya mapema. Hatua za juu zinaweza kusababisha upofu usioweza kurekebishwa.'
    },
    source: 'who',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'african-trypanosomiasis',
    name: {
      en: 'African Trypanosomiasis (Sleeping Sickness)',
      fr: 'Trypanosomiase Africaine (Maladie du Sommeil)',
      sw: 'Trypanosomiasis ya Kiafrika (Ugonjwa wa Malale)'
    },
    category: 'infectious',
    severity: 'high',
    symptoms: {
      en: ['fever', 'headache', 'joint pains', 'itching', 'swollen lymph nodes', 'confusion', 'poor coordination', 'sleep disturbances'],
      fr: ['fièvre', 'maux de tête', 'douleurs articulaires', 'démangeaisons', 'ganglions lymphatiques enflés', 'confusion', 'mauvaise coordination', 'troubles du sommeil'],
      sw: ['homa', 'maumivu ya kichwa', 'maumivu ya viungo', 'muwasho', 'kuvimba kwa tezi', 'kuchanganyikiwa', 'uratibu mbaya', 'matatizo ya usingizi']
    },
    commonSymptoms: {
      en: ['fever', 'headache', 'swollen lymph nodes', 'sleep disturbances'],
      fr: ['fièvre', 'maux de tête', 'ganglions lymphatiques enflés', 'troubles du sommeil'],
      sw: ['homa', 'maumivu ya kichwa', 'kuvimba kwa tezi', 'matatizo ya usingizi']
    },
    rareSymptoms: {
      en: ['coma', 'personality changes', 'seizures'],
      fr: ['coma', 'changements de personnalité', 'convulsions'],
      sw: ['koma', 'mabadiliko ya tabia', 'mshtuko']
    },
    causes: {
      en: ['trypanosoma brucei parasite', 'bite of an infected tsetse fly'],
      fr: ['parasite trypanosoma brucei', 'piqûre d\'une mouche tsé-tsé infectée'],
      sw: ['vimelea vya trypanosoma brucei', 'kuumwa na mbung\'o aliyeambukizwa']
    },
    riskFactors: {
      en: ['living in rural areas of sub-Saharan Africa', 'occupation in agriculture, fishing, or hunting'],
      fr: ['vivre dans les zones rurales d\'Afrique subsaharienne', 'profession dans l\'agriculture, la pêche ou la chasse'],
      sw: ['kuishi katika maeneo ya vijijini ya Afrika Kusini mwa Jangwa la Sahara', 'kazi katika kilimo, uvuvi, au uwindaji']
    },
    treatment: {
      en: 'Depends on the stage of the disease. Medications include pentamidine, suramin, melarsoprol, and eflornithine.',
      fr: 'Dépend du stade de la maladie. Les médicaments comprennent la pentamidine, la suramine, le mélarsoprol et l\'éflornithine.',
      sw: 'Inategemea hatua ya ugonjwa. Dawa ni pamoja na pentamidine, suramin, melarsoprol, na eflornithine.'
    },
    prevention: {
      en: 'Avoiding tsetse fly bites by wearing neutral-colored clothing and using insect repellent.',
      fr: 'Éviter les piqûres de mouches tsé-tsé en portant des vêtements de couleur neutre et en utilisant un insectifuge.',
      sw: 'Kuepuka kuumwa na mbung\'o kwa kuvaa nguo za rangi isiyo ya kuvutia na kutumia dawa ya kufukuza wadudu.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for persistent fever and neurological symptoms after visiting an endemic area.',
      fr: 'Consultez un médecin pour une fièvre persistante et des symptômes neurologiques après avoir visité une zone endémique.',
      sw: 'Tafuta huduma ya matibabu kwa homa inayoendelea na dalili za neva baada ya kutembelea eneo la maambukizi.'
    },
    complications: {
      en: ['coma', 'death if untreated'],
      fr: ['coma', 'décès si non traité'],
      sw: ['koma', 'kifo ikiwa haitatibiwa']
    },
    diagnosis: {
      en: 'Microscopic examination of blood, lymph node aspirate, or cerebrospinal fluid.',
      fr: 'Examen microscopique du sang, d\'un aspirat de ganglion lymphatique ou du liquide céphalo-rachidien.',
      sw: 'Uchunguzi wa darubini wa damu, majimaji ya tezi, au maji ya uti wa mgongo.'
    },
    prognosis: {
      en: 'Fatal if untreated. Treatment is effective but can have serious side effects.',
      fr: 'Mortel si non traité. Le traitement est efficace mais peut avoir des effets secondaires graves.',
      sw: 'Huuwa ikiwa haitatibiwa. Matibabu ni madhubuti lakini yanaweza kuwa na madhara makubwa.'
    },
    source: 'who',
    prevalenceInAfrica: 'low',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'chikungunya',
    name: {
      en: 'Chikungunya',
      fr: 'Chikungunya',
      sw: 'Chikungunya'
    },
    category: 'infectious',
    severity: 'medium',
    symptoms: {
      en: ['fever', 'severe joint pain', 'headache', 'muscle pain', 'rash', 'fatigue'],
      fr: ['fièvre', 'douleur articulaire sévère', 'mal de tête', 'douleur musculaire', 'éruption cutanée', 'fatigue'],
      sw: ['homa', 'maumivu makali ya viungo', 'maumivu ya kichwa', 'maumivu ya misuli', 'upele', 'uchovu']
    },
    commonSymptoms: {
      en: ['fever', 'severe joint pain'],
      fr: ['fièvre', 'douleur articulaire sévère'],
      sw: ['homa', 'maumivu makali ya viungo']
    },
    rareSymptoms: {
      en: ['persistent joint pain', 'neurological complications', 'myocarditis'],
      fr: ['douleur articulaire persistante', 'complications neurologiques', 'myocardite'],
      sw: ['maumivu ya viungo yanayoendelea', 'matatizo ya neva', 'myocarditis']
    },
    causes: {
      en: ['chikungunya virus', 'bite from infected Aedes mosquitoes'],
      fr: ['virus chikungunya', 'piqûre de moustiques Aedes infectés'],
      sw: ['virusi ya chikungunya', 'kuumwa na mbu wa Aedes walioambukizwa']
    },
    riskFactors: {
      en: ['living in or traveling to tropical and subtropical areas'],
      fr: ['vivre ou voyager dans des zones tropicales et subtropicales'],
      sw: ['kuishi au kusafiri kwenda maeneo ya kitropiki na ya chini ya tropiki']
    },
    treatment: {
      en: 'No specific antiviral treatment. Supportive care with rest, fluids, and pain relievers.',
      fr: 'Pas de traitement antiviral spécifique. Soins de soutien avec repos, liquides et analgésiques.',
      sw: 'Hakuna matibabu maalum ya kuzuia virusi. Huduma za msaada na kupumzika, maji, na dawa za maumivu.'
    },
    prevention: {
      en: 'Mosquito control, using insect repellent, wearing protective clothing.',
      fr: 'Contrôle des moustiques, utilisation d\'un insectifuge, port de vêtements de protection.',
      sw: 'Udhibiti wa mbu, kutumia dawa ya kufukuza wadudu, kuvaa nguo za kujikinga.'
    },
    whenToSeekHelp: {
      en: 'Seek medical care for high fever and severe joint pain, especially in endemic areas.',
      fr: 'Consultez un médecin pour une fièvre élevée et des douleurs articulaires sévères, en particulier dans les zones endémiques.',
      sw: 'Tafuta huduma ya matibabu kwa homa kali na maumivu makali ya viungo, hasa katika maeneo ya maambukizi.'
    },
    complications: {
      en: ['chronic debilitating joint pain'],
      fr: ['douleurs articulaires chroniques invalidantes'],
      sw: ['maumivu ya viungo ya kudumu yanayodhoofisha']
    },
    diagnosis: {
      en: 'Blood tests for viral RNA or antibodies.',
      fr: 'Tests sanguins pour l\'ARN viral ou les anticorps.',
      sw: 'Vipimo vya damu kwa RNA ya virusi au kingamwili.'
    },
    prognosis: {
      en: 'Most patients recover fully, but joint pain can persist for months or years.',
      fr: 'La plupart des patients se rétablissent complètement, mais les douleurs articulaires peuvent persister pendant des mois ou des années.',
      sw: 'Wagonjwa wengi hupona kabisa, lakini maumivu ya viungo yanaweza kuendelea kwa miezi au miaka.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'zika-virus',
    name: {
      en: 'Zika Virus',
      fr: 'Virus Zika',
      sw: 'Virusi vya Zika'
    },
    category: 'infectious',
    severity: 'low',
    symptoms: {
      en: ['mild fever', 'rash', 'joint pain', 'conjunctivitis (red eyes)', 'headache', 'muscle pain'],
      fr: ['fièvre légère', 'éruption cutanée', 'douleur articulaire', 'conjonctivite (yeux rouges)', 'mal de tête', 'douleur musculaire'],
      sw: ['homa ndogo', 'upele', 'maumivu ya viungo', 'macho mekundu', 'maumivu ya kichwa', 'maumivu ya misuli']
    },
    commonSymptoms: {
      en: ['rash', 'joint pain', 'conjunctivitis'],
      fr: ['éruption cutanée', 'douleur articulaire', 'conjonctivite'],
      sw: ['upele', 'maumivu ya viungo', 'macho mekundu']
    },
    rareSymptoms: {
      en: ['Guillain-Barré syndrome'],
      fr: ['syndrome de Guillain-Barré'],
      sw: ['ugonjwa wa Guillain-Barré']
    },
    causes: {
      en: ['zika virus', 'bite from infected Aedes mosquitoes', 'sexual transmission', 'mother to fetus'],
      fr: ['virus zika', 'piqûre de moustiques Aedes infectés', 'transmission sexuelle', 'de la mère au fœtus'],
      sw: ['virusi ya zika', 'kuumwa na mbu wa Aedes walioambukizwa', 'maambukizi ya kingono', 'kutoka kwa mama kwenda kwa mtoto']
    },
    riskFactors: {
      en: ['living in or traveling to areas with Zika outbreaks', 'unprotected sex with someone from an affected area'],
      fr: ['vivre ou voyager dans des zones avec des épidémies de Zika', 'rapports sexuels non protégés avec une personne d\'une zone touchée'],
      sw: ['kuishi au kusafiri kwenda maeneo yenye milipuko ya Zika', 'ngono isiyo salama na mtu kutoka eneo lililoathirika']
    },
    treatment: {
      en: 'No specific treatment. Supportive care with rest, fluids, and pain/fever relievers.',
      fr: 'Pas de traitement spécifique. Soins de soutien avec repos, liquides et analgésiques/antipyrétiques.',
      sw: 'Hakuna matibabu maalum. Huduma za msaada na kupumzika, maji, na dawa za maumivu/homa.'
    },
    prevention: {
      en: 'Mosquito bite prevention. Pregnant women should avoid travel to affected areas. Use condoms.',
      fr: 'Prévention des piqûres de moustiques. Les femmes enceintes doivent éviter de voyager dans les zones touchées. Utiliser des préservatifs.',
      sw: 'Kuzuia kuumwa na mbu. Wanawake wajawazito wanapaswa kuepuka kusafiri kwenda maeneo yaliyoathirika. Tumia kondomu.'
    },
    whenToSeekHelp: {
      en: 'Consult a doctor if you develop symptoms after visiting an affected area, especially if pregnant.',
      fr: 'Consultez un médecin si vous développez des symptômes après avoir visité une zone touchée, surtout si vous êtes enceinte.',
      sw: 'Wasiliana na daktari ikiwa utapata dalili baada ya kutembelea eneo lililoathirika, hasa ikiwa ni mjamzito.'
    },
    complications: {
      en: ['microcephaly and other congenital abnormalities in babies born to infected mothers'],
      fr: ['microcéphalie et autres anomalies congénitales chez les bébés nés de mères infectées'],
      sw: ['microcephaly na kasoro zingine za kuzaliwa kwa watoto waliozaliwa na mama walioambukizwa']
    },
    diagnosis: {
      en: 'Blood or urine tests can detect the virus.',
      fr: 'Des tests sanguins ou urinaires peuvent détecter le virus.',
      sw: 'Vipimo vya damu au mkojo vinaweza kugundua virusi.'
    },
    prognosis: {
      en: 'Symptoms are usually mild and last for a few days. The main concern is the risk to a developing fetus.',
      fr: 'Les symptômes sont généralement légers et durent quelques jours. La principale préoccupation est le risque pour un fœtus en développement.',
      sw: 'Dalili kawaida ni ndogo na hudumu kwa siku chache. Wasiwasi mkuu ni hatari kwa mtoto anayekua tumboni.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  }
];
