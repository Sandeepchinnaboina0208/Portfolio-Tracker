package com.stockportfolio;

import com.stockportfolio.service.PortfolioInitializationService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@RequiredArgsConstructor
public class StockPortfolioApplication {
    private final PortfolioInitializationService portfolioInitializationService;

    public static void main(String[] args) {
        SpringApplication.run(StockPortfolioApplication.class, args);
    }

    @Bean
    CommandLineRunner initializePortfolio() {
        return args -> portfolioInitializationService.initializeRandomPortfolio();
    }
}