export interface ComprehensiveDisease {
  id: string;
  name: { en: string; fr: string; sw: string };
  category: 'infectious' | 'chronic' | 'emergency' | 'mental' | 'maternal' | 'pediatric' | 'musculoskeletal' | 'autoimmune' | 'genetic' | 'skin' | 'respiratory' | 'cardiovascular' | 'digestive' | 'neurological' | 'endocrine' | 'urological' | 'hematological' | 'oncological' | 'ophthalmological' | 'ent' | 'reproductive' | 'metabolic' | 'immunological' | 'environmental';
  severity: 'low' | 'medium' | 'high' | 'emergency';
  symptoms: { en: string[]; fr: string[]; sw: string[] };
  commonSymptoms: { en: string[]; fr: string[]; sw: string[] };
  rareSymptoms: { en: string[]; fr: string[]; sw: string[] };
  causes: { en: string[]; fr: string[]; sw: string[] };
  riskFactors: { en: string[]; fr: string[]; sw: string[] };
  treatment: { en: string; fr: string; sw: string };
  prevention: { en: string; fr: string; sw: string };
  whenToSeekHelp: { en: string; fr: string; sw: string };
  complications: { en: string[]; fr: string[]; sw: string[] };
  diagnosis: { en: string; fr: string; sw: string };
  prognosis: { en: string; fr: string; sw: string };
  source: 'mayo' | 'nhs' | 'nhsscot' | 'illinois' | 'ecdc' | 'who' | 'cdc';
  prevalenceInAfrica: 'very-high' | 'high' | 'medium' | 'low' | 'rare';
  ageGroup: 'all' | 'pediatric' | 'adult' | 'elderly';
  gender: 'all' | 'male' | 'female';
}
