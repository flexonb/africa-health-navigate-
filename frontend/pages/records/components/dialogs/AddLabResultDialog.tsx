import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { LabResult } from '../../../../contexts/PatientRecordsContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface AddLabResultDialogProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
  addLabResult: (patientId: string, labResult: Omit<LabResult, 'id'>) => void;
}

export default function AddLabResultDialog({ isOpen, onClose, patientId, addLabResult }: AddLabResultDialogProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [newLabResult, setNewLabResult] = useState({
    testName: '',
    date: new Date().toISOString().split('T')[0],
    notes: '',
    results: [{ parameter: '', value: '' }]
  });

  useEffect(() => {
    if (!isOpen) {
      setNewLabResult({ testName: '', date: new Date().toISOString().split('T')[0], notes: '', results: [{ parameter: '', value: '' }] });
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!patientId || !newLabResult.testName) {
      toast({ title: t('common.error'), description: t('common.pleaseFillFields'), variant: "destructive" });
      return;
    }

    addLabResult(patientId, {
      testName: newLabResult.testName,
      date: new Date(newLabResult.date),
      orderedBy: '',
      notes: newLabResult.notes || undefined,
      results: newLabResult.results.filter(r => r.parameter && r.value).map(r => ({
        parameter: r.parameter,
        value: r.value,
        unit: '',
        referenceRange: '',
        status: 'normal'
      }))
    });
    onClose();
    toast({ title: t('common.success'), description: t('pages.records.labResultAdded') });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('common.add')} {t('pages.records.labResults')}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="testName">Test Name</Label>
              <Input id="testName" value={newLabResult.testName} onChange={(e) => setNewLabResult(p => ({...p, testName: e.target.value}))} />
            </div>
            <div>
              <Label htmlFor="labDate">Date</Label>
              <Input id="labDate" type="date" value={newLabResult.date} onChange={(e) => setNewLabResult(p => ({...p, date: e.target.value}))} />
            </div>
          </div>
          <div>
            <Label htmlFor="labNotes">Notes</Label>
            <Textarea id="labNotes" value={newLabResult.notes} onChange={(e) => setNewLabResult(p => ({...p, notes: e.target.value}))} />
          </div>
          <h3 className="font-semibold">Results</h3>
          {newLabResult.results.map((result, index) => (
            <div key={index} className="grid grid-cols-2 gap-2 border p-2 rounded-lg">
              <Input placeholder="Parameter" value={result.parameter} onChange={(e) => {
                const newResults = [...newLabResult.results];
                newResults[index].parameter = e.target.value;
                setNewLabResult(p => ({...p, results: newResults}));
              }} />
              <Input placeholder="Value" value={result.value} onChange={(e) => {
                const newResults = [...newLabResult.results];
                newResults[index].value = e.target.value;
                setNewLabResult(p => ({...p, results: newResults}));
              }} />
            </div>
          ))}
          <Button variant="outline" size="sm" onClick={() => setNewLabResult(p => ({...p, results: [...p.results, { parameter: '', value: '' }] }))}>
            Add Result Row
          </Button>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>{t('common.cancel')}</Button>
          <Button onClick={handleSave}>{t('common.save')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
