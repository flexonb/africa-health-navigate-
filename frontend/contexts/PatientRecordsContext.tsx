import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface PatientRecord {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  phone?: string;
  emergencyContact?: string;
  emergencyContactPhone?: string;
  address?: string;
  bloodType?: string;
  allergies?: string[];
  chronicConditions?: string[];
  currentMedications?: Medication[];
  insuranceInfo?: string;
  occupation?: string;
  maritalStatus?: 'single' | 'married' | 'divorced' | 'widowed';
  nextOfKin?: string;
  visits: Visit[];
  vaccinations?: Vaccination[];
  labResults?: LabResult[];
  attachments?: Attachment[];
  referrals?: Referral[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Visit {
  id: string;
  date: Date;
  type: 'routine' | 'emergency' | 'follow-up' | 'consultation' | 'procedure';
  chiefComplaint: string;
  symptoms: string[];
  vitals: {
    temperature?: number;
    bloodPressure?: string;
    heartRate?: number;
    respiratoryRate?: number;
    oxygenSaturation?: number;
    weight?: number;
    height?: number;
    bmi?: number;
    painScale?: number;
  };
  physicalExam?: string;
  notes: string;
  diagnosis?: string;
  treatment?: string;
  prescriptions?: Prescription[];
  followUpDate?: Date;
  referrals?: string[];
  cost?: number;
  paymentStatus?: 'paid' | 'pending' | 'partial' | 'insurance';
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: Date;
  endDate?: Date;
  prescribedBy: string;
  notes?: string;
}

export interface Prescription {
  id: string;
  medication: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string;
  quantity: number;
}

export interface Vaccination {
  id: string;
  vaccine: string;
  date: Date;
  batchNumber?: string;
  administeredBy: string;
  nextDueDate?: Date;
  sideEffects?: string;
}

export interface LabResult {
  id: string;
  testName: string;
  date: Date;
  results: {
    parameter: string;
    value: string;
    unit: string;
    referenceRange: string;
    status: 'normal' | 'high' | 'low' | 'critical';
  }[];
  orderedBy: string;
  notes?: string;
}

export interface Attachment {
  id: string;
  name: string;
  type: 'image' | 'document' | 'xray' | 'report';
  date: Date;
  description?: string;
  fileData: string; // Base64 encoded file data
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  title: string;
  date: Date;
  notes?: string;
  completed: boolean;
}

export interface Referral {
  id: string;
  date: Date;
  referredTo: string;
  reason: string;
  notes?: string;
}

interface PatientRecordsContextType {
  patients: PatientRecord[];
  addPatient: (patient: Omit<PatientRecord, 'id' | 'visits' | 'vaccinations' | 'labResults' | 'attachments' | 'referrals' | 'currentMedications' | 'createdAt' | 'updatedAt'>) => void;
  updatePatient: (id: string, updates: Partial<PatientRecord>) => void;
  deletePatient: (id: string) => void;
  addVisit: (patientId: string, visit: Omit<Visit, 'id'>) => void;
  updateVisit: (patientId: string, visitId: string, updates: Partial<Visit>) => void;
  deleteVisit: (patientId: string, visitId: string) => void;
  addVaccination: (patientId: string, vaccination: Omit<Vaccination, 'id'>) => void;
  deleteVaccination: (patientId: string, vaccinationId: string) => void;
  addLabResult: (patientId: string, labResult: Omit<LabResult, 'id'>) => void;
  deleteLabResult: (patientId: string, labResultId: string) => void;
  addAttachment: (patientId: string, attachment: Omit<Attachment, 'id'>) => void;
  deleteAttachment: (patientId: string, attachmentId: string) => void;
  addMedication: (patientId: string, medication: Omit<Medication, 'id'>) => void;
  deleteMedication: (patientId: string, medicationId: string) => void;
  addReferral: (patientId: string, referral: Omit<Referral, 'id'>) => void;
  deleteReferral: (patientId: string, referralId: string) => void;
  getPatient: (id: string) => PatientRecord | undefined;
  searchPatients: (query: string) => PatientRecord[];
  getPatientsByAge: (minAge: number, maxAge: number) => PatientRecord[];
  getPatientsByCondition: (condition: string) => PatientRecord[];
  exportPatientData: (patientId: string) => string;
  importPatientData: (data: string) => boolean;
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id' | 'completed' | 'patientName'>) => void;
  updateAppointment: (id: string, updates: Partial<Appointment>) => void;
  deleteAppointment: (id: string) => void;
  getUpcomingAppointments: (days: number) => Appointment[];
}

const PatientRecordsContext = createContext<PatientRecordsContextType | undefined>(undefined);

export function PatientRecordsProvider({ children }: { children: ReactNode }) {
  const [patients, setPatients] = useState<PatientRecord[]>(() => {
    const saved = localStorage.getItem('afrihealth-patients');
    if (saved) {
      try {
        return JSON.parse(saved).map((p: any) => ({
          ...p,
          createdAt: new Date(p.createdAt),
          updatedAt: new Date(p.updatedAt),
          visits: p.visits.map((v: any) => ({
            ...v,
            date: new Date(v.date),
            followUpDate: v.followUpDate ? new Date(v.followUpDate) : undefined
          })),
          vaccinations: p.vaccinations?.map((v: any) => ({
            ...v,
            date: new Date(v.date),
            nextDueDate: v.nextDueDate ? new Date(v.nextDueDate) : undefined
          })) || [],
          labResults: p.labResults?.map((l: any) => ({
            ...l,
            date: new Date(l.date)
          })) || [],
          attachments: p.attachments?.map((a: any) => ({
            ...a,
            date: new Date(a.date)
          })) || [],
          referrals: p.referrals?.map((r: any) => ({
            ...r,
            date: new Date(r.date)
          })) || [],
          currentMedications: p.currentMedications?.map((m: any) => ({
            ...m,
            startDate: new Date(m.startDate),
            endDate: m.endDate ? new Date(m.endDate) : undefined
          })) || []
        }));
      } catch (e) {
        console.error("Failed to parse patients from localStorage", e);
        return [];
      }
    }
    return [];
  });

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('afrihealth-appointments');
    if (saved) {
      try {
        return JSON.parse(saved).map((a: any) => ({
          ...a,
          date: new Date(a.date)
        }));
      } catch (e) {
        console.error("Failed to parse appointments from localStorage", e);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('afrihealth-patients', JSON.stringify(patients));
  }, [patients]);

  useEffect(() => {
    localStorage.setItem('afrihealth-appointments', JSON.stringify(appointments));
  }, [appointments]);

  const addPatient = (patientData: Omit<PatientRecord, 'id' | 'visits' | 'vaccinations' | 'labResults' | 'attachments' | 'referrals' | 'currentMedications' | 'createdAt' | 'updatedAt'>) => {
    const newPatient: PatientRecord = {
      ...patientData,
      id: Date.now().toString(),
      visits: [],
      vaccinations: [],
      labResults: [],
      attachments: [],
      referrals: [],
      currentMedications: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setPatients(prev => [...prev, newPatient]);
  };

  const updatePatient = (id: string, updates: Partial<PatientRecord>) => {
    setPatients(prev => prev.map(patient => 
      patient.id === id 
        ? { ...patient, ...updates, updatedAt: new Date() }
        : patient
    ));
  };

  const deletePatient = (id: string) => {
    setPatients(prev => prev.filter(patient => patient.id !== id));
  };

  const addVisit = (patientId: string, visitData: Omit<Visit, 'id'>) => {
    const newVisit: Visit = {
      ...visitData,
      id: Date.now().toString()
    };
    
    setPatients(prev => prev.map(patient => 
      patient.id === patientId
        ? { 
            ...patient, 
            visits: [...patient.visits, newVisit].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const updateVisit = (patientId: string, visitId: string, updates: Partial<Visit>) => {
    setPatients(prev => prev.map(patient => 
      patient.id === patientId
        ? {
            ...patient,
            visits: patient.visits.map(visit =>
              visit.id === visitId ? { ...visit, ...updates } : visit
            ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const deleteVisit = (patientId: string, visitId: string) => {
    setPatients(prev => prev.map(patient => 
      patient.id === patientId
        ? {
            ...patient,
            visits: patient.visits.filter(visit => visit.id !== visitId),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const addVaccination = (patientId: string, vaccinationData: Omit<Vaccination, 'id'>) => {
    const newVaccination: Vaccination = {
      ...vaccinationData,
      id: Date.now().toString()
    };
    
    setPatients(prev => prev.map(patient => 
      patient.id === patientId
        ? { 
            ...patient, 
            vaccinations: [...(patient.vaccinations || []), newVaccination].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const deleteVaccination = (patientId: string, vaccinationId: string) => {
    setPatients(prev => prev.map(patient =>
      patient.id === patientId
        ? {
            ...patient,
            vaccinations: (patient.vaccinations || []).filter(v => v.id !== vaccinationId),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const addLabResult = (patientId: string, labResultData: Omit<LabResult, 'id'>) => {
    const newLabResult: LabResult = {
      ...labResultData,
      id: Date.now().toString()
    };
    
    setPatients(prev => prev.map(patient => 
      patient.id === patientId
        ? { 
            ...patient, 
            labResults: [...(patient.labResults || []), newLabResult].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const deleteLabResult = (patientId: string, labResultId: string) => {
    setPatients(prev => prev.map(patient =>
      patient.id === patientId
        ? {
            ...patient,
            labResults: (patient.labResults || []).filter(l => l.id !== labResultId),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const addAttachment = (patientId: string, attachmentData: Omit<Attachment, 'id'>) => {
    const newAttachment: Attachment = {
      ...attachmentData,
      id: Date.now().toString()
    };
    
    setPatients(prev => prev.map(patient => 
      patient.id === patientId
        ? { 
            ...patient, 
            attachments: [...(patient.attachments || []), newAttachment].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const deleteAttachment = (patientId: string, attachmentId: string) => {
    setPatients(prev => prev.map(patient =>
      patient.id === patientId
        ? {
            ...patient,
            attachments: (patient.attachments || []).filter(a => a.id !== attachmentId),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const addMedication = (patientId: string, medicationData: Omit<Medication, 'id'>) => {
    const newMedication: Medication = {
      ...medicationData,
      id: Date.now().toString()
    };
    
    setPatients(prev => prev.map(patient => 
      patient.id === patientId
        ? { 
            ...patient, 
            currentMedications: [...(patient.currentMedications || []), newMedication].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const deleteMedication = (patientId: string, medicationId: string) => {
    setPatients(prev => prev.map(patient =>
      patient.id === patientId
        ? {
            ...patient,
            currentMedications: (patient.currentMedications || []).filter(m => m.id !== medicationId),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const addReferral = (patientId: string, referralData: Omit<Referral, 'id'>) => {
    const newReferral: Referral = {
      ...referralData,
      id: Date.now().toString()
    };
    
    setPatients(prev => prev.map(patient => 
      patient.id === patientId
        ? { 
            ...patient, 
            referrals: [...(patient.referrals || []), newReferral].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const deleteReferral = (patientId: string, referralId: string) => {
    setPatients(prev => prev.map(patient =>
      patient.id === patientId
        ? {
            ...patient,
            referrals: (patient.referrals || []).filter(r => r.id !== referralId),
            updatedAt: new Date()
          }
        : patient
    ));
  };

  const getPatient = (id: string) => {
    return patients.find(patient => patient.id === id);
  };

  const searchPatients = (query: string) => {
    const lowerQuery = query.toLowerCase();
    return patients.filter(patient =>
      patient.name.toLowerCase().includes(lowerQuery) ||
      patient.phone?.toLowerCase().includes(lowerQuery) ||
      patient.allergies?.some(allergy => allergy.toLowerCase().includes(lowerQuery)) ||
      patient.chronicConditions?.some(condition => condition.toLowerCase().includes(lowerQuery))
    );
  };

  const getPatientsByAge = (minAge: number, maxAge: number) => {
    return patients.filter(patient => patient.age >= minAge && patient.age <= maxAge);
  };

  const getPatientsByCondition = (condition: string) => {
    const lowerCondition = condition.toLowerCase();
    return patients.filter(patient =>
      patient.chronicConditions?.some(c => c.toLowerCase().includes(lowerCondition)) ||
      patient.visits.some(visit => 
        visit.diagnosis?.toLowerCase().includes(lowerCondition) ||
        visit.symptoms.some(symptom => symptom.toLowerCase().includes(lowerCondition))
      )
    );
  };

  const exportPatientData = (patientId: string) => {
    const patient = getPatient(patientId);
    if (!patient) return '';
    return JSON.stringify(patient, null, 2);
  };

  const importPatientData = (data: string) => {
    try {
      const patientData = JSON.parse(data);
      // Validate and add patient
      if (patientData.name && patientData.age) {
        addPatient(patientData);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const addAppointment = (appointmentData: Omit<Appointment, 'id' | 'completed' | 'patientName'>) => {
    const patient = getPatient(appointmentData.patientId);
    if (!patient) return;

    const newAppointment: Appointment = {
      ...appointmentData,
      id: Date.now().toString(),
      completed: false,
      patientName: patient.name,
    };
    setAppointments(prev => [...prev, newAppointment].sort((a, b) => a.date.getTime() - b.date.getTime()));
  };

  const updateAppointment = (id: string, updates: Partial<Appointment>) => {
    setAppointments(prev => prev.map(app => 
      app.id === id ? { ...app, ...updates } : app
    ));
  };

  const deleteAppointment = (id: string) => {
    setAppointments(prev => prev.filter(app => app.id !== id));
  };

  const getUpcomingAppointments = (days: number) => {
    const now = new Date();
    const cutoff = new Date();
    cutoff.setDate(now.getDate() + days);
    return appointments.filter(app => !app.completed && app.date >= now && app.date <= cutoff)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  };

  return (
    <PatientRecordsContext.Provider value={{
      patients,
      addPatient,
      updatePatient,
      deletePatient,
      addVisit,
      updateVisit,
      deleteVisit,
      addVaccination,
      deleteVaccination,
      addLabResult,
      deleteLabResult,
      addAttachment,
      deleteAttachment,
      addMedication,
      deleteMedication,
      addReferral,
      deleteReferral,
      getPatient,
      searchPatients,
      getPatientsByAge,
      getPatientsByCondition,
      exportPatientData,
      importPatientData,
      appointments,
      addAppointment,
      updateAppointment,
      deleteAppointment,
      getUpcomingAppointments
    }}>
      {children}
    </PatientRecordsContext.Provider>
  );
}

export function usePatientRecords() {
  const context = useContext(PatientRecordsContext);
  if (!context) {
    throw new Error('usePatientRecords must be used within a PatientRecordsProvider');
  }
  return context;
}
