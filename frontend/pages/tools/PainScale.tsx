import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { usePainAssessment, PainAssessment } from '../../contexts/PainAssessmentContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Clock, User, Baby, LineChart as LineChartIcon, Trash2, PlusCircle, Activity, Smile, Meh, Frown, Angry } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useToast } from '@/components/ui/use-toast';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const painCharacters = ['Sharp', 'Dull', 'Throbbing', 'Burning', 'Aching', 'Stabbing', 'Shooting'];
const painDurations = ['< 1 day', '1-7 days', '1-4 weeks', '> 1 month'];
const painPatterns = ['Constant', 'Intermittent', 'Worse with activity', 'Worse at night'];

const numericScale = Array.from({ length: 11 }, (_, i) => ({ score: i, description: `Level ${i}` }));
const facesScale = [
  { score: 0, emoji: '😊', description: 'No hurt' },
  { score: 2, emoji: '🙂', description: 'Hurts little bit' },
  { score: 4, emoji: '😐', description: 'Hurts little more' },
  { score: 6, emoji: '😟', description: 'Hurts even more' },
  { score: 8, emoji: '😢', description: 'Hurts whole lot' },
  { score: 10, emoji: '😭', description: 'Hurts worst' }
];
const flaccScale = [
  { category: 'Face', key: 'face' as const, scores: [{ score: 0, description: 'No particular expression' }, { score: 1, description: 'Occasional grimace' }, { score: 2, description: 'Frequent frown, clenched jaw' }] },
  { category: 'Legs', key: 'legs' as const, scores: [{ score: 0, description: 'Normal position' }, { score: 1, description: 'Uneasy, restless' }, { score: 2, description: 'Kicking, legs drawn up' }] },
  { category: 'Activity', key: 'activity' as const, scores: [{ score: 0, description: 'Lying quietly' }, { score: 1, description: 'Squirming, tense' }, { score: 2, description: 'Arched, rigid or jerking' }] },
  { category: 'Cry', key: 'cry' as const, scores: [{ score: 0, description: 'No cry' }, { score: 1, description: 'Moans or whimpers' }, { score: 2, description: 'Crying steadily, screams' }] },
  { category: 'Consolability', key: 'consolability' as const, scores: [{ score: 0, description: 'Content, relaxed' }, { score: 1, description: 'Reassured by touch' }, { score: 2, description: 'Difficult to console' }] }
];

const getSeverity = (score: number) => {
  if (score === 0) return { level: 'No Pain', color: 'bg-green-100 text-green-800' };
  if (score <= 3) return { level: 'Mild Pain', color: 'bg-yellow-100 text-yellow-800' };
  if (score <= 6) return { level: 'Moderate Pain', color: 'bg-orange-100 text-orange-800' };
  return { level: 'Severe Pain', color: 'bg-red-100 text-red-800' };
};

export default function PainScale() {
  const { t } = useLanguage();
  const { assessments, addAssessment, deleteAssessment } = usePainAssessment();
  const { toast } = useToast();

  const [activeScale, setActiveScale] = useState<'numeric' | 'faces' | 'flacc'>('numeric');
  const [painScore, setPainScore] = useState<number>(0);
  const [flaccScores, setFlaccScores] = useState({ face: 0, legs: 0, activity: 0, cry: 0, consolability: 0 });
  const [formState, setFormState] = useState({ location: '', description: '', character: [] as string[], duration: '', pattern: '' });

  useEffect(() => {
    if (activeScale === 'flacc') {
      setPainScore(Object.values(flaccScores).reduce((sum, score) => sum + score, 0));
    }
  }, [flaccScores, activeScale]);

  const handleAssessPain = () => {
    if (painScore === 0 && !formState.location) {
      toast({ title: "Incomplete Assessment", description: "Please provide a pain score or location.", variant: "destructive" });
      return;
    }
    addAssessment({
      score: painScore,
      scale: activeScale,
      ...formState
    });
    toast({ title: "Pain Assessment Saved", description: `Score: ${painScore}/10 on ${activeScale} scale.` });
    // Reset form
    setPainScore(0);
    setFlaccScores({ face: 0, legs: 0, activity: 0, cry: 0, consolability: 0 });
    setFormState({ location: '', description: '', character: [], duration: '', pattern: '' });
  };

  const chartData = assessments.slice().reverse().map(a => ({
    date: new Date(a.date).toLocaleDateString(),
    score: a.score
  }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Activity className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">{t('tools.painScale.title')}</h1>
        </div>
        <p className="text-lg text-gray-600">{t('tools.painScale.description')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Assessment Panel */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>New Pain Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ToggleGroup type="single" value={activeScale} onValueChange={(value) => value && setActiveScale(value as any)} className="grid grid-cols-3">
                  <ToggleGroupItem value="numeric" aria-label="Numeric Scale">
                    <User className="h-4 w-4 mr-2" /> Numeric
                  </ToggleGroupItem>
                  <ToggleGroupItem value="faces" aria-label="Faces Scale">
                    <Smile className="h-4 w-4 mr-2" /> Faces
                  </ToggleGroupItem>
                  <ToggleGroupItem value="flacc" aria-label="FLACC Scale">
                    <Baby className="h-4 w-4 mr-2" /> FLACC
                  </ToggleGroupItem>
                </ToggleGroup>

                {/* Scale UI */}
                {activeScale === 'numeric' && (
                  <div className="grid grid-cols-11 gap-1">
                    {numericScale.map(item => (
                      <Button key={item.score} variant={painScore === item.score ? 'default' : 'outline'} size="sm" onClick={() => setPainScore(item.score)} className="h-10">{item.score}</Button>
                    ))}
                  </div>
                )}
                {activeScale === 'faces' && (
                  <div className="grid grid-cols-6 gap-2">
                    {facesScale.map(face => (
                      <Button key={face.score} variant={painScore === face.score ? 'default' : 'outline'} onClick={() => setPainScore(face.score)} className="h-16 flex-col">
                        <span className="text-2xl">{face.emoji}</span>
                        <span className="text-xs">{face.score}</span>
                      </Button>
                    ))}
                  </div>
                )}
                {activeScale === 'flacc' && (
                  <div className="space-y-4">
                    {flaccScale.map((category) => (
                      <div key={category.key}>
                        <Label>{category.category}</Label>
                        <ToggleGroup type="single" value={flaccScores[category.key].toString()} onValueChange={(value) => value && setFlaccScores(prev => ({ ...prev, [category.key]: parseInt(value) }))} className="grid grid-cols-3 gap-2 mt-1">
                          {category.scores.map(score => (
                            <ToggleGroupItem key={score.score} value={score.score.toString()} className="text-xs h-auto p-2 text-left">{score.description}</ToggleGroupItem>
                          ))}
                        </ToggleGroup>
                      </div>
                    ))}
                  </div>
                )}
                <div className="text-center font-bold text-lg">Current Score: {painScore}/10</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pain Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="location">Pain Location</Label>
                <Input id="location" value={formState.location} onChange={e => setFormState(s => ({ ...s, location: e.target.value }))} placeholder="e.g., Lower back, right knee" />
              </div>
              <div>
                <Label>Pain Character</Label>
                <ToggleGroup type="multiple" value={formState.character} onValueChange={value => setFormState(s => ({ ...s, character: value }))} className="flex-wrap justify-start">
                  {painCharacters.map(char => <ToggleGroupItem key={char} value={char} className="text-xs">{char}</ToggleGroupItem>)}
                </ToggleGroup>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Pain Duration</Label>
                  <Select value={formState.duration} onValueChange={value => setFormState(s => ({ ...s, duration: value }))}>
                    <SelectTrigger><SelectValue placeholder="Select duration" /></SelectTrigger>
                    <SelectContent>
                      {painDurations.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Pain Pattern</Label>
                  <Select value={formState.pattern} onValueChange={value => setFormState(s => ({ ...s, pattern: value }))}>
                    <SelectTrigger><SelectValue placeholder="Select pattern" /></SelectTrigger>
                    <SelectContent>
                      {painPatterns.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="description">Additional Description</Label>
                <Textarea id="description" value={formState.description} onChange={e => setFormState(s => ({ ...s, description: e.target.value }))} placeholder="Any other details about the pain..." />
              </div>
              <Button onClick={handleAssessPain} className="w-full">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Pain Assessment
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* History Panel */}
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <LineChartIcon className="h-5 w-5" />
                <span>Pain History</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {assessments.length > 0 ? (
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 10]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-center text-gray-500 py-8">No assessment history yet.</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessment Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {assessments.map(assessment => (
                  <div key={assessment.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-xl">{assessment.score}/10</span>
                          <Badge className={getSeverity(assessment.score).color}>{getSeverity(assessment.score).level}</Badge>
                        </div>
                        <p className="text-xs text-gray-500">{new Date(assessment.date).toLocaleString()}</p>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => deleteAssessment(assessment.id)}><Trash2 className="h-4 w-4 text-red-500" /></Button>
                    </div>
                    <div className="mt-2 text-sm space-y-1">
                      {assessment.location && <p><strong>Location:</strong> {assessment.location}</p>}
                      {assessment.character && assessment.character.length > 0 && <p><strong>Character:</strong> {assessment.character.join(', ')}</p>}
                      {assessment.duration && <p><strong>Duration:</strong> {assessment.duration}</p>}
                      {assessment.pattern && <p><strong>Pattern:</strong> {assessment.pattern}</p>}
                      {assessment.description && <p><strong>Notes:</strong> {assessment.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
