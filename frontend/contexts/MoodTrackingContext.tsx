import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface MoodEntry {
  id: string;
  date: Date;
  mood: 1 | 2 | 3 | 4 | 5; // 1 = very sad, 5 = very happy
  notes?: string;
  stressLevel: 1 | 2 | 3 | 4 | 5;
  sleepHours?: number;
  activities: string[];
}

interface MoodTrackingContextType {
  entries: MoodEntry[];
  addEntry: (entry: Omit<MoodEntry, 'id'>) => void;
  updateEntry: (id: string, updates: Partial<MoodEntry>) => void;
  deleteEntry: (id: string) => void;
  deleteMultipleEntries: (ids: string[]) => void;
  getEntriesForPeriod: (days: number) => MoodEntry[];
}

const MoodTrackingContext = createContext<MoodTrackingContextType | undefined>(undefined);

export function MoodTrackingProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<MoodEntry[]>(() => {
    const saved = localStorage.getItem('docomax-mood');
    if (saved) {
      return JSON.parse(saved).map((entry: any) => ({
        ...entry,
        date: new Date(entry.date)
      }));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('docomax-mood', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entryData: Omit<MoodEntry, 'id'>) => {
    const newEntry: MoodEntry = {
      ...entryData,
      id: Date.now().toString()
    };
    setEntries(prev => [...prev, newEntry].sort((a, b) => b.date.getTime() - a.date.getTime()));
  };

  const updateEntry = (id: string, updates: Partial<MoodEntry>) => {
    setEntries(prev => prev.map(entry => 
      entry.id === id ? { ...entry, ...updates } : entry
    ));
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const deleteMultipleEntries = (ids: string[]) => {
    setEntries(prev => prev.filter(entry => !ids.includes(entry.id)));
  };

  const getEntriesForPeriod = (days: number) => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return entries.filter(entry => entry.date >= cutoff);
  };

  return (
    <MoodTrackingContext.Provider value={{
      entries,
      addEntry,
      updateEntry,
      deleteEntry,
      deleteMultipleEntries,
      getEntriesForPeriod
    }}>
      {children}
    </MoodTrackingContext.Provider>
  );
}

export function useMoodTracking() {
  const context = useContext(MoodTrackingContext);
  if (!context) {
    throw new Error('useMoodTracking must be used within a MoodTrackingProvider');
  }
  return context;
}
