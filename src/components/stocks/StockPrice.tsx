import React from 'react';
import { RefreshCw } from 'lucide-react';
import { useStockPrice } from '../../hooks/useStockPrice';
import { formatCurrency } from '../../utils/formatters/number';

interface StockPriceProps {
  symbol: string;
}

export function StockPrice({ symbol }: StockPriceProps) {
  const { price, loading, error } = useStockPrice(symbol);

  if (error) {
    return <span className="text-red-500 text-sm">Failed to load price</span>;
  }

  return (
    <div className="flex items-center space-x-2">
      <span className={`font-medium ${loading ? 'opacity-50' : ''}`}>
        {price ? formatCurrency(price) : '-'}
      </span>
      {loading && (
        <RefreshCw className="w-4 h-4 text-blue-500 animate-spin" />
      )}
    </div>
  );
}