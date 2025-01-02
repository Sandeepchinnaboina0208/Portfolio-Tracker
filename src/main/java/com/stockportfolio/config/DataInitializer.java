package com.stockportfolio.config;

import com.stockportfolio.model.Stock;
import com.stockportfolio.repository.StockRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.Arrays;

@Slf4j
@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final StockRepository stockRepository;

    @Bean
    CommandLineRunner initData() {
        return args -> {
            log.info("Starting data initialization...");
            
            try {
                // Delete existing data
                stockRepository.deleteAll();
                log.info("Cleared existing data");

                // Create sample stocks
                Stock apple = new Stock();
                apple.setSymbol("AAPL");
                apple.setName("Apple Inc.");
                apple.setQuantity(100);
                apple.setBuyPrice(new BigDecimal("150.00"));
                apple.setCurrentPrice(new BigDecimal("170.00"));

                Stock google = new Stock();
                google.setSymbol("GOOGL");
                google.setName("Alphabet Inc.");
                google.setQuantity(50);
                google.setBuyPrice(new BigDecimal("2800.00"));
                google.setCurrentPrice(new BigDecimal("2900.00"));

                Stock microsoft = new Stock();
                microsoft.setSymbol("MSFT");
                microsoft.setName("Microsoft Corporation");
                microsoft.setQuantity(75);
                microsoft.setBuyPrice(new BigDecimal("280.00"));
                microsoft.setCurrentPrice(new BigDecimal("300.00"));

                Stock amazon = new Stock();
                amazon.setSymbol("AMZN");
                amazon.setName("Amazon.com Inc.");
                amazon.setQuantity(30);
                amazon.setBuyPrice(new BigDecimal("3200.00"));
                amazon.setCurrentPrice(new BigDecimal("3300.00"));

                Stock tesla = new Stock();
                tesla.setSymbol("TSLA");
                tesla.setName("Tesla Inc.");
                tesla.setQuantity(40);
                tesla.setBuyPrice(new BigDecimal("900.00"));
                tesla.setCurrentPrice(new BigDecimal("950.00"));

                // Save all stocks to database
                var savedStocks = stockRepository.saveAll(Arrays.asList(apple, google, microsoft, amazon, tesla));
                log.info("Saved {} stocks to database", savedStocks.size());
                
                // Verify data
                var count = stockRepository.count();
                log.info("Total stocks in database: {}", count);
                
            } catch (Exception e) {
                log.error("Error initializing data: {}", e.getMessage(), e);
                throw e;
            }
        };
    }
}