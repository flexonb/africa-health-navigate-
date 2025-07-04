import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { PatientRecord } from '../../../../contexts/PatientRecordsContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

interface AddPatientDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (patient: Omit<PatientRecord, 'id' | 'visits' | 'vaccinations' | 'labResults' | 'attachments' | 'referrals' | 'currentMedications' | 'createdAt' | 'updatedAt'>) => void;
}

export default function AddPatientDialog({ isOpen, onClose, onSave }: AddPatientDialogProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: 'male' as 'male' | 'female',
    phone: '',
    emergencyContact: '',
    emergencyContactPhone: '',
    address: '',
    bloodType: '',
    allergies: '',
    chronicConditions: '',
    insuranceInfo: '',
    occupation: '',
    maritalStatus: 'single' as 'single' | 'married' | 'divorced' | 'widowed',
    nextOfKin: ''
  });

  useEffect(() => {
    if (!isOpen) {
      setNewPatient({
        name: '', age: '', gender: 'male', phone: '', emergencyContact: '', emergencyContactPhone: '',
        address: '', bloodType: '', allergies: '', chronicConditions: '', insuranceInfo: '',
        occupation: '', maritalStatus: 'single', nextOfKin: ''
      });
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!newPatient.name || !newPatient.age) {
      toast({ title: t('common.error'), description: t('common.pleaseFillFields'), variant: "destructive" });
      return;
    }

    onSave({
      name: newPatient.name,
      age: parseInt(newPatient.age),
      gender: newPatient.gender,
      phone: newPatient.phone || undefined,
      emergencyContact: newPatient.emergencyContact || undefined,
      emergencyContactPhone: newPatient.emergencyContactPhone || undefined,
      address: newPatient.address || undefined,
      bloodType: newPatient.bloodType || undefined,
      allergies: newPatient.allergies ? newPatient.allergies.split(',').map(a => a.trim()) : undefined,
      chronicConditions: newPatient.chronicConditions ? newPatient.chronicConditions.split(',').map(c => c.trim()) : undefined,
      insuranceInfo: newPatient.insuranceInfo || undefined,
      occupation: newPatient.occupation || undefined,
      maritalStatus: newPatient.maritalStatus,
      nextOfKin: newPatient.nextOfKin || undefined,
    });

    onClose();
    toast({ title: t('common.success'), description: t('pages.records.patientAdded') });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-sm max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('pages.records.addPatient')}</DialogTitle>
          <DialogDescription>{t('pages.records.addPatientDesc')}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">{t('common.name')} *</Label>
              <Input id="name" value={newPatient.name} onChange={(e) => setNewPatient(prev => ({ ...prev, name: e.target.value }))} placeholder={t('pages.records.enterPatientName')} />
            </div>
            <div>
              <Label htmlFor="age">{t('common.age')} *</Label>
              <Input id="age" type="number" value={newPatient.age} onChange={(e) => setNewPatient(prev => ({ ...prev, age: e.target.value }))} placeholder={t('common.age')} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>{t('pages.triage.gender')}</Label>
              <Select value={newPatient.gender} onValueChange={(value: 'male' | 'female') => setNewPatient(prev => ({ ...prev, gender: value }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">{t('common.male')}</SelectItem>
                  <SelectItem value="female">{t('common.female')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="bloodType">{t('common.bloodType')}</Label>
              <Select value={newPatient.bloodType} onValueChange={(value) => setNewPatient(prev => ({ ...prev, bloodType: value }))}>
                <SelectTrigger><SelectValue placeholder={t('pages.records.selectBloodType')} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="A+">A+</SelectItem><SelectItem value="A-">A-</SelectItem><SelectItem value="B+">B+</SelectItem><SelectItem value="B-">B-</SelectItem><SelectItem value="AB+">AB+</SelectItem><SelectItem value="AB-">AB-</SelectItem><SelectItem value="O+">O+</SelectItem><SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">{t('common.phone')}</Label>
              <Input id="phone" value={newPatient.phone} onChange={(e) => setNewPatient(prev => ({ ...prev, phone: e.target.value }))} placeholder={t('pages.records.phoneNumber')} />
            </div>
            <div>
              <Label htmlFor="occupation">{t('pages.records.occupation')}</Label>
              <Input id="occupation" value={newPatient.occupation} onChange={(e) => setNewPatient(prev => ({ ...prev, occupation: e.target.value }))} placeholder={t('pages.records.occupation')} />
            </div>
          </div>
          <div>
            <Label htmlFor="address">{t('address')}</Label>
            <Input id="address" value={newPatient.address} onChange={(e) => setNewPatient(prev => ({ ...prev, address: e.target.value }))} placeholder={t('pages.records.fullAddress')} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="emergency">{t('pages.records.emergencyContact')}</Label>
              <Input id="emergency" value={newPatient.emergencyContact} onChange={(e) => setNewPatient(prev => ({ ...prev, emergencyContact: e.target.value }))} placeholder={t('pages.records.emergencyContactName')} />
            </div>
            <div>
              <Label htmlFor="emergencyPhone">{t('pages.records.emergencyContactPhone')}</Label>
              <Input id="emergencyPhone" value={newPatient.emergencyContactPhone} onChange={(e) => setNewPatient(prev => ({ ...prev, emergencyContactPhone: e.target.value }))} placeholder={t('pages.records.emergencyContactPhone')} />
            </div>
          </div>
          <div>
            <Label htmlFor="allergies">{t('common.allergies')} ({t('common.commaSeparated')})</Label>
            <Input id="allergies" value={newPatient.allergies} onChange={(e) => setNewPatient(prev => ({ ...prev, allergies: e.target.value }))} placeholder={t('pages.records.allergiesPlaceholder')} />
          </div>
          <div>
            <Label htmlFor="chronicConditions">{t('pages.records.chronicConditions')}</Label>
            <Input id="chronicConditions" value={newPatient.chronicConditions} onChange={(e) => setNewPatient(prev => ({ ...prev, chronicConditions: e.target.value }))} placeholder={t('pages.records.chronicPlaceholder')} />
          </div>
          <div>
            <Label htmlFor="insurance">{t('pages.records.insuranceInfo')}</Label>
            <Input id="insurance" value={newPatient.insuranceInfo} onChange={(e) => setNewPatient(prev => ({ ...prev, insuranceInfo: e.target.value }))} placeholder={t('pages.records.insurancePlaceholder')} />
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
