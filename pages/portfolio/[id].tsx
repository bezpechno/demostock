import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import PortfolioDetails from '../../components/Dashboard/PortfolioDetails';
import InstrumentChart from '../../components/Charts/InstrumentChart';
import ProtectedRoute from '../../components/ProtectedRoute';
import { getPortfolio, updatePortfolio } from '../../lib/firebase';
import { Portfolio, Asset } from '../../types/types';
import AddInvestmentModal from '../../components/Dashboard/AddInvestmentModal';
import ConfirmPublicModal from '../../components/Dashboard/ConfirmPublicModal';
import api from '../../lib/api';

const PortfolioPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [chartData, setChartData] = useState<{ date: string; open: number; high: number; low: number; close: number; volume: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isInvestmentModalOpen, setIsInvestmentModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const fetchPrices = useCallback(async (symbols: string[]): Promise<Record<string, number>> => {
    try {
      const response = await api.get('/api/batch-prices', { params: { symbols: symbols.join(',') } });
      return response.data;
    } catch (error) {
      console.error('Error fetching prices:', error);
      // Возвращаем объект с нулевыми ценами в случае ошибки
      return symbols.reduce((acc, symbol) => ({ ...acc, [symbol]: 0 }), {});
    }
  }, []);
  const calculatePortfolioValue = useCallback((assets: Asset[], prices: Record<string, number>): number => {
    return assets.reduce((total, asset) => {
      const price = prices[asset.symbol] || asset.currentPrice || 0;
      return total + asset.amount * price;
    }, 0);
  }, []);
  const generateChartData = useCallback(async (portfolio: Portfolio) => {
    if (portfolio.assets.length === 0) {
      setChartData([]);
      return;
    }
  
    const earliestDate = new Date(Math.min(...portfolio.assets.map(asset => asset.dateAdded.getTime())));
    const today = new Date();
    const dateRange = [];
    for (let d = new Date(earliestDate); d <= today; d.setDate(d.getDate() + 1)) {
      dateRange.push(new Date(d));
    }
  
    const symbols = Array.from(new Set(portfolio.assets.map(asset => asset.symbol)));
    const currentPrices = await fetchPrices(symbols);
  
    const chartData = dateRange.map(date => {
      const assetsOnDate = portfolio.assets.filter(asset => new Date(asset.dateAdded) <= date);
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
          console.log('Fetched Portfolio:', fetchedPortfolio);
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

  const transformChartData = (data: { date: string; value: number }[]) => {
    return data.map(item => ({
      date: item.date,
      open: item.value,
      high: item.value,
      low: item.value,
      close: item.value,
      volume: 0
    }));
  };

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
            onAddInvestment={() => setIsInvestmentModalOpen(true)}
            fetchPrices={fetchPrices}
          />
          <div className="mt-8">
            <InstrumentChart data={chartData} />
          </div>
          <AddInvestmentModal
            isOpen={isInvestmentModalOpen}
            onRequestClose={() => setIsInvestmentModalOpen(false)}
            onAddInvestment={async (symbol: string, amount: number) => {
              if (portfolio) {
                try {
                  const updatedAssets = [...portfolio.assets, { 
                    symbol, 
                    amount, 
                    initialPrice: 0, 
                    currentPrice: 0,
                    dateAdded: new Date()
                  }];
                  await updatePortfolio(portfolio.id, { ...portfolio, assets: updatedAssets });
                  // Обновите состояние portfolio после успешного обновления
                  setPortfolio(prevPortfolio => {
                    if (prevPortfolio) {
                      return { ...prevPortfolio, assets: updatedAssets };
                    }
                    return prevPortfolio;
                  });
                } catch (error) {
                  console.error('Error adding investment:', error);
                  // Здесь можно добавить обработку ошибки, например, показать уведомление пользователю
                }
              }
            }}
            portfolioId={portfolio.id}
          />
          <ConfirmPublicModal
            isOpen={isConfirmModalOpen}
            onRequestClose={() => setIsConfirmModalOpen(false)}
            onConfirm={async (isPublic: boolean) => {
              // Implement change public status logic here
            }}
          />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default PortfolioPage;
