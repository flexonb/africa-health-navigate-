import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Home, Stethoscope, FileText, Book, Wrench, Compass } from 'lucide-react';

export default function BottomNavigation() {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { path: '/', icon: Home, label: t('common.home') },
    { path: '/triage', icon: Stethoscope, label: t('common.triage') },
    { path: '/records', icon: FileText, label: t('common.records') },
    { path: '/encyclopedia', icon: Book, label: t('common.encyclopedia') },
    { path: '/tools', icon: Wrench, label: t('common.tools') },
    { path: '/guides', icon: Compass, label: t('common.guides') }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/50 px-2 py-2 z-50 md:hidden shadow-2xl">
      <div className="flex justify-around max-w-md mx-auto">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path || 
            (path !== '/' && location.pathname.startsWith(path));
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center space-y-1 px-2 py-2 rounded-xl transition-all duration-300 min-w-0 flex-1 ${
                isActive
                  ? 'text-green-600 bg-green-50 shadow-md scale-105 border border-green-200'
                  : 'text-gray-600 hover:text-green-600 hover:bg-gray-50 active:scale-95'
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'animate-pulse' : ''}`} />
              <span className="text-xs font-medium truncate w-full text-center">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
