import { useEffect, useRef } from 'react';
import { Stock } from '../types';
import { fetchStockPrices } from '../utils/api';
import { API_CONFIG } from '../utils/api/config';

export function useStockUpdates(
  stocks: Stock[],
  onUpdate: (updatedStocks: Stock[]) => void,
  onError: (error: string) => void
) {
  const updateIntervalRef = useRef<number>();

  useEffect(() => {
    const updateStocks = async () => {
      try {
        const updatedStocks = await fetchStockPrices(stocks);
        onUpdate(updatedStocks);
      } catch (error) {
        onError('Failed to update stock prices. Retrying...');
      }
    };

    // Initial update
    updateStocks();

    // Set up interval for real-time updates
    updateIntervalRef.current = window.setInterval(
      updateStocks,
      API_CONFIG.UPDATE_INTERVAL
    );

    return () => {
      if (updateIntervalRef.current) {
        clearInterval(updateIntervalRef.current);
      }
    };
  }, [stocks, onUpdate, onError]);
}