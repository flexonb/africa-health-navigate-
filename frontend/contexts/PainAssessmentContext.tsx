import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface PainAssessment {
  id: string;
  date: Date;
  score: number;
  scale: string;
  location?: string;
  description?: string;
  character?: string[];
  duration?: string;
  pattern?: string;
}

interface PainAssessmentContextType {
  assessments: PainAssessment[];
  addAssessment: (assessment: Omit<PainAssessment, 'id' | 'date'>) => void;
  deleteAssessment: (id: string) => void;
}

const PainAssessmentContext = createContext<PainAssessmentContextType | undefined>(undefined);

export function PainAssessmentProvider({ children }: { children: ReactNode }) {
  const [assessments, setAssessments] = useState<PainAssessment[]>(() => {
    const saved = localStorage.getItem('afrihealth-pain-assessments');
    if (saved) {
      try {
        return JSON.parse(saved).map((a: any) => ({ ...a, date: new Date(a.date) }));
      } catch (e) {
        console.error("Failed to parse pain assessments from localStorage", e);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('afrihealth-pain-assessments', JSON.stringify(assessments));
  }, [assessments]);

  const addAssessment = (assessmentData: Omit<PainAssessment, 'id' | 'date'>) => {
    const newAssessment: PainAssessment = {
      ...assessmentData,
      id: Date.now().toString(),
      date: new Date()
    };
    setAssessments(prev => [newAssessment, ...prev].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  };

  const deleteAssessment = (id: string) => {
    setAssessments(prev => prev.filter(a => a.id !== id));
  };

  return (
    <PainAssessmentContext.Provider value={{ assessments, addAssessment, deleteAssessment }}>
      {children}
    </PainAssessmentContext.Provider>
  );
}

export function usePainAssessment() {
  const context = useContext(PainAssessmentContext);
  if (!context) {
    throw new Error('usePainAssessment must be used within a PainAssessmentProvider');
  }
  return context;
}
