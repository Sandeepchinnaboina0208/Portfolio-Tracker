package com.stockportfolio.service;

import com.stockportfolio.model.Stock;
import com.stockportfolio.repository.StockRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Slf4j
@Service
@RequiredArgsConstructor
public class PortfolioInitializationService {
    private final StockRepository stockRepository;
    private final StockPriceService stockPriceService;
    
    private static final List<String> AVAILABLE_STOCKS = Arrays.asList(
        "AAPL", "MSFT", "GOOGL", "AMZN", "META", 
        "TSLA", "NVDA", "JPM", "V", "WMT"
    );

    public void initializeRandomPortfolio() {
        // Clear existing portfolio
        stockRepository.deleteAll();
        
        // Select 5 random stocks
        Random random = new Random();
        List<String> selectedStocks = AVAILABLE_STOCKS.stream()
            .sorted((a, b) -> random.nextInt(3) - 1)
            .limit(5)
            .toList();
        
        // Create and save stocks
        selectedStocks.forEach(symbol -> {
            try {
                BigDecimal currentPrice = stockPriceService.getCurrentPrice(symbol);
                
                Stock stock = new Stock();
                stock.setSymbol(symbol);
                stock.setName(getCompanyName(symbol));
                stock.setQuantity(1); // As per requirement
                stock.setBuyPrice(currentPrice);
                stock.setCurrentPrice(currentPrice);
                
                stockRepository.save(stock);
                log.info("Added stock to portfolio: {}", symbol);
            } catch (Exception e) {
                log.error("Failed to add stock {}: {}", symbol, e.getMessage());
            }
        });
    }
    
    private String getCompanyName(String symbol) {
        return switch (symbol) {
            case "AAPL" -> "Apple Inc.";
            case "MSFT" -> "Microsoft Corporation";
            case "GOOGL" -> "Alphabet Inc.";
            case "AMZN" -> "Amazon.com Inc.";
            case "META" -> "Meta Platforms Inc.";
            case "TSLA" -> "Tesla Inc.";
            case "NVDA" -> "NVIDIA Corporation";
            case "JPM" -> "JPMorgan Chase & Co.";
            case "V" -> "Visa Inc.";
            case "WMT" -> "Walmart Inc.";
            default -> symbol;
        };
    }
}