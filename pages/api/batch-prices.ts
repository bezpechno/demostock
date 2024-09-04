// pages/api/batch-prices.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import api from '../../lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { symbols } = req.query;

  if (typeof symbols !== 'string') {
    return res.status(400).json({ error: 'Invalid symbols' });
  }

  const symbolArray = symbols.split(',');

  try {
    const prices = await Promise.all(
      symbolArray.map(async (symbol) => {
        const response = await api.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`);
        const price = response.data.chart.result[0].meta.regularMarketPrice;
        return [symbol, price];
      })
    );

    const priceMap = Object.fromEntries(prices);
    res.status(200).json(priceMap);
  } catch (error) {
    console.error('Error fetching prices:', error);
    res.status(500).json({ error: 'Error fetching prices' });
  }
}