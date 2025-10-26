import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, Calendar, TrendingUp, Utensils } from 'lucide-react';
import arohaLogo from '@/assets/aroha-logo.png';

const navItems = [
  { to: '/home', icon: Home, label: 'Home' },
  { to: '/diet', icon: Utensils, label: 'Diet' },
  { to: '/schedule', icon: Calendar, label: 'Schedule' },
  { to: '/progress', icon: TrendingUp, label: 'Progress' },
  { to: '/profile', icon: User, label: 'Profile' },
];

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={arohaLogo} alt="Aroha" className="w-8 h-8" />
            <span className="text-xl font-semibold text-foreground">Aroha</span>
          </div>
          
          <div className="flex items-center space-x-1">
            {navItems.map(({ to, icon: Icon, label }) => {
              const isActive = location.pathname === to;
              return (
                <NavLink
                  key={to}
                  to={to}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-[var(--shadow-soft)]'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border/50">
        <div className="flex items-center justify-around py-2">
          {navItems.map(({ to, icon: Icon, label }) => {
            const isActive = location.pathname === to;
            return (
              <NavLink
                key={to}
                to={to}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'animate-gentle-bounce' : ''}`} />
                <span className="text-xs font-medium">{label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Spacer for desktop nav */}
      <div className="hidden md:block h-20"></div>
    </>
  );
};