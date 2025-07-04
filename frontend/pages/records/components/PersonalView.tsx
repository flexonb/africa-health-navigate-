import React, { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { usePatientRecords, PatientRecord, Visit } from '../../../contexts/PatientRecordsContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import PatientDetailView from './PatientDetailView';
import AddPatientDialog from './dialogs/AddPatientDialog';
import AddVisitDialog from './dialogs/AddVisitDialog';
import AddVaccinationDialog from './dialogs/AddVaccinationDialog';
import AddLabResultDialog from './dialogs/AddLabResultDialog';
import AddAttachmentDialog from './dialogs/AddAttachmentDialog';
import AddMedicationDialog from './dialogs/AddMedicationDialog';
import AddAppointmentDialog from './dialogs/AddAppointmentDialog';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function PersonalView() {
  const { t } = useLanguage();
  const { 
    patients, addPatient, deletePatient, addVisit, updateVisit, deleteVisit,
    addVaccination, deleteVaccination, addLabResult, deleteLabResult, addAttachment, deleteAttachment,
    addMedication, deleteMedication, addReferral, deleteReferral,
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
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

    const addHeader = () => {
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('Docomax - Personal Health Record', pageWidth / 2, 20, { align: 'center' });
      doc.setFontSize(16);
      doc.text(patient.name, 14, 30);
      doc.setLineWidth(0.5);
      doc.line(14, 32, pageWidth - 14, 32);
    };

    const addFooter = (data: any) => {
      const pageCount = doc.internal.getNumberOfPages();
      doc.setFontSize(8);
      doc.setTextColor(150);
      doc.text(`Page ${data.pageNumber} of ${pageCount}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
      doc.text(`Generated on: ${new Date().toLocaleString()}`, pageWidth - 14, pageHeight - 10, { align: 'right' });
    };

    const tableOptions = {
      theme: 'grid' as const,
      headStyles: { fillColor: [22, 163, 74] as [number, number, number], textColor: 255 },
      styles: { fontSize: 9, cellPadding: 2 },
      margin: { top: 40, bottom: 20, left: 14, right: 14 },
      didDrawPage: (data: any) => {
        addHeader();
        addFooter(data);
      }
    };

    const patientInfo = [
      ['Age', `${patient.age} ${t('common.years')}`],
      ['Gender', t(`common.${patient.gender}`)],
      ['Blood Type', patient.bloodType || 'N/A'],
      ['Phone', patient.phone || 'N/A'],
      ['Address', patient.address || 'N/A'],
      ['Emergency Contact', `${patient.emergencyContact || 'N/A'} (${patient.emergencyContactPhone || 'N/A'})`],
    ];
    if (patient.allergies && patient.allergies.length > 0) {
      patientInfo.push(['Allergies', patient.allergies.join(', ')]);
    }
    if (patient.chronicConditions && patient.chronicConditions.length > 0) {
      patientInfo.push(['Chronic Conditions', patient.chronicConditions.join(', ')]);
    }

    autoTable(doc, {
      ...tableOptions,
      head: [['Personal Information', '']],
      body: patientInfo,
      headStyles: { fillColor: [22, 163, 74], fontSize: 12 },
      columnStyles: { 0: { fontStyle: 'bold' } }
    });

    const drawSection = (title: string, head: any[], body: any[][]) => {
      if (!body || body.length === 0) return;
      autoTable(doc, {
        ...tableOptions,
        head: [[title]],
        body: [],
        headStyles: { fillColor: [22, 163, 74], fontSize: 12 },
        startY: (doc as any).lastAutoTable.finalY + 10,
      });
      autoTable(doc, {
        ...tableOptions,
        head: head,
        body: body,
        startY: (doc as any).lastAutoTable.finalY,
      });
    };

    const patientAppointments = appointments.filter(a => a.patientId === patient.id);
    drawSection('Appointments', [['Date', 'Title', 'Status']], patientAppointments.map(a => [new Date(a.date).toLocaleString(), a.title, a.completed ? 'Completed' : 'Upcoming']));

    drawSection('Vaccinations', [['Vaccine', 'Date']], (patient.vaccinations || []).map(v => [v.vaccine, new Date(v.date).toLocaleDateString()]));

    if (patient.labResults && patient.labResults.length > 0) {
      autoTable(doc, {
        ...tableOptions,
        head: [['Lab Results']],
        body: [],
        headStyles: { fillColor: [22, 163, 74], fontSize: 12 },
        startY: (doc as any).lastAutoTable.finalY + 10,
      });
      patient.labResults.forEach(lab => {
        autoTable(doc, {
          ...tableOptions,
          head: [[`${lab.testName} - ${new Date(lab.date).toLocaleDateString()}`]],
          body: [],
          headStyles: { fillColor: [100, 100, 100], fontSize: 10 },
          startY: (doc as any).lastAutoTable.finalY,
        });
        autoTable(doc, {
          ...tableOptions,
          head: [['Parameter', 'Value']],
          body: lab.results.map(r => [r.parameter, r.value]),
          startY: (doc as any).lastAutoTable.finalY,
        });
        if (lab.notes) {
          autoTable(doc, {
            ...tableOptions,
            body: [['Notes', lab.notes]],
            startY: (doc as any).lastAutoTable.finalY,
          });
        }
      });
    }

    drawSection('Current Medications', [['Medication', 'Dosage', 'Frequency', 'Start Date']], (patient.currentMedications || []).map(m => [m.name, m.dosage, m.frequency, new Date(m.startDate).toLocaleDateString()]));

    drawSection('Attachments', [['Name', 'Type', 'Date']], (patient.attachments || []).map(a => [a.name, a.type, new Date(a.date).toLocaleDateString()]));

    doc.save(`personal-health-record-${patient.name.replace(/\s/g, '_')}.pdf`);
    toast({ title: t('common.success'), description: 'Personal health record exported as PDF.' });
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
