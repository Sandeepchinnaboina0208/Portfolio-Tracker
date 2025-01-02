import React from 'react';
import { Bell, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const mockNotifications = [
  {
    id: '1',
    type: 'price-alert',
    title: 'Price Alert: AAPL',
    message: 'Apple Inc. stock has increased by 5%',
    timestamp: '2024-03-10T14:30:00Z',
    read: false,
  },
  {
    id: '2',
    type: 'portfolio',
    title: 'Portfolio Update',
    message: 'Your portfolio value has increased by $1,000',
    timestamp: '2024-03-10T12:00:00Z',
    read: true,
  },
  {
    id: '3',
    type: 'warning',
    title: 'Market Warning',
    message: 'Unusual market volatility detected',
    timestamp: '2024-03-10T10:15:00Z',
    read: true,
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'price-alert':
      return <TrendingUp className="h-5 w-5 text-green-500" />;
    case 'portfolio':
      return <TrendingDown className="h-5 w-5 text-blue-500" />;
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    default:
      return <Bell className="h-5 w-5 text-gray-500" />;
  }
};

export function Notifications() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
        <button className="text-sm text-blue-600 hover:text-blue-700">
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {mockNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-xl shadow-md p-6 ${
              !notification.read ? 'border-l-4 border-blue-500' : ''
            }`}
          >
            <div className="flex items-start space-x-4">
              {getIcon(notification.type)}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {notification.title}
                </p>
                <p className="text-sm text-gray-500">{notification.message}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(notification.timestamp).toLocaleString()}
                </p>
              </div>
              {!notification.read && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  New
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}