// pages/api/portfolio.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { portfoliosCache } from '@lib/cache';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const portfolios = Array.from(portfoliosCache.values());
    res.status(200).json(portfolios);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
