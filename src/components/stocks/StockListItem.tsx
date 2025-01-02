import React from 'react';
import { Pencil, Trash2, TrendingUp, TrendingDown } from 'lucide-react';
import { Stock } from '../../types';
import { StockPrice } from './StockPrice';
import { formatCurrency } from '../../utils/formatters/number';

interface StockListItemProps {
  stock: Stock;
  onEdit: (stock: Stock) => void;
  onDelete: (id: string) => void;
}

export function StockListItem({ stock, onEdit, onDelete }: StockListItemProps) {
  const gainPercentage = ((stock.currentPrice - stock.buyPrice) / stock.buyPrice) * 100;
  const balance = stock.currentPrice * stock.quantity;

  return (
    <tr className="hover:bg-gray-50/50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
            {stock.symbol.charAt(0)}
          </div>
          <div>
            <div className="font-medium text-gray-900">{stock.symbol}</div>
            <div className="text-sm text-gray-500">{stock.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          {gainPercentage >= 0 ? (
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
          )}
          <span className={gainPercentage >= 0 ? 'text-green-500' : 'text-red-500'}>
            {Math.abs(gainPercentage).toFixed(2)}%
          </span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StockPrice symbol={stock.symbol} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap font-medium">
        {formatCurrency(balance)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(stock)}
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => onDelete(stock.id)}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}