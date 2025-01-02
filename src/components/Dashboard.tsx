import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Stock, PortfolioMetrics } from '../types';
import { formatCurrency } from '../utils/formatters/number';
import { StockPrice } from './stocks/StockPrice';

interface DashboardProps {
  stocks: Stock[];
  metrics: PortfolioMetrics;
}

export function Dashboard({ stocks, metrics }: DashboardProps) {
  const totalValue = stocks.reduce((sum, stock) => sum + (stock.currentPrice * stock.quantity), 0);
  const sixMonthGain = 1234.40; // Mock data for demonstration

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-sm text-gray-500 mb-1">Total Portfolio</h2>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold">{formatCurrency(totalValue)}</span>
              <span className="text-gray-400 ml-2">.64</span>
            </div>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            View Details
          </button>
        </div>

        <div className="flex items-center text-sm text-green-500 mb-4">
          <TrendingUp className="w-4 h-4 mr-1" />
          <span>Increased by 20%</span>
        </div>

        <div className="h-48 w-full bg-gradient-to-b from-purple-50 to-white rounded-lg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-yellow-100/50 rounded-xl p-6">
          <h3 className="text-sm text-gray-600 mb-2">Liquid Assets</h3>
          <div className="text-2xl font-bold mb-2">{formatCurrency(4234.34)}</div>
          <div className="flex items-center text-sm">
            <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
            <span className="text-green-500">20.32%</span>
            <span className="text-gray-500 ml-2">This Week</span>
          </div>
        </div>

        <div className="bg-pink-100/50 rounded-xl p-6">
          <h3 className="text-sm text-gray-600 mb-2">Margin Positions</h3>
          <div className="text-2xl font-bold mb-2">{formatCurrency(234.34)}</div>
          <div className="flex items-center text-sm">
            <TrendingDown className="w-4 h-4 mr-1 text-red-500" />
            <span className="text-red-500">6.34%</span>
            <span className="text-gray-500 ml-2">This Week</span>
          </div>
        </div>

        <div className="bg-purple-100/50 rounded-xl p-6">
          <h3 className="text-sm text-gray-600 mb-2">LP Positions</h3>
          <div className="text-2xl font-bold mb-2">{formatCurrency(1575.35)}</div>
          <div className="flex items-center text-sm">
            <TrendingDown className="w-4 h-4 mr-1 text-red-500" />
            <span className="text-red-500">0.45%</span>
            <span className="text-gray-500 ml-2">This Week</span>
          </div>
        </div>
      </div>
    </div>
  );
}