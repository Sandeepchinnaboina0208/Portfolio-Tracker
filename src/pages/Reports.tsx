import React from 'react';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import { useStocks } from '../hooks/useStocks';

export function Reports() {
  const { stocks, metrics } = useStocks();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Portfolio Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Portfolio Value</h2>
            <LineChart className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900">
            ${metrics.totalValue.toFixed(2)}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Total Gain/Loss</h2>
            <BarChart className="h-5 w-5 text-green-500" />
          </div>
          <p className={`text-3xl font-bold ${
            metrics.totalGainLoss >= 0 ? 'text-green-500' : 'text-red-500'
          }`}>
            ${Math.abs(metrics.totalGainLoss).toFixed(2)}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Portfolio Distribution</h2>
            <PieChart className="h-5 w-5 text-purple-500" />
          </div>
          <div className="space-y-2">
            {stocks.map(stock => (
              <div key={stock.id} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{stock.symbol}</span>
                <span className="text-sm font-medium">
                  {((stock.currentPrice * stock.quantity / metrics.totalValue) * 100).toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}