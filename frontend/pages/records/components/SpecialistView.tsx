import React, { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { usePatientRecords, PatientRecord, Visit } from '../../../contexts/PatientRecordsContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Users, Activity, TrendingUp, Shield, Search, Filter, Download, Trash2, User, Syringe, FlaskConical, Pill, Calendar } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import PatientDetailView from './PatientDetailView';
import AddPatientDialog from './dialogs/AddPatientDialog';
import AddVisitDialog from './dialogs/AddVisitDialog';
import AddVaccinationDialog from './dialogs/AddVaccinationDialog';
import AddLabResultDialog from './dialogs/AddLabResultDialog';
import AddAttachmentDialog from './dialogs/AddAttachmentDialog';
import AddMedicationDialog from './dialogs/AddMedicationDialog';
import AddReferralDialog from './dialogs/AddReferralDialog';
import AddAppointmentDialog from './dialogs/AddAppointmentDialog';

export default function SpecialistView() {
  const { t } = useLanguage();
  const { 
    patients, addPatient, deletePatient, addVisit, updateVisit, deleteVisit,
    addVaccination, deleteVaccination, addLabResult, deleteLabResult, addAttachment, deleteAttachment,
    addMedication, deleteMedication, addReferral, deleteReferral,
    exportPatientData,
    appointments, addAppointment, updateAppointment, deleteAppointment, getUpcomingAppointments
  } = usePatientRecords();
  const { toast } = useToast();
  
  const [selectedPatient, setSelectedPatient] = useState<PatientRecord | null>(null);
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [showAddVisit, setShowAddVisit] = useState(false);
  const [showAddVaccination, setShowAddVaccination] = useState(false);
  const [showAddLabResult, setShowAddLabResult] = useState(false);
  const [showAddAttachment, setShowAddAttachment] = useState(false);
  const [showAddMedication, setShowAddMedication] = useState(false);
  const [showAddAppointment, setShowAddAppointment] = useState(false);
  const [showAddReferral, setShowAddReferral] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [editingVisit, setEditingVisit] = useState<Visit | null>(null);

  const upcomingAppointments = getUpcomingAppointments(30);

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = searchTerm === '' || 
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.allergies?.some(allergy => allergy.toLowerCase().includes(searchTerm.toLowerCase())) ||
      patient.chronicConditions?.some(condition => condition.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter = filterType === 'all' || 
      (filterType === 'chronic' && patient.chronicConditions && patient.chronicConditions.length > 0) ||
      (filterType === 'allergies' && patient.allergies && patient.allergies.length > 0) ||
      (filterType === 'recent' && patient.visits.length > 0 && 
        new Date(patient.visits[patient.visits.length - 1].date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));

    return matchesSearch && matchesFilter;
  });

  const handleDeletePatient = (patientId: string) => {
    deletePatient(patientId);
    if (selectedPatient?.id === patientId) {
      setSelectedPatient(null);
    }
    toast({
      title: t('common.success'),
      description: t('pages.records.patientDeleted')
    });
  };

  const handleExportPDF = (patient: PatientRecord) => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

    const addHeader = () => {
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.text('AfriHealth Advisor - Patient Record', pageWidth / 2, 20, { align: 'center' });
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
      head: [['Patient Information', '']],
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

    drawSection('Visit History', [['Date', 'Type', 'Complaint', 'Diagnosis']], (patient.visits || []).map(v => [new Date(v.date).toLocaleDateString(), v.type, v.chiefComplaint, v.diagnosis || 'N/A']));
    
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

    drawSection('Referrals', [['Date', 'Referred To', 'Reason']], (patient.referrals || []).map(r => [new Date(r.date).toLocaleDateString(), r.referredTo, r.reason]));

    doc.save(`patient-record-${patient.name.replace(/\s/g, '_')}.pdf`);
    toast({ title: t('common.success'), description: 'Patient record exported as PDF.' });
  };

  const handleEditVisit = (visit: Visit) => {
    setEditingVisit(visit);
    setShowAddVisit(true);
  };

  const handleShowAddVisit = () => {
    setEditingVisit(null);
    setShowAddVisit(true);
  };

  const stats = [
    { icon: Users, value: patients.length.toString(), label: t('pages.records.totalPatients'), color: 'text-blue-500' },
    { icon: TrendingUp, value: patients.filter(p => p.visits.length > 0).length.toString(), label: t('pages.records.activePatients'), color: 'text-purple-500' },
    { icon: Shield, value: '100%', label: t('pages.records.secureStorage'), color: 'text-orange-500' }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl text-white">
                <FileText className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {t('pages.records.title')}
                </h1>
                <p className="text-lg text-gray-600">
                  {t('pages.records.specialistDesc')}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600" onClick={() => setShowAddPatient(true)}>
                <Plus className="h-4 w-4 mr-2" />
                {t('pages.records.addPatient')}
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-4 text-center">
                  <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Patient List & Appointments */}
            <div className="xl:col-span-1 space-y-8">
              <Card className="shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      <span>{t('common.patients')} ({filteredPatients.length})</span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Select value={filterType} onValueChange={setFilterType}>
                        <SelectTrigger className="w-32">
                          <Filter className="h-4 w-4 mr-1" />
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">{t('common.all')}</SelectItem>
                          <SelectItem value="recent">{t('common.recent')}</SelectItem>
                          <SelectItem value="chronic">{t('common.chronic')}</SelectItem>
                          <SelectItem value="allergies">{t('common.allergies')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder={t('pages.records.searchPatients')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  {filteredPatients.length === 0 ? (
                    <div className="text-center py-8">
                      <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">
                        {searchTerm ? t('common.noResults') : t('pages.records.noPatients')}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {filteredPatients.map((patient) => (
                        <div
                          key={patient.id}
                          className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 group ${
                            selectedPatient?.id === patient.id
                              ? 'bg-gradient-to-r from-blue-50 to-green-50 border-blue-200 shadow-md'
                              : 'hover:bg-gray-50 hover:shadow-sm'
                          }`}
                          onClick={() => setSelectedPatient(patient)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-100 rounded-lg">
                                <User className="h-4 w-4 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-medium">{patient.name}</p>
                                <p className="text-sm text-gray-500">
                                  {patient.age} {t('common.years')}, {t(`common.${patient.gender}`)}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleExportPDF(patient);
                                }}
                                className="h-8 w-8 p-0"
                              >
                                <Download className="h-4 w-4 text-blue-500" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeletePatient(patient.id);
                                }}
                                className="h-8 w-8 p-0"
                              >
                                <Trash2 className="h-4 w-4 text-red-500" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t('pages.home.upcomingAppointments')}</CardTitle>
                  <CardDescription>{t('pages.records.manageAppointments')}</CardDescription>
                </CardHeader>
                <CardContent>
                  {upcomingAppointments.length > 0 ? (
                    <div className="space-y-2">
                      {upcomingAppointments.map(app => (
                        <div key={app.id} className="p-2 border rounded-lg">
                          <p className="font-semibold text-sm">{app.title}</p>
                          <p className="text-xs text-gray-600">{app.patientName}</p>
                          <p className="text-xs text-gray-500">{new Date(app.date).toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 text-center">{t('pages.home.noAppointments')}</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Patient Details */}
            <div className="xl:col-span-2">
              {selectedPatient ? (
                <PatientDetailView 
                  patient={selectedPatient} 
                  recordActions={{ deleteVisit, deleteVaccination, deleteLabResult, deleteAttachment, deleteMedication, deleteReferral }}
                  onAddVisit={handleShowAddVisit}
                  onEditVisit={handleEditVisit}
                  onAddVaccination={() => setShowAddVaccination(true)}
                  onAddLabResult={() => setShowAddLabResult(true)}
                  onAddAttachment={() => setShowAddAttachment(true)}
                  onAddMedication={() => setShowAddMedication(true)}
                  onAddReferral={() => setShowAddReferral(true)}
                  onExportPDF={handleExportPDF}
                  appointments={appointments}
                  onAddAppointment={() => setShowAddAppointment(true)}
                  onUpdateAppointment={updateAppointment}
                  onDeleteAppointment={deleteAppointment}
                />
              ) : (
                <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardContent className="text-center py-12">
                    <div className="mb-6">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <User className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t('pages.records.selectPatient')}
                    </h3>
                    <p className="text-gray-500 mb-6">
                      {t('pages.records.selectPatientDesc')}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
      <AddPatientDialog
        isOpen={showAddPatient}
        onClose={() => setShowAddPatient(false)}
        onSave={addPatient}
      />
      {selectedPatient && (
        <>
          <AddVisitDialog
            isOpen={showAddVisit}
            onClose={() => setShowAddVisit(false)}
            patientId={selectedPatient.id}
            addVisit={addVisit}
            updateVisit={updateVisit}
            editingVisit={editingVisit}
          />
          <AddVaccinationDialog
            isOpen={showAddVaccination}
            onClose={() => setShowAddVaccination(false)}
            patientId={selectedPatient.id}
            addVaccination={addVaccination}
          />
          <AddLabResultDialog
            isOpen={showAddLabResult}
            onClose={() => setShowAddLabResult(false)}
            patientId={selectedPatient.id}
            addLabResult={addLabResult}
          />
          <AddAttachmentDialog
            isOpen={showAddAttachment}
            onClose={() => setShowAddAttachment(false)}
            patientId={selectedPatient.id}
            addAttachment={addAttachment}
          />
          <AddMedicationDialog
            isOpen={showAddMedication}
            onClose={() => setShowAddMedication(false)}
            patientId={selectedPatient.id}
            addMedication={addMedication}
          />
          <AddReferralDialog
            isOpen={showAddReferral}
            onClose={() => setShowAddReferral(false)}
            patientId={selectedPatient.id}
            addReferral={addReferral}
          />
          <AddAppointmentDialog
            isOpen={showAddAppointment}
            onClose={() => setShowAddAppointment(false)}
            patientId={selectedPatient.id}
            addAppointment={addAppointment}
          />
        </>
      )}
    </>
  );
}
