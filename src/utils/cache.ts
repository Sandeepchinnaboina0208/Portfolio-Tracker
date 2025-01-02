import { API_CONFIG } from './api/config';

class PriceCache {
  private cache: Map<string, { price: number; timestamp: number }>;

  constructor() {
    this.cache = new Map();
  }

  set(symbol: string, price: number): void {
    this.cache.set(symbol, {
      price,
      timestamp: Date.now(),
    });
  }

  get(symbol: string): number | null {
    const entry = this.cache.get(symbol);
    if (!entry) return null;

    const isExpired = Date.now() - entry.timestamp > API_CONFIG.CACHE_DURATION;
    return isExpired ? null : entry.price;
  }

  clear(): void {
    this.cache.clear();
  }
}

export const priceCache = new PriceCache();