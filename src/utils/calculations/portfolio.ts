import { Stock, PortfolioMetrics } from '../../types';

export function calculateStockPerformance(stock: Stock): number {
  return (stock.currentPrice - stock.buyPrice) / stock.buyPrice;
}

export function calculateStockValue(stock: Stock): number {
  return stock.currentPrice * stock.quantity;
}

export function calculatePortfolioMetrics(stocks: Stock[]): PortfolioMetrics {
  const totalValue = stocks.reduce(
    (sum, stock) => sum + calculateStockValue(stock),
    0
  );
  
  const totalGainLoss = stocks.reduce(
    (sum, stock) => sum + (stock.currentPrice - stock.buyPrice) * stock.quantity,
    0
  );

  const sortedByPerformance = [...stocks].sort(
    (a, b) => calculateStockPerformance(b) - calculateStockPerformance(a)
  );

  return {
    totalValue,
    totalGainLoss,
    topPerformer: sortedByPerformance[0] || null,
    worstPerformer: sortedByPerformance[sortedByPerformance.length - 1] || null,
  };
}