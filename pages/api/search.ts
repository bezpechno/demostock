// pages/api/search.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import yahooFinance from 'yahoo-finance2';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  try {
    const results = await yahooFinance.search(query as string);
    const data = results.quotes.map((quote) => ({
      symbol: quote.symbol,
      name: quote.shortname || quote.longname || quote.symbol,
    }));

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching search results from Yahoo Finance:', error.message);
    res.status(500).json({ error: 'Error fetching search results from Yahoo Finance' });
  }
};
