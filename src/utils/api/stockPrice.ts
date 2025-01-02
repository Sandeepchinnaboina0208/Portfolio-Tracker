import { API_CONFIG } from './config';
import { StockQuote } from './types';

export async function fetchStockPrice(symbol: string): Promise<number> {
  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/quote?symbol=${symbol}&token=${API_CONFIG.API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as StockQuote;
    
    if (!data.c || typeof data.c !== 'number') {
      throw new Error('Invalid price data received');
    }

    return data.c;
  } catch (error) {
    console.error(`Error fetching price for ${symbol}:`, error);
    throw error;
  }
}