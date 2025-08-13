import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pb-20 md:pb-0">
        <Outlet />
      </main>
    </div>
  );
};