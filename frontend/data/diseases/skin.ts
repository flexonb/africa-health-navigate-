import { ComprehensiveDisease } from './types';

export const skinDiseases: ComprehensiveDisease[] = [
  {
    id: 'scabies',
    name: {
      en: 'Scabies',
      fr: 'Gale',
      sw: 'Upele'
    },
    category: 'skin',
    severity: 'medium',
    symptoms: {
      en: ['intense itching, especially at night', 'pimple-like rash', 'burrows (tiny lines on skin)', 'sores from scratching'],
      fr: ['démangeaisons intenses, surtout la nuit', 'éruption cutanée ressemblant à des boutons', 'sillons (petites lignes sur la peau)', 'plaies dues au grattage'],
      sw: ['muwasho mkali, hasa usiku', 'upele kama chunusi', 'vichuguu (mistari midogo kwenye ngozi)', 'vidonda kutokana na kujikuna']
    },
    commonSymptoms: {
      en: ['intense itching', 'pimple-like rash'],
      fr: ['démangeaisons intenses', 'éruption cutanée ressemblant à des boutons'],
      sw: ['muwasho mkali', 'upele kama chunusi']
    },
    rareSymptoms: {
      en: ['crusted (Norwegian) scabies in immunocompromised individuals'],
      fr: ['gale croûteuse (norvégienne) chez les personnes immunodéprimées'],
      sw: ['upele wa magamba (wa Norway) kwa watu wenye kinga dhaifu']
    },
    causes: {
      en: ['infestation by the human itch mite (Sarcoptes scabiei)'],
      fr: ['infestation par l\'acarien de la gale (Sarcoptes scabiei)'],
      sw: ['maambukizi ya funza wa binadamu (Sarcoptes scabiei)']
    },
    riskFactors: {
      en: ['close physical contact', 'crowded conditions', 'sharing bedding or clothing'],
      fr: ['contact physique étroit', 'conditions de surpopulation', 'partage de literie ou de vêtements'],
      sw: ['mawasiliano ya karibu ya kimwili', 'mazingira ya msongamano', 'kushiriki matandiko au nguo']
    },
    treatment: {
      en: 'Prescription creams or lotions (permethrin, ivermectin). All household members and close contacts should be treated.',
      fr: 'Crèmes ou lotions sur ordonnance (perméthrine, ivermectine). Tous les membres du ménage et les contacts étroits doivent être traités.',
      sw: 'Krimu au losheni za daktari (permethrin, ivermectin). Wanafamilia wote na watu wa karibu wanapaswa kutibiwa.'
    },
    prevention: {
      en: 'Avoid direct skin-to-skin contact with an infected person. Wash bedding and clothing in hot water.',
      fr: 'Éviter le contact direct peau à peau avec une personne infectée. Laver la literie et les vêtements à l\'eau chaude.',
      sw: 'Epuka kugusana ngozi kwa ngozi na mtu aliyeambukizwa. Fua matandiko na nguo kwa maji ya moto.'
    },
    whenToSeekHelp: {
      en: 'See a doctor for diagnosis and prescription treatment. Itching can persist for weeks after treatment.',
      fr: 'Consultez un médecin pour un diagnostic et un traitement sur ordonnance. Les démangeaisons peuvent persister pendant des semaines après le traitement.',
      sw: 'Muone daktari kwa utambuzi na matibabu ya daktari. Muwasho unaweza kuendelea kwa wiki kadhaa baada ya matibabu.'
    },
    complications: {
      en: ['secondary bacterial infections from scratching'],
      fr: ['infections bactériennes secondaires dues au grattage'],
      sw: ['maambukizi ya pili ya bakteria kutokana na kujikuna']
    },
    diagnosis: {
      en: 'Physical examination of the rash and burrows. Skin scraping to look for mites or eggs.',
      fr: 'Examen physique de l\'éruption cutanée et des sillons. Grattage de la peau pour rechercher des acariens ou des œufs.',
      sw: 'Uchunguzi wa kimwili wa upele na vichuguu. Kukwangua ngozi kutafuta funza au mayai.'
    },
    prognosis: {
      en: 'Excellent with proper treatment of the patient and contacts.',
      fr: 'Excellent avec un traitement approprié du patient et des contacts.',
      sw: 'Nzuri sana na matibabu sahihi ya mgonjwa na watu wa karibu.'
    },
    source: 'cdc',
    prevalenceInAfrica: 'high',
    ageGroup: 'all',
    gender: 'all'
  },
];
