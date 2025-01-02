package com.stockportfolio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class FinnhubConfig {
    public static final String API_KEY = "ctk2mm1r01qntkqo1r2gctk2mm1r01qntkqo1r30";
    public static final String BASE_URL = "https://finnhub.io/api/v1";

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}