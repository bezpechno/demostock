// pages/api/portfolios/create.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { portfoliosCache } from '@lib/cache';
import { v4 as uuidv4 } from 'uuid';

const mergeAssets = (assets) => {
  const mergedAssets = new Map();

  for (const asset of assets) {
    const { symbol, amount, price } = asset;
    if (mergedAssets.has(symbol)) {
      mergedAssets.get(symbol).amount += amount;
    } else {
      mergedAssets.set(symbol, { symbol, amount, price });
    }
  }

  return Array.from(mergedAssets.values());
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, type, creator, assets } = req.body;

    const mergedAssets = mergeAssets(assets);

    // Calculate the initial value based on the merged assets
    const initialValue = mergedAssets.reduce((total: number, asset: { amount: number; price: number }) => {
      return total + (asset.amount * asset.price);
    }, 0);

    const newPortfolio = {
      id: uuidv4(),
      name,
      type,
      value: initialValue,
      gain: 0,
      data: [],
      creator,
      isPublic: false,
      assets: mergedAssets
    };

    portfoliosCache.set(newPortfolio.id, newPortfolio);
    res.status(201).json(newPortfolio);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
