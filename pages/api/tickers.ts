// pages/api/tickers.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import yahooFinance from 'yahoo-finance2';

const tickers = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA'];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await Promise.all(
      tickers.map(async (ticker) => {
        const quote = await yahooFinance.quote(ticker);
        return {
          symbol: ticker,
          price: quote.regularMarketPrice || null,
        };
      })
    );

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data from Yahoo Finance:', error.message);
    res.status(500).json({ error: 'Error fetching data from Yahoo Finance' });
  }
};
