// lib/priceCache.ts
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 60 }); // Кэш на 60 секунд

export const getCachedPrice = async (symbol: string, fetchPrice: () => Promise<number>): Promise<number> => {
  const cachedPrice = cache.get<number>(symbol);
  if (cachedPrice !== undefined) {
    return cachedPrice;
  }

  const price = await fetchPrice();
  cache.set(symbol, price);
  return price;
};