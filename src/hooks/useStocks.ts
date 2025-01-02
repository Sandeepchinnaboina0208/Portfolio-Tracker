import { useState, useCallback } from 'react';
import { Stock, PortfolioMetrics } from '../types';
import { fetchStockPrices } from '../utils/api';
import { calculatePortfolioMetrics } from '../utils/calculations';
import { mockStocks } from '../utils/mockData';
import { useStockUpdates } from './useStockUpdates';

export function useStocks() {
  const [stocks, setStocks] = useState<Stock[]>(mockStocks);
  const [metrics, setMetrics] = useState<PortfolioMetrics>({
    totalValue: 0,
    totalGainLoss: 0,
    topPerformer: null,
    worstPerformer: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStocksUpdate = useCallback((updatedStocks: Stock[]) => {
    setStocks(updatedStocks);
    setMetrics(calculatePortfolioMetrics(updatedStocks));
    setError(null);
    setLoading(false);
  }, []);

  const handleUpdateError = useCallback((errorMessage: string) => {
    setError(errorMessage);
    setLoading(false);
  }, []);

  // Use the real-time updates hook
  useStockUpdates(stocks, handleStocksUpdate, handleUpdateError);

  const handleAddStock = async (newStock: Omit<Stock, 'id' | 'currentPrice'>) => {
    setLoading(true);
    try {
      const stockWithId = { ...newStock, id: Date.now().toString(), currentPrice: 0 };
      const updatedStocks = await fetchStockPrices([stockWithId]);
      setStocks(prevStocks => [...prevStocks, ...updatedStocks]);
    } catch (err) {
      setError('Failed to add stock. Please try again.');
    }
    setLoading(false);
  };

  const handleUpdateStock = async (
    updatedStock: Omit<Stock, 'id' | 'currentPrice'>,
    editingId: string
  ) => {
    setLoading(true);
    try {
      const stockToUpdate = { ...updatedStock, id: editingId, currentPrice: 0 };
      const updatedStocks = await fetchStockPrices([stockToUpdate]);
      setStocks(prevStocks =>
        prevStocks.map(s => (s.id === editingId ? updatedStocks[0] : s))
      );
    } catch (err) {
      setError('Failed to update stock. Please try again.');
    }
    setLoading(false);
  };

  const handleDeleteStock = (id: string) => {
    setStocks(prevStocks => prevStocks.filter(stock => stock.id !== id));
  };

  return {
    stocks,
    metrics,
    loading,
    error,
    handleAddStock,
    handleUpdateStock,
    handleDeleteStock,
  };
}