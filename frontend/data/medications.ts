export interface Medication {
  id: string;
  name: string;
  category: string;
  dosageFormula: {
    adult: string;
    pediatric: string;
  };
  maxDose: {
    adult: number; // in mg per day, unless specified otherwise in unit
    pediatric: number; // in mg/kg per day, unless specified otherwise in unit
  };
  unit: string;
  frequency: string;
  humanFrequency?: string; // e.g., "1-1-1" for morning-midday-evening
  contraindications: string[];
  warnings: string[];
}

export const medications: Medication[] = [
  {
    id: 'paracetamol',
    name: 'Paracetamol/Acetaminophen',
    category: 'Analgesic/Antipyretic',
    dosageFormula: {
      adult: '500-1000mg per dose',
      pediatric: '10-15mg/kg per dose'
    },
    maxDose: {
      adult: 4000,
      pediatric: 75
    },
    unit: 'mg',
    frequency: 'every 4-6 hours',
    humanFrequency: '1-1-1-1',
    contraindications: ['Severe liver disease', 'Allergy to paracetamol'],
    warnings: ['Do not exceed maximum daily dose', 'Check other medications for paracetamol content', 'Risk of liver damage with overdose or alcohol use']
  },
  {
    id: 'ibuprofen',
    name: 'Ibuprofen',
    category: 'NSAID',
    dosageFormula: {
      adult: '200-400mg per dose',
      pediatric: '5-10mg/kg per dose'
    },
    maxDose: {
      adult: 2400,
      pediatric: 40
    },
    unit: 'mg',
    frequency: 'every 6-8 hours',
    humanFrequency: '1-1-1',
    contraindications: ['Peptic ulcer', 'Severe heart failure', 'Severe kidney disease', 'Aspirin allergy'],
    warnings: ['Take with food to reduce stomach upset', 'Monitor for GI bleeding', 'Avoid in pregnancy (3rd trimester)']
  },
  {
    id: 'amoxicillin',
    name: 'Amoxicillin',
    category: 'Antibiotic',
    dosageFormula: {
      adult: '250-500mg per dose',
      pediatric: '25-45mg/kg/day in divided doses'
    },
    maxDose: {
      adult: 4500,
      pediatric: 90
    },
    unit: 'mg',
    frequency: 'every 8 or 12 hours',
    humanFrequency: '1-1-1 or 1-0-1',
    contraindications: ['Penicillin allergy', 'Mononucleosis'],
    warnings: ['Complete full course of treatment', 'May cause diarrhea', 'Report severe rash immediately']
  },
  {
    id: 'ors',
    name: 'Oral Rehydration Solution',
    category: 'Rehydration',
    dosageFormula: {
      adult: '200-400ml per loose stool',
      pediatric: '10-20ml/kg per loose stool'
    },
    maxDose: {
      adult: 4000, // ml/day
      pediatric: 100 // ml/kg/day
    },
    unit: 'ml',
    frequency: 'after each loose stool',
    contraindications: ['Severe vomiting', 'Intestinal obstruction', 'Shock'],
    warnings: ['Prepare fresh solution daily', 'Use clean water', 'Seek medical help if no improvement or signs of severe dehydration appear']
  },
  {
    id: 'artemether-lumefantrine',
    name: 'Artemether-Lumefantrine',
    category: 'Antimalarial',
    dosageFormula: {
      adult: '4 tablets per dose',
      pediatric: 'Weight-based: 5-14kg: 1 tab, 15-24kg: 2 tabs, 25-34kg: 3 tabs'
    },
    maxDose: {
      adult: 8, // tablets per day
      pediatric: 6 // tablets per day
    },
    unit: 'tablets',
    frequency: 'twice daily for 3 days',
    humanFrequency: '1-0-1',
    contraindications: ['Known hypersensitivity', 'Severe malaria', 'First trimester of pregnancy'],
    warnings: ['Take with fatty food for better absorption', 'Complete full course', 'Monitor for side effects like dizziness']
  },
  {
    id: 'metronidazole',
    name: 'Metronidazole',
    category: 'Antibiotic/Antiprotozoal',
    dosageFormula: {
      adult: '400-500mg per dose',
      pediatric: '7.5mg/kg per dose'
    },
    maxDose: {
      adult: 2250,
      pediatric: 50
    },
    unit: 'mg',
    frequency: 'every 8 hours for 5-10 days',
    humanFrequency: '1-1-1',
    contraindications: ['First trimester of pregnancy', 'Hypersensitivity'],
    warnings: ['Do not consume alcohol during and for 48h after treatment', 'May cause metallic taste', 'Complete full course']
  },
  {
    id: 'ciprofloxacin',
    name: 'Ciprofloxacin',
    category: 'Antibiotic',
    dosageFormula: {
      adult: '250-750mg per dose',
      pediatric: '10-20mg/kg per dose (use with caution)'
    },
    maxDose: {
      adult: 1500,
      pediatric: 40
    },
    unit: 'mg',
    frequency: 'every 12 hours',
    humanFrequency: '1-0-1',
    contraindications: ['Hypersensitivity to quinolones', 'Use with tizanidine'],
    warnings: ['Risk of tendonitis and tendon rupture', 'Avoid in children and pregnant women unless necessary', 'Maintain adequate hydration']
  },
  {
    id: 'azithromycin',
    name: 'Azithromycin',
    category: 'Antibiotic',
    dosageFormula: {
      adult: '500mg on day 1, then 250mg daily',
      pediatric: '10mg/kg on day 1, then 5mg/kg daily'
    },
    maxDose: {
      adult: 500,
      pediatric: 12
    },
    unit: 'mg',
    frequency: 'once daily for 3-5 days',
    humanFrequency: '1-0-0',
    contraindications: ['History of cholestatic jaundice/hepatic dysfunction with prior use'],
    warnings: ['Can prolong QT interval', 'Take with or without food', 'Complete full course']
  },
  {
    id: 'albendazole',
    name: 'Albendazole',
    category: 'Anthelmintic',
    dosageFormula: {
      adult: '400mg single dose',
      pediatric: '>2 years: 400mg single dose; 1-2 years: 200mg single dose'
    },
    maxDose: {
      adult: 400,
      pediatric: 400
    },
    unit: 'mg',
    frequency: 'single dose, may repeat in 2 weeks',
    humanFrequency: '1-0-0 (single dose)',
    contraindications: ['Pregnancy', 'Hypersensitivity'],
    warnings: ['Take with a fatty meal for better absorption for systemic infections', 'May cause dizziness']
  },
  {
    id: 'amlodipine',
    name: 'Amlodipine',
    category: 'Antihypertensive',
    dosageFormula: {
      adult: '5-10mg per dose',
      pediatric: '2.5-5mg per dose'
    },
    maxDose: {
      adult: 10,
      pediatric: 10
    },
    unit: 'mg',
    frequency: 'once daily',
    humanFrequency: '1-0-0',
    contraindications: ['Severe hypotension', 'Cardiogenic shock'],
    warnings: ['May cause ankle swelling', 'Monitor blood pressure regularly', 'Use with caution in severe liver disease']
  },
  {
    id: 'tld',
    name: 'Tenofovir/Lamivudine/Dolutegravir (TLD)',
    category: 'Antiretroviral (HIV)',
    dosageFormula: {
      adult: 'One tablet daily',
      pediatric: 'Weight-based dosing for children >25kg'
    },
    maxDose: {
      adult: 1, // tablet
      pediatric: 1 // tablet
    },
    unit: 'tablet',
    frequency: 'once daily',
    humanFrequency: '1-0-0',
    contraindications: ['Hypersensitivity to components'],
    warnings: ['Monitor kidney function', 'Risk of immune reconstitution syndrome', 'Must be taken every day without fail']
  },
  {
    id: 'salbutamol',
    name: 'Salbutamol (Albuterol) Inhaler',
    category: 'Bronchodilator',
    dosageFormula: {
      adult: '1-2 puffs as needed',
      pediatric: '1-2 puffs as needed'
    },
    maxDose: {
      adult: 8, // puffs per 24h
      pediatric: 8 // puffs per 24h
    },
    unit: 'puffs',
    frequency: 'every 4-6 hours as needed for symptoms',
    contraindications: ['Hypersensitivity'],
    warnings: ['Overuse can be dangerous', 'Seek medical help if symptoms worsen or inhaler is needed more often', 'Use a spacer for better delivery, especially in children']
  },
  {
    id: 'zinc-sulfate',
    name: 'Zinc Sulfate (for Diarrhea)',
    category: 'Supplement',
    dosageFormula: {
      adult: '10-20mg daily',
      pediatric: '<6 months: 10mg daily; >6 months: 20mg daily'
    },
    maxDose: {
      adult: 40,
      pediatric: 20
    },
    unit: 'mg',
    frequency: 'once daily for 10-14 days',
    humanFrequency: '1-0-0',
    contraindications: [],
    warnings: ['Give alongside ORS for diarrhea treatment', 'May cause vomiting if taken on an empty stomach']
  }
];
