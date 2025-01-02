import React from 'react';
import { useStocks } from '../hooks/useStocks';
import { PortfolioHeader } from '../components/portfolio/PortfolioHeader';
import { PortfolioMetrics } from '../components/portfolio/PortfolioMetrics';
import { AddStockForm } from '../components/portfolio/AddStockForm';
import { StockList } from '../components/stocks/StockList';
import { ErrorMessage } from '../components/ErrorMessage';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function Portfolio() {
  const {
    stocks,
    metrics,
    loading,
    error,
    handleAddStock,
    handleUpdateStock,
    handleDeleteStock,
  } = useStocks();

  const topPerformer = {
    symbol: 'MSFT',
    name: 'Microsoft Corp.',
    performance: 53.76,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {error && <ErrorMessage message={error} />}
      {loading && <LoadingSpinner />}
      
      <PortfolioHeader />
      
      <PortfolioMetrics
        totalValue={metrics.totalValue}
        totalGainLoss={metrics.totalGainLoss}
        topPerformer={topPerformer}
      />
      
      <AddStockForm onSubmit={handleAddStock} />

      <StockList
        stocks={stocks}
        onEdit={(stock) => handleUpdateStock(stock, stock.id)}
        onDelete={handleDeleteStock}
      />
    </div>
  );
}