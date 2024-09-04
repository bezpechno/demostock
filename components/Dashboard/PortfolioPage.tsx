// components/Dashboard/PortfolioPage.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import PortfolioDetails from '../../components/Dashboard/PortfolioDetails';
import InstrumentChart from '../../components/Charts/InstrumentChart';
import ProtectedRoute from '../../components/ProtectedRoute';
import { getPortfolio } from '../../lib/firebase';
import { Portfolio, Asset } from '../../types/types';
import api from '../../lib/api';
import { getCachedPrice } from '../../lib/priceCache';

const PortfolioPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [chartData, setChartData] = useState<{ date: string; open: number; high: number; low: number; close: number; volume: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrices = useCallback(async (symbols: string[]): Promise<Record<string, number>> => {
    try {
      const prices = await Promise.all(
        symbols.map(async (symbol) => {
          const price = await getCachedPrice(symbol, async () => {
            const response = await api.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`);
            return response.data.chart.result[0].meta.regularMarketPrice;
          });
          return [symbol, price];
        })
      );
      return Object.fromEntries(prices);
    } catch (error) {
      console.error('Error fetching prices:', error);
      return {};
    }
  }, []);

  const calculatePortfolioValue = useCallback((assets: Asset[], prices: Record<string, number>): number => {
    return assets.reduce((total, asset) => {
      const price = prices[asset.symbol] || asset.currentPrice;
      return total + asset.amount * price;
    }, 0);
  }, []);

  const generateChartData = useCallback(async (portfolio: Portfolio) => {
    const earliestDate = new Date(Math.min(...portfolio.assets.map(asset => asset.dateAdded.getTime())));
    const today = new Date();
    const dateRange = [];
    for (let d = new Date(earliestDate); d <= today; d.setDate(d.getDate() + 1)) {
      dateRange.push(new Date(d));
    }

    const symbols = Array.from(new Set(portfolio.assets.map(asset => asset.symbol)));
    const currentPrices = await fetchPrices(symbols);

    const chartData = dateRange.map(date => {
      const assetsOnDate = portfolio.assets.filter(asset => asset.dateAdded <= date);
      const value = calculatePortfolioValue(assetsOnDate, currentPrices);

      return {
        date: date.toISOString().split('T')[0],
        open: value,
        high: value,
        low: value,
        close: value,
        volume: 0
      };
    });

    setChartData(chartData);
  }, [calculatePortfolioValue, fetchPrices]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      if (id && typeof id === 'string') {
        try {
          const fetchedPortfolio = await getPortfolio(id);
          if (fetchedPortfolio) {
            setPortfolio(fetchedPortfolio);
            await generateChartData(fetchedPortfolio);
          } else {
            setError('Portfolio not found');
          }
        } catch (error) {
          console.error('Error fetching portfolio:', error);
          setError('Error fetching portfolio');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPortfolioData();
  }, [id, generateChartData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!portfolio) {
    return <div>Portfolio not found</div>;
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          <PortfolioDetails 
            portfolio={portfolio} 
            onAddInvestment={() => {/* Implement this */}}
            fetchPrices={fetchPrices}
          />
          <div className="mt-8">
            <InstrumentChart data={chartData} />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default PortfolioPage;