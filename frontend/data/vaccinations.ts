export interface VaccineSchedule {
  id: string;
  vaccine: string;
  ageGroups: {
    age: string;
    doses: number;
    interval?: string;
  }[];
  description: string;
  importance: string;
  sideEffects: string[];
}

export const vaccineSchedules: VaccineSchedule[] = [
  {
    id: 'bcg',
    vaccine: 'BCG (Tuberculosis)',
    ageGroups: [
      { age: 'Birth', doses: 1 }
    ],
    description: 'Protects against severe forms of tuberculosis in children',
    importance: 'Essential for TB prevention in high-burden countries',
    sideEffects: ['Local swelling', 'Small scar formation', 'Mild fever']
  },
  {
    id: 'hepatitis-b',
    vaccine: 'Hepatitis B',
    ageGroups: [
      { age: 'Birth', doses: 1 },
      { age: '6 weeks', doses: 1 },
      { age: '10 weeks', doses: 1 },
      { age: '14 weeks', doses: 1 }
    ],
    description: 'Prevents hepatitis B infection and liver disease',
    importance: 'Critical for preventing chronic liver disease and cancer',
    sideEffects: ['Soreness at injection site', 'Mild fever', 'Fatigue']
  },
  {
    id: 'dpt',
    vaccine: 'DPT (Diphtheria, Pertussis, Tetanus)',
    ageGroups: [
      { age: '6 weeks', doses: 1 },
      { age: '10 weeks', doses: 1 },
      { age: '14 weeks', doses: 1 },
      { age: '18 months', doses: 1 }
    ],
    description: 'Protects against diphtheria, whooping cough, and tetanus',
    importance: 'Prevents serious respiratory and neurological complications',
    sideEffects: ['Local pain and swelling', 'Fever', 'Irritability']
  },
  {
    id: 'polio',
    vaccine: 'Polio (OPV/IPV)',
    ageGroups: [
      { age: 'Birth', doses: 1 },
      { age: '6 weeks', doses: 1 },
      { age: '10 weeks', doses: 1 },
      { age: '14 weeks', doses: 1 },
      { age: '18 months', doses: 1 }
    ],
    description: 'Prevents poliomyelitis and paralysis',
    importance: 'Essential for polio eradication efforts',
    sideEffects: ['Very rare side effects', 'Mild fever (IPV)']
  },
  {
    id: 'measles',
    vaccine: 'Measles',
    ageGroups: [
      { age: '9 months', doses: 1 },
      { age: '18 months', doses: 1 }
    ],
    description: 'Prevents measles infection and complications',
    importance: 'Prevents serious complications including pneumonia and encephalitis',
    sideEffects: ['Mild fever', 'Rash', 'Temporary joint pain']
  },
  {
    id: 'yellow-fever',
    vaccine: 'Yellow Fever',
    ageGroups: [
      { age: '9 months', doses: 1 }
    ],
    description: 'Prevents yellow fever in endemic areas',
    importance: 'Required for travel to endemic areas, provides lifelong immunity',
    sideEffects: ['Mild fever', 'Headache', 'Muscle aches']
  },
  {
    id: 'meningitis',
    vaccine: 'Meningococcal',
    ageGroups: [
      { age: '9 months', doses: 1 },
      { age: '2 years', doses: 1 }
    ],
    description: 'Protects against meningococcal meningitis',
    importance: 'Critical in meningitis belt countries during dry season',
    sideEffects: ['Local pain', 'Mild fever', 'Headache']
  },
  {
    id: 'pneumococcal',
    vaccine: 'Pneumococcal (PCV)',
    ageGroups: [
      { age: '6 weeks', doses: 1 },
      { age: '10 weeks', doses: 1 },
      { age: '14 weeks', doses: 1 }
    ],
    description: 'Prevents pneumococcal pneumonia and meningitis',
    importance: 'Reduces childhood pneumonia deaths significantly',
    sideEffects: ['Local swelling', 'Mild fever', 'Irritability']
  },
  {
    id: 'rotavirus',
    vaccine: 'Rotavirus',
    ageGroups: [
      { age: '6 weeks', doses: 1 },
      { age: '10 weeks', doses: 1 },
      { age: '14 weeks', doses: 1 }
    ],
    description: 'Prevents severe rotavirus diarrhea',
    importance: 'Major cause of severe diarrhea in children under 5',
    sideEffects: ['Mild diarrhea', 'Vomiting', 'Irritability']
  },
  {
    id: 'hpv',
    vaccine: 'HPV (Human Papillomavirus)',
    ageGroups: [
      { age: '9-14 years', doses: 2, interval: '6 months' }
    ],
    description: 'Prevents cervical cancer and genital warts',
    importance: 'Highly effective in preventing cervical cancer',
    sideEffects: ['Pain at injection site', 'Mild fever', 'Headache']
  }
];
