import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Manages the application's internationalization (i18n). All display text is sourced from translation objects for English, French, and Swahili. The selected language is persisted in localStorage.
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('afrihealth-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('afrihealth-language', language);
  }, [language]);

  const t = (key: string, replacements?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    let result = value || key;

    if (replacements && typeof result === 'string') {
      Object.keys(replacements).forEach(placeholder => {
        result = result.replace(`{${placeholder}}`, String(replacements[placeholder]));
      });
    }

    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
