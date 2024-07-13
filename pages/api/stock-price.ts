import type { NextApiRequest, NextApiResponse } from 'next';
import yahooFinance from 'yahoo-finance2';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({ error: 'Symbol is required' });
  }

  try {
    const result = await yahooFinance.historical(symbol as string, {
      period1: '2022-01-01',
      period2: new Date().toISOString().split('T')[0],
      interval: '1d',
    });

    const data = result.map((item) => ({
      date: item.date.toISOString().split('T')[0],
      open: item.open,
      high: item.high,
      low: item.low,
      close: item.close,
      volume: item.volume,
    }));

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data from Yahoo Finance:', error.message);
    res.status(500).json({ error: 'Error fetching data from Yahoo Finance' });
  }
};
