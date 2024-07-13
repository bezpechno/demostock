// /pages/api/tickers.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import yahooFinance from 'yahoo-finance2';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300 }); // Cache for 5 minutes
const tickers = ['AAPL', 'EURUSD=X', 'MSFT', 'AMZN', 'TSLA'];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const cachedData = cache.get('tickers');

    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    const data = await Promise.all(
      tickers.map(async (ticker) => {
        try {
          const quote = await yahooFinance.quote(ticker);
          return {
            symbol: ticker,
            price: quote.regularMarketPrice || null,
          };
        } catch (err) {
          console.error(`Error fetching data for ${ticker} from Yahoo Finance:`, err.message);
          return { symbol: ticker, price: null };
        }
      })
    );

    cache.set('tickers', data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data from Yahoo Finance:', error.message);
    res.status(500).json({ error: 'Error fetching data from Yahoo Finance' });
  }
};
