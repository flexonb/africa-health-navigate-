import { ComprehensiveDisease } from './diseases/types';
import { cardiovascularDiseases } from './diseases/cardiovascular';
import { chronicDiseases } from './diseases/chronic';
import { digestiveDiseases } from './diseases/digestive';
import { endocrineDiseases } from './diseases/endocrine';
import { geneticDiseases } from './diseases/genetic';
import { infectiousDiseases } from './diseases/infectious';
import { maternalDiseases } from './diseases/maternal';
import { mentalDiseases } from './diseases/mental';
import { neurologicalDiseases } from './diseases/neurological';
import { pediatricDiseases } from './diseases/pediatric';
import { respiratoryDiseases } from './diseases/respiratory';
import { skinDiseases } from './diseases/skin';
import { autoimmuneDiseases } from './diseases/autoimmune';

export const comprehensiveDiseases: ComprehensiveDisease[] = [
  ...infectiousDiseases,
  ...respiratoryDiseases,
  ...cardiovascularDiseases,
  ...chronicDiseases,
  ...geneticDiseases,
  ...mentalDiseases,
  ...digestiveDiseases,
  ...neurologicalDiseases,
  ...skinDiseases,
  ...maternalDiseases,
  ...pediatricDiseases,
  ...endocrineDiseases,
  ...autoimmuneDiseases,
];

const enSymptoms = new Set<string>();
const frSymptoms = new Set<string>();
const swSymptoms = new Set<string>();

comprehensiveDiseases.forEach(disease => {
  disease.symptoms.en.forEach(symptom => enSymptoms.add(symptom));
  disease.symptoms.fr.forEach(symptom => frSymptoms.add(symptom));
  disease.symptoms.sw.forEach(symptom => swSymptoms.add(symptom));
});

export const comprehensiveSymptoms = {
  en: Array.from(enSymptoms).sort(),
  fr: Array.from(frSymptoms).sort(),
  sw: Array.from(swSymptoms).sort()
};

export const categories = [...new Set(comprehensiveDiseases.map(d => d.category))].sort();
export const sources = [...new Set(comprehensiveDiseases.map(d => d.source))].sort();

export function searchComprehensiveDiseases(term: string): ComprehensiveDisease[] {
  const lowerCaseTerm = term.toLowerCase();
  if (!lowerCaseTerm) return comprehensiveDiseases;

  return comprehensiveDiseases.filter(disease => {
    // Search in name
    if (disease.name.en.toLowerCase().includes(lowerCaseTerm) ||
        disease.name.fr.toLowerCase().includes(lowerCaseTerm) ||
        disease.name.sw.toLowerCase().includes(lowerCaseTerm)) {
      return true;
    }

    // Search in symptoms
    if (disease.symptoms.en.some(s => s.toLowerCase().includes(lowerCaseTerm)) ||
        disease.symptoms.fr.some(s => s.toLowerCase().includes(lowerCaseTerm)) ||
        disease.symptoms.sw.some(s => s.toLowerCase().includes(lowerCaseTerm))) {
      return true;
    }
    
    // Search in category
    if (disease.category.toLowerCase().includes(lowerCaseTerm)) {
      return true;
    }

    return false;
  });
}
