package com.stockportfolio.scheduler;

import com.stockportfolio.model.Stock;
import com.stockportfolio.repository.StockRepository;
import com.stockportfolio.service.StockPriceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@EnableScheduling
@RequiredArgsConstructor
public class StockPriceUpdateScheduler {
    private final StockRepository stockRepository;
    private final StockPriceService stockPriceService;
    
    @Scheduled(fixedRate = 60000) // Update every minute
    public void updateStockPrices() {
        log.info("Starting scheduled stock price update");
        
        stockRepository.findAll().forEach(stock -> {
            try {
                updateStockPrice(stock);
            } catch (Exception e) {
                log.error("Failed to update price for {}: {}", stock.getSymbol(), e.getMessage());
            }
        });
    }
    
    private void updateStockPrice(Stock stock) {
        try {
            stock.setCurrentPrice(stockPriceService.getCurrentPrice(stock.getSymbol()));
            stockRepository.save(stock);
            log.debug("Updated price for {}: {}", stock.getSymbol(), stock.getCurrentPrice());
        } catch (Exception e) {
            log.error("Error updating price for {}: {}", stock.getSymbol(), e.getMessage());
            throw e;
        }
    }
}