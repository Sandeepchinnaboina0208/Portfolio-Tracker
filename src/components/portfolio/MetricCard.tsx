import React from 'react';
import { formatCurrency, formatPercentage } from '../../utils/formatters/number';

interface MetricCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  subtitle: string;
  type: 'currency' | 'profit' | 'percentage';
}

export function MetricCard({ title, value, icon, subtitle, type }: MetricCardProps) {
  const formattedValue = () => {
    switch (type) {
      case 'currency':
        return formatCurrency(value);
      case 'profit':
        return formatCurrency(Math.abs(value));
      case 'percentage':
        return formatPercentage(value / 100);
      default:
        return value;
    }
  };

  const valueColor = type === 'profit' ? (value >= 0 ? 'text-green-500' : 'text-red-500') : 'text-gray-900';

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {icon}
      </div>
      <div className="space-y-1">
        <p className={`text-2xl font-bold ${valueColor}`}>
          {type === 'profit' && value >= 0 && '+'}
          {formattedValue()}
        </p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}