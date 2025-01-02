import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { NavLink } from './NavLink';
import { NotificationBadge } from './NotificationBadge';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '../../contexts/AuthContext';
import { routes } from '../../config/navigation';
import { UserMenu } from './UserMenu';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  const authorizedRoutes = Object.values(routes).filter(
    route => user && route.roles.includes(user.role)
  );

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <TrendingUp className="h-8 w-8 text-white" />
            <span className="ml-2 text-white text-xl font-bold">StockTracker</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {authorizedRoutes.map(route => (
              <NavLink
                key={route.path}
                to={route.path}
                icon={route.icon}
                label={route.label}
                isActive={location.pathname === route.path}
              />
            ))}
            <div className="ml-4 flex items-center space-x-4">
              <NotificationBadge />
              <ThemeToggle />
              <UserMenu />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {authorizedRoutes.map(route => (
              <NavLink
                key={route.path}
                to={route.path}
                icon={route.icon}
                label={route.label}
                isActive={location.pathname === route.path}
                isMobile
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}