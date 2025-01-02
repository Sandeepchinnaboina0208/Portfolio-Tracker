import React, { useState } from 'react';
import { Stock } from '../types';

interface StockFormProps {
  onSubmit: (stock: Omit<Stock, 'id' | 'currentPrice'>) => void;
  initialValues?: Stock;
}

export function StockForm({ onSubmit, initialValues }: StockFormProps) {
  const [formData, setFormData] = useState({
    symbol: initialValues?.symbol || '',
    name: initialValues?.name || '',
    quantity: initialValues?.quantity || 1,
    buyPrice: initialValues?.buyPrice || 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialValues) {
      setFormData({ symbol: '', name: '', quantity: 1, buyPrice: 0 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Symbol</label>
          <input
            type="text"
            value={formData.symbol}
            onChange={(e) => setFormData({ ...formData, symbol: e.target.value.toUpperCase() })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="1"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Buy Price</label>
          <input
            type="number"
            value={formData.buyPrice}
            onChange={(e) => setFormData({ ...formData, buyPrice: parseFloat(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="0"
            step="0.01"
            required
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {initialValues ? 'Update Stock' : 'Add Stock'}
        </button>
      </div>
    </form>
  );
}