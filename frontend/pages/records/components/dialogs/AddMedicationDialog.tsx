import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { Medication } from '../../../../contexts/PatientRecordsContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface AddMedicationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
  addMedication: (patientId: string, medication: Omit<Medication, 'id'>) => void;
}

export default function AddMedicationDialog({ isOpen, onClose, patientId, addMedication }: AddMedicationDialogProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [newMedication, setNewMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    notes: ''
  });

  useEffect(() => {
    if (!isOpen) {
      setNewMedication({ name: '', dosage: '', frequency: '', startDate: new Date().toISOString().split('T')[0], endDate: '', notes: '' });
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!patientId || !newMedication.name) {
      toast({ title: t('common.error'), description: t('common.pleaseFillFields'), variant: "destructive" });
      return;
    }
    addMedication(patientId, {
      name: newMedication.name,
      dosage: newMedication.dosage,
      frequency: newMedication.frequency,
      startDate: new Date(newMedication.startDate),
      endDate: newMedication.endDate ? new Date(newMedication.endDate) : undefined,
      prescribedBy: '',
      notes: newMedication.notes || undefined
    });
    onClose();
    toast({ title: t('common.success'), description: 'Medication added successfully' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('common.add')} {t('pages.records.medications')}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="medName">Medication Name</Label>
            <Input id="medName" value={newMedication.name} onChange={(e) => setNewMedication(p => ({...p, name: e.target.value}))} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="dosage">Dosage</Label>
              <Input id="dosage" value={newMedication.dosage} onChange={(e) => setNewMedication(p => ({...p, dosage: e.target.value}))} />
            </div>
            <div>
              <Label htmlFor="frequency">Frequency</Label>
              <Input id="frequency" value={newMedication.frequency} onChange={(e) => setNewMedication(p => ({...p, frequency: e.target.value}))} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="startDate">Start Date</Label>
              <Input id="startDate" type="date" value={newMedication.startDate} onChange={(e) => setNewMedication(p => ({...p, startDate: e.target.value}))} />
            </div>
            <div>
              <Label htmlFor="endDate">End Date (optional)</Label>
              <Input id="endDate" type="date" value={newMedication.endDate} onChange={(e) => setNewMedication(p => ({...p, endDate: e.target.value}))} />
            </div>
          </div>
          <div>
            <Label htmlFor="medNotes">Notes</Label>
            <Textarea id="medNotes" value={newMedication.notes} onChange={(e) => setNewMedication(p => ({...p, notes: e.target.value}))} />
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
