import { ComprehensiveDisease } from './types';

export const respiratoryDiseases: ComprehensiveDisease[] = [
  {
    id: 'pneumonia',
    name: {
      en: 'Pneumonia',
      fr: 'Pneumonie',
      sw: 'Nimonia'
    },
    category: 'respiratory',
    severity: 'high',
    symptoms: {
      en: ['cough with phlegm', 'fever', 'chills', 'difficulty breathing', 'chest pain', 'fatigue', 'rapid breathing', 'sweating'],
      fr: ['toux avec expectorations', 'fièvre', 'frissons', 'difficulté à respirer', 'douleur thoracique', 'fatigue', 'respiration rapide', 'transpiration'],
      sw: ['kikohozi na makohozi', 'homa', 'baridi', 'shida ya kupumua', 'maumivu ya kifua', 'uchovu', 'kupumua kwa haraka', 'jasho']
    },
    commonSymptoms: {
      en: ['cough with phlegm', 'fever', 'difficulty breathing', 'chest pain', 'fatigue'],
      fr: ['toux avec expectorations', 'fièvre', 'difficulté à respirer', 'douleur thoracique', 'fatigue'],
      sw: ['kikohozi na makohozi', 'homa', 'shida ya kupumua', 'maumivu ya kifua', 'uchovu']
    },
    rareSymptoms: {
      en: ['confusion', 'blue lips', 'severe chest pain', 'coughing blood', 'low body temperature'],
      fr: ['confusion', 'lèvres bleues', 'douleur thoracique sévère', 'toux avec sang', 'température corporelle basse'],
      sw: ['kuchanganyikiwa', 'midomo ya buluu', 'maumivu makali ya kifua', 'kikohozi na damu', 'joto la chini la mwili']
    },
    causes: {
      en: ['bacteria', 'viruses', 'fungi', 'aspiration', 'hospital-acquired infection', 'community-acquired infection'],
      fr: ['bactéries', 'virus', 'champignons', 'aspiration', 'infection nosocomiale', 'infection communautaire'],
      sw: ['bakteria', 'virusi', 'kuvu', 'kumeza', 'maambukizi ya hospitalini', 'maambukizi ya jamii']
    },
    riskFactors: {
      en: ['age over 65', 'chronic diseases', 'smoking', 'immunocompromised', 'hospitalization', 'mechanical ventilation'],
      fr: ['âge supérieur à 65 ans', 'maladies chroniques', 'tabagisme', 'immunodéprimé', 'hospitalisation', 'ventilation mécanique'],
      sw: ['umri zaidi ya miaka 65', 'magonjwa ya kudumu', 'sigara', 'upungufu wa kinga', 'kulazwa hospitalini', 'kupumua kwa mashine']
    },
    treatment: {
      en: 'Antibiotics for bacterial pneumonia, supportive care, oxygen therapy, hospitalization if severe, antiviral drugs for viral pneumonia.',
      fr: 'Antibiotiques pour la pneumonie bactérienne, soins de soutien, oxygénothérapie, hospitalisation si grave, médicaments antiviraux pour la pneumonie virale.',
      sw: 'Antibiotiki kwa nimonia ya bakteria, huduma za msaada, matibabu ya oksijeni, kulazwa hospitalini ikiwa ni mbaya, dawa za virusi kwa nimonia ya virusi.'
    },
    prevention: {
      en: 'Vaccination (pneumococcal, flu), good hygiene, avoid smoking, healthy lifestyle, avoid sick people.',
      fr: 'Vaccination (pneumococcique, grippe), bonne hygiène, éviter de fumer, mode de vie sain, éviter les personnes malades.',
      sw: 'Chanjo (pneumococcal, homa ya mafua), usafi mzuri, epuka sigara, mtindo wa maisha wa afya, epuka watu wagonjwa.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for difficulty breathing, high fever, chest pain, or if symptoms worsen rapidly.',
      fr: 'Consultez immédiatement pour des difficultés respiratoires, une fièvre élevée, des douleurs thoraciques, ou si les symptômes s\'aggravent rapidement.',
      sw: 'Tafuta matibabu ya haraka kwa shida ya kupumua, homa kali, maumivu ya kifua, au ikiwa dalili zinazidi kuwa mbaya haraka.'
    },
    complications: {
      en: ['respiratory failure', 'sepsis', 'lung abscess', 'pleural effusion', 'empyema', 'bacteremia'],
      fr: ['insuffisance respiratoire', 'sepsis', 'abcès pulmonaire', 'épanchement pleural', 'empyème', 'bactériémie'],
      sw: ['kushindwa kwa kupumua', 'sepsis', 'jipu la pafu', 'maji ya pleural', 'empyema', 'bakteria damu']
    },
    diagnosis: {
      en: 'Chest X-ray, blood tests, sputum culture, CT scan, pulse oximetry.',
      fr: 'Radiographie thoracique, tests sanguins, culture d\'expectoration, scanner, oxymétrie de pouls.',
      sw: 'X-ray ya kifua, vipimo vya damu, kilimo cha makohozi, CT scan, kipimo cha oksijeni.'
    },
    prognosis: {
      en: 'Good with appropriate treatment. Severity depends on age, health status, and causative organism.',
      fr: 'Bon avec un traitement approprié. La gravité dépend de l\'âge, de l\'état de santé et de l\'organisme causatif.',
      sw: 'Nzuri na matibabu sahihi. Ukali unategemea umri, hali ya afya, na kimelea kinachosababisha.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'asthma',
    name: {
      en: 'Asthma',
      fr: 'Asthme',
      sw: 'Pumu'
    },
    category: 'respiratory',
    severity: 'medium',
    symptoms: {
      en: ['wheezing', 'shortness of breath', 'chest tightness', 'coughing', 'difficulty breathing', 'rapid breathing'],
      fr: ['sifflement', 'essoufflement', 'oppression thoracique', 'toux', 'difficulté à respirer', 'respiration rapide'],
      sw: ['kupiga filimbi', 'kupumua kwa shida', 'kufinywa kwa kifua', 'kikohozi', 'shida ya kupumua', 'kupumua kwa haraka']
    },
    commonSymptoms: {
      en: ['wheezing', 'shortness of breath', 'chest tightness', 'coughing'],
      fr: ['sifflement', 'essoufflement', 'oppression thoracique', 'toux'],
      sw: ['kupiga filimbi', 'kupumua kwa shida', 'kufinywa kwa kifua', 'kikohozi']
    },
    rareSymptoms: {
      en: ['severe breathing difficulty', 'blue lips', 'inability to speak', 'panic', 'sweating'],
      fr: ['difficulté respiratoire sévère', 'lèvres bleues', 'incapacité de parler', 'panique', 'transpiration'],
      sw: ['shida kali ya kupumua', 'midomo ya buluu', 'kutoweza kusema', 'hofu', 'jasho']
    },
    causes: {
      en: ['allergies', 'environmental triggers', 'genetics', 'respiratory infections', 'stress', 'exercise'],
      fr: ['allergies', 'déclencheurs environnementaux', 'génétique', 'infections respiratoires', 'stress', 'exercice'],
      sw: ['mzio', 'vichochezi vya mazingira', 'maumbile', 'maambukizi ya kupumua', 'msongo', 'mazoezi']
    },
    riskFactors: {
      en: ['family history', 'allergies', 'smoking', 'air pollution exposure', 'obesity', 'occupational exposures'],
      fr: ['antécédents familiaux', 'allergies', 'tabagisme', 'exposition à la pollution de l\'air', 'obésité', 'expositions professionnelles'],
      sw: ['historia ya familia', 'mzio', 'sigara', 'kufichuliwa na uchafuzi wa hewa', 'unene kupita kiasi', 'kufichuliwa kazini']
    },
    treatment: {
      en: 'Inhalers (reliever and preventer), avoiding triggers, regular monitoring, action plan, oral medications if needed.',
      fr: 'Inhalateurs (soulagement et prévention), éviter les déclencheurs, surveillance régulière, plan d\'action, médicaments oraux si nécessaire.',
      sw: 'Vipulizi (vya kulegeza na vya kuzuia), kuepuka vichochezi, ufuatiliaji wa kawaida, mpango wa hatua, dawa za kinywani ikiwa inahitajika.'
    },
    prevention: {
      en: 'Avoid known triggers, maintain good air quality, get vaccinated against flu, regular exercise, manage stress.',
      fr: 'Éviter les déclencheurs connus, maintenir une bonne qualité de l\'air, se faire vacciner contre la grippe, exercice régulier, gérer le stress.',
      sw: 'Epuka vichochezi vinavyojulikana, dumisha ubora mzuri wa hewa, pata chanjo ya homa ya mafua, mazoezi ya kawaida, simamia msongo.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate help if severe breathing difficulty, blue lips, inability to speak in full sentences, or peak flow drops significantly.',
      fr: 'Cherchez de l\'aide immédiate si difficulté respiratoire sévère, lèvres bleues, incapacité de parler en phrases complètes, ou chute significative du débit de pointe.',
      sw: 'Tafuta msaada wa haraka ikiwa kuna shida kali ya kupumua, midomo ya buluu, kutoweza kusema sentensi kamili, au kupungua kwa kasi ya kupumua.'
    },
    complications: {
      en: ['severe asthma attacks', 'respiratory failure', 'pneumonia', 'status asthmaticus', 'psychological effects'],
      fr: ['crises d\'asthme sévères', 'insuffisance respiratoire', 'pneumonie', 'état de mal asthmatique', 'effets psychologiques'],
      sw: ['mashambulizi makali ya pumu', 'kushindwa kwa kupumua', 'nimonia', 'hali ya pumu isiyokoma', 'athari za kisaikolojia']
    },
    diagnosis: {
      en: 'Lung function tests, peak flow measurement, chest X-ray, allergy tests, medical history.',
      fr: 'Tests de fonction pulmonaire, mesure du débit de pointe, radiographie thoracique, tests d\'allergie, antécédents médicaux.',
      sw: 'Vipimo vya utendaji wa mapafu, kipimo cha kasi ya kupumua, X-ray ya kifua, vipimo vya mzio, historia ya matibabu.'
    },
    prognosis: {
      en: 'Good with proper management. Most people with asthma can live normal, active lives.',
      fr: 'Bon avec une gestion appropriée. La plupart des personnes asthmatiques peuvent vivre une vie normale et active.',
      sw: 'Nzuri na usimamizi sahihi. Watu wengi wenye pumu wanaweza kuishi maisha ya kawaida na yenye shughuli.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'copd',
    name: {
      en: 'COPD (Chronic Obstructive Pulmonary Disease)',
      fr: 'BPCO (Bronchopneumopathie Chronique Obstructive)',
      sw: 'COPD (Ugonjwa wa Mapafu wa Kudumu)'
    },
    category: 'respiratory',
    severity: 'high',
    symptoms: {
      en: ['persistent cough', 'shortness of breath', 'wheezing', 'chest tightness', 'frequent respiratory infections', 'fatigue', 'weight loss'],
      fr: ['toux persistante', 'essoufflement', 'sifflement', 'oppression thoracique', 'infections respiratoires fréquentes', 'fatigue', 'perte de poids'],
      sw: ['kikohozi kisichokwisha', 'kupumua kwa shida', 'kupiga filimbi', 'kufinywa kwa kifua', 'maambukizi ya mara kwa mara ya kupumua', 'uchovu', 'kupungua uzito']
    },
    commonSymptoms: {
      en: ['persistent cough', 'shortness of breath', 'wheezing', 'chest tightness'],
      fr: ['toux persistante', 'essoufflement', 'sifflement', 'oppression thoracique'],
      sw: ['kikohozi kisichokwisha', 'kupumua kwa shida', 'kupiga filimbi', 'kufinywa kwa kifua']
    },
    rareSymptoms: {
      en: ['severe breathing difficulty', 'blue lips', 'confusion', 'swollen ankles'],
      fr: ['difficulté respiratoire sévère', 'lèvres bleues', 'confusion', 'chevilles enflées'],
      sw: ['shida kali ya kupumua', 'midomo ya buluu', 'kuchanganyikiwa', 'uvimbe wa vifundo vya miguu']
    },
    causes: {
      en: ['smoking', 'air pollution', 'occupational dust', 'genetics', 'respiratory infections', 'alpha-1 antitrypsin deficiency'],
      fr: ['tabagisme', 'pollution de l\'air', 'poussière professionnelle', 'génétique', 'infections respiratoires', 'déficit en alpha-1 antitrypsine'],
      sw: ['sigara', 'uchafuzi wa hewa', 'vumbi la kazi', 'maumbile', 'maambukizi ya kupumua', 'upungufu wa alpha-1 antitrypsin']
    },
    riskFactors: {
      en: ['smoking', 'age', 'genetics', 'air pollution exposure', 'respiratory infections', 'occupational exposures'],
      fr: ['tabagisme', 'âge', 'génétique', 'exposition à la pollution de l\'air', 'infections respiratoires', 'expositions professionnelles'],
      sw: ['sigara', 'umri', 'maumbile', 'kufichuliwa na uchafuzi wa hewa', 'maambukizi ya kupumua', 'kufichuliwa kazini']
    },
    treatment: {
      en: 'Bronchodilators, inhaled steroids, oxygen therapy, pulmonary rehabilitation, smoking cessation, vaccinations.',
      fr: 'Bronchodilatateurs, stéroïdes inhalés, oxygénothérapie, réhabilitation pulmonaire, arrêt du tabac, vaccinations.',
      sw: 'Dawa za kupanua mishipa ya hewa, steroid za kupuliza, matibabu ya oksijeni, urekebishaji wa mapafu, kuacha sigara, chanjo.'
    },
    prevention: {
      en: 'Avoid smoking, reduce exposure to pollutants, get vaccinated, regular exercise, healthy diet.',
      fr: 'Éviter de fumer, réduire l\'exposition aux polluants, se faire vacciner, exercice régulier, alimentation saine.',
      sw: 'Epuka sigara, punguza kufichuliwa na vichafuzi, pata chanjo, mazoezi ya kawaida, chakula chenye afya.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate help for severe breathing difficulty, blue lips, or chest pain. Regular monitoring needed.',
      fr: 'Cherchez de l\'aide immédiate pour une difficulté respiratoire sévère, des lèvres bleues ou des douleurs thoraciques. Surveillance régulière nécessaire.',
      sw: 'Tafuta msaada wa haraka kwa shida kali ya kupumua, midomo ya buluu, au maumivu ya kifua. Ufuatiliaji wa kawaida unahitajika.'
    },
    complications: {
      en: ['respiratory failure', 'heart problems', 'lung cancer', 'depression', 'frequent infections'],
      fr: ['insuffisance respiratoire', 'problèmes cardiaques', 'cancer du poumon', 'dépression', 'infections fréquentes'],
      sw: ['kushindwa kwa kupumua', 'matatizo ya moyo', 'saratani ya pafu', 'unyogovu', 'maambukizi ya mara kwa mara']
    },
    diagnosis: {
      en: 'Spirometry, chest X-ray, CT scan, blood tests, arterial blood gas analysis.',
      fr: 'Spirométrie, radiographie thoracique, scanner, tests sanguins, analyse des gaz du sang artériel.',
      sw: 'Spirometry, X-ray ya kifua, CT scan, vipimo vya damu, uchambuzi wa gesi za damu za mishipa.'
    },
    prognosis: {
      en: 'Progressive disease but manageable with treatment. Early intervention improves outcomes.',
      fr: 'Maladie progressive mais gérable avec traitement. L\'intervention précoce améliore les résultats.',
      sw: 'Ugonjwa unaoendelea lakini unaweza kudhibitiwa na matibabu. Kuingilia mapema kunaboresha matokeo.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'bronchitis',
    name: {
      en: 'Bronchitis',
      fr: 'Bronchite',
      sw: 'Bronchitis'
    },
    category: 'respiratory',
    severity: 'medium',
    symptoms: {
      en: ['persistent cough', 'mucus production', 'fatigue', 'shortness of breath', 'chest discomfort', 'low fever', 'wheezing'],
      fr: ['toux persistante', 'production de mucus', 'fatigue', 'essoufflement', 'inconfort thoracique', 'fièvre légère', 'sifflement'],
      sw: ['kikohozi kisichokwisha', 'kutoa makohozi', 'uchovu', 'kupumua kwa shida', 'usumbufu wa kifua', 'homa kidogo', 'kupiga filimbi']
    },
    commonSymptoms: {
      en: ['persistent cough', 'mucus production', 'fatigue', 'chest discomfort'],
      fr: ['toux persistante', 'production de mucus', 'fatigue', 'inconfort thoracique'],
      sw: ['kikohozi kisichokwisha', 'kutoa makohozi', 'uchovu', 'usumbufu wa kifua']
    },
    rareSymptoms: {
      en: ['high fever', 'blood in sputum', 'severe breathing difficulty'],
      fr: ['fièvre élevée', 'sang dans les expectorations', 'difficulté respiratoire sévère'],
      sw: ['homa kali', 'damu katika makohozi', 'shida kali ya kupumua']
    },
    causes: {
      en: ['viral infections', 'bacterial infections', 'smoking', 'air pollution', 'chemical irritants'],
      fr: ['infections virales', 'infections bactériennes', 'tabagisme', 'pollution de l\'air', 'irritants chimiques'],
      sw: ['maambukizi ya virusi', 'maambukizi ya bakteria', 'sigara', 'uchafuzi wa hewa', 'vichochezi vya kemikali']
    },
    riskFactors: {
      en: ['smoking', 'air pollution exposure', 'respiratory infections', 'weakened immune system', 'occupational exposures'],
      fr: ['tabagisme', 'exposition à la pollution de l\'air', 'infections respiratoires', 'système immunitaire affaibli', 'expositions professionnelles'],
      sw: ['sigara', 'kufichuliwa na uchafuzi wa hewa', 'maambukizi ya kupumua', 'mfumo wa kinga uliodhoofika', 'kufichuliwa kazini']
    },
    treatment: {
      en: 'Rest, fluids, cough suppressants, bronchodilators if needed, antibiotics for bacterial infections.',
      fr: 'Repos, liquides, antitussifs, bronchodilatateurs si nécessaire, antibiotiques pour les infections bactériennes.',
      sw: 'Pumziko, maji, dawa za kikohozi, dawa za kupanua mishipa ya hewa ikiwa inahitajika, antibiotiki kwa maambukizi ya bakteria.'
    },
    prevention: {
      en: 'Avoid smoking, reduce exposure to irritants, get vaccinated, practice good hygiene, avoid sick people.',
      fr: 'Éviter de fumer, réduire l\'exposition aux irritants, se faire vacciner, pratiquer une bonne hygiène, éviter les personnes malades.',
      sw: 'Epuka sigara, punguza kufichuliwa na vichochezi, pata chanjo, fanya usafi mzuri, epuka watu wagonjwa.'
    },
    whenToSeekHelp: {
      en: 'See doctor if cough persists more than 3 weeks, fever develops, or breathing becomes difficult.',
      fr: 'Consultez un médecin si la toux persiste plus de 3 semaines, si de la fièvre se développe, ou si la respiration devient difficile.',
      sw: 'Ona daktari ikiwa kikohozi kinaendelea kwa zaidi ya wiki 3, homa inatokea, au kupumua kunaanza kuwa ngumu.'
    },
    complications: {
      en: ['pneumonia', 'chronic bronchitis', 'respiratory failure', 'secondary infections'],
      fr: ['pneumonie', 'bronchite chronique', 'insuffisance respiratoire', 'infections secondaires'],
      sw: ['nimonia', 'bronchitis ya kudumu', 'kushindwa kwa kupumua', 'maambukizi ya pili']
    },
    diagnosis: {
      en: 'Clinical examination, chest X-ray, sputum culture, lung function tests.',
      fr: 'Examen clinique, radiographie thoracique, culture d\'expectoration, tests de fonction pulmonaire.',
      sw: 'Uchunguzi wa kimatibabu, X-ray ya kifua, kilimo cha makohozi, vipimo vya utendaji wa mapafu.'
    },
    prognosis: {
      en: 'Good for acute bronchitis. Chronic bronchitis requires ongoing management.',
      fr: 'Bon pour la bronchite aiguë. La bronchite chronique nécessite une gestion continue.',
      sw: 'Nzuri kwa bronchitis ya ghafla. Bronchitis ya kudumu inahitaji usimamizi unaoendelea.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'influenza',
    name: {
      en: 'Influenza (Flu)',
      fr: 'Grippe',
      sw: 'Mafua'
    },
    category: 'respiratory',
    severity: 'medium',
    symptoms: {
      en: ['fever', 'cough', 'sore throat', 'runny or stuffy nose', 'muscle or body aches', 'headaches', 'fatigue'],
      fr: ['fièvre', 'toux', 'mal de gorge', 'nez qui coule ou bouché', 'douleurs musculaires ou corporelles', 'maux de tête', 'fatigue'],
      sw: ['homa', 'kikohozi', 'maumivu ya koo', 'mafua au pua iliyoziba', 'maumivu ya misuli au mwili', 'maumivu ya kichwa', 'uchovu']
    },
    commonSymptoms: {
      en: ['fever', 'cough', 'muscle aches', 'fatigue'],
      fr: ['fièvre', 'toux', 'douleurs musculaires', 'fatigue'],
      sw: ['homa', 'kikohozi', 'maumivu ya misuli', 'uchovu']
    },
    rareSymptoms: {
      en: ['pneumonia', 'seizures', 'encephalitis', 'myocarditis'],
      fr: ['pneumonie', 'convulsions', 'encéphalite', 'myocardite'],
      sw: ['nimonia', 'mshtuko', 'encephalitis', 'myocarditis']
    },
    causes: {
      en: ['influenza viruses'],
      fr: ['virus de la grippe'],
      sw: ['virusi vya mafua']
    },
    riskFactors: {
      en: ['age (young children, elderly)', 'chronic illness', 'pregnancy', 'weakened immune system'],
      fr: ['âge (jeunes enfants, personnes âgées)', 'maladie chronique', 'grossesse', 'système immunitaire affaibli'],
      sw: ['umri (watoto wadogo, wazee)', 'ugonjwa sugu', 'ujauzito', 'mfumo dhaifu wa kinga']
    },
    treatment: {
      en: 'Rest, fluids, antiviral drugs (e.g., oseltamivir) if started early.',
      fr: 'Repos, liquides, médicaments antiviraux (par ex., oseltamivir) si commencés tôt.',
      sw: 'Pumziko, maji, dawa za kuzuia virusi (k.m., oseltamivir) zikianza mapema.'
    },
    prevention: {
      en: 'Annual flu vaccination, handwashing, avoid touching eyes, nose, and mouth.',
      fr: 'Vaccination annuelle contre la grippe, lavage des mains, éviter de se toucher les yeux, le nez et la bouche.',
      sw: 'Chanjo ya mafua ya kila mwaka, kunawa mikono, epuka kugusa macho, pua na mdomo.'
    },
    whenToSeekHelp: {
      en: 'Seek help for difficulty breathing, chest pain, severe headache, confusion, or high fever.',
      fr: 'Consultez en cas de difficulté à respirer, de douleur thoracique, de maux de tête sévères, de confusion ou de fièvre élevée.',
      sw: 'Tafuta msaada kwa shida ya kupumua, maumivu ya kifua, maumivu makali ya kichwa, kuchanganyikiwa, au homa kali.'
    },
    complications: {
      en: ['pneumonia', 'bronchitis', 'sinus infections', 'ear infections', 'worsening of chronic conditions'],
      fr: ['pneumonie', 'bronchite', 'infections des sinus', 'otites', 'aggravation des maladies chroniques'],
      sw: ['nimonia', 'bronchitis', 'maambukizi ya sinus', 'maambukizi ya masikio', 'kuzorota kwa hali sugu']
    },
    diagnosis: {
      en: 'Usually based on symptoms. Rapid influenza diagnostic tests are available.',
      fr: 'Généralement basé sur les symptômes. Des tests de diagnostic rapide de la grippe sont disponibles.',
      sw: 'Kawaida kulingana na dalili. Vipimo vya haraka vya utambuzi wa mafua vinapatikana.'
    },
    prognosis: {
      en: 'Most people recover in one to two weeks. Can be serious for high-risk groups.',
      fr: 'La plupart des gens se rétablissent en une à deux semaines. Peut être grave pour les groupes à haut risque.',
      sw: 'Watu wengi hupona ndani ya wiki moja hadi mbili. Inaweza kuwa mbaya kwa makundi yaliyo katika hatari kubwa.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'ards',
    name: {
      en: 'Acute Respiratory Distress Syndrome (ARDS)',
      fr: 'Syndrome de Détresse Respiratoire Aiguë (SDRA)',
      sw: 'Ugonjwa wa Shida ya Kupumua ya Papo Hapo (ARDS)'
    },
    category: 'respiratory',
    severity: 'emergency',
    symptoms: {
      en: ['severe shortness of breath', 'rapid breathing', 'low blood oxygen levels', 'blue lips or skin', 'confusion', 'extreme fatigue'],
      fr: ['essoufflement sévère', 'respiration rapide', 'faibles niveaux d\'oxygène dans le sang', 'lèvres ou peau bleues', 'confusion', 'fatigue extrême'],
      sw: ['upungufu mkubwa wa pumzi', 'kupumua haraka', 'viwango vya chini vya oksijeni kwenye damu', 'midomo au ngozi ya bluu', 'kuchanganyikiwa', 'uchovu mwingi']
    },
    commonSymptoms: {
      en: ['severe shortness of breath', 'rapid breathing', 'low blood oxygen'],
      fr: ['essoufflement sévère', 'respiration rapide', 'faible taux d\'oxygène sanguin'],
      sw: ['upungufu mkubwa wa pumzi', 'kupumua haraka', 'oksijeni ya chini kwenye damu']
    },
    rareSymptoms: {
      en: ['chest pain', 'cough', 'fever'],
      fr: ['douleur thoracique', 'toux', 'fièvre'],
      sw: ['maumivu ya kifua', 'kikohozi', 'homa']
    },
    causes: {
      en: ['sepsis', 'pneumonia', 'aspiration', 'severe trauma', 'pancreatitis', 'COVID-19'],
      fr: ['sepsis', 'pneumonie', 'aspiration', 'traumatisme sévère', 'pancréatite', 'COVID-19'],
      sw: ['sepsis', 'nimonia', 'kumeza', 'jeraha kubwa', 'pankreatitis', 'COVID-19']
    },
    riskFactors: {
      en: ['age', 'chronic lung disease', 'alcoholism', 'smoking'],
      fr: ['âge', 'maladie pulmonaire chronique', 'alcoolisme', 'tabagisme'],
      sw: ['umri', 'ugonjwa sugu wa mapafu', 'ulevi', 'uvutaji sigara']
    },
    treatment: {
      en: 'Mechanical ventilation, oxygen therapy, fluid management, treating the underlying cause. Often requires ICU care.',
      fr: 'Ventilation mécanique, oxygénothérapie, gestion des fluides, traitement de la cause sous-jacente. Nécessite souvent des soins intensifs.',
      sw: 'Uingizaji hewa wa kimashine, tiba ya oksijeni, usimamizi wa maji, kutibu chanzo. Mara nyingi huhitaji huduma ya ICU.'
    },
    prevention: {
      en: 'Preventing underlying causes like sepsis and pneumonia. Quit smoking and limit alcohol.',
      fr: 'Prévenir les causes sous-jacentes comme la septicémie et la pneumonie. Arrêter de fumer et limiter l\'alcool.',
      sw: 'Kuzuia sababu za msingi kama sepsis na nimonia. Acha kuvuta sigara na punguza pombe.'
    },
    whenToSeekHelp: {
      en: 'This is a medical emergency. Seek immediate care for severe shortness of breath.',
      fr: 'Ceci est une urgence médicale. Consultez immédiatement pour un essoufflement sévère.',
      sw: 'Hii ni dharura ya kimatibabu. Tafuta huduma ya haraka kwa upungufu mkubwa wa pumzi.'
    },
    complications: {
      en: ['lung scarring (pulmonary fibrosis)', 'blood clots', 'collapsed lung (pneumothorax)', 'organ failure', 'death'],
      fr: ['cicatrisation pulmonaire (fibrose pulmonaire)', 'caillots sanguins', 'poumon affaissé (pneumothorax)', 'défaillance d\'organes', 'décès'],
      sw: ['makovu ya mapafu (fibrosis ya mapafu)', 'mabonge ya damu', 'pafu lililoporomoka (pneumothorax)', 'kushindwa kwa viungo', 'kifo']
    },
    diagnosis: {
      en: 'Chest X-ray or CT scan, arterial blood gas analysis, echocardiogram.',
      fr: 'Radiographie thoracique ou scanner, analyse des gaz du sang artériel, échocardiogramme.',
      sw: 'X-ray ya kifua au CT scan, uchambuzi wa gesi za damu za ateri, echocardiogram.'
    },
    prognosis: {
      en: 'High mortality rate. Survivors may have long-term lung damage and cognitive impairment.',
      fr: 'Taux de mortalité élevé. Les survivants peuvent avoir des lésions pulmonaires à long terme et des troubles cognitifs.',
      sw: 'Kiwango cha juu cha vifo. Walionusurika wanaweza kuwa na uharibifu wa mapafu wa muda mrefu na upungufu wa utambuzi.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'pulmonary-embolism',
    name: {
      en: 'Pulmonary Embolism',
      fr: 'Embolie Pulmonaire',
      sw: 'Embolism ya Mapafu'
    },
    category: 'respiratory',
    severity: 'emergency',
    symptoms: {
      en: ['sudden shortness of breath', 'chest pain (often sharp)', 'cough (may be bloody)', 'rapid or irregular heartbeat', 'dizziness', 'leg swelling'],
      fr: ['essoufflement soudain', 'douleur thoracique (souvent aiguë)', 'toux (peut être sanglante)', 'rythme cardiaque rapide ou irrégulier', 'étourdissements', 'gonflement des jambes'],
      sw: ['upungufu wa pumzi wa ghafla', 'maumivu ya kifua (mara nyingi makali)', 'kikohozi (kinaweza kuwa na damu)', 'mapigo ya moyo ya haraka au yasiyo ya kawaida', 'kizunguzungu', 'uvimbe wa mguu']
    },
    commonSymptoms: {
      en: ['sudden shortness of breath', 'chest pain', 'cough'],
      fr: ['essoufflement soudain', 'douleur thoracique', 'toux'],
      sw: ['upungufu wa pumzi wa ghafla', 'maumivu ya kifua', 'kikohozi']
    },
    rareSymptoms: {
      en: ['fever', 'sweating', 'clammy or bluish skin', 'fainting'],
      fr: ['fièvre', 'transpiration', 'peau moite ou bleuâtre', 'évanouissement'],
      sw: ['homa', 'kutokwa na jasho', 'ngozi yenye unyevu au ya bluu', 'kuzimia']
    },
    causes: {
      en: ['blood clot from deep vein thrombosis (DVT) in the legs travels to the lungs'],
      fr: ['caillot de sang provenant d\'une thrombose veineuse profonde (TVP) dans les jambes se déplace vers les poumons'],
      sw: ['bonge la damu kutoka kwa thrombosis ya mshipa wa kina (DVT) kwenye miguu husafiri hadi kwenye mapafu']
    },
    riskFactors: {
      en: ['prolonged immobility (long travel, bed rest)', 'surgery', 'cancer', 'smoking', 'obesity', 'pregnancy', 'certain medications (birth control)'],
      fr: ['immobilité prolongée (long voyage, alitement)', 'chirurgie', 'cancer', 'tabagisme', 'obésité', 'grossesse', 'certains médicaments (contraceptifs)'],
      sw: ['kutotembea kwa muda mrefu (safari ndefu, kupumzika kitandani)', 'upasuaji', 'saratani', 'uvutaji sigara', 'unene', 'ujauzito', 'dawa fulani (vidonge vya kuzuia mimba)']
    },
    treatment: {
      en: 'Anticoagulants (blood thinners), thrombolytics (clot busters), surgery or procedures to remove clot.',
      fr: 'Anticoagulants, thrombolytiques (dissolvants de caillots), chirurgie ou procédures pour enlever le caillot.',
      sw: 'Dawa za kuzuia kuganda kwa damu, thrombolytics (dawa za kuvunja mabonge), upasuaji au taratibu za kuondoa bonge.'
    },
    prevention: {
      en: 'Regular movement, compression stockings, anticoagulant medication for high-risk individuals.',
      fr: 'Mouvement régulier, bas de contention, médicaments anticoagulants pour les personnes à haut risque.',
      sw: 'Harakati za mara kwa mara, soksi za kubana, dawa za kuzuia kuganda kwa damu kwa watu walio katika hatari kubwa.'
    },
    whenToSeekHelp: {
      en: 'This is a medical emergency. Seek immediate care for sudden shortness of breath or sharp chest pain.',
      fr: 'Ceci est une urgence médicale. Consultez immédiatement pour un essoufflement soudain ou une douleur thoracique aiguë.',
      sw: 'Hii ni dharura ya kimatibabu. Tafuta huduma ya haraka kwa upungufu wa pumzi wa ghafla au maumivu makali ya kifua.'
    },
    complications: {
      en: ['pulmonary hypertension', 'heart failure', 'death'],
      fr: ['hypertension pulmonaire', 'insuffisance cardiaque', 'décès'],
      sw: ['shinikizo la damu la mapafu', 'kushindwa kwa moyo', 'kifo']
    },
    diagnosis: {
      en: 'CT pulmonary angiography, V/Q scan, D-dimer blood test, ultrasound of legs.',
      fr: 'Angiographie pulmonaire par scanner, scintigraphie V/Q, test sanguin D-dimères, échographie des jambes.',
      sw: 'CT pulmonary angiography, V/Q scan, kipimo cha damu cha D-dimer, ultrasound ya miguu.'
    },
    prognosis: {
      en: 'Good with prompt diagnosis and treatment. Can be fatal if a large clot is involved.',
      fr: 'Bon avec un diagnostic et un traitement rapides. Peut être mortel si un gros caillot est impliqué.',
      sw: 'Nzuri na utambuzi na matibabu ya haraka. Inaweza kuwa mbaya ikiwa bonge kubwa linahusika.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'lung-cancer',
    name: {
      en: 'Lung Cancer',
      fr: 'Cancer du Poumon',
      sw: 'Saratani ya Mapafu'
    },
    category: 'oncological',
    severity: 'high',
    symptoms: {
      en: ['persistent cough', 'coughing up blood', 'chest pain', 'hoarseness', 'shortness of breath', 'unexplained weight loss', 'bone pain', 'headache'],
      fr: ['toux persistante', 'crachats de sang', 'douleur thoracique', 'enrouement', 'essoufflement', 'perte de poids inexpliquée', 'douleur osseuse', 'mal de tête'],
      sw: ['kikohozi kinachoendelea', 'kukohoa damu', 'maumivu ya kifua', 'sauti ya chini', 'upungufu wa pumzi', 'kupungua uzito bila sababu', 'maumivu ya mifupa', 'maumivu ya kichwa']
    },
    commonSymptoms: {
      en: ['persistent cough', 'chest pain', 'shortness of breath', 'weight loss'],
      fr: ['toux persistante', 'douleur thoracique', 'essoufflement', 'perte de poids'],
      sw: ['kikohozi kinachoendelea', 'maumivu ya kifua', 'upungufu wa pumzi', 'kupungua uzito']
    },
    rareSymptoms: {
      en: ['swelling of face or neck', 'difficulty swallowing', 'clubbing of fingers'],
      fr: ['gonflement du visage ou du cou', 'difficulté à avaler', 'hippocratisme digital'],
      sw: ['uvimbe wa uso au shingo', 'ugumu wa kumeza', 'vidole vya ngoma']
    },
    causes: {
      en: ['smoking', 'secondhand smoke', 'exposure to radon gas', 'asbestos exposure', 'air pollution'],
      fr: ['tabagisme', 'tabagisme passif', 'exposition au radon', 'exposition à l\'amiante', 'pollution de l\'air'],
      sw: ['uvutaji sigara', 'moshi wa sigara wa wengine', 'kufichuliwa na gesi ya radon', 'kufichuliwa na asbestosi', 'uchafuzi wa hewa']
    },
    riskFactors: {
      en: ['smoking', 'family history', 'previous radiation therapy to chest'],
      fr: ['tabagisme', 'antécédents familiaux', 'radiothérapie antérieure au thorax'],
      sw: ['uvutaji sigara', 'historia ya familia', 'tiba ya mionzi ya awali kwenye kifua']
    },
    treatment: {
      en: 'Surgery, chemotherapy, radiation therapy, targeted therapy, immunotherapy.',
      fr: 'Chirurgie, chimiothérapie, radiothérapie, thérapie ciblée, immunothérapie.',
      sw: 'Upasuaji, chemotherapy, tiba ya mionzi, tiba inayolengwa, immunotherapy.'
    },
    prevention: {
      en: 'Don\'t smoke, avoid secondhand smoke, test home for radon, avoid carcinogens at work.',
      fr: 'Ne pas fumer, éviter le tabagisme passif, tester la maison pour le radon, éviter les cancérogènes au travail.',
      sw: 'Usivute sigara, epuka moshi wa sigara wa wengine, pima nyumba kwa radon, epuka kansa kazini.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for any persistent cough, shortness of breath, or unexplained weight loss.',
      fr: 'Consultez un médecin pour toute toux persistante, essoufflement ou perte de poids inexpliquée.',
      sw: 'Muone daktari kwa kikohozi chochote kinachoendelea, upungufu wa pumzi, au kupungua uzito bila sababu.'
    },
    complications: {
      en: ['metastasis (spread of cancer)', 'pleural effusion', 'pain', 'respiratory failure'],
      fr: ['métastases (propagation du cancer)', 'épanchement pleural', 'douleur', 'insuffisance respiratoire'],
      sw: ['metastasis (kuenea kwa saratani)', 'maji ya pleural', 'maumivu', 'kushindwa kupumua']
    },
    diagnosis: {
      en: 'Chest X-ray, CT scan, sputum cytology, biopsy.',
      fr: 'Radiographie thoracique, scanner, cytologie des expectorations, biopsie.',
      sw: 'X-ray ya kifua, CT scan, cytology ya makohozi, biopsy.'
    },
    prognosis: {
      en: 'Depends on the stage at diagnosis. Early detection improves survival rates significantly.',
      fr: 'Dépend du stade au moment du diagnostic. La détection précoce améliore considérablement les taux de survie.',
      sw: 'Inategemea hatua wakati wa utambuzi. Ugunduzi wa mapema unaboresha viwango vya kuishi kwa kiasi kikubwa.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'sleep-apnea',
    name: {
      en: 'Sleep Apnea',
      fr: 'Apnée du Sommeil',
      sw: 'Apnea ya Usingizi'
    },
    category: 'respiratory',
    severity: 'medium',
    symptoms: {
      en: ['loud snoring', 'episodes of stopped breathing during sleep', 'gasping for air during sleep', 'morning headache', 'daytime sleepiness', 'difficulty concentrating'],
      fr: ['ronflement fort', 'épisodes d\'arrêt respiratoire pendant le sommeil', 'halètement pendant le sommeil', 'mal de tête matinal', 'somnolence diurne', 'difficulté à se concentrer'],
      sw: ['kukoroma kwa sauti kubwa', 'vipindi vya kuacha kupumua wakati wa usingizi', 'kuhema kwa nguvu wakati wa usingizi', 'maumivu ya kichwa asubuhi', 'usingizi wa mchana', 'ugumu wa kuzingatia']
    },
    commonSymptoms: {
      en: ['loud snoring', 'stopped breathing during sleep', 'daytime sleepiness'],
      fr: ['ronflement fort', 'arrêt respiratoire pendant le sommeil', 'somnolence diurne'],
      sw: ['kukoroma kwa sauti kubwa', 'kuacha kupumua wakati wa usingizi', 'usingizi wa mchana']
    },
    rareSymptoms: {
      en: ['high blood pressure', 'night sweats', 'decreased libido'],
      fr: ['hypertension artérielle', 'sueurs nocturnes', 'diminution de la libido'],
      sw: ['shinikizo la damu la juu', 'kutokwa na jasho usiku', 'kupungua kwa hamu ya ngono']
    },
    causes: {
      en: ['obstructive sleep apnea (throat muscles relax)', 'central sleep apnea (brain doesn\'t send proper signals)'],
      fr: ['apnée obstructive du sommeil (les muscles de la gorge se relâchent)', 'apnée centrale du sommeil (le cerveau n\'envoie pas les bons signaux)'],
      sw: ['apnea ya kuzuia usingizi (misuli ya koo hulegea)', 'apnea ya kati ya usingizi (ubongo hautumi ishara sahihi)']
    },
    riskFactors: {
      en: ['obesity', 'large neck circumference', 'male gender', 'older age', 'family history', 'alcohol or sedative use', 'smoking'],
      fr: ['obésité', 'grande circonférence du cou', 'sexe masculin', 'âge avancé', 'antécédents familiaux', 'consommation d\'alcool ou de sédatifs', 'tabagisme'],
      sw: ['unene', 'mzingo mkubwa wa shingo', 'jinsia ya kiume', 'umri mkubwa', 'historia ya familia', 'matumizi ya pombe au dawa za usingizi', 'uvutaji sigara']
    },
    treatment: {
      en: 'Lifestyle changes (weight loss), continuous positive airway pressure (CPAP) machine, oral appliances, surgery.',
      fr: 'Changements de mode de vie (perte de poids), appareil à pression positive continue (PPC), appareils buccaux, chirurgie.',
      sw: 'Mabadiliko ya mtindo wa maisha (kupunguza uzito), mashine ya CPAP, vifaa vya mdomo, upasuaji.'
    },
    prevention: {
      en: 'Maintain a healthy weight, avoid alcohol and sedatives, quit smoking, sleep on your side.',
      fr: 'Maintenir un poids santé, éviter l\'alcool et les sédatifs, arrêter de fumer, dormir sur le côté.',
      sw: 'Dumisha uzito wenye afya, epuka pombe na dawa za usingizi, acha kuvuta sigara, lala kwa upande.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if you have loud snoring with pauses in breathing, or significant daytime sleepiness.',
      fr: 'Consultez un médecin si vous ronflez fort avec des pauses respiratoires, ou si vous avez une somnolence diurne importante.',
      sw: 'Muone daktari ikiwa unakoroma kwa sauti kubwa na kusitisha kupumua, au una usingizi mwingi wa mchana.'
    },
    complications: {
      en: ['high blood pressure', 'heart problems', 'type 2 diabetes', 'liver problems', 'daytime fatigue and accidents'],
      fr: ['hypertension artérielle', 'problèmes cardiaques', 'diabète de type 2', 'problèmes de foie', 'fatigue diurne et accidents'],
      sw: ['shinikizo la damu la juu', 'matatizo ya moyo', 'kisukari cha aina ya 2', 'matatizo ya ini', 'uchovu wa mchana na ajali']
    },
    diagnosis: {
      en: 'Sleep study (polysomnography), home sleep apnea testing.',
      fr: 'Étude du sommeil (polysomnographie), test d\'apnée du sommeil à domicile.',
      sw: 'Uchunguzi wa usingizi (polysomnography), upimaji wa apnea ya usingizi nyumbani.'
    },
    prognosis: {
      en: 'Treatable condition. Treatment can relieve symptoms and prevent complications.',
      fr: 'Condition traitable. Le traitement peut soulager les symptômes et prévenir les complications.',
      sw: 'Hali inayotibika. Matibabu yanaweza kupunguza dalili na kuzuia matatizo.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  }
];
