import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { vaccineSchedules } from '../../data/vaccinations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Shield, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

interface ScheduleItem {
  id: string;
  vaccine: string;
  age: string;
  dueDate: Date;
  doses: number;
  isPast: boolean;
  isUpcoming: boolean;
  description: string;
  importance: string;
  sideEffects: string[];
}

export default function VaccinationPlanner() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [birthDate, setBirthDate] = useState('');
  const [selectedVaccine, setSelectedVaccine] = useState<string | null>(null);
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [completedVaccinations, setCompletedVaccinations] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('afrihealth-completed-vaccinations');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  useEffect(() => {
    localStorage.setItem('afrihealth-completed-vaccinations', JSON.stringify(Array.from(completedVaccinations)));
  }, [completedVaccinations]);

  useEffect(() => {
    if (schedule.length > 0) {
      const upcomingVaccines = schedule.filter(item => item.isUpcoming && !completedVaccinations.has(item.id));
      if (upcomingVaccines.length > 0) {
        toast({
          title: "Upcoming Vaccinations Reminder",
          description: `You have ${upcomingVaccines.length} vaccination(s) due within the next 30 days. Check your schedule for details.`,
          duration: 9000,
        });
      }
    }
  }, [schedule, completedVaccinations, toast]);

  const calculateSchedule = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    const scheduleItems: ScheduleItem[] = [];

    vaccineSchedules.forEach(vaccine => {
      vaccine.ageGroups.forEach(ageGroup => {
        const dueDate = new Date(birth);
        
        if (ageGroup.age === 'Birth') {
          // Due at birth
        } else if (ageGroup.age.includes('weeks')) {
          const weeks = parseInt(ageGroup.age);
          dueDate.setDate(dueDate.getDate() + (weeks * 7));
        } else if (ageGroup.age.includes('months')) {
          const months = parseInt(ageGroup.age);
          dueDate.setMonth(dueDate.getMonth() + months);
        } else if (ageGroup.age.includes('years')) {
          const years = parseInt(ageGroup.age);
          dueDate.setFullYear(dueDate.getFullYear() + years);
        }

        const isPast = dueDate < today;
        const isUpcoming = dueDate > today && dueDate <= new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000));

        scheduleItems.push({
          id: `${vaccine.id}-${ageGroup.age}`,
          vaccine: vaccine.vaccine,
          age: ageGroup.age,
          dueDate,
          doses: ageGroup.doses,
          isPast,
          isUpcoming,
          description: vaccine.description,
          importance: vaccine.importance,
          sideEffects: vaccine.sideEffects
        });
      });
    });

    scheduleItems.sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
    setSchedule(scheduleItems);
  };

  const toggleVaccinationCompletion = (id: string) => {
    setCompletedVaccinations(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getStatusBadge = (item: ScheduleItem) => {
    if (completedVaccinations.has(item.id)) {
      return <Badge className="bg-green-100 text-green-800 flex items-center"><CheckCircle className="h-3 w-3 mr-1" />{t('common.completed')}</Badge>;
    }
    if (item.isPast) {
      return <Badge variant="destructive">{t('tools.vaccination.due')}</Badge>;
    } else if (item.isUpcoming) {
      return <Badge className="bg-orange-100 text-orange-800">{t('tools.vaccination.upcoming')}</Badge>;
    } else {
      return <Badge className="bg-blue-100 text-blue-800">{t('tools.vaccination.future')}</Badge>;
    }
  };

  const selectedVaccineData = vaccineSchedules.find(v => v.id === selectedVaccine);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.vaccination.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.vaccination.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Schedule Calculator */}
        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>{t('tools.vaccination.scheduleTitle')}</CardTitle>
              <CardDescription>
                {t('tools.vaccination.scheduleDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="birthDate">{t('tools.vaccination.birthDate')}</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <Button 
                onClick={calculateSchedule}
                disabled={!birthDate}
                className="w-full"
              >
                {t('tools.vaccination.generate')}
              </Button>
            </CardContent>
          </Card>

          {/* Vaccine List */}
          <Card>
            <CardHeader>
              <CardTitle>{t('tools.vaccination.vaccineInfo')}</CardTitle>
              <CardDescription>
                {t('tools.vaccination.vaccineInfoDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {vaccineSchedules.map((vaccine) => (
                  <Button
                    key={vaccine.id}
                    variant={selectedVaccine === vaccine.id ? 'default' : 'outline'}
                    onClick={() => setSelectedVaccine(vaccine.id)}
                    className="w-full justify-start text-left h-auto p-3"
                  >
                    <div>
                      <div className="font-medium">{vaccine.vaccine}</div>
                      <div className="text-xs text-gray-500">{vaccine.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule Display */}
        <div className="lg:col-span-2">
          {schedule.length > 0 ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{t('tools.vaccination.scheduleTitle')}</span>
                </CardTitle>
                <CardDescription>
                  {t('tools.vaccination.timeline')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedule.map((item, idx) => (
                    <div key={idx} className={`border rounded-lg p-4 transition-all ${completedVaccinations.has(item.id) ? 'bg-gray-50 opacity-70' : ''}`}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={`vaccine-${item.id}`}
                            checked={completedVaccinations.has(item.id)}
                            onCheckedChange={() => toggleVaccinationCompletion(item.id)}
                          />
                          <div>
                            <h4 className={`font-semibold text-gray-900 ${completedVaccinations.has(item.id) ? 'line-through' : ''}`}>{item.vaccine}</h4>
                            <p className="text-sm text-gray-600">{t('common.age')}: {item.age}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {getStatusBadge(item)}
                          <p className="text-sm text-gray-600 mt-1">
                            {formatDate(item.dueDate)}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : selectedVaccineData ? (
            <Card>
              <CardHeader>
                <CardTitle>{selectedVaccineData.vaccine}</CardTitle>
                <CardDescription>{selectedVaccineData.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('common.importance')}:</h4>
                  <p className="text-gray-700">{selectedVaccineData.importance}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('tools.vaccination.scheduleTitle')}:</h4>
                  <div className="space-y-2">
                    {selectedVaccineData.ageGroups.map((group, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span>{group.age}</span>
                        <Badge variant="outline">{group.doses} dose(s)</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('common.sideEffects')}:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedVaccineData.sideEffects.map((effect, idx) => (
                      <li key={idx} className="text-sm text-gray-700">{effect}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Shield className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  {t('tools.vaccination.prompt')}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-2">
                {t('tools.vaccination.benefits')}
              </h3>
              <ul className="text-green-800 space-y-1 text-sm">
                <li>• {t('tools.vaccination.benefit1')}</li>
                <li>• {t('tools.vaccination.benefit2')}</li>
                <li>• {t('tools.vaccination.benefit3')}</li>
                <li>• {t('tools.vaccination.benefit4')}</li>
                <li>• {t('tools.vaccination.benefit5')}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">
                {t('tools.vaccination.reminders')}
              </h3>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• {t('tools.vaccination.reminder1')}</li>
                <li>• {t('tools.vaccination.reminder2')}</li>
                <li>• {t('tools.vaccination.reminder3')}</li>
                <li>• {t('tools.vaccination.reminder4')}</li>
                <li>• {t('tools.vaccination.reminder5')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
