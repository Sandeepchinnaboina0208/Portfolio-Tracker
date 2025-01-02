import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  icon: LucideIcon;
  label: string;
  to: string;
  isActive?: boolean;
  isMobile?: boolean;
}

export function NavLink({ icon: Icon, label, to, isActive, isMobile }: NavLinkProps) {
  const baseClasses = "flex items-center transition-colors duration-200";
  const mobileClasses = "block px-3 py-2 rounded-md text-base font-medium w-full";
  const desktopClasses = "px-3 py-2 rounded-md text-sm font-medium";
  
  const activeClasses = isMobile
    ? "bg-blue-700 text-white"
    : "text-white";
  
  const inactiveClasses = isMobile
    ? "text-blue-100 hover:bg-blue-700 hover:text-white"
    : "text-blue-100 hover:bg-blue-500 hover:text-white";

  return (
    <Link
      to={to}
      className={`
        ${baseClasses}
        ${isMobile ? mobileClasses : desktopClasses}
        ${isActive ? activeClasses : inactiveClasses}
      `}
    >
      <Icon className={`h-5 w-5 ${isMobile ? 'mr-3' : 'mr-2'}`} />
      {label}
    </Link>
  );
}