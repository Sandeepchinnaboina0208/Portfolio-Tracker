import { Stock } from '../types';

const ALPHA_VANTAGE_API_KEY = 'cthg7t9r01qtho2pesc0cthg7t9r01qtho2pescg'; // Replace with your API key
const BASE_URL = 'https://www.alphavantage.co/query';

export async function fetchStockPrice(symbol: string): Promise<number> {
  try {
    const response = await fetch(
      `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    const data = await response.json();
    return parseFloat(data['Global Quote']['05. price']) || 0;
  } catch (error) {
    console.error('Error fetching stock price:', error);
    return 0;
  }
}

// Mock data for initial stocks
export const mockStocks: Stock[] = [
  { id: '1', symbol: 'AAPL', name: 'Apple Inc.', quantity: 1, buyPrice: 150, currentPrice: 170 },
  { id: '2', symbol: 'GOOGL', name: 'Alphabet Inc.', quantity: 1, buyPrice: 2800, currentPrice: 2900 },
  { id: '3', symbol: 'MSFT', name: 'Microsoft Corp.', quantity: 1, buyPrice: 280, currentPrice: 300 },
  { id: '4', symbol: 'AMZN', name: 'Amazon.com Inc.', quantity: 1, buyPrice: 3200, currentPrice: 3300 },
  { id: '5', symbol: 'TSLA', name: 'Tesla Inc.', quantity: 1, buyPrice: 900, currentPrice: 950 },
];