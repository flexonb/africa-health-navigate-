import React, { useState } from 'react';
import { useMode } from '../../contexts/ModeContext';
import PersonalView from './components/PersonalView';
import SpecialistView from './components/SpecialistView';

export default function Records() {
  const { mode } = useMode();

  return mode === 'personal' ? <PersonalView /> : <SpecialistView />;
}
