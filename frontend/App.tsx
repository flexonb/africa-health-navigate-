import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { PatientRecordsProvider } from './contexts/PatientRecordsContext';
import { MoodTrackingProvider } from './contexts/MoodTrackingContext';
import { PainAssessmentProvider } from './contexts/PainAssessmentContext';
import { ModeProvider } from './contexts/ModeContext';
import { Toaster } from '@/components/ui/toaster';
import Layout from './components/Layout';
import Home from './pages/Home';
import Triage from './pages/Triage';
import Records from './pages/records';
import Encyclopedia from './pages/Encyclopedia';
import Tools from './pages/Tools';
import Guides from './pages/Guides';
import DosageCalculator from './pages/tools/DosageCalculator';
import BMICalculator from './pages/tools/BMICalculator';
import PregnancyTracker from './pages/tools/PregnancyTracker';
import ORSGuide from './pages/tools/ORSGuide';
import FirstAid from './pages/tools/FirstAid';
import VaccinationPlanner from './pages/tools/VaccinationPlanner';
import FacilityFinder from './pages/tools/FacilityFinder';
import MentalHealth from './pages/tools/MentalHealth';
import SanitationGuide from './pages/tools/SanitationGuide';
import DrugInteractionChecker from './pages/tools/DrugInteractionChecker';
import MedicalConverter from './pages/tools/MedicalConverter';
import IVCalculator from './pages/tools/IVCalculator';
import GlasgowComaScale from './pages/tools/GlasgowComaScale';
import APGARScore from './pages/tools/APGARScore';
import PainScale from './pages/tools/PainScale';
import HealthBuddy from './pages/tools/HealthBuddy';

function App() {
  return (
    <LanguageProvider>
      <ModeProvider>
        <PatientRecordsProvider>
          <MoodTrackingProvider>
            <PainAssessmentProvider>
              <Router>
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/triage" element={<Triage />} />
                    <Route path="/records" element={<Records />} />
                    <Route path="/encyclopedia" element={<Encyclopedia />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/guides" element={<Guides />} />
                    <Route path="/tools/dosage" element={<DosageCalculator />} />
                    <Route path="/tools/bmi" element={<BMICalculator />} />
                    <Route path="/tools/pregnancy" element={<PregnancyTracker />} />
                    <Route path="/tools/ors" element={<ORSGuide />} />
                    <Route path="/tools/first-aid" element={<FirstAid />} />
                    <Route path="/tools/vaccination" element={<VaccinationPlanner />} />
                    <Route path="/tools/facilities" element={<FacilityFinder />} />
                    <Route path="/tools/mental-health" element={<MentalHealth />} />
                    <Route path="/tools/sanitation" element={<SanitationGuide />} />
                    <Route path="/tools/drug-interactions" element={<DrugInteractionChecker />} />
                    <Route path="/tools/medical-converter" element={<MedicalConverter />} />
                    <Route path="/tools/iv-calculator" element={<IVCalculator />} />
                    <Route path="/tools/glasgow-coma-scale" element={<GlasgowComaScale />} />
                    <Route path="/tools/apgar-score" element={<APGARScore />} />
                    <Route path="/tools/pain-scale" element={<PainScale />} />
                    <Route path="/tools/health-buddy" element={<HealthBuddy />} />
                  </Routes>
                </Layout>
                <Toaster />
              </Router>
            </PainAssessmentProvider>
          </MoodTrackingProvider>
        </PatientRecordsProvider>
      </ModeProvider>
    </LanguageProvider>
  );
}

export default App;
