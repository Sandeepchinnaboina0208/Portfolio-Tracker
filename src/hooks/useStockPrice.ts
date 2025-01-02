import { useState, useEffect } from 'react';
import { fetchStockPrice } from '../utils/api/stockPrice';
import { API_CONFIG } from '../utils/api/config';

export function useStockPrice(symbol: string) {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    let intervalId: number;

    const updatePrice = async () => {
      try {
        setLoading(true);
        const newPrice = await fetchStockPrice(symbol);
        if (mounted) {
          setPrice(newPrice);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to fetch price');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    updatePrice();
    intervalId = window.setInterval(updatePrice, API_CONFIG.UPDATE_INTERVAL);

    return () => {
      mounted = false;
      clearInterval(intervalId);
    };
  }, [symbol]);

  return { price, loading, error };
}