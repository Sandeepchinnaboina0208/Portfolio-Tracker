package com.stockportfolio.service;

import com.stockportfolio.model.Stock;
import com.stockportfolio.repository.StockRepository;
import com.stockportfolio.exception.StockNotFoundException;
import com.stockportfolio.exception.DuplicateStockException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StockService {
    private final StockRepository stockRepository;

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public Stock getStockById(Long id) {
        return stockRepository.findById(id)
                .orElseThrow(() -> new StockNotFoundException("Stock not found with id: " + id));
    }

    @Transactional
    public Stock addStock(Stock stock) {
        if (stockRepository.existsBySymbol(stock.getSymbol())) {
            throw new DuplicateStockException("Stock with symbol " + stock.getSymbol() + " already exists");
        }
        return stockRepository.save(stock);
    }

    @Transactional
    public Stock updateStock(Long id, Stock stockDetails) {
        Stock stock = getStockById(id);
        stock.setSymbol(stockDetails.getSymbol());
        stock.setName(stockDetails.getName());
        stock.setQuantity(stockDetails.getQuantity());
        stock.setBuyPrice(stockDetails.getBuyPrice());
        stock.setCurrentPrice(stockDetails.getCurrentPrice());
        return stockRepository.save(stock);
    }

    @Transactional
    public void deleteStock(Long id) {
        if (!stockRepository.existsById(id)) {
            throw new StockNotFoundException("Stock not found with id: " + id);
        }
        stockRepository.deleteById(id);
    }
}