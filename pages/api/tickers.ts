import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300 }); // Cache for 5 minutes
const tickers = ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'EURUSD=X'];

async function fetchPrice(symbol: string) {
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
  } catch (error) {
    console.error(`Error fetching data for ${symbol} from Yahoo Finance:`, error);
    return null;
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const cachedData = cache.get('tickers');

    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    const data = await Promise.all(
      tickers.map(async (ticker) => {
        const price = await fetchPrice(ticker);
        return { symbol: ticker, price };
      })
    );

    cache.set('tickers', data);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data from Yahoo Finance:', error);
    res.status(500).json({ error: 'Error fetching data from Yahoo Finance' });
  }
};