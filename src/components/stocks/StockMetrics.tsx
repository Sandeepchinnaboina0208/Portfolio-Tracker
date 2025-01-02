import React from 'react';
import { Stock } from '../../types';
import { formatCurrency, formatPercentage } from '../../utils/formatters/number';
import { calculateStockPerformance, calculateStockValue } from '../../utils/calculations/portfolio';

interface StockMetricsProps {
  stock: Stock;
}

export function StockMetrics({ stock }: StockMetricsProps) {
  const performance = calculateStockPerformance(stock);
  const value = calculateStockValue(stock);
  const gainLoss = (stock.currentPrice - stock.buyPrice) * stock.quantity;

  return (
    <div className="flex flex-col space-y-1">
      <div className="flex justify-between">
        <span className="text-gray-500">Current Value:</span>
        <span className="font-medium">{formatCurrency(value)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Gain/Loss:</span>
        <span className={`font-medium ${gainLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {formatCurrency(gainLoss)}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Performance:</span>
        <span className={`font-medium ${performance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {formatPercentage(performance)}
        </span>
      </div>
    </div>
  );
}