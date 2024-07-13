// pages/api/portfolio.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { portfoliosCache } from '@lib/cache'; // Исправьте путь импорта

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ error: 'Portfolio ID is required' });
  }

  const portfolio = portfoliosCache.get(id as string);

  if (!portfolio) {
    return res.status(404).json({ error: 'Portfolio not found' });
  }

  res.status(200).json(portfolio);
};
