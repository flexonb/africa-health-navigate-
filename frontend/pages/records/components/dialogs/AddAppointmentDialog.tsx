import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { usePatientRecords, Appointment } from '../../../../contexts/PatientRecordsContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface AddAppointmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
  addAppointment: (appointment: Omit<Appointment, 'id' | 'completed' | 'patientName'>) => void;
}

export default function AddAppointmentDialog({ isOpen, onClose, patientId, addAppointment }: AddAppointmentDialogProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [newAppointment, setNewAppointment] = useState({ title: '', date: '', notes: '' });

  useEffect(() => {
    if (!isOpen) {
      setNewAppointment({ title: '', date: '', notes: '' });
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!patientId || !newAppointment.title || !newAppointment.date) {
      toast({ title: t('common.error'), description: t('common.pleaseFillFields'), variant: "destructive" });
      return;
    }
    addAppointment({
      patientId: patientId,
      title: newAppointment.title,
      date: new Date(newAppointment.date),
      notes: newAppointment.notes
    });
    onClose();
    toast({ title: t('common.success'), description: t('common.appointmentAdded') });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('common.addAppointment')}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="appointmentTitle">{t('common.title')}</Label>
            <Input id="appointmentTitle" value={newAppointment.title} onChange={(e) => setNewAppointment(p => ({...p, title: e.target.value}))} />
          </div>
          <div>
            <Label htmlFor="appointmentDate">{t('common.dateTime')}</Label>
            <Input id="appointmentDate" type="datetime-local" value={newAppointment.date} onChange={(e) => setNewAppointment(p => ({...p, date: e.target.value}))} />
          </div>
          <div>
            <Label htmlFor="appointmentNotes">{t('common.notes')}</Label>
            <Textarea id="appointmentNotes" value={newAppointment.notes} onChange={(e) => setNewAppointment(p => ({...p, notes: e.target.value}))} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>{t('common.cancel')}</Button>
          <Button onClick={handleSave}>{t('common.save')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
