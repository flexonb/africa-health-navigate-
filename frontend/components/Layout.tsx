import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import BottomNavigation from './BottomNavigation';
import OfflineIndicator from './OfflineIndicator';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex flex-col">
      <Header />
      <OfflineIndicator />
      <main className="flex-1">
        <div className="w-full">
          {children}
        </div>
      </main>
      <Footer />
      {!isHomePage && <BottomNavigation />}
    </div>
  );
}
