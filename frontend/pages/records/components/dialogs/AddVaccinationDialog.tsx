import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { Vaccination } from '../../../../contexts/PatientRecordsContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

interface AddVaccinationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
  addVaccination: (patientId: string, vaccination: Omit<Vaccination, 'id'>) => void;
}

export default function AddVaccinationDialog({ isOpen, onClose, patientId, addVaccination }: AddVaccinationDialogProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [newVaccination, setNewVaccination] = useState({
    vaccine: '',
    date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    if (!isOpen) {
      setNewVaccination({ vaccine: '', date: new Date().toISOString().split('T')[0] });
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!patientId || !newVaccination.vaccine) {
      toast({ title: t('common.error'), description: t('common.pleaseFillFields'), variant: "destructive" });
      return;
    }

    addVaccination(patientId, {
      vaccine: newVaccination.vaccine,
      date: new Date(newVaccination.date),
      administeredBy: '',
    });
    onClose();
    toast({ title: t('common.success'), description: t('pages.records.vaccinationAdded') });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('common.add')} {t('pages.records.vaccines')}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="vaccineName">Vaccine Name</Label>
            <Input id="vaccineName" value={newVaccination.vaccine} onChange={(e) => setNewVaccination(p => ({...p, vaccine: e.target.value}))} />
          </div>
          <div>
            <Label htmlFor="vaccineDate">Date</Label>
            <Input id="vaccineDate" type="date" value={newVaccination.date} onChange={(e) => setNewVaccination(p => ({...p, date: e.target.value}))} />
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
