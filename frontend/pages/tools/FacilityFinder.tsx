import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { healthcareFacilities } from '../../data/healthcareFacilities';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Building, Search } from 'lucide-react';

export default function FacilityFinder() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const countries = [...new Set(healthcareFacilities.map(f => f.country))].sort();
  const types = [...new Set(healthcareFacilities.map(f => f.type))];

  const filteredFacilities = healthcareFacilities.filter(facility => {
    const matchesSearch = facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         facility.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         facility.services.some(service => 
                           service.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCountry = selectedCountry === 'all' || facility.country === selectedCountry;
    const matchesType = selectedType === 'all' || facility.type === selectedType;
    
    return matchesSearch && matchesCountry && matchesType;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'hospital':
        return <Building className="h-5 w-5 text-red-500" />;
      case 'clinic':
        return <Building className="h-5 w-5 text-blue-500" />;
      case 'pharmacy':
        return <Building className="h-5 w-5 text-green-500" />;
      default:
        return <Building className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'hospital':
        return 'bg-red-100 text-red-800';
      case 'clinic':
        return 'bg-blue-100 text-blue-800';
      case 'pharmacy':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <MapPin className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            {t('tools.facilities.title')}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t('tools.facilities.description')}
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder={t('tools.facilities.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder={t('common.allCountries')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('common.allCountries')}</SelectItem>
                {countries.map(country => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder={t('common.allTypes')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('common.allTypes')}</SelectItem>
                {types.map(type => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredFacilities.map((facility) => (
          <Card key={facility.id} className="border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {getTypeIcon(facility.type)}
                  <div>
                    <CardTitle className="text-lg">{facility.name}</CardTitle>
                    <CardDescription>
                      {facility.city}, {facility.country}
                    </CardDescription>
                  </div>
                </div>
                <Badge className={getTypeColor(facility.type)}>
                  {facility.type.charAt(0).toUpperCase() + facility.type.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                <span className="text-sm text-gray-700">{facility.address}</span>
              </div>

              {facility.phone && (
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">{facility.phone}</span>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('common.services')}:</h4>
                <div className="flex flex-wrap gap-2">
                  {facility.services.map((service, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredFacilities.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              {t('tools.facilities.noFacilitiesFound')}
            </p>
          </CardContent>
        </Card>
      )}

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <MapPin className="h-6 w-6 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              {t('tools.facilities.info')}
            </h3>
            <p className="text-blue-800">
              {t('tools.facilities.infoText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
