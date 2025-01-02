import React from 'react';
import { TrendingUp, Activity, Award } from 'lucide-react';
import { MetricCard } from './MetricCard';

interface PortfolioMetricsProps {
  totalValue: number;
  totalGainLoss: number;
  topPerformer: {
    symbol: string;
    name: string;
    performance: number;
  };
}

export function PortfolioMetrics({ totalValue, totalGainLoss, topPerformer }: PortfolioMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <MetricCard
        title="Total Portfolio Value"
        value={totalValue}
        icon={<Activity className="w-5 h-5 text-blue-500" />}
        subtitle="Live updates"
        type="currency"
      />
      <MetricCard
        title="Total Gain/Loss"
        value={totalGainLoss}
        icon={<TrendingUp className="w-5 h-5 text-green-500" />}
        subtitle="Profit"
        type="profit"
      />
      <MetricCard
        title="Top Performer"
        value={topPerformer.performance}
        icon={<Award className="w-5 h-5 text-purple-500" />}
        subtitle={`${topPerformer.symbol} - ${topPerformer.name}`}
        type="percentage"
      />
    </div>
  );
}