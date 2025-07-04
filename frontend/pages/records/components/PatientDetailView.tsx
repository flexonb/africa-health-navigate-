import React, { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { PatientRecord, Visit, Appointment } from '../../../contexts/PatientRecordsContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogClose, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, User, Edit, Trash2, Download, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface PatientDetailViewProps {
  patient: PatientRecord;
  recordActions: any;
  isPersonalView?: boolean;
  onDeleteProfile?: () => void;
  onAddVisit: () => void;
  onEditVisit: (visit: Visit) => void;
  onAddVaccination: () => void;
  onAddLabResult: () => void;
  onAddAttachment: () => void;
  onAddMedication: () => void;
  onAddReferral: () => void;
  onExportPDF: (patient: PatientRecord) => void;
  appointments: Appointment[];
  onAddAppointment: () => void;
  onUpdateAppointment: (id: string, updates: Partial<Appointment>) => void;
  onDeleteAppointment: (id: string) => void;
}

export default function PatientDetailView({ 
  patient, 
  recordActions, 
  isPersonalView = false, 
  onDeleteProfile,
  onAddVisit,
  onEditVisit,
  onAddVaccination,
  onAddLabResult,
  onAddAttachment,
  onAddMedication,
  onAddReferral,
  onExportPDF,
  appointments,
  onAddAppointment,
  onUpdateAppointment,
  onDeleteAppointment
}: PatientDetailViewProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');

  const {
    deleteVisit, deleteVaccination, deleteLabResult, deleteAttachment, deleteMedication, deleteReferral
  } = recordActions;

  const patientAppointments = appointments.filter(a => a.patientId === patient.id);
  const upcomingAppointments = patientAppointments.filter(a => !a.completed && new Date(a.date) > new Date()).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastAppointments = patientAppointments.filter(a => a.completed || new Date(a.date) <= new Date()).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const handleDelete = (action: Function, ...args: any[]) => {
    action(...args);
    toast({ title: t('common.success'), description: t('common.delete') });
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl text-white">
                <User className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl">{patient.name}</CardTitle>
                <CardDescription>
                  {patient.age} {t('common.years')} • {t(`common.${patient.gender}`)}
                  {patient.bloodType && ` • ${t('common.bloodType')}: ${patient.bloodType}`}
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => onExportPDF(patient)}>
                <Download className="h-4 w-4 mr-2" />
                {t('pages.records.exportPDF')}
              </Button>
              {isPersonalView && onDeleteProfile && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="h-4 w-4 mr-2" />
                      {t('pages.records.deleteProfile')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{t('pages.records.confirmDeleteProfile')}</DialogTitle>
                      <DialogDescription>
                        {t('pages.records.deleteProfileDesc')}
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">{t('common.cancel')}</Button>
                      </DialogClose>
                      <Button variant="destructive" onClick={onDeleteProfile}>
                        {t('pages.records.yesDelete')}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className={`grid w-full ${isPersonalView ? 'grid-cols-5' : 'grid-cols-7'}`}>
          <TabsTrigger value="overview">{t('pages.records.overview')}</TabsTrigger>
          {!isPersonalView && <TabsTrigger value="visits">{t('pages.records.visits')}</TabsTrigger>}
          <TabsTrigger value="appointments">{t('common.appointments')}</TabsTrigger>
          <TabsTrigger value="vaccinations">{t('pages.records.vaccines')}</TabsTrigger>
          <TabsTrigger value="labs">{t('pages.records.labResults')}</TabsTrigger>
          <TabsTrigger value="medications">{t('pages.records.medications')}</TabsTrigger>
          {!isPersonalView && <TabsTrigger value="referrals">{t('pages.records.referrals')}</TabsTrigger>}
          <TabsTrigger value="attachments">{t('pages.records.files')}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><strong>{t('common.phone')}:</strong> {patient.phone || 'N/A'}</div>
                  <div><strong>{t('address')}:</strong> {patient.address || 'N/A'}</div>
                  <div><strong>{t('pages.records.emergencyContact')}:</strong> {patient.emergencyContact || 'N/A'}</div>
                  <div><strong>{t('pages.records.emergencyContactPhone')}:</strong> {patient.emergencyContactPhone || 'N/A'}</div>
                  <div className="md:col-span-2"><strong>{t('common.allergies')}:</strong> {patient.allergies?.join(', ') || 'None'}</div>
                  <div className="md:col-span-2"><strong>{t('pages.records.chronicConditions')}:</strong> {patient.chronicConditions?.join(', ') || 'None'}</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('pages.records.healthSummary')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span>{t('pages.home.upcomingAppointments')}</span>
                    <Badge variant="secondary">{appointments.filter(a => a.patientId === patient.id && !a.completed && new Date(a.date) > new Date()).length}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t('pages.records.medications')}</span>
                    <Badge variant="secondary">{patient.currentMedications?.length || 0}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t('common.allergies')}</span>
                    <Badge variant="secondary">{patient.allergies?.length || 0}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{t('pages.records.chronicConditions')}</span>
                    <Badge variant="secondary">{patient.chronicConditions?.length || 0}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {!isPersonalView && (
          <TabsContent value="visits">
            <div className="flex justify-end mb-4">
              <Button size="sm" onClick={onAddVisit}><Plus className="h-4 w-4 mr-2" />{t('pages.records.addVisit')}</Button>
            </div>
            {patient.visits && patient.visits.length > 0 ? (
              patient.visits.map(visit => (
                <Card key={visit.id} className="mb-4">
                  <CardHeader>
                    <CardTitle>{visit.chiefComplaint}</CardTitle>
                    <CardDescription>{new Date(visit.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{t('pages.records.diagnosis')}: {visit.diagnosis || 'N/A'}</p>
                    <Button size="sm" variant="outline" className="mt-2 mr-2" onClick={() => onEditVisit(visit)}>
                      <Edit className="h-4 w-4 mr-2" /> {t('common.edit')}
                    </Button>
                    <Button size="sm" variant="destructive" className="mt-2" onClick={() => handleDelete(deleteVisit, patient.id, visit.id)}>
                      <Trash2 className="h-4 w-4 mr-2" /> {t('pages.records.deleteVisit')}
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">No visits recorded yet.</p>
            )}
          </TabsContent>
        )}

        <TabsContent value="appointments">
          <div className="flex justify-end mb-4">
            <Button size="sm" onClick={onAddAppointment}><Plus className="h-4 w-4 mr-2" />{t('common.addAppointment')}</Button>
          </div>
          {patientAppointments.length > 0 ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">{t('pages.home.upcomingAppointments')}</h3>
                {upcomingAppointments.length > 0 ? upcomingAppointments.map(app => (
                  <Card key={app.id} className="mb-2">
                    <CardContent className="p-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium">{app.title}</p>
                        <p className="text-sm text-gray-500">{new Date(app.date).toLocaleString()}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" onClick={() => onUpdateAppointment(app.id, { completed: true })}><Check className="h-4 w-4 mr-1" /> {t('pages.records.markComplete')}</Button>
                        <Button size="sm" variant="destructive" onClick={() => onDeleteAppointment(app.id)}><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    </CardContent>
                  </Card>
                )) : <p className="text-sm text-gray-500">{t('pages.home.noAppointments')}</p>}
              </div>
              <div>
                <h3 className="font-semibold mb-2">Past Appointments</h3>
                {pastAppointments.length > 0 ? pastAppointments.map(app => (
                  <Card key={app.id} className="mb-2 bg-gray-50 opacity-70">
                    <CardContent className="p-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium line-through">{app.title}</p>
                        <p className="text-sm text-gray-500">{new Date(app.date).toLocaleString()}</p>
                      </div>
                      <Button size="sm" variant="destructive" onClick={() => onDeleteAppointment(app.id)}><Trash2 className="h-4 w-4" /></Button>
                    </CardContent>
                  </Card>
                )) : <p className="text-sm text-gray-500">No past appointments.</p>}
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 py-4">{t('pages.home.noAppointments')}</p>
          )}
        </TabsContent>

        <TabsContent value="vaccinations">
          <div className="flex justify-end mb-4">
            <Button size="sm" onClick={onAddVaccination}><Plus className="h-4 w-4 mr-2" />{t('common.add')} {t('pages.records.vaccines')}</Button>
          </div>
          {(patient.vaccinations && patient.vaccinations.length > 0) ? (
            patient.vaccinations.map(vaccine => (
              <Card key={vaccine.id} className="mb-4">
                <CardHeader>
                  <CardTitle>{vaccine.vaccine}</CardTitle>
                  <CardDescription>{new Date(vaccine.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(deleteVaccination, patient.id, vaccine.id)}>
                    <Trash2 className="h-4 w-4 mr-2" /> {t('pages.records.deleteVaccination')}
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No vaccinations recorded yet.</p>
          )}
        </TabsContent>

        <TabsContent value="labs">
          <div className="flex justify-end mb-4">
            <Button size="sm" onClick={onAddLabResult}><Plus className="h-4 w-4 mr-2" />{t('common.add')} {t('pages.records.labResults')}</Button>
          </div>
          {(patient.labResults && patient.labResults.length > 0) ? (
            patient.labResults.map(lab => (
              <Card key={lab.id} className="mb-4">
                <CardHeader>
                  <CardTitle>{lab.testName}</CardTitle>
                  <CardDescription>{new Date(lab.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(deleteLabResult, patient.id, lab.id)}>
                    <Trash2 className="h-4 w-4 mr-2" /> {t('pages.records.deleteLabResult')}
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No lab results recorded yet.</p>
          )}
        </TabsContent>

        <TabsContent value="medications">
          <div className="flex justify-end mb-4">
            <Button size="sm" onClick={onAddMedication}><Plus className="h-4 w-4 mr-2" />{t('common.add')} {t('pages.records.medications')}</Button>
          </div>
          {(patient.currentMedications && patient.currentMedications.length > 0) ? (
            patient.currentMedications.map(med => (
              <Card key={med.id} className="mb-4">
                <CardHeader>
                  <CardTitle>{med.name}</CardTitle>
                  <CardDescription>{med.dosage} - {med.frequency}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(deleteMedication, patient.id, med.id)}>
                    <Trash2 className="h-4 w-4 mr-2" /> {t('pages.records.deleteMedication')}
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No medications recorded yet.</p>
          )}
        </TabsContent>

        {!isPersonalView && (
          <TabsContent value="referrals">
            <div className="flex justify-end mb-4">
              <Button size="sm" onClick={onAddReferral}><Plus className="h-4 w-4 mr-2" />{t('common.add')} {t('pages.records.referrals')}</Button>
            </div>
            {(patient.referrals && patient.referrals.length > 0) ? (
              patient.referrals.map(referral => (
                <Card key={referral.id} className="mb-4">
                  <CardHeader>
                    <CardTitle>{t('pages.records.referralTo')} {referral.referredTo}</CardTitle>
                    <CardDescription>{new Date(referral.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p><strong>{t('pages.records.reason')}</strong> {referral.reason}</p>
                    {referral.notes && <p><strong>{t('common.notes')}:</strong> {referral.notes}</p>}
                    <Button size="sm" variant="destructive" className="mt-2" onClick={() => handleDelete(deleteReferral, patient.id, referral.id)}>
                      <Trash2 className="h-4 w-4 mr-2" /> {t('pages.records.deleteReferral')}
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">No referrals recorded yet.</p>
            )}
          </TabsContent>
        )}

        <TabsContent value="attachments">
          <div className="flex justify-end mb-4">
            <Button size="sm" onClick={onAddAttachment}><Plus className="h-4 w-4 mr-2" />{t('common.add')} {t('pages.records.files')}</Button>
          </div>
          {(patient.attachments && patient.attachments.length > 0) ? (
            patient.attachments.map(attachment => (
              <Card key={attachment.id} className="mb-4">
                <CardHeader>
                  <CardTitle>{attachment.name}</CardTitle>
                  <CardDescription>{attachment.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(deleteAttachment, patient.id, attachment.id)}>
                    <Trash2 className="h-4 w-4 mr-2" /> {t('pages.records.deleteAttachment')}
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No files attached yet.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
