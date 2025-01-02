import { Stock } from '../types';

export const mockStocks: Stock[] = [
  { id: '1', symbol: 'AAPL', name: 'Apple Inc.', quantity: 1, buyPrice: 150, currentPrice: 170 },
  { id: '2', symbol: 'GOOGL', name: 'Alphabet Inc.', quantity: 1, buyPrice: 2800, currentPrice: 2900 },
  { id: '3', symbol: 'MSFT', name: 'Microsoft Corp.', quantity: 1, buyPrice: 280, currentPrice: 300 },
  { id: '4', symbol: 'AMZN', name: 'Amazon.com Inc.', quantity: 1, buyPrice: 3200, currentPrice: 3300 },
  { id: '5', symbol: 'TSLA', name: 'Tesla Inc.', quantity: 1, buyPrice: 900, currentPrice: 950 },
];