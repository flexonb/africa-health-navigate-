import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useMoodTracking, MoodEntry } from '../../contexts/MoodTrackingContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Brain, Heart, TrendingUp, Calendar, Trash2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

interface JournalEntry {
  date: string;
  text: string;
}

export default function MentalHealth() {
  const { t } = useLanguage();
  const { entries, addEntry, deleteEntry, deleteMultipleEntries, getEntriesForPeriod } = useMoodTracking();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'tracker' | 'assessment' | 'strategies' | 'journal'>('tracker');
  
  const [moodEntry, setMoodEntry] = useState({
    mood: 3 as 1 | 2 | 3 | 4 | 5,
    stressLevel: 3 as 1 | 2 | 3 | 4 | 5,
    sleepHours: '',
    activities: '',
    notes: ''
  });

  const [selectedMoodEntries, setSelectedMoodEntries] = useState<string[]>([]);
  const [selectedJournalEntries, setSelectedJournalEntries] = useState<string[]>([]);

  const phq9Questions = [
    t('tools.mentalHealth.phq9_1'),
    t('tools.mentalHealth.phq9_2'),
    t('tools.mentalHealth.phq9_3'),
    t('tools.mentalHealth.phq9_4'),
    t('tools.mentalHealth.phq9_5'),
    t('tools.mentalHealth.phq9_6'),
    t('tools.mentalHealth.phq9_7'),
    t('tools.mentalHealth.phq9_8'),
    t('tools.mentalHealth.phq9_9')
  ];

  const [assessmentAnswers, setAssessmentAnswers] = useState<(number | undefined)[]>(Array(phq9Questions.length).fill(undefined));
  const [assessmentResult, setAssessmentResult] = useState<number | null>(null);
  const [journalEntry, setJournalEntry] = useState('');
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => {
    const saved = localStorage.getItem('docomax-journal');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      } catch (e) {
        console.error("Failed to parse journal entries from localStorage", e);
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('docomax-journal', JSON.stringify(journalEntries));
  }, [journalEntries]);

  const handleSaveJournal = () => {
    if (journalEntry.trim()) {
      const newEntry: JournalEntry = {
        date: new Date().toISOString(),
        text: journalEntry.trim()
      };
      setJournalEntries([newEntry, ...journalEntries]);
      setJournalEntry('');
      toast({ title: t('common.success'), description: t('tools.mentalHealth.saveJournal') });
    }
  };

  const handleDeleteJournalEntry = (date: string) => {
    setJournalEntries(journalEntries.filter(entry => entry.date !== date));
    toast({ title: t('common.success'), description: t('tools.mentalHealth.deleteJournalEntry') });
  };

  const handleBulkDeleteJournalEntries = () => {
    setJournalEntries(prev => prev.filter(entry => !selectedJournalEntries.includes(entry.date)));
    toast({ title: t('common.success'), description: t('common.entriesDeleted', { count: selectedJournalEntries.length }) });
    setSelectedJournalEntries([]);
  };

  const handleSelectAllJournalEntries = (checked: boolean) => {
    if (checked) {
      setSelectedJournalEntries(journalEntries.map(e => e.date));
    } else {
      setSelectedJournalEntries([]);
    }
  };

  const handleJournalEntrySelection = (date: string, checked: boolean) => {
    if (checked) {
      setSelectedJournalEntries(prev => [...prev, date]);
    } else {
      setSelectedJournalEntries(prev => prev.filter(entryDate => entryDate !== date));
    }
  };

  const handleMoodSubmit = () => {
    addEntry({
      date: new Date(),
      mood: moodEntry.mood,
      stressLevel: moodEntry.stressLevel,
      sleepHours: moodEntry.sleepHours ? parseFloat(moodEntry.sleepHours) : undefined,
      activities: moodEntry.activities.split(',').map(a => a.trim()).filter(a => a),
      notes: moodEntry.notes
    });

    setMoodEntry({
      mood: 3,
      stressLevel: 3,
      sleepHours: '',
      activities: '',
      notes: ''
    });
    toast({ title: t('common.success'), description: t('tools.mentalHealth.saveEntry') });
  };

  const handleBulkDeleteMoodEntries = () => {
    deleteMultipleEntries(selectedMoodEntries);
    toast({ title: t('common.success'), description: t('common.entriesDeleted', { count: selectedMoodEntries.length }) });
    setSelectedMoodEntries([]);
  };

  const handleSelectAllMoodEntries = (checked: boolean) => {
    if (checked) {
      setSelectedMoodEntries(entries.slice(0, 5).map(e => e.id));
    } else {
      setSelectedMoodEntries([]);
    }
  };

  const handleMoodEntrySelection = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedMoodEntries(prev => [...prev, id]);
    } else {
      setSelectedMoodEntries(prev => prev.filter(entryId => entryId !== id));
    }
  };

  const getMoodEmoji = (mood: number) => {
    switch (mood) {
      case 1: return '😢';
      case 2: return '😔';
      case 3: return '😐';
      case 4: return '😊';
      case 5: return '😄';
      default: return '😐';
    }
  };

  const getMoodLabel = (mood: number) => {
    switch (mood) {
      case 1: return t('tools.mentalHealth.verySad');
      case 2: return t('tools.mentalHealth.sad');
      case 3: return t('tools.mentalHealth.neutral');
      case 4: return t('tools.mentalHealth.happy');
      case 5: return t('tools.mentalHealth.veryHappy');
      default: return t('tools.mentalHealth.neutral');
    }
  };

  const recentEntries = getEntriesForPeriod(30);
  const chartData = recentEntries.slice().reverse().slice(-7).map((entry, idx) => ({
    day: new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    mood: entry.mood,
    stress: entry.stressLevel
  }));

  const averageMood = recentEntries.length > 0 
    ? (recentEntries.reduce((sum, entry) => sum + entry.mood, 0) / recentEntries.length).toFixed(1)
    : '0';

  const averageStress = recentEntries.length > 0 
    ? (recentEntries.reduce((sum, entry) => sum + entry.stressLevel, 0) / recentEntries.length).toFixed(1)
    : '0';

  const phq9Options = [
    { label: t('tools.mentalHealth.notAtAll'), value: 0 },
    { label: t('tools.mentalHealth.severalDays'), value: 1 },
    { label: t('tools.mentalHealth.moreThanHalf'), value: 2 },
    { label: t('tools.mentalHealth.nearlyEveryDay'), value: 3 }
  ];

  const handleCalculateAssessment = () => {
    const totalScore = assessmentAnswers.reduce((sum, score) => sum + (score || 0), 0);
    setAssessmentResult(totalScore);
  };

  const resetAssessment = () => {
    setAssessmentAnswers(Array(phq9Questions.length).fill(undefined));
    setAssessmentResult(null);
  };

  const getPHQ9Interpretation = (score: number) => {
    if (score <= 4) return "Minimal depression (Score: 0-4)";
    if (score <= 9) return "Mild depression (Score: 5-9)";
    if (score <= 14) return "Moderate depression (Score: 10-14)";
    if (score <= 19) return "Moderately severe depression (Score: 15-19)";
    return "Severe depression (Score: 20-27)";
  };

  const copingStrategies = [
    {
      title: 'Deep Breathing',
      description: 'Practice slow, deep breathing to reduce anxiety and stress',
      steps: [
        'Sit or lie down comfortably',
        'Breathe in slowly through your nose for 4 counts',
        'Hold your breath for 4 counts',
        'Exhale slowly through your mouth for 6 counts',
        'Repeat 5-10 times'
      ]
    },
    {
      title: 'Progressive Muscle Relaxation',
      description: 'Tense and relax different muscle groups to reduce physical tension',
      steps: [
        'Start with your toes, tense for 5 seconds',
        'Release and notice the relaxation',
        'Move up to your calves, thighs, abdomen',
        'Continue with arms, shoulders, and face',
        'End with your whole body relaxed'
      ]
    },
    {
      title: 'Mindful Walking',
      description: 'Combine gentle exercise with mindfulness',
      steps: [
        'Walk at a comfortable, slow pace',
        'Focus on the sensation of your feet touching the ground',
        'Notice your surroundings without judgment',
        'If your mind wanders, gently return focus to walking',
        'Continue for 10-20 minutes'
      ]
    },
    {
      title: 'Gratitude Practice',
      description: 'Focus on positive aspects of your life',
      steps: [
        'Write down 3 things you\'re grateful for',
        'Be specific about why you\'re grateful',
        'Include small, everyday things',
        'Practice daily, preferably at the same time',
        'Review your list when feeling down'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Brain className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.mentalHealth.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.mentalHealth.description')}
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-max">
          {[
            { id: 'tracker', label: t('tools.mentalHealth.moodTracker') },
            { id: 'assessment', label: t('tools.mentalHealth.selfAssessment') },
            { id: 'strategies', label: t('tools.mentalHealth.copingStrategies') },
            { id: 'journal', label: t('tools.mentalHealth.journal') }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'ghost'}
              onClick={() => setActiveTab(tab.id as any)}
              className="px-4 py-2 whitespace-nowrap"
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Mood Tracker */}
      {activeTab === 'tracker' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{t('tools.mentalHealth.todayMood')}</CardTitle>
              <CardDescription>
                {t('tools.mentalHealth.trackMood')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>{t('tools.mentalHealth.mood')}</Label>
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map((mood) => (
                    <Button
                      key={mood}
                      variant={moodEntry.mood === mood ? 'default' : 'outline'}
                      onClick={() => setMoodEntry(prev => ({ ...prev, mood: mood as any }))}
                      className="h-16 flex flex-col"
                    >
                      <span className="text-2xl">{getMoodEmoji(mood)}</span>
                      <span className="text-xs">{mood}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label>{t('tools.mentalHealth.stressLevel')}</Label>
                <div className="grid grid-cols-5 gap-2 mt-2">
                  {[1, 2, 3, 4, 5].map((stress) => (
                    <Button
                      key={stress}
                      variant={moodEntry.stressLevel === stress ? 'default' : 'outline'}
                      onClick={() => setMoodEntry(prev => ({ ...prev, stressLevel: stress as any }))}
                      className="h-12"
                    >
                      {stress}
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">{t('tools.mentalHealth.stressDesc')}</p>
              </div>

              <div>
                <Label htmlFor="sleepHours">{t('tools.mentalHealth.sleepHours')}</Label>
                <Input
                  id="sleepHours"
                  type="number"
                  step="0.5"
                  value={moodEntry.sleepHours}
                  onChange={(e) => setMoodEntry(prev => ({ ...prev, sleepHours: e.target.value }))}
                  placeholder="8"
                />
              </div>

              <div>
                <Label htmlFor="activities">{t('tools.mentalHealth.activities')}</Label>
                <Input
                  id="activities"
                  value={moodEntry.activities}
                  onChange={(e) => setMoodEntry(prev => ({ ...prev, activities: e.target.value }))}
                  placeholder={t('tools.mentalHealth.activitiesPlaceholder')}
                />
              </div>

              <div>
                <Label htmlFor="notes">{t('common.notes')}</Label>
                <Textarea
                  id="notes"
                  value={moodEntry.notes}
                  onChange={(e) => setMoodEntry(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder={t('tools.mentalHealth.notesPlaceholder')}
                  rows={3}
                />
              </div>

              <Button onClick={handleMoodSubmit} className="w-full">
                {t('tools.mentalHealth.saveEntry')}
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>{t('tools.mentalHealth.moodTrends')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {chartData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis domain={[1, 5]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="mood" stroke="#10B981" strokeWidth={2} />
                      <Line type="monotone" dataKey="stress" stroke="#F59E0B" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    {t('tools.mentalHealth.trendsPlaceholder')}
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{t('tools.mentalHealth.recentEntries')}</CardTitle>
                  {selectedMoodEntries.length > 0 && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4 mr-2" />
                          {t('common.deleteCount', { count: selectedMoodEntries.length })}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{t('common.deleteEntriesTitle', { count: selectedMoodEntries.length })}</DialogTitle>
                          <DialogDescription>
                            {t('common.deleteEntriesDesc', { count: selectedMoodEntries.length })}
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose asChild><Button variant="outline">{t('common.cancel')}</Button></DialogClose>
                          <Button variant="destructive" onClick={handleBulkDeleteMoodEntries}>{t('common.delete')}</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {entries.length > 0 && (
                  <div className="flex items-center space-x-2 mb-2">
                    <Checkbox
                      id="selectAllMood"
                      onCheckedChange={(checked) => handleSelectAllMoodEntries(!!checked)}
                      checked={selectedMoodEntries.length === entries.slice(0, 5).length && entries.length > 0}
                    />
                    <label htmlFor="selectAllMood" className="text-sm font-medium">{t('common.selectAll')}</label>
                  </div>
                )}
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {entries.slice(0, 5).map((entry: MoodEntry) => (
                    <div key={entry.id} className="p-3 border rounded-lg flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <Checkbox
                          id={`mood-${entry.id}`}
                          checked={selectedMoodEntries.includes(entry.id)}
                          onCheckedChange={(checked) => handleMoodEntrySelection(entry.id, !!checked)}
                          className="mt-1"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{getMoodEmoji(entry.mood)}</span>
                            <div>
                              <p className="font-semibold">{getMoodLabel(entry.mood)} ({t('tools.mentalHealth.mood')}: {entry.mood}/5, {t('tools.mentalHealth.stressLevel')}: {entry.stressLevel}/5)</p>
                              <p className="text-xs text-gray-500">{new Date(entry.date).toLocaleString()}</p>
                            </div>
                          </div>
                          {entry.notes && <p className="text-sm text-gray-600 mt-2">"{entry.notes}"</p>}
                        </div>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{t('tools.mentalHealth.deleteMoodEntry')}</DialogTitle>
                            <DialogDescription>
                              {t('tools.mentalHealth.deleteMoodDesc')}
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">{t('common.cancel')}</Button>
                            </DialogClose>
                            <Button variant="destructive" onClick={() => deleteEntry(entry.id)}>
                              {t('common.delete')}
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeTab === 'assessment' && (
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.mentalHealth.depressionScreening')}</CardTitle>
            <CardDescription>
              {t('tools.mentalHealth.screeningDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {phq9Questions.map((question, idx) => (
                <div key={idx} className="border rounded-lg p-4">
                  <p className="font-medium mb-3">{idx + 1}. {question}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {phq9Options.map((option, optIdx) => (
                      <Button
                        key={optIdx}
                        variant={assessmentAnswers[idx] === option.value ? 'default' : 'outline'}
                        onClick={() => {
                          const newAnswers = [...assessmentAnswers];
                          newAnswers[idx] = option.value;
                          setAssessmentAnswers(newAnswers);
                        }}
                        className="text-xs h-auto p-2"
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="flex space-x-4 mt-6">
                <Button
                  onClick={handleCalculateAssessment}
                  disabled={assessmentAnswers.includes(undefined)}
                  className="w-full"
                >
                  {t('common.calculate')} Score
                </Button>
                <Button
                  onClick={resetAssessment}
                  variant="outline"
                  className="w-full"
                >
                  {t('common.reset')}
                </Button>
              </div>

              {assessmentResult !== null && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold mb-2">{t('tools.mentalHealth.assessmentResult')}</h4>
                  <p className="text-lg font-bold text-blue-800">
                    {t('tools.mentalHealth.totalScore')} {assessmentResult}/27
                  </p>
                  <p className="text-sm text-blue-700 mt-1">
                    <strong>Interpretation:</strong> {getPHQ9Interpretation(assessmentResult)}
                  </p>
                  <p className="text-xs text-blue-600 mt-4">
                    {t('tools.mentalHealth.screeningDisclaimer')}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === 'strategies' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {copingStrategies.map((strategy, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{strategy.title}</CardTitle>
                <CardDescription>{strategy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  {strategy.steps.map((step, stepIdx) => (
                    <li key={stepIdx} className="text-sm text-gray-700">{step}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'journal' && (
        <Card>
          <CardHeader>
            <CardTitle>{t('tools.mentalHealth.journalTitle')}</CardTitle>
            <CardDescription>
              {t('tools.mentalHealth.journalDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                placeholder={t('tools.mentalHealth.journalPlaceholder')}
                rows={10}
                className="resize-none"
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
              />
              <Button onClick={handleSaveJournal}>{t('tools.mentalHealth.saveJournal')}</Button>
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">{t('tools.mentalHealth.pastEntries')}</h4>
                  {selectedJournalEntries.length > 0 && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="h-4 w-4 mr-2" />
                          {t('common.deleteCount', { count: selectedJournalEntries.length })}
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{t('common.deleteEntriesTitle', { count: selectedJournalEntries.length })}</DialogTitle>
                          <DialogDescription>
                            {t('common.deleteEntriesDesc', { count: selectedJournalEntries.length })}
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <DialogClose asChild><Button variant="outline">{t('common.cancel')}</Button></DialogClose>
                          <Button variant="destructive" onClick={handleBulkDeleteJournalEntries}>{t('common.delete')}</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
                {journalEntries.length > 0 ? (
                  <>
                    <div className="flex items-center space-x-2 mb-2">
                      <Checkbox
                        id="selectAllJournal"
                        onCheckedChange={(checked) => handleSelectAllJournalEntries(!!checked)}
                        checked={selectedJournalEntries.length === journalEntries.length && journalEntries.length > 0}
                      />
                      <label htmlFor="selectAllJournal" className="text-sm font-medium">{t('common.selectAll')}</label>
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto border rounded-lg p-2">
                      {journalEntries.map((entry, idx) => (
                        <div key={idx} className="p-3 border-b last:border-b-0 bg-gray-50 rounded flex items-start justify-between">
                          <div className="flex items-start space-x-3 flex-1">
                            <Checkbox
                              id={`journal-${entry.date}`}
                              checked={selectedJournalEntries.includes(entry.date)}
                              onCheckedChange={(checked) => handleJournalEntrySelection(entry.date, !!checked)}
                              className="mt-1"
                            />
                            <div>
                              <p className="text-xs text-gray-500 mb-1">{new Date(entry.date).toLocaleString()}</p>
                              <p className="text-sm text-gray-700 whitespace-pre-wrap">{entry.text}</p>
                            </div>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>{t('tools.mentalHealth.deleteJournalEntry')}</DialogTitle>
                                <DialogDescription>
                                  {t('tools.mentalHealth.deleteJournalDesc')}
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button variant="outline">{t('common.cancel')}</Button>
                                </DialogClose>
                                <Button variant="destructive" onClick={() => handleDeleteJournalEntry(entry.date)}>
                                  {t('common.delete')}
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-gray-500">{t('tools.mentalHealth.noJournalEntries')}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
