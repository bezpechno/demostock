// pages/api/[id]/add-investment.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { portfoliosCache } from '@lib/cache';

const aggregateAssets = (assets: { symbol: string; amount: number; price: number }[]) => {
  const aggregatedAssets: { symbol: string; amount: number; price: number }[] = [];
  assets.forEach(asset => {
    const existingAsset = aggregatedAssets.find(a => a.symbol === asset.symbol);
    if (existingAsset) {
      existingAsset.amount += asset.amount;
    } else {
      aggregatedAssets.push({ ...asset });
    }
  });
  return aggregatedAssets;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { id } = req.query;
    const { amount, symbol, price } = req.body;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({ error: 'Invalid or missing portfolio ID' });
    }

    const portfolio = portfoliosCache.get(id);
    if (portfolio) {
      const newAsset = { symbol, amount, price };
      const newAssets = [...portfolio.assets, newAsset];

      // Агрегирование активов
      portfolio.assets = aggregateAssets(newAssets);

      // Update the portfolio value
      portfolio.value = portfolio.assets.reduce((total, asset) => total + (asset.amount * asset.price), 0);
      portfolio.data.push({ date: new Date().toISOString(), value: portfolio.value });

      portfoliosCache.set(id, portfolio);
      res.status(200).json(portfolio);
    } else {
      res.status(404).json({ error: 'Portfolio not found' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
