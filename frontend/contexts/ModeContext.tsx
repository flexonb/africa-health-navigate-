import React, { createContext, useContext, useState, ReactNode } from 'react';

export type AppMode = 'personal' | 'specialist';

interface ModeContextType {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<AppMode>(() => {
    const savedMode = localStorage.getItem('docomax-mode') as AppMode;
    return savedMode || 'personal'; // Default to personal
  });

  const setMode = (newMode: AppMode) => {
    localStorage.setItem('docomax-mode', newMode);
    setModeState(newMode);
  };

  const toggleMode = () => {
    setMode(mode === 'personal' ? 'specialist' : 'personal');
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}
