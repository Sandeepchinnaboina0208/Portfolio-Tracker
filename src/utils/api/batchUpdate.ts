import { Stock } from '../../types';
import { API_CONFIG } from './config';
import { fetchStockPrice } from './stockPrice';

export async function fetchStockPrices(stocks: Stock[]): Promise<Stock[]> {
  const updatedStocks: Stock[] = [];
  const batches = chunk(stocks, API_CONFIG.BATCH_SIZE);

  for (const batch of batches) {
    const batchResults = await Promise.allSettled(
      batch.map(async (stock) => {
        try {
          const price = await fetchStockPrice(stock.symbol);
          return { ...stock, currentPrice: price };
        } catch (error) {
          console.warn(`Failed to update ${stock.symbol}, using last known price:`, error);
          return stock;
        }
      })
    );

    // Process batch results
    batchResults.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        updatedStocks.push(result.value);
      } else {
        // Keep the original stock data if the update failed
        updatedStocks.push(batch[index]);
      }
    });

    // Wait between batches to respect rate limits
    if (batches.indexOf(batch) < batches.length - 1) {
      await new Promise(resolve => setTimeout(resolve, API_CONFIG.REQUEST_INTERVAL));
    }
  }

  return updatedStocks;
}

function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}