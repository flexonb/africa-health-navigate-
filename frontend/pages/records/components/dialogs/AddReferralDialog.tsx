import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { Referral } from '../../../../contexts/PatientRecordsContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface AddReferralDialogProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
  addReferral: (patientId: string, referral: Omit<Referral, 'id'>) => void;
}

export default function AddReferralDialog({ isOpen, onClose, patientId, addReferral }: AddReferralDialogProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [newReferral, setNewReferral] = useState({
    referredTo: '',
    reason: '',
    notes: ''
  });

  useEffect(() => {
    if (!isOpen) {
      setNewReferral({ referredTo: '', reason: '', notes: '' });
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!patientId || !newReferral.referredTo || !newReferral.reason) {
      toast({ title: t('common.error'), description: t('common.pleaseFillFields'), variant: "destructive" });
      return;
    }
    addReferral(patientId, {
      date: new Date(),
      referredTo: newReferral.referredTo,
      reason: newReferral.reason,
      notes: newReferral.notes
    });
    onClose();
    toast({ title: t('common.success'), description: 'Referral added successfully' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('common.add')} {t('pages.records.referrals')}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="referredTo">Referred To</Label>
            <Input id="referredTo" value={newReferral.referredTo} onChange={(e) => setNewReferral(p => ({...p, referredTo: e.target.value}))} />
          </div>
          <div>
            <Label htmlFor="referralReason">Reason for Referral</Label>
            <Input id="referralReason" value={newReferral.reason} onChange={(e) => setNewReferral(p => ({...p, reason: e.target.value}))} />
          </div>
          <div>
            <Label htmlFor="referralNotes">Notes</Label>
            <Textarea id="referralNotes" value={newReferral.notes} onChange={(e) => setNewReferral(p => ({...p, notes: e.target.value}))} />
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
