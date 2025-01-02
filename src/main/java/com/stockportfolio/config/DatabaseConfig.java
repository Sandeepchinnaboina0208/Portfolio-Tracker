package com.stockportfolio.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import javax.sql.DataSource;
import org.springframework.jdbc.core.JdbcTemplate;

@Configuration
public class DatabaseConfig {
    
    @Bean
    CommandLineRunner initDatabase(DataSource dataSource) {
        return args -> {
            JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
            
            // Test database connection
            try {
                String result = jdbcTemplate.queryForObject("SELECT 1", String.class);
                System.out.println("Database connection test successful: " + result);
            } catch (Exception e) {
                System.err.println("Database connection test failed!");
                e.printStackTrace();
            }
        };
    }
}