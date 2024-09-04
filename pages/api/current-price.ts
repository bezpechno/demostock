import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300 }); // Cache for 5 minutes
const lastKnownPrices = new Map<string, number>();

// Fallback data for when API is completely unavailable
const fallbackPrices = {
  'AAPL': 150,
  'MSFT': 300,
  'BTC-USD': 30000,
  // Add more fallback prices as needed
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchWithRetry(symbol: string, retries = 3, baseDelay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?region=US&lang=en-US&includePrePost=false&interval=2m&useYfid=true&range=1d&corsDomain=finance.yahoo.com&.tsrc=finance`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      
      const data = response.data;
      if (data.chart && data.chart.result && data.chart.result[0] && data.chart.result[0].meta && data.chart.result[0].meta.regularMarketPrice) {
        return data.chart.result[0].meta.regularMarketPrice;
      }
      throw new Error('Invalid response from Yahoo Finance API');
    } catch (error: any) {
      if (i === retries - 1) throw error;
      const delayTime = baseDelay * Math.pow(2, i);
      console.log(`Retry ${i + 1} after ${delayTime}ms`);
      await delay(delayTime);
    }
  }
  throw new Error('Max retries reached');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { symbol } = req.query;

  if (typeof symbol !== 'string') {
    return res.status(400).json({ error: 'Invalid symbol' });
  }

  try {
    // Check cache first
    const cachedPrice = cache.get<number>(symbol);
    if (cachedPrice !== undefined) {
      return res.status(200).json({ price: cachedPrice });
    }

    // If not in cache, fetch from Yahoo Finance API
    const price = await fetchWithRetry(symbol);

    // Cache the result
    cache.set(symbol, price);
    lastKnownPrices.set(symbol, price);

    return res.status(200).json({ price });
  } catch (error) {
    console.error('Error fetching price:', error);

    // If we have a last known price, return it
    const lastKnownPrice = lastKnownPrices.get(symbol);
    if (lastKnownPrice !== undefined) {
      return res.status(200).json({ price: lastKnownPrice, isLastKnown: true });
    }

    // If all else fails, use fallback price
    const fallbackPrice = fallbackPrices[symbol as keyof typeof fallbackPrices];
    if (fallbackPrice !== undefined) {
      return res.status(200).json({ price: fallbackPrice, isFallback: true });
    }

    res.status(500).json({ error: 'Error fetching price' });
  }
}