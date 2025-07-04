import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { Visit } from '../../../../contexts/PatientRecordsContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

interface AddVisitDialogProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
  addVisit: (patientId: string, visit: Omit<Visit, 'id'>) => void;
  updateVisit: (patientId: string, visitId: string, updates: Partial<Visit>) => void;
  editingVisit: Visit | null;
}

export default function AddVisitDialog({ isOpen, onClose, patientId, addVisit, updateVisit, editingVisit }: AddVisitDialogProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [newVisit, setNewVisit] = useState({
    date: new Date().toISOString().split('T')[0],
    type: 'routine' as 'routine' | 'emergency' | 'follow-up' | 'consultation' | 'procedure',
    chiefComplaint: '',
    symptoms: '',
    notes: '',
    diagnosis: '',
    treatment: '',
    followUpDate: '',
    cost: '',
    paymentStatus: 'pending' as 'paid' | 'pending' | 'partial' | 'insurance',
    vitals: {
      temperature: '', bloodPressure: '', heartRate: '', respiratoryRate: '',
      oxygenSaturation: '', weight: '', height: '', painScale: ''
    },
    physicalExam: '',
    referrals: '',
    prescriptions: []
  });

  useEffect(() => {
    if (editingVisit) {
      setNewVisit({
        date: editingVisit.date.toISOString().split('T')[0],
        type: editingVisit.type,
        chiefComplaint: editingVisit.chiefComplaint,
        symptoms: editingVisit.symptoms.join('\n'),
        notes: editingVisit.notes,
        diagnosis: editingVisit.diagnosis || '',
        treatment: editingVisit.treatment || '',
        followUpDate: editingVisit.followUpDate ? editingVisit.followUpDate.toISOString().split('T')[0] : '',
        cost: editingVisit.cost?.toString() || '',
        paymentStatus: editingVisit.paymentStatus || 'pending',
        vitals: {
          temperature: editingVisit.vitals.temperature?.toString() || '',
          bloodPressure: editingVisit.vitals.bloodPressure || '',
          heartRate: editingVisit.vitals.heartRate?.toString() || '',
          respiratoryRate: editingVisit.vitals.respiratoryRate?.toString() || '',
          oxygenSaturation: editingVisit.vitals.oxygenSaturation?.toString() || '',
          weight: editingVisit.vitals.weight?.toString() || '',
          height: editingVisit.vitals.height?.toString() || '',
          painScale: editingVisit.vitals.painScale?.toString() || ''
        },
        physicalExam: editingVisit.physicalExam || '',
        referrals: editingVisit.referrals?.join(', ') || '',
        prescriptions: editingVisit.prescriptions || []
      });
    } else if (!isOpen) {
      setNewVisit({
        date: new Date().toISOString().split('T')[0], type: 'routine', chiefComplaint: '',
        symptoms: '', notes: '', diagnosis: '', treatment: '', followUpDate: '', cost: '',
        paymentStatus: 'pending', vitals: { temperature: '', bloodPressure: '', heartRate: '',
        respiratoryRate: '', oxygenSaturation: '', weight: '', height: '', painScale: '' },
        physicalExam: '', referrals: '', prescriptions: []
      });
    }
  }, [editingVisit, isOpen]);

  const handleSave = () => {
    if (!patientId || !newVisit.chiefComplaint) {
      toast({ title: t('common.error'), description: t('common.pleaseFillFields'), variant: "destructive" });
      return;
    }

    const visitData: Omit<Visit, 'id'> = {
      date: new Date(newVisit.date),
      type: newVisit.type,
      chiefComplaint: newVisit.chiefComplaint,
      symptoms: newVisit.symptoms.split('\n').filter(s => s.trim()),
      notes: newVisit.notes,
      diagnosis: newVisit.diagnosis || undefined,
      treatment: newVisit.treatment || undefined,
      followUpDate: newVisit.followUpDate ? new Date(newVisit.followUpDate) : undefined,
      cost: newVisit.cost ? parseFloat(newVisit.cost) : undefined,
      paymentStatus: newVisit.paymentStatus,
      vitals: {
        temperature: newVisit.vitals.temperature ? parseFloat(newVisit.vitals.temperature) : undefined,
        bloodPressure: newVisit.vitals.bloodPressure || undefined,
        heartRate: newVisit.vitals.heartRate ? parseInt(newVisit.vitals.heartRate) : undefined,
        respiratoryRate: newVisit.vitals.respiratoryRate ? parseInt(newVisit.vitals.respiratoryRate) : undefined,
        oxygenSaturation: newVisit.vitals.oxygenSaturation ? parseFloat(newVisit.vitals.oxygenSaturation) : undefined,
        weight: newVisit.vitals.weight ? parseFloat(newVisit.vitals.weight) : undefined,
        height: newVisit.vitals.height ? parseFloat(newVisit.vitals.height) : undefined,
        painScale: newVisit.vitals.painScale ? parseInt(newVisit.vitals.painScale) : undefined
      },
      physicalExam: newVisit.physicalExam || undefined,
      referrals: newVisit.referrals ? newVisit.referrals.split(',').map(r => r.trim()) : undefined,
      prescriptions: newVisit.prescriptions
    };

    if (editingVisit) {
      updateVisit(patientId, editingVisit.id, visitData);
      toast({ title: t('common.success'), description: 'Visit updated successfully' });
    } else {
      addVisit(patientId, visitData);
      toast({ title: t('common.success'), description: t('pages.records.visitAdded') });
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{editingVisit ? t('common.edit') : t('common.add')} {t('pages.records.visits')}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="visitDate">Date</Label>
              <Input id="visitDate" type="date" value={newVisit.date} onChange={(e) => setNewVisit(p => ({...p, date: e.target.value}))} />
            </div>
            <div>
              <Label htmlFor="visitType">Type</Label>
              <Select value={newVisit.type} onValueChange={(v: any) => setNewVisit(p => ({...p, type: v}))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="routine">Routine</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="follow-up">Follow-up</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="procedure">Procedure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="chiefComplaint">Chief Complaint</Label>
            <Input id="chiefComplaint" value={newVisit.chiefComplaint} onChange={(e) => setNewVisit(p => ({...p, chiefComplaint: e.target.value}))} />
          </div>
          <div>
            <Label htmlFor="symptoms">Symptoms (one per line)</Label>
            <Textarea id="symptoms" value={newVisit.symptoms} onChange={(e) => setNewVisit(p => ({...p, symptoms: e.target.value}))} />
          </div>
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea id="notes" value={newVisit.notes} onChange={(e) => setNewVisit(p => ({...p, notes: e.target.value}))} />
          </div>
          <div>
            <Label htmlFor="diagnosis">Diagnosis</Label>
            <Input id="diagnosis" value={newVisit.diagnosis} onChange={(e) => setNewVisit(p => ({...p, diagnosis: e.target.value}))} />
          </div>
          <div>
            <Label htmlFor="treatment">Treatment</Label>
            <Input id="treatment" value={newVisit.treatment} onChange={(e) => setNewVisit(p => ({...p, treatment: e.target.value}))} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="followUpDate">Follow-up Date</Label>
              <Input id="followUpDate" type="date" value={newVisit.followUpDate} onChange={(e) => setNewVisit(p => ({...p, followUpDate: e.target.value}))} />
            </div>
            <div>
              <Label htmlFor="cost">Cost</Label>
              <Input id="cost" type="number" value={newVisit.cost} onChange={(e) => setNewVisit(p => ({...p, cost: e.target.value}))} />
            </div>
          </div>
          <div>
            <Label htmlFor="paymentStatus">Payment Status</Label>
            <Select value={newVisit.paymentStatus} onValueChange={(v: any) => setNewVisit(p => ({...p, paymentStatus: v}))}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="partial">Partial</SelectItem>
                <SelectItem value="insurance">Insurance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <h3 className="font-semibold">Vitals</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Input placeholder="Temp (°C)" value={newVisit.vitals.temperature} onChange={(e) => setNewVisit(p => ({...p, vitals: {...p.vitals, temperature: e.target.value}}))} />
            <Input placeholder="BP" value={newVisit.vitals.bloodPressure} onChange={(e) => setNewVisit(p => ({...p, vitals: {...p.vitals, bloodPressure: e.target.value}}))} />
            <Input placeholder="HR (bpm)" value={newVisit.vitals.heartRate} onChange={(e) => setNewVisit(p => ({...p, vitals: {...p.vitals, heartRate: e.target.value}}))} />
            <Input placeholder="RR" value={newVisit.vitals.respiratoryRate} onChange={(e) => setNewVisit(p => ({...p, vitals: {...p.vitals, respiratoryRate: e.target.value}}))} />
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
