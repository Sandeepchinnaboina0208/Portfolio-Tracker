import { Stock } from '../types';

const ALPHA_VANTAGE_API_KEY = 'demo';
const BASE_URL = 'https://www.alphavantage.co/query';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchStockPrice(symbol: string): Promise<number> {
  try {
    const response = await fetch(
      `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data['Note']) {
      // API limit reached
      throw new Error('API rate limit reached');
    }
    
    const price = parseFloat(data['Global Quote']?.['05. price']);
    if (isNaN(price)) {
      throw new Error('Invalid price data received');
    }
    
    return price;
  } catch (error) {
    console.error('Error fetching stock price:', error);
    throw error;
  }
}

export async function fetchStockPrices(stocks: Stock[]): Promise<Stock[]> {
  const updatedStocks: Stock[] = [];
  
  for (const stock of stocks) {
    try {
      // Add delay between requests to avoid API rate limiting
      await delay(1000);
      const price = await fetchStockPrice(stock.symbol);
      updatedStocks.push({ ...stock, currentPrice: price });
    } catch (error) {
      // If we fail to get the new price, keep the old price
      updatedStocks.push(stock);
    }
  }
  
  return updatedStocks;
}