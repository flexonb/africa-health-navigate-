import React from 'react';
import { Heart } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer className={`bg-white/50 backdrop-blur-md text-center text-sm text-gray-600 py-4 border-t border-gray-200/50 ${!isHomePage ? 'pb-20 md:pb-4' : ''}`}>
      <div className="flex items-center justify-center space-x-1">
        <span>Created with</span>
        <Heart className="h-4 w-4 text-red-500" />
        <span>by BUGINGO Flexon</span>
      </div>
    </footer>
  );
}
