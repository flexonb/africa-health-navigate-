import React, { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { usePatientRecords, PatientRecord, Visit } from '../../../contexts/PatientRecordsContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import PatientDetailView from './PatientDetailView';
import AddPatientDialog from './dialogs/AddPatientDialog';
import AddVisitDialog from './dialogs/AddVisitDialog';
import AddVaccinationDialog from './dialogs/AddVaccinationDialog';
import AddLabResultDialog from './dialogs/AddLabResultDialog';
import AddAttachmentDialog from './dialogs/AddAttachmentDialog';
import AddMedicationDialog from './dialogs/AddMedicationDialog';
import AddAppointmentDialog from './dialogs/AddAppointmentDialog';

export default function PersonalView() {
  const { t } = useLanguage();
  const { 
    patients, addPatient, deletePatient, addVisit, updateVisit, deleteVisit,
    addVaccination, deleteVaccination, addLabResult, deleteLabResult, addAttachment, deleteAttachment,
    addMedication, deleteMedication, addReferral, deleteReferral,
    exportPatientData,
    appointments, addAppointment, updateAppointment, deleteAppointment
  } = usePatientRecords();
  const { toast } = useToast();

  const [showAddPatient, setShowAddPatient] = useState(false);
  const [showAddVisit, setShowAddVisit] = useState(false);
  const [showAddVaccination, setShowAddVaccination] = useState(false);
  const [showAddLabResult, setShowAddLabResult] = useState(false);
  const [showAddAttachment, setShowAddAttachment] = useState(false);
  const [showAddMedication, setShowAddMedication] = useState(false);
  const [showAddAppointment, setShowAddAppointment] = useState(false);
  const [editingVisit, setEditingVisit] = useState<Visit | null>(null);

  const myProfile = patients[0];

  const handleExportPDF = (patient: PatientRecord) => {
    // This function would be more complex in a real app
    const data = exportPatientData(patient.id);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `patient-record-${patient.name.replace(/\s/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: t('common.success'), description: 'Patient data exported.' });
  };

  const handleEditVisit = (visit: Visit) => {
    setEditingVisit(visit);
    setShowAddVisit(true);
  };

  const handleShowAddVisit = () => {
    setEditingVisit(null);
    setShowAddVisit(true);
  };

  if (!myProfile) {
    return (
      <>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>{t('pages.records.createProfile')}</CardTitle>
              <CardDescription>{t('pages.records.profileStored')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setShowAddPatient(true)} className="w-full">{t('pages.records.createProfileBtn')}</Button>
            </CardContent>
          </Card>
        </div>
        <AddPatientDialog
          isOpen={showAddPatient}
          onClose={() => setShowAddPatient(false)}
          onSave={addPatient}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PatientDetailView 
          patient={myProfile} 
          recordActions={{ deleteVisit, deleteVaccination, deleteLabResult, deleteAttachment, deleteMedication, deleteReferral }} 
          isPersonalView={true}
          onDeleteProfile={() => deletePatient(myProfile.id)}
          onAddVisit={handleShowAddVisit}
          onEditVisit={handleEditVisit}
          onAddVaccination={() => setShowAddVaccination(true)}
          onAddLabResult={() => setShowAddLabResult(true)}
          onAddAttachment={() => setShowAddAttachment(true)}
          onAddMedication={() => setShowAddMedication(true)}
          onAddReferral={() => { /* Not used in personal view */ }}
          onExportPDF={handleExportPDF}
          appointments={appointments}
          onAddAppointment={() => setShowAddAppointment(true)}
          onUpdateAppointment={updateAppointment}
          onDeleteAppointment={deleteAppointment}
        />
      </div>
      <AddVisitDialog
        isOpen={showAddVisit}
        onClose={() => setShowAddVisit(false)}
        patientId={myProfile.id}
        addVisit={addVisit}
        updateVisit={updateVisit}
        editingVisit={editingVisit}
      />
      <AddVaccinationDialog
        isOpen={showAddVaccination}
        onClose={() => setShowAddVaccination(false)}
        patientId={myProfile.id}
        addVaccination={addVaccination}
      />
      <AddLabResultDialog
        isOpen={showAddLabResult}
        onClose={() => setShowAddLabResult(false)}
        patientId={myProfile.id}
        addLabResult={addLabResult}
      />
      <AddAttachmentDialog
        isOpen={showAddAttachment}
        onClose={() => setShowAddAttachment(false)}
        patientId={myProfile.id}
        addAttachment={addAttachment}
      />
      <AddMedicationDialog
        isOpen={showAddMedication}
        onClose={() => setShowAddMedication(false)}
        patientId={myProfile.id}
        addMedication={addMedication}
      />
      <AddAppointmentDialog
        isOpen={showAddAppointment}
        onClose={() => setShowAddAppointment(false)}
        patientId={myProfile.id}
        addAppointment={addAppointment}
      />
    </div>
  );
}
