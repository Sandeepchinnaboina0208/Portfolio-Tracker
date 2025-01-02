import React from 'react';
import { TrendingUp } from 'lucide-react';

export function PortfolioHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-bold text-gray-900">Portfolio Overview</h1>
      <div className="flex items-center space-x-4">
        <TrendingUp className="w-5 h-5 text-blue-600" />
        <span className="text-sm text-gray-500">Live updates</span>
      </div>
    </div>
  );
}