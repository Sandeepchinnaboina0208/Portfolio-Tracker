import React from 'react';
import { Bell } from 'lucide-react';

export function NotificationBadge() {
  return (
    <button className="relative p-1 rounded-full text-blue-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white">
      <Bell className="h-6 w-6" />
      <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-blue-600" />
    </button>
  );
}