package com.stockportfolio.service;

import com.stockportfolio.config.FinnhubConfig;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class StockPriceService {
    private final RestTemplate restTemplate;

    public BigDecimal getCurrentPrice(String symbol) {
        try {
            String url = String.format("%s/quote?symbol=%s&token=%s",
                    FinnhubConfig.BASE_URL, symbol, FinnhubConfig.API_KEY);
            
            Map<String, Object> response = restTemplate.getForObject(url, Map.class);
            
            if (response != null && response.get("c") != null) {
                double currentPrice = ((Number) response.get("c")).doubleValue();
                return BigDecimal.valueOf(currentPrice);
            }
            
            throw new RuntimeException("Unable to fetch price for " + symbol);
        } catch (Exception e) {
            log.error("Error fetching price for {}: {}", symbol, e.getMessage());
            throw new RuntimeException("Failed to fetch stock price", e);
        }
    }
}