import { ComprehensiveDisease } from './types';

export const digestiveDiseases: ComprehensiveDisease[] = [
  {
    id: 'peptic-ulcer',
    name: {
      en: 'Peptic Ulcer Disease',
      fr: 'Ulcère Peptique',
      sw: 'Ugonjwa wa Vidonda vya Tumbo'
    },
    category: 'digestive',
    severity: 'medium',
    symptoms: {
      en: ['burning stomach pain', 'bloating', 'heartburn', 'nausea', 'vomiting', 'dark or bloody stools', 'unexplained weight loss'],
      fr: ['douleur d\'estomac brûlante', 'ballonnements', 'brûlures d\'estomac', 'nausées', 'vomissements', 'selles noires ou sanglantes', 'perte de poids inexpliquée'],
      sw: ['maumivu ya kuungua tumboni', 'kuvimbiwa', 'kiungulia', 'kichefuchefu', 'kutapika', 'kinyesi cheusi au chenye damu', 'kupungua uzito bila sababu']
    },
    commonSymptoms: {
      en: ['burning stomach pain', 'bloating', 'heartburn'],
      fr: ['douleur d\'estomac brûlante', 'ballonnements', 'brûlures d\'estomac'],
      sw: ['maumivu ya kuungua tumboni', 'kuvimbiwa', 'kiungulia']
    },
    rareSymptoms: {
      en: ['vomiting blood', 'severe pain', 'perforation'],
      fr: ['vomissements de sang', 'douleur sévère', 'perforation'],
      sw: ['kutapika damu', 'maumivu makali', 'kutoboka']
    },
    causes: {
      en: ['H. pylori infection', 'long-term use of NSAIDs', 'stress', 'spicy foods'],
      fr: ['infection à H. pylori', 'utilisation à long terme d\'AINS', 'stress', 'aliments épicés'],
      sw: ['maambukizi ya H. pylori', 'matumizi ya muda mrefu ya NSAIDs', 'msongo', 'vyakula vya viungo']
    },
    riskFactors: {
      en: ['smoking', 'alcohol', 'untreated stress', 'family history'],
      fr: ['tabagisme', 'alcool', 'stress non traité', 'antécédents familiaux'],
      sw: ['uvutaji sigara', 'pombe', 'msongo usiotibiwa', 'historia ya familia']
    },
    treatment: {
      en: 'Antibiotics for H. pylori, proton pump inhibitors (PPIs), H2 blockers, lifestyle changes.',
      fr: 'Antibiotiques pour H. pylori, inhibiteurs de la pompe à protons (IPP), bloqueurs H2, changements de mode de vie.',
      sw: 'Antibiotiki kwa H. pylori, vizuizi vya pampu ya protoni (PPIs), vizuizi vya H2, mabadiliko ya mtindo wa maisha.'
    },
    prevention: {
      en: 'Avoid NSAIDs if possible, manage stress, avoid smoking and alcohol, wash hands to prevent H. pylori.',
      fr: 'Éviter les AINS si possible, gérer le stress, éviter de fumer et de boire de l\'alcool, se laver les mains pour prévenir H. pylori.',
      sw: 'Epuka NSAIDs ikiwezekana, dhibiti msongo, epuka uvutaji sigara na pombe, nawa mikono kuzuia H. pylori.'
    },
    whenToSeekHelp: {
      en: 'Seek help for severe stomach pain, bloody vomit or stools, or unexplained weight loss.',
      fr: 'Consultez en cas de douleurs d\'estomac sévères, de vomissements ou de selles sanglantes, ou de perte de poids inexpliquée.',
      sw: 'Tafuta msaada kwa maumivu makali ya tumbo, kutapika damu au kinyesi chenye damu, au kupungua uzito bila sababu.'
    },
    complications: {
      en: ['internal bleeding', 'perforation', 'gastric outlet obstruction'],
      fr: ['hémorragie interne', 'perforation', 'obstruction gastrique'],
      sw: ['kutokwa damu ndani', 'kutoboka', 'kuziba kwa tumbo']
    },
    diagnosis: {
      en: 'Endoscopy, H. pylori tests (breath, stool, blood), upper GI series.',
      fr: 'Endoscopie, tests H. pylori (respiratoire, selles, sang), transit œso-gastro-duodénal.',
      sw: 'Endoscopy, vipimo vya H. pylori (pumzi, kinyesi, damu), mfululizo wa GI ya juu.'
    },
    prognosis: {
      en: 'Good with treatment. Recurrence is possible if risk factors are not managed.',
      fr: 'Bon avec traitement. La récidive est possible si les facteurs de risque ne sont pas gérés.',
      sw: 'Nzuri na matibabu. Kurudia kunawezekana ikiwa sababu za hatari hazitadhibitiwa.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'gastroenteritis',
    name: {
      en: 'Gastroenteritis (Stomach Flu)',
      fr: 'Gastro-entérite (Grippe Intestinale)',
      sw: 'Gastroenteritis (Homa ya Tumbo)'
    },
    category: 'digestive',
    severity: 'medium',
    symptoms: {
      en: ['diarrhea', 'vomiting', 'nausea', 'stomach cramps', 'fever', 'headache', 'muscle aches'],
      fr: ['diarrhée', 'vomissements', 'nausées', 'crampes d\'estomac', 'fièvre', 'maux de tête', 'douleurs musculaires'],
      sw: ['kuhara', 'kutapika', 'kichefuchefu', 'maumivu ya tumbo', 'homa', 'maumivu ya kichwa', 'maumivu ya misuli']
    },
    commonSymptoms: {
      en: ['diarrhea', 'vomiting', 'nausea', 'stomach cramps'],
      fr: ['diarrhée', 'vomissements', 'nausées', 'crampes d\'estomac'],
      sw: ['kuhara', 'kutapika', 'kichefuchefu', 'maumivu ya tumbo']
    },
    rareSymptoms: {
      en: ['severe dehydration', 'bloody diarrhea', 'high fever'],
      fr: ['déshydratation sévère', 'diarrhée sanglante', 'fièvre élevée'],
      sw: ['upungufu mkubwa wa maji mwilini', 'kuhara damu', 'homa kali']
    },
    causes: {
      en: ['viruses (norovirus, rotavirus)', 'bacteria (E. coli, Salmonella)', 'parasites (Giardia)'],
      fr: ['virus (norovirus, rotavirus)', 'bactéries (E. coli, Salmonella)', 'parasites (Giardia)'],
      sw: ['virusi (norovirus, rotavirus)', 'bakteria (E. coli, Salmonella)', 'vimelea (Giardia)']
    },
    riskFactors: {
      en: ['contaminated food or water', 'poor hygiene', 'close contact with infected person'],
      fr: ['aliments ou eau contaminés', 'mauvaise hygiène', 'contact étroit avec une personne infectée'],
      sw: ['chakula au maji yaliyochafuliwa', 'usafi duni', 'mawasiliano ya karibu na mtu aliyeambukizwa']
    },
    treatment: {
      en: 'Rest, hydration with ORS, bland diet (BRAT diet). Antibiotics for some bacterial infections.',
      fr: 'Repos, hydratation avec SRO, régime fade (régime BRAT). Antibiotiques pour certaines infections bactériennes.',
      sw: 'Pumziko, kunywa maji ya ORS, lishe isiyo na viungo (lishe ya BRAT). Antibiotiki kwa baadhi ya maambukizi ya bakteria.'
    },
    prevention: {
      en: 'Handwashing, food safety, vaccination (rotavirus), avoid contaminated water.',
      fr: 'Lavage des mains, sécurité alimentaire, vaccination (rotavirus), éviter l\'eau contaminée.',
      sw: 'Kunawa mikono, usalama wa chakula, chanjo (rotavirus), epuka maji yaliyochafuliwa.'
    },
    whenToSeekHelp: {
      en: 'Seek help for signs of severe dehydration, high fever, bloody stools, or if symptoms last more than a few days.',
      fr: 'Consultez en cas de signes de déshydratation sévère, de fièvre élevée, de selles sanglantes ou si les symptômes persistent plus de quelques jours.',
      sw: 'Tafuta msaada kwa dalili za upungufu mkubwa wa maji, homa kali, kinyesi chenye damu, au ikiwa dalili zinaendelea kwa zaidi ya siku chache.'
    },
    complications: {
      en: ['dehydration', 'electrolyte imbalance', 'kidney failure'],
      fr: ['déshydratation', 'déséquilibre électrolytique', 'insuffisance rénale'],
      sw: ['upungufu wa maji mwilini', 'usawa wa elektroliti', 'kushindwa kwa figo']
    },
    diagnosis: {
      en: 'Usually based on symptoms. Stool tests may be done to identify the cause.',
      fr: 'Généralement basé sur les symptômes. Des tests de selles peuvent être effectués pour identifier la cause.',
      sw: 'Kawaida kulingana na dalili. Vipimo vya kinyesi vinaweza kufanywa ili kubaini chanzo.'
    },
    prognosis: {
      en: 'Most people recover within a few days with rest and fluids.',
      fr: 'La plupart des gens se rétablissent en quelques jours avec du repos et des liquides.',
      sw: 'Watu wengi hupona ndani ya siku chache kwa kupumzika na kunywa maji.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'irritable-bowel-syndrome',
    name: {
      en: 'Irritable Bowel Syndrome (IBS)',
      fr: 'Syndrome du Côlon Irritable (SCI)',
      sw: 'Ugonjwa wa Utumbo Mwasho (IBS)'
    },
    category: 'digestive',
    severity: 'medium',
    symptoms: {
      en: ['abdominal pain', 'cramping', 'bloating', 'gas', 'diarrhea', 'constipation', 'mucus in stool'],
      fr: ['douleur abdominale', 'crampes', 'ballonnements', 'gaz', 'diarrhée', 'constipation', 'mucus dans les selles'],
      sw: ['maumivu ya tumbo', 'mkazo', 'kuvimbiwa', 'gesi', 'kuhara', 'choo kigumu', 'ute kwenye kinyesi']
    },
    commonSymptoms: {
      en: ['abdominal pain', 'bloating', 'changes in bowel habits'],
      fr: ['douleur abdominale', 'ballonnements', 'changements dans les habitudes intestinales'],
      sw: ['maumivu ya tumbo', 'kuvimbiwa', 'mabadiliko ya tabia ya haja']
    },
    rareSymptoms: {
      en: ['fatigue', 'nausea', 'backache', 'urinary problems'],
      fr: ['fatigue', 'nausées', 'mal de dos', 'problèmes urinaires'],
      sw: ['uchovu', 'kichefuchefu', 'maumivu ya mgongo', 'matatizo ya mkojo']
    },
    causes: {
      en: ['unknown', 'gut-brain interaction problems', 'visceral hypersensitivity', 'post-infectious'],
      fr: ['inconnue', 'problèmes d\'interaction intestin-cerveau', 'hypersensibilité viscérale', 'post-infectieux'],
      sw: ['haijulikani', 'matatizo ya mwingiliano wa utumbo-ubongo', 'unyeti wa visceral', 'baada ya maambukizi']
    },
    riskFactors: {
      en: ['younger age', 'female gender', 'family history', 'stress', 'history of abuse'],
      fr: ['jeune âge', 'sexe féminin', 'antécédents familiaux', 'stress', 'antécédents d\'abus'],
      sw: ['umri mdogo', 'jinsia ya kike', 'historia ya familia', 'msongo', 'historia ya unyanyasaji']
    },
    treatment: {
      en: 'Dietary changes (low FODMAP diet), fiber supplements, antispasmodic medications, managing stress.',
      fr: 'Changements alimentaires (régime pauvre en FODMAP), suppléments de fibres, médicaments antispasmodiques, gestion du stress.',
      sw: 'Mabadiliko ya lishe (lishe ya chini ya FODMAP), virutubisho vya nyuzi, dawa za antispasmodic, kudhibiti msongo.'
    },
    prevention: {
      en: 'Identifying and avoiding trigger foods, managing stress, regular exercise.',
      fr: 'Identifier et éviter les aliments déclencheurs, gérer le stress, faire de l\'exercice régulièrement.',
      sw: 'Kutambua na kuepuka vyakula vinavyochochea, kudhibiti msongo, mazoezi ya mara kwa mara.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for persistent symptoms, or if you have red flag symptoms like weight loss, rectal bleeding, or severe pain.',
      fr: 'Consultez un médecin pour des symptômes persistants, ou si vous avez des symptômes d\'alarme comme une perte de poids, des saignements rectaux ou une douleur sévère.',
      sw: 'Muone daktari kwa dalili zinazoendelea, au ikiwa una dalili za hatari kama kupungua uzito, kutokwa damu rektamu, au maumivu makali.'
    },
    complications: {
      en: ['poor quality of life', 'mood disorders (anxiety, depression)'],
      fr: ['mauvaise qualité de vie', 'troubles de l\'humeur (anxiété, dépression)'],
      sw: ['ubora duni wa maisha', 'matatizo ya hisia (wasiwasi, unyogovu)']
    },
    diagnosis: {
      en: 'Based on symptoms (Rome IV criteria). Tests to rule out other conditions.',
      fr: 'Basé sur les symptômes (critères de Rome IV). Tests pour exclure d\'autres conditions.',
      sw: 'Kulingana na dalili (vigezo vya Rome IV). Vipimo vya kuondoa hali zingine.'
    },
    prognosis: {
      en: 'Chronic condition that requires long-term management. Symptoms can often be controlled.',
      fr: 'Condition chronique qui nécessite une gestion à long terme. Les symptômes peuvent souvent être contrôlés.',
      sw: 'Hali ya kudumu inayohitaji usimamizi wa muda mrefu. Dalili mara nyingi zinaweza kudhibitiwa.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'gallstones',
    name: {
      en: 'Gallstones',
      fr: 'Calculs Biliaires',
      sw: 'Mawe kwenye Nyongo'
    },
    category: 'digestive',
    severity: 'medium',
    symptoms: {
      en: ['often no symptoms', 'sudden and intense pain in upper right abdomen', 'back pain between shoulder blades', 'pain in right shoulder', 'nausea or vomiting'],
      fr: ['souvent aucun symptôme', 'douleur soudaine et intense dans la partie supérieure droite de l\'abdomen', 'douleur au dos entre les omoplates', 'douleur à l\'épaule droite', 'nausées ou vomissements'],
      sw: ['mara nyingi hakuna dalili', 'maumivu ya ghafla na makali juu ya tumbo la kulia', 'maumivu ya mgongo kati ya mabega', 'maumivu kwenye bega la kulia', 'kichefuchefu au kutapika']
    },
    commonSymptoms: {
      en: ['sudden intense abdominal pain', 'back pain', 'nausea'],
      fr: ['douleur abdominale intense et soudaine', 'mal de dos', 'nausées'],
      sw: ['maumivu makali ya ghafla ya tumbo', 'maumivu ya mgongo', 'kichefuchefu']
    },
    rareSymptoms: {
      en: ['high temperature', 'jaundice (yellow skin and eyes)', 'itchy skin', 'chills'],
      fr: ['température élevée', 'jaunisse (peau et yeux jaunes)', 'démangeaisons cutanées', 'frissons'],
      sw: ['joto la juu', 'manjano (ngozi na macho ya njano)', 'ngozi kuwasha', 'baridi']
    },
    causes: {
      en: ['bile contains too much cholesterol', 'bile contains too much bilirubin', 'gallbladder doesn\'t empty correctly'],
      fr: ['la bile contient trop de cholestérol', 'la bile contient trop de bilirubine', 'la vésicule biliaire ne se vide pas correctement'],
      sw: ['nyongo ina cholesterol nyingi sana', 'nyongo ina bilirubin nyingi sana', 'kibofu cha nyongo hakitoi vizuri']
    },
    riskFactors: {
      en: ['female gender', 'age 40 or older', 'obesity', 'pregnancy', 'high-fat diet', 'family history', 'diabetes'],
      fr: ['sexe féminin', 'âge de 40 ans ou plus', 'obésité', 'grossesse', 'régime riche en graisses', 'antécédents familiaux', 'diabète'],
      sw: ['jinsia ya kike', 'umri wa miaka 40 au zaidi', 'unene kupita kiasi', 'ujauzito', 'lishe yenye mafuta mengi', 'historia ya familia', 'kisukari']
    },
    treatment: {
      en: 'Surgery to remove the gallbladder (cholecystectomy), medications to dissolve gallstones.',
      fr: 'Chirurgie pour enlever la vésicule biliaire (cholécystectomie), médicaments pour dissoudre les calculs biliaires.',
      sw: 'Upasuaji wa kuondoa kibofu cha nyongo (cholecystectomy), dawa za kuyeyusha mawe kwenye nyongo.'
    },
    prevention: {
      en: 'Maintain a healthy weight, eat a high-fiber diet, eat healthy fats.',
      fr: 'Maintenir un poids santé, avoir une alimentation riche en fibres, consommer des graisses saines.',
      sw: 'Dumisha uzito wenye afya, kula lishe yenye nyuzi nyingi, kula mafuta yenye afya.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate care for severe abdominal pain, jaundice, or high fever with chills.',
      fr: 'Consultez immédiatement en cas de douleurs abdominales sévères, de jaunisse ou de forte fièvre avec frissons.',
      sw: 'Tafuta huduma ya haraka kwa maumivu makali ya tumbo, manjano, au homa kali na baridi.'
    },
    complications: {
      en: ['inflammation of the gallbladder (cholecystitis)', 'blockage of the common bile duct', 'blockage of the pancreatic duct', 'gallbladder cancer'],
      fr: ['inflammation de la vésicule biliaire (cholécystite)', 'obstruction du canal biliaire commun', 'obstruction du canal pancréatique', 'cancer de la vésicule biliaire'],
      sw: ['uvimbe wa kibofu cha nyongo (cholecystitis)', 'kuziba kwa mrija wa kawaida wa nyongo', 'kuziba kwa mrija wa kongosho', 'saratani ya kibofu cha nyongo']
    },
    diagnosis: {
      en: 'Ultrasound, CT scan, HIDA scan, blood tests.',
      fr: 'Échographie, scanner, scintigraphie HIDA, tests sanguins.',
      sw: 'Ultrasound, CT scan, HIDA scan, vipimo vya damu.'
    },
    prognosis: {
      en: 'Excellent after gallbladder removal. Most people have no symptoms.',
      fr: 'Excellent après l\'ablation de la vésicule biliaire. La plupart des gens n\'ont aucun symptôme.',
      sw: 'Nzuri sana baada ya kuondolewa kwa kibofu cha nyongo. Watu wengi hawana dalili.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'female'
  },
  {
    id: 'cirrhosis',
    name: {
      en: 'Cirrhosis',
      fr: 'Cirrhose',
      sw: 'Sirosisi'
    },
    category: 'digestive',
    severity: 'high',
    symptoms: {
      en: ['fatigue', 'loss of appetite', 'nausea', 'swelling in legs (edema)', 'abdominal swelling (ascites)', 'jaundice', 'itchy skin', 'easy bruising or bleeding'],
      fr: ['fatigue', 'perte d\'appétit', 'nausées', 'gonflement des jambes (œdème)', 'gonflement abdominal (ascite)', 'jaunisse', 'démangeaisons cutanées', 'ecchymoses ou saignements faciles'],
      sw: ['uchovu', 'kupoteza hamu ya kula', 'kichefuchefu', 'uvimbe wa miguu (edema)', 'uvimbe wa tumbo (ascites)', 'manjano', 'ngozi kuwasha', 'michubuko au kutokwa damu kwa urahisi']
    },
    commonSymptoms: {
      en: ['fatigue', 'jaundice', 'abdominal swelling', 'swelling in legs'],
      fr: ['fatigue', 'jaunisse', 'gonflement abdominal', 'gonflement des jambes'],
      sw: ['uchovu', 'manjano', 'uvimbe wa tumbo', 'uvimbe wa miguu']
    },
    rareSymptoms: {
      en: ['confusion, drowsiness (hepatic encephalopathy)', 'vomiting blood', 'dark, tarry stools', 'muscle wasting'],
      fr: ['confusion, somnolence (encéphalopathie hépatique)', 'vomissements de sang', 'selles noires et goudronneuses', 'fonte musculaire'],
      sw: ['kuchanganyikiwa, kusinzia (hepatic encephalopathy)', 'kutapika damu', 'kinyesi cheusi, cha lami', 'kupungua kwa misuli']
    },
    causes: {
      en: ['chronic alcohol abuse', 'chronic viral hepatitis (B, C)', 'nonalcoholic fatty liver disease (NAFLD)', 'autoimmune hepatitis'],
      fr: ['abus chronique d\'alcool', 'hépatite virale chronique (B, C)', 'stéatose hépatique non alcoolique (NAFLD)', 'hépatite auto-immune'],
      sw: ['matumizi mabaya ya pombe ya muda mrefu', 'hepatitis ya virusi ya muda mrefu (B, C)', 'ugonjwa wa ini wenye mafuta yasiyotokana na pombe (NAFLD)', 'hepatitis ya kinga']
    },
    riskFactors: {
      en: ['heavy alcohol consumption', 'viral hepatitis', 'obesity', 'diabetes'],
      fr: ['consommation excessive d\'alcool', 'hépatite virale', 'obésité', 'diabète'],
      sw: ['unywaji mwingi wa pombe', 'hepatitis ya virusi', 'unene kupita kiasi', 'kisukari']
    },
    treatment: {
      en: 'Treating the underlying cause, lifestyle changes (no alcohol), medications to manage complications, liver transplant.',
      fr: 'Traiter la cause sous-jacente, changements de mode de vie (pas d\'alcool), médicaments pour gérer les complications, greffe de foie.',
      sw: 'Kutibu chanzo, mabadiliko ya mtindo wa maisha (hakuna pombe), dawa za kudhibiti matatizo, upandikizaji wa ini.'
    },
    prevention: {
      en: 'Limit alcohol, maintain healthy weight, get vaccinated for hepatitis B, practice safe sex.',
      fr: 'Limiter l\'alcool, maintenir un poids santé, se faire vacciner contre l\'hépatite B, pratiquer des rapports sexuels protégés.',
      sw: 'Punguza pombe, dumisha uzito wenye afya, pata chanjo ya hepatitis B, fanya ngono salama.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate help for vomiting blood, black stools, or confusion. See a doctor for any signs of liver disease.',
      fr: 'Consultez immédiatement en cas de vomissements de sang, de selles noires ou de confusion. Consultez un médecin pour tout signe de maladie du foie.',
      sw: 'Tafuta msaada wa haraka kwa kutapika damu, kinyesi cheusi, au kuchanganyikiwa. Muone daktari kwa dalili zozote za ugonjwa wa ini.'
    },
    complications: {
      en: ['portal hypertension', 'liver cancer', 'liver failure', 'hepatic encephalopathy', 'kidney failure'],
      fr: ['hypertension portale', 'cancer du foie', 'insuffisance hépatique', 'encéphalopathie hépatique', 'insuffisance rénale'],
      sw: ['shinikizo la damu la portal', 'saratani ya ini', 'kushindwa kwa ini', 'hepatic encephalopathy', 'kushindwa kwa figo']
    },
    diagnosis: {
      en: 'Blood tests, imaging (ultrasound, CT, MRI), liver biopsy.',
      fr: 'Tests sanguins, imagerie (échographie, scanner, IRM), biopsie hépatique.',
      sw: 'Vipimo vya damu, picha (ultrasound, CT, MRI), biopsy ya ini.'
    },
    prognosis: {
      en: 'Irreversible scarring, but progression can be slowed or stopped by treating the cause. Advanced cirrhosis is life-threatening.',
      fr: 'Cicatrisation irréversible, mais la progression peut être ralentie ou arrêtée en traitant la cause. La cirrhose avancée est potentiellement mortelle.',
      sw: 'Makovu yasiyoweza kurekebishwa, lakini maendeleo yanaweza kupunguzwa au kusimamishwa kwa kutibu chanzo. Sirosisi ya hali ya juu ni hatari kwa maisha.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'pancreatitis',
    name: {
      en: 'Pancreatitis',
      fr: 'Pancréatite',
      sw: 'Pankreatitis'
    },
    category: 'digestive',
    severity: 'high',
    symptoms: {
      en: ['severe upper abdominal pain that radiates to the back', 'pain that worsens after eating', 'fever', 'rapid pulse', 'nausea', 'vomiting', 'tender abdomen'],
      fr: ['douleur abdominale supérieure sévère qui irradie vers le dos', 'douleur qui s\'aggrave après avoir mangé', 'fièvre', 'pouls rapide', 'nausées', 'vomissements', 'abdomen sensible'],
      sw: ['maumivu makali ya juu ya tumbo yanayoenea mgongoni', 'maumivu yanayozidi baada ya kula', 'homa', 'mapigo ya haraka ya moyo', 'kichefuchefu', 'kutapika', 'tumbo laini']
    },
    commonSymptoms: {
      en: ['severe upper abdominal pain', 'nausea', 'vomiting', 'fever'],
      fr: ['douleur abdominale supérieure sévère', 'nausées', 'vomissements', 'fièvre'],
      sw: ['maumivu makali ya juu ya tumbo', 'kichefuchefu', 'kutapika', 'homa']
    },
    rareSymptoms: {
      en: ['jaundice', 'internal bleeding', 'shock', 'bluish discoloration around navel or on flanks'],
      fr: ['jaunisse', 'hémorragie interne', 'choc', 'décoloration bleuâtre autour du nombril ou sur les flancs'],
      sw: ['manjano', 'kutokwa damu ndani', 'mshtuko', 'rangi ya bluu kuzunguka kitovu au kwenye mbavu']
    },
    causes: {
      en: ['gallstones', 'alcohol abuse', 'abdominal surgery', 'certain medications', 'high triglycerides', 'infection'],
      fr: ['calculs biliaires', 'abus d\'alcool', 'chirurgie abdominale', 'certains médicaments', 'triglycérides élevés', 'infection'],
      sw: ['mawe kwenye nyongo', 'matumizi mabaya ya pombe', 'upasuaji wa tumbo', 'dawa fulani', 'triglycerides za juu', 'maambukizi']
    },
    riskFactors: {
      en: ['alcoholism', 'gallstones', 'obesity', 'diabetes', 'family history'],
      fr: ['alcoolisme', 'calculs biliaires', 'obésité', 'diabète', 'antécédents familiaux'],
      sw: ['ulevi', 'mawe kwenye nyongo', 'unene kupita kiasi', 'kisukari', 'historia ya familia']
    },
    treatment: {
      en: 'Hospitalization, IV fluids, pain medication, nutritional support (fasting initially), treating the underlying cause.',
      fr: 'Hospitalisation, liquides IV, analgésiques, soutien nutritionnel (jeûne initial), traitement de la cause sous-jacente.',
      sw: 'Kulazwa hospitalini, maji ya mishipa, dawa za maumivu, msaada wa lishe (kufunga mwanzoni), kutibu chanzo.'
    },
    prevention: {
      en: 'Limit alcohol, maintain a healthy weight, avoid smoking, eat a low-fat diet.',
      fr: 'Limiter l\'alcool, maintenir un poids santé, éviter de fumer, avoir une alimentation pauvre en graisses.',
      sw: 'Punguza pombe, dumisha uzito wenye afya, epuka uvutaji sigara, kula lishe yenye mafuta kidogo.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate medical care for severe, persistent abdominal pain.',
      fr: 'Consultez immédiatement un médecin en cas de douleurs abdominales sévères et persistantes.',
      sw: 'Tafuta huduma ya matibabu ya haraka kwa maumivu makali, yanayoendelea ya tumbo.'
    },
    complications: {
      en: ['pseudocysts', 'infection', 'kidney failure', 'breathing problems', 'diabetes', 'malnutrition', 'pancreatic cancer'],
      fr: ['pseudokystes', 'infection', 'insuffisance rénale', 'problèmes respiratoires', 'diabète', 'malnutrition', 'cancer du pancréas'],
      sw: ['pseudocysts', 'maambukizi', 'kushindwa kwa figo', 'matatizo ya kupumua', 'kisukari', 'utapiamlo', 'saratani ya kongosho']
    },
    diagnosis: {
      en: 'Blood tests (amylase, lipase), CT scan, abdominal ultrasound, MRI.',
      fr: 'Tests sanguins (amylase, lipase), scanner, échographie abdominale, IRM.',
      sw: 'Vipimo vya damu (amylase, lipase), CT scan, ultrasound ya tumbo, MRI.'
    },
    prognosis: {
      en: 'Acute pancreatitis usually resolves with treatment. Chronic pancreatitis can lead to long-term problems.',
      fr: 'La pancréatite aiguë se résout généralement avec un traitement. La pancréatite chronique peut entraîner des problèmes à long terme.',
      sw: 'Pankreatitis ya ghafla kawaida huisha na matibabu. Pankreatitis ya kudumu inaweza kusababisha matatizo ya muda mrefu.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'diverticulitis',
    name: {
      en: 'Diverticulitis',
      fr: 'Diverticulite',
      sw: 'Diverticulitis'
    },
    category: 'digestive',
    severity: 'medium',
    symptoms: {
      en: ['persistent lower left abdominal pain', 'fever', 'nausea and vomiting', 'constipation or diarrhea', 'abdominal tenderness'],
      fr: ['douleur abdominale inférieure gauche persistante', 'fièvre', 'nausées et vomissements', 'constipation ou diarrhée', 'sensibilité abdominale'],
      sw: ['maumivu ya chini ya tumbo la kushoto yanayoendelea', 'homa', 'kichefuchefu na kutapika', 'choo kigumu au kuhara', 'tumbo laini']
    },
    commonSymptoms: {
      en: ['lower left abdominal pain', 'fever', 'nausea'],
      fr: ['douleur abdominale inférieure gauche', 'fièvre', 'nausées'],
      sw: ['maumivu ya chini ya tumbo la kushoto', 'homa', 'kichefuchefu']
    },
    rareSymptoms: {
      en: ['rectal bleeding', 'bloating', 'urinary symptoms'],
      fr: ['saignement rectal', 'ballonnements', 'symptômes urinaires'],
      sw: ['kutokwa damu rektamu', 'kuvimbiwa', 'dalili za mkojo']
    },
    causes: {
      en: ['inflammation or infection of small pouches (diverticula) in the colon wall'],
      fr: ['inflammation ou infection de petites poches (diverticules) dans la paroi du côlon'],
      sw: ['uvimbe au maambukizi ya mifuko midogo (diverticula) kwenye ukuta wa utumbo mpana']
    },
    riskFactors: {
      en: ['aging', 'obesity', 'smoking', 'lack of exercise', 'high-fat, low-fiber diet', 'certain medications (steroids, NSAIDs)'],
      fr: ['vieillissement', 'obésité', 'tabagisme', 'manque d\'exercice', 'régime riche en graisses et pauvre en fibres', 'certains médicaments (stéroïdes, AINS)'],
      sw: ['kuzeeka', 'unene kupita kiasi', 'uvutaji sigara', 'ukosefu wa mazoezi', 'lishe yenye mafuta mengi, nyuzi kidogo', 'dawa fulani (steroids, NSAIDs)']
    },
    treatment: {
      en: 'Rest, liquid or low-fiber diet, antibiotics. Severe cases may require hospitalization or surgery.',
      fr: 'Repos, régime liquide ou pauvre en fibres, antibiotiques. Les cas graves peuvent nécessiter une hospitalisation ou une intervention chirurgicale.',
      sw: 'Pumziko, lishe ya maji au nyuzi kidogo, antibiotiki. Kesi kali zinaweza kuhitaji kulazwa hospitalini au upasuaji.'
    },
    prevention: {
      en: 'High-fiber diet, regular exercise, drink plenty of fluids, maintain a healthy weight.',
      fr: 'Alimentation riche en fibres, exercice régulier, boire beaucoup de liquides, maintenir un poids santé.',
      sw: 'Lishe yenye nyuzi nyingi, mazoezi ya mara kwa mara, kunywa maji mengi, dumisha uzito wenye afya.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for persistent, unexplained abdominal pain, especially with fever and changes in bowel habits.',
      fr: 'Consultez un médecin en cas de douleurs abdominales persistantes et inexpliquées, surtout avec de la fièvre et des changements dans les habitudes intestinales.',
      sw: 'Muone daktari kwa maumivu ya tumbo yanayoendelea, yasiyoelezeka, hasa na homa na mabadiliko ya tabia ya haja.'
    },
    complications: {
      en: ['abscess', 'fistula', 'bowel obstruction', 'peritonitis'],
      fr: ['abcès', 'fistule', 'occlusion intestinale', 'péritonite'],
      sw: ['jipu', 'fistula', 'kuziba kwa utumbo', 'peritonitis']
    },
    diagnosis: {
      en: 'CT scan, blood tests, stool tests. Colonoscopy after acute episode resolves.',
      fr: 'Scanner, tests sanguins, tests de selles. Coloscopie après résolution de l\'épisode aigu.',
      sw: 'CT scan, vipimo vya damu, vipimo vya kinyesi. Colonoscopy baada ya kipindi cha ghafla kuisha.'
    },
    prognosis: {
      en: 'Most cases can be treated with rest and antibiotics. Recurrence is common.',
      fr: 'La plupart des cas peuvent être traités avec du repos et des antibiotiques. La récidive est fréquente.',
      sw: 'Kesi nyingi zinaweza kutibiwa na pumziko na antibiotiki. Kurudia ni kawaida.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'medium',
    ageGroup: 'elderly',
    gender: 'all'
  },
  {
    id: 'hemorrhoids',
    name: {
      en: 'Hemorrhoids (Piles)',
      fr: 'Hémorroïdes',
      sw: 'Bawasiri'
    },
    category: 'digestive',
    severity: 'low',
    symptoms: {
      en: ['painless bleeding during bowel movements', 'itching or irritation in anal region', 'pain or discomfort', 'swelling around anus', 'a lump near anus'],
      fr: ['saignement indolore lors des selles', 'démangeaisons ou irritation dans la région anale', 'douleur ou inconfort', 'gonflement autour de l\'anus', 'une bosse près de l\'anus'],
      sw: ['kutokwa damu bila maumivu wakati wa haja kubwa', 'muwasho au kuwashwa eneo la mkundu', 'maumivu au usumbufu', 'uvimbe kuzunguka mkundu', 'uvimbe karibu na mkundu']
    },
    commonSymptoms: {
      en: ['bleeding', 'itching', 'discomfort'],
      fr: ['saignement', 'démangeaisons', 'inconfort'],
      sw: ['kutokwa damu', 'muwasho', 'usumbufu']
    },
    rareSymptoms: {
      en: ['thrombosed hemorrhoid (severe pain)', 'anemia from chronic blood loss'],
      fr: ['hémorroïde thrombosée (douleur sévère)', 'anémie due à une perte de sang chronique'],
      sw: ['bawasiri iliyoganda (maumivu makali)', 'anemia kutokana na kupoteza damu kwa muda mrefu']
    },
    causes: {
      en: ['straining during bowel movements', 'sitting for long periods', 'chronic diarrhea or constipation', 'obesity', 'pregnancy'],
      fr: ['effort lors des selles', 'position assise prolongée', 'diarrhée ou constipation chronique', 'obésité', 'grossesse'],
      sw: ['kujikamua wakati wa haja kubwa', 'kukaa kwa muda mrefu', 'kuhara au choo kigumu cha muda mrefu', 'unene kupita kiasi', 'ujauzito']
    },
    riskFactors: {
      en: ['low-fiber diet', 'heavy lifting', 'aging', 'pregnancy'],
      fr: ['régime pauvre en fibres', 'soulèvement de charges lourdes', 'vieillissement', 'grossesse'],
      sw: ['lishe yenye nyuzi kidogo', 'kunyanyua vitu vizito', 'kuzeeka', 'ujauzito']
    },
    treatment: {
      en: 'High-fiber diet, topical creams, sitz baths, rubber band ligation, surgery for severe cases.',
      fr: 'Régime riche en fibres, crèmes topiques, bains de siège, ligature élastique, chirurgie pour les cas graves.',
      sw: 'Lishe yenye nyuzi nyingi, krimu za kupaka, bafu za sitz, kufunga na mpira, upasuaji kwa kesi kali.'
    },
    prevention: {
      en: 'Eat high-fiber foods, drink plenty of fluids, don\'t strain during bowel movements, exercise.',
      fr: 'Manger des aliments riches en fibres, boire beaucoup de liquides, ne pas forcer lors des selles, faire de l\'exercice.',
      sw: 'Kula vyakula vyenye nyuzi nyingi, kunywa maji mengi, usijikamue wakati wa haja kubwa, fanya mazoezi.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if you have bleeding during bowel movements or if hemorrhoids don\'t improve with home care.',
      fr: 'Consultez un médecin si vous saignez lors des selles ou si les hémorroïdes ne s\'améliorent pas avec les soins à domicile.',
      sw: 'Muone daktari ikiwa unatokwa damu wakati wa haja kubwa au ikiwa bawasiri haiboreki na huduma za nyumbani.'
    },
    complications: {
      en: ['anemia', 'strangulated hemorrhoid', 'blood clot'],
      fr: ['anémie', 'hémorroïde étranglée', 'caillot de sang'],
      sw: ['anemia', 'bawasiri iliyonyongwa', 'ganda la damu']
    },
    diagnosis: {
      en: 'Visual examination, digital rectal exam, anoscopy, colonoscopy.',
      fr: 'Examen visuel, toucher rectal, anuscopie, coloscopie.',
      sw: 'Uchunguzi wa kuona, uchunguzi wa kidole wa rektamu, anoscopy, colonoscopy.'
    },
    prognosis: {
      en: 'Usually good. Symptoms often resolve with home treatment and lifestyle changes.',
      fr: 'Généralement bon. Les symptômes se résolvent souvent avec un traitement à domicile et des changements de mode de vie.',
      sw: 'Kawaida nzuri. Dalili mara nyingi huisha na matibabu ya nyumbani na mabadiliko ya mtindo wa maisha.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'adult',
    gender: 'all'
  },
  {
    id: 'appendicitis',
    name: {
      en: 'Appendicitis',
      fr: 'Appendicite',
      sw: 'Apendisitis'
    },
    category: 'digestive',
    severity: 'emergency',
    symptoms: {
      en: ['sudden pain that begins on the right side of the lower abdomen', 'pain that begins around navel and shifts', 'pain that worsens with coughing or walking', 'nausea and vomiting', 'loss of appetite', 'low-grade fever'],
      fr: ['douleur soudaine qui commence du côté droit de l\'abdomen inférieur', 'douleur qui commence autour du nombril et se déplace', 'douleur qui s\'aggrave en toussant ou en marchant', 'nausées et vomissements', 'perte d\'appétit', 'fièvre légère'],
      sw: ['maumivu ya ghafla yanayoanza upande wa kulia wa chini ya tumbo', 'maumivu yanayoanza kuzunguka kitovu na kuhamia', 'maumivu yanayozidi kwa kukohoa au kutembea', 'kichefuchefu na kutapika', 'kupoteza hamu ya kula', 'homa kidogo']
    },
    commonSymptoms: {
      en: ['lower right abdominal pain', 'loss of appetite', 'nausea', 'fever'],
      fr: ['douleur abdominale inférieure droite', 'perte d\'appétit', 'nausées', 'fièvre'],
      sw: ['maumivu ya chini ya tumbo la kulia', 'kupoteza hamu ya kula', 'kichefuchefu', 'homa']
    },
    rareSymptoms: {
      en: ['constipation or diarrhea', 'bloating', 'flatulence'],
      fr: ['constipation ou diarrhée', 'ballonnements', 'flatulences'],
      sw: ['choo kigumu au kuhara', 'kuvimbiwa', 'kujamba']
    },
    causes: {
      en: ['blockage in the lining of the appendix, resulting in infection'],
      fr: ['obstruction de la muqueuse de l\'appendice, entraînant une infection'],
      sw: ['kuziba kwa bitana ya apendiksi, na kusababisha maambukizi']
    },
    riskFactors: {
      en: ['age (most common in teens and 20s)', 'male gender', 'family history'],
      fr: ['âge (le plus fréquent chez les adolescents et les jeunes de 20 ans)', 'sexe masculin', 'antécédents familiaux'],
      sw: ['umri (kawaida kwa vijana na wenye miaka 20)', 'jinsia ya kiume', 'historia ya familia']
    },
    treatment: {
      en: 'Surgical removal of the appendix (appendectomy). Antibiotics may be given before surgery.',
      fr: 'Ablation chirurgicale de l\'appendice (appendicectomie). Des antibiotiques peuvent être administrés avant la chirurgie.',
      sw: 'Upasuaji wa kuondoa apendiksi (appendectomy). Antibiotiki zinaweza kutolewa kabla ya upasuaji.'
    },
    prevention: {
      en: 'No proven way to prevent appendicitis.',
      fr: 'Aucun moyen prouvé de prévenir l\'appendicite.',
      sw: 'Hakuna njia iliyothibitishwa ya kuzuia apendisitis.'
    },
    whenToSeekHelp: {
      en: 'Seek immediate medical attention for severe abdominal pain.',
      fr: 'Consultez immédiatement un médecin en cas de douleurs abdominales sévères.',
      sw: 'Tafuta huduma ya matibabu ya haraka kwa maumivu makali ya tumbo.'
    },
    complications: {
      en: ['ruptured appendix', 'peritonitis', 'abscess'],
      fr: ['rupture de l\'appendice', 'péritonite', 'abcès'],
      sw: ['kupasukakwa apendiksi', 'peritonitis', 'jipu']
    },
    diagnosis: {
      en: 'Physical exam, blood tests, urine tests, ultrasound, CT scan.',
      fr: 'Examen physique, tests sanguins, tests d\'urine, échographie, scanner.',
      sw: 'Uchunguzi wa kimwili, vipimo vya damu, vipimo vya mkojo, ultrasound, CT scan.'
    },
    prognosis: {
      en: 'Excellent with prompt surgery. A ruptured appendix is a serious condition.',
      fr: 'Excellent avec une chirurgie rapide. Une rupture de l\'appendice est une condition grave.',
      sw: 'Nzuri sana na upasuaji wa haraka. Apendiksi iliyopasuka ni hali mbaya.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'constipation',
    name: {
      en: 'Constipation',
      fr: 'Constipation',
      sw: 'Choo Kigumu'
    },
    category: 'digestive',
    severity: 'low',
    symptoms: {
      en: ['fewer than three bowel movements a week', 'hard or lumpy stools', 'straining to have bowel movements', 'feeling of blockage'],
      fr: ['moins de trois selles par semaine', 'selles dures ou grumeleuses', 'effort pour aller à la selle', 'sensation de blocage'],
      sw: ['chini ya haja kubwa tatu kwa wiki', 'kinyesi kigumu au chenye madonge', 'kujikamua kupata haja kubwa', 'hisia ya kuziba']
    },
    commonSymptoms: {
      en: ['infrequent bowel movements', 'hard stools', 'straining'],
      fr: ['selles peu fréquentes', 'selles dures', 'effort'],
      sw: ['haja kubwa isiyo ya mara kwa mara', 'kinyesi kigumu', 'kujikamua']
    },
    rareSymptoms: {
      en: ['abdominal pain', 'bloating', 'nausea'],
      fr: ['douleur abdominale', 'ballonnements', 'nausées'],
      sw: ['maumivu ya tumbo', 'kuvimbiwa', 'kichefuchefu']
    },
    causes: {
      en: ['low-fiber diet', 'dehydration', 'lack of exercise', 'ignoring the urge to go', 'certain medications', 'medical conditions (e.g., IBS, hypothyroidism)'],
      fr: ['régime pauvre en fibres', 'déshydratation', 'manque d\'exercice', 'ignorer l\'envie d\'aller à la selle', 'certains médicaments', 'conditions médicales (par ex., SCI, hypothyroïdie)'],
      sw: ['lishe yenye nyuzi kidogo', 'upungufu wa maji mwilini', 'ukosefu wa mazoezi', 'kupuuza hamu ya kwenda haja', 'dawa fulani', 'hali za kiafya (k.m., IBS, hypothyroidism)']
    },
    riskFactors: {
      en: ['older age', 'female gender', 'being dehydrated', 'low-fiber diet', 'being inactive'],
      fr: ['âge avancé', 'sexe féminin', 'être déshydraté', 'régime pauvre en fibres', 'être inactif'],
      sw: ['umri mkubwa', 'jinsia ya kike', 'kuwa na upungufu wa maji', 'lishe yenye nyuzi kidogo', 'kutofanya mazoezi']
    },
    treatment: {
      en: 'Increase fiber and fluid intake, regular exercise, laxatives (short-term use), treating underlying cause.',
      fr: 'Augmenter l\'apport en fibres et en liquides, exercice régulier, laxatifs (utilisation à court terme), traiter la cause sous-jacente.',
      sw: 'Ongeza ulaji wa nyuzi na maji, mazoezi ya mara kwa mara, laxatives (matumizi ya muda mfupi), kutibu chanzo.'
    },
    prevention: {
      en: 'Eat a well-balanced, high-fiber diet. Drink plenty of fluids. Get regular exercise.',
      fr: 'Avoir une alimentation équilibrée et riche en fibres. Boire beaucoup de liquides. Faire de l\'exercice régulièrement.',
      sw: 'Kula lishe bora, yenye nyuzi nyingi. Kunywa maji mengi. Fanya mazoezi ya mara kwa mara.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if constipation is severe, lasts longer than three weeks, or is accompanied by blood in stool or severe pain.',
      fr: 'Consultez un médecin si la constipation est sévère, dure plus de trois semaines ou s\'accompagne de sang dans les selles ou de douleurs sévères.',
      sw: 'Muone daktari ikiwa choo kigumu ni kikali, kinadumu zaidi ya wiki tatu, au kinaambatana na damu kwenye kinyesi au maumivu makali.'
    },
    complications: {
      en: ['hemorrhoids', 'anal fissure', 'fecal impaction', 'rectal prolapse'],
      fr: ['hémorroïdes', 'fissure anale', 'fécalome', 'prolapsus rectal'],
      sw: ['bawasiri', 'mpasuko wa mkundu', 'kinyesi kuganda', 'kushuka kwa rektamu']
    },
    diagnosis: {
      en: 'Based on symptoms and physical exam. Further tests if an underlying condition is suspected.',
      fr: 'Basé sur les symptômes et l\'examen physique. Tests supplémentaires si une condition sous-jacente est suspectée.',
      sw: 'Kulingana na dalili na uchunguzi wa kimwili. Vipimo zaidi ikiwa hali ya msingi inashukiwa.'
    },
    prognosis: {
      en: 'Usually resolves with lifestyle changes. Chronic constipation may require long-term management.',
      fr: 'Se résout généralement avec des changements de mode de vie. La constipation chronique peut nécessiter une gestion à long terme.',
      sw: 'Kawaida huisha na mabadiliko ya mtindo wa maisha. Choo kigumu cha muda mrefu kinaweza kuhitaji usimamizi wa muda mrefu.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'very-high',
    ageGroup: 'all',
    gender: 'all'
  },
  {
    id: 'stomach-cancer',
    name: {
      en: 'Stomach Cancer (Gastric Cancer)',
      fr: 'Cancer de l\'Estomac (Cancer Gastrique)',
      sw: 'Saratani ya Tumbo'
    },
    category: 'oncological',
    severity: 'high',
    symptoms: {
      en: ['fatigue', 'feeling bloated after eating', 'severe heartburn', 'persistent indigestion', 'stomach pain', 'persistent nausea', 'unexplained weight loss'],
      fr: ['fatigue', 'sensation de ballonnement après avoir mangé', 'brûlures d\'estomac sévères', 'indigestion persistante', 'douleur à l\'estomac', 'nausées persistantes', 'perte de poids inexpliquée'],
      sw: ['uchovu', 'kujisikia kuvimbiwa baada ya kula', 'kiungulia kikali', 'usagaji chakula unaoendelea', 'maumivu ya tumbo', 'kichefuchefu kinachoendelea', 'kupungua uzito bila sababu']
    },
    commonSymptoms: {
      en: ['indigestion', 'stomach pain', 'weight loss', 'fatigue'],
      fr: ['indigestion', 'douleur à l\'estomac', 'perte de poids', 'fatigue'],
      sw: ['usagaji chakula', 'maumivu ya tumbo', 'kupungua uzito', 'uchovu']
    },
    rareSymptoms: {
      en: ['vomiting blood', 'black stools', 'jaundice', 'difficulty swallowing'],
      fr: ['vomissements de sang', 'selles noires', 'jaunisse', 'difficulté à avaler'],
      sw: ['kutapika damu', 'kinyesi cheusi', 'manjano', 'ugumu wa kumeza']
    },
    causes: {
      en: ['unknown, mutations in stomach cell DNA', 'H. pylori infection', 'GERD'],
      fr: ['inconnue, mutations de l\'ADN des cellules de l\'estomac', 'infection à H. pylori', 'RGO'],
      sw: ['haijulikani, mabadiliko katika DNA ya seli za tumbo', 'maambukizi ya H. pylori', 'GERD']
    },
    riskFactors: {
      en: ['smoking', 'high-salt diet', 'family history', 'chronic stomach inflammation (gastritis)', 'H. pylori infection'],
      fr: ['tabagisme', 'régime riche en sel', 'antécédents familiaux', 'inflammation chronique de l\'estomac (gastrite)', 'infection à H. pylori'],
      sw: ['uvutaji sigara', 'lishe yenye chumvi nyingi', 'historia ya familia', 'uvimbe sugu wa tumbo (gastritis)', 'maambukizi ya H. pylori']
    },
    treatment: {
      en: 'Surgery, chemotherapy, radiation therapy, targeted drug therapy, immunotherapy.',
      fr: 'Chirurgie, chimiothérapie, radiothérapie, thérapie ciblée, immunothérapie.',
      sw: 'Upasuaji, chemotherapy, tiba ya mionzi, tiba ya dawa inayolengwa, immunotherapy.'
    },
    prevention: {
      en: 'Maintain healthy weight, eat a diet rich in fruits and vegetables, reduce salty and smoked foods, don\'t smoke.',
      fr: 'Maintenir un poids santé, avoir une alimentation riche en fruits et légumes, réduire les aliments salés et fumés, ne pas fumer.',
      sw: 'Dumisha uzito wenye afya, kula lishe yenye matunda na mboga nyingi, punguza vyakula vya chumvi na vya kuvuta moshi, usivute sigara.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if you have persistent signs and symptoms that worry you.',
      fr: 'Consultez un médecin si vous avez des signes et symptômes persistants qui vous inquiètent.',
      sw: 'Muone daktari ikiwa una dalili na ishara zinazoendelea zinazokutia wasiwasi.'
    },
    complications: {
      en: ['metastasis (spread of cancer)', 'malnutrition', 'internal bleeding'],
      fr: ['métastases (propagation du cancer)', 'malnutrition', 'hémorragie interne'],
      sw: ['metastasis (kuenea kwa saratani)', 'utapiamlo', 'kutokwa damu ndani']
    },
    diagnosis: {
      en: 'Upper endoscopy with biopsy, imaging tests (CT, PET scan), exploratory surgery.',
      fr: 'Endoscopie supérieure avec biopsie, tests d\'imagerie (scanner, TEP), chirurgie exploratoire.',
      sw: 'Endoscopy ya juu na biopsy, vipimo vya picha (CT, PET scan), upasuaji wa uchunguzi.'
    },
    prognosis: {
      en: 'Depends on the stage at diagnosis. Early detection significantly improves outcomes.',
      fr: 'Dépend du stade au moment du diagnostic. La détection précoce améliore considérablement les résultats.',
      sw: 'Inategemea hatua wakati wa utambuzi. Utambuzi wa mapema unaboresha sana matokeo.'
    },
    source: 'mayo',
    prevalenceInAfrica: 'medium',
    ageGroup: 'elderly',
    gender: 'male'
  },
  {
    id: 'colorectal-cancer',
    name: {
      en: 'Colorectal Cancer',
      fr: 'Cancer Colorectal',
      sw: 'Saratani ya Utumbo Mpana na Rektamu'
    },
    category: 'oncological',
    severity: 'high',
    symptoms: {
      en: ['change in bowel habits', 'rectal bleeding or blood in stool', 'persistent abdominal discomfort', 'weakness or fatigue', 'unexplained weight loss'],
      fr: ['changement dans les habitudes intestinales', 'saignement rectal ou sang dans les selles', 'inconfort abdominal persistant', 'faiblesse ou fatigue', 'perte de poids inexpliquée'],
      sw: ['mabadiliko ya tabia ya haja', 'kutokwa damu rektamu au damu kwenye kinyesi', 'usumbufu wa tumbo unaoendelea', 'udhaifu au uchovu', 'kupungua uzito bila sababu']
    },
    commonSymptoms: {
      en: ['change in bowel habits', 'blood in stool', 'abdominal discomfort'],
      fr: ['changement dans les habitudes intestinales', 'sang dans les selles', 'inconfort abdominal'],
      sw: ['mabadiliko ya tabia ya haja', 'damu kwenye kinyesi', 'usumbufu wa tumbo']
    },
    rareSymptoms: {
      en: ['feeling that your bowel doesn\'t empty completely', 'vomiting', 'anemia'],
      fr: ['sensation que votre intestin ne se vide pas complètement', 'vomissements', 'anémie'],
      sw: ['hisia kwamba utumbo wako haujamaliza kabisa', 'kutapika', 'anemia']
    },
    causes: {
      en: ['unknown, mutations in colon cell DNA', 'begins as polyps'],
      fr: ['inconnue, mutations de l\'ADN des cellules du côlon', 'commence par des polypes'],
      sw: ['haijulikani, mabadiliko katika DNA ya seli za utumbo mpana', 'huanza kama polyps']
    },
    riskFactors: {
      en: ['older age', 'inflammatory bowel disease (Crohn\'s, colitis)', 'family history', 'low-fiber, high-fat diet', 'sedentary lifestyle', 'diabetes', 'obesity', 'smoking', 'alcohol'],
      fr: ['âge avancé', 'maladie inflammatoire de l\'intestin (Crohn, colite)', 'antécédents familiaux', 'régime pauvre en fibres et riche en graisses', 'mode de vie sédentaire', 'diabète', 'obésité', 'tabagisme', 'alcool'],
      sw: ['umri mkubwa', 'ugonjwa wa uvimbe wa utumbo (Crohn, colitis)', 'historia ya familia', 'lishe yenye nyuzi kidogo, mafuta mengi', 'mtindo wa maisha wa kukaa', 'kisukari', 'unene kupita kiasi', 'uvutaji sigara', 'pombe']
    },
    treatment: {
      en: 'Surgery, chemotherapy, radiation therapy, targeted drug therapy, immunotherapy.',
      fr: 'Chirurgie, chimiothérapie, radiothérapie, thérapie ciblée, immunothérapie.',
      sw: 'Upasuaji, chemotherapy, tiba ya mionzi, tiba ya dawa inayolengwa, immunotherapy.'
    },
    prevention: {
      en: 'Regular screening (colonoscopy), healthy diet, regular exercise, maintain healthy weight, limit alcohol, don\'t smoke.',
      fr: 'Dépistage régulier (coloscopie), alimentation saine, exercice régulier, maintenir un poids santé, limiter l\'alcool, ne pas fumer.',
      sw: 'Uchunguzi wa mara kwa mara (colonoscopy), lishe bora, mazoezi ya mara kwa mara, dumisha uzito wenye afya, punguza pombe, usivute sigara.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if you notice any persistent symptoms of colorectal cancer.',
      fr: 'Consultez un médecin si vous remarquez des symptômes persistants de cancer colorectal.',
      sw: 'Muone daktari ikiwa utaona dalili zozote zinazoendelea za saratani ya utumbo mpana na rektamu.'
    },
    complications: {
      en: ['bowel obstruction', 'metastasis', 'perforation of the colon'],
      fr: ['occlusion intestinale', 'métastases', 'perforation du côlon'],
      sw: ['kuziba kwa utumbo', 'metastasis', 'kutoboka kwa utumbo mpana']
    },
    diagnosis: {
      en: 'Colonoscopy with biopsy, blood tests (CEA marker), CT scan.',
      fr: 'Coloscopie avec biopsie, tests sanguins (marqueur ACE), scanner.',
      sw: 'Colonoscopy na biopsy, vipimo vya damu (alama ya CEA), CT scan.'
    },
    prognosis: {
      en: 'Highly treatable when caught early. Prognosis depends on the stage of cancer.',
      fr: 'Très traitable lorsqu\'il est détecté tôt. Le pronostic dépend du stade du cancer.',
      sw: 'Inatibika sana inapogunduliwa mapema. Ubashiri unategemea hatua ya saratani.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'elderly',
    gender: 'all'
  },
  {
    id: 'alcoholic-liver-disease',
    name: {
      en: 'Alcoholic Liver Disease',
      fr: 'Maladie Alcoolique du Foie',
      sw: 'Ugonjwa wa Ini unaosababishwa na Pombe'
    },
    category: 'digestive',
    severity: 'high',
    symptoms: {
      en: ['abdominal pain', 'fatigue', 'nausea', 'diarrhea', 'jaundice', 'swelling in legs and abdomen', 'confusion'],
      fr: ['douleur abdominale', 'fatigue', 'nausées', 'diarrhée', 'jaunisse', 'gonflement des jambes et de l\'abdomen', 'confusion'],
      sw: ['maumivu ya tumbo', 'uchovu', 'kichefuchefu', 'kuhara', 'manjano', 'uvimbe wa miguu na tumbo', 'kuchanganyikiwa']
    },
    commonSymptoms: {
      en: ['fatigue', 'nausea', 'abdominal pain', 'jaundice'],
      fr: ['fatigue', 'nausées', 'douleur abdominale', 'jaunisse'],
      sw: ['uchovu', 'kichefuchefu', 'maumivu ya tumbo', 'manjano']
    },
    rareSymptoms: {
      en: ['vomiting blood', 'fever', 'severe itching', 'muscle wasting'],
      fr: ['vomissements de sang', 'fièvre', 'démangeaisons sévères', 'fonte musculaire'],
      sw: ['kutapika damu', 'homa', 'muwasho mkali', 'kupungua kwa misuli']
    },
    causes: {
      en: ['excessive alcohol consumption over many years'],
      fr: ['consommation excessive d\'alcool pendant de nombreuses années'],
      sw: ['unywaji mwingi wa pombe kwa miaka mingi']
    },
    riskFactors: {
      en: ['long-term heavy drinking', 'female gender (more susceptible)', 'obesity', 'hepatitis C infection'],
      fr: ['consommation excessive d\'alcool à long terme', 'sexe féminin (plus sensible)', 'obésité', 'infection par l\'hépatite C'],
      sw: ['unywaji mwingi wa pombe wa muda mrefu', 'jinsia ya kike (huathirika zaidi)', 'unene kupita kiasi', 'maambukizi ya hepatitis C']
    },
    treatment: {
      en: 'Complete abstinence from alcohol. Nutritional support, medications for complications, liver transplant in severe cases.',
      fr: 'Abstinence complète d\'alcool. Soutien nutritionnel, médicaments pour les complications, greffe de foie dans les cas graves.',
      sw: 'Kuacha kabisa pombe. Msaada wa lishe, dawa za matatizo, upandikizaji wa ini katika kesi kali.'
    },
    prevention: {
      en: 'Drink alcohol in moderation or not at all. Maintain a healthy diet and weight.',
      fr: 'Boire de l\'alcool avec modération ou pas du tout. Maintenir une alimentation saine et un poids santé.',
      sw: 'Kunywa pombe kwa kiasi au kutokunywa kabisa. Dumisha lishe bora na uzito.'
    },
    whenToSeekHelp: {
      en: 'See a doctor if you have symptoms of liver disease or are unable to control your drinking.',
      fr: 'Consultez un médecin si vous présentez des symptômes de maladie du foie ou si vous ne parvenez pas à contrôler votre consommation d\'alcool.',
      sw: 'Muone daktari ikiwa una dalili za ugonjwa wa ini au huwezi kudhibiti unywaji wako.'
    },
    complications: {
      en: ['cirrhosis', 'portal hypertension', 'liver cancer', 'liver failure', 'hepatic encephalopathy'],
      fr: ['cirrhose', 'hypertension portale', 'cancer du foie', 'insuffisance hépatique', 'encéphalopathie hépatique'],
      sw: ['sirosisi', 'shinikizo la damu la portal', 'saratani ya ini', 'kushindwa kwa ini', 'hepatic encephalopathy']
    },
    diagnosis: {
      en: 'Blood tests (liver function), ultrasound, CT scan, MRI, liver biopsy.',
      fr: 'Tests sanguins (fonction hépatique), échographie, scanner, IRM, biopsie hépatique.',
      sw: 'Vipimo vya damu (utendaji wa ini), ultrasound, CT scan, MRI, biopsy ya ini.'
    },
    prognosis: {
      en: 'Depends on the stage of disease and whether the person stops drinking. Can be reversible in early stages.',
      fr: 'Dépend du stade de la maladie et de l\'arrêt de la consommation d\'alcool. Peut être réversible aux premiers stades.',
      sw: 'Inategemea hatua ya ugonjwa na ikiwa mtu ataacha kunywa. Inaweza kurekebishwa katika hatua za mwanzo.'
    },
    source: 'nhs',
    prevalenceInAfrica: 'high',
    ageGroup: 'adult',
    gender: 'all'
  }
];
