import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import { Attachment } from '../../../../contexts/PatientRecordsContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

interface AddAttachmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  patientId: string;
  addAttachment: (patientId: string, attachment: Omit<Attachment, 'id'>) => void;
}

export default function AddAttachmentDialog({ isOpen, onClose, patientId, addAttachment }: AddAttachmentDialogProps) {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [newAttachment, setNewAttachment] = useState({
    name: '',
    type: 'document' as 'image' | 'document' | 'xray' | 'report',
    description: '',
    file: null as File | null,
  });

  useEffect(() => {
    if (!isOpen) {
      setNewAttachment({ name: '', type: 'document', description: '', file: null });
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!patientId || !newAttachment.name || !newAttachment.file) {
      toast({ title: t('common.error'), description: t('common.pleaseFillFields'), variant: "destructive" });
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(newAttachment.file);
    reader.onload = () => {
      addAttachment(patientId, {
        name: newAttachment.name,
        type: newAttachment.type,
        date: new Date(),
        description: newAttachment.description,
        fileData: reader.result as string,
      });
      onClose();
      toast({ title: t('common.success'), description: 'Attachment added successfully' });
    };
    reader.onerror = (error) => {
      toast({ title: t('common.error'), description: 'Failed to read file', variant: "destructive" });
      console.error("File reading error: ", error);
    };
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('common.add')} {t('pages.records.files')}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="attachmentName">File Name</Label>
            <Input id="attachmentName" value={newAttachment.name} onChange={(e) => setNewAttachment(p => ({...p, name: e.target.value}))} />
          </div>
          <div>
            <Label htmlFor="attachmentType">File Type</Label>
            <Select value={newAttachment.type} onValueChange={(v: any) => setNewAttachment(p => ({...p, type: v}))}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="document">Document</SelectItem>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="xray">X-Ray</SelectItem>
                <SelectItem value="report">Report</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="attachmentFile">Upload File</Label>
            <Input id="attachmentFile" type="file" onChange={(e) => setNewAttachment(p => ({...p, file: e.target.files ? e.target.files[0] : null}))} />
          </div>
          <div>
            <Label htmlFor="attachmentDesc">Description</Label>
            <Textarea id="attachmentDesc" value={newAttachment.description} onChange={(e) => setNewAttachment(p => ({...p, description: e.target.value}))} />
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
