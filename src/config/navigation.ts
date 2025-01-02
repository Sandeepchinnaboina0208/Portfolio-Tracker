import { PieChart, TrendingUp, Settings, Users, FileText, Bell } from 'lucide-react';
import { UserRole } from '../types/auth';

export const routes = {
  portfolio: {
    path: '/portfolio',
    label: 'Portfolio',
    icon: PieChart,
    roles: ['user', 'manager', 'admin'],
  },
  markets: {
    path: '/markets',
    label: 'Markets',
    icon: TrendingUp,
    roles: ['user', 'manager', 'admin'],
  },
  reports: {
    path: '/reports',
    label: 'Reports',
    icon: FileText,
    roles: ['manager', 'admin'],
  },
  users: {
    path: '/users',
    label: 'Users',
    icon: Users,
    roles: ['admin'],
  },
  notifications: {
    path: '/notifications',
    label: 'Notifications',
    icon: Bell,
    roles: ['user', 'manager', 'admin'],
  },
  settings: {
    path: '/settings',
    label: 'Settings',
    icon: Settings,
    roles: ['user', 'manager', 'admin'],
  },
} as const;