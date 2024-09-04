import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import TickerTape from '../components/Dashboard/TickerTape';
import PortfolioCard from '../components/Dashboard/PortfolioCard';
import PortfolioDataWidget from '../components/Dashboard/PortfolioDataWidget';
import InstrumentChart from '../components/Charts/InstrumentChart';
import SearchInstrument from '../components/Dashboard/SearchInstrument';
import CreatePortfolioForm from '../components/Dashboard/CreatePortfolioForm';
import axios from 'axios';
import { Portfolio, Asset } from '../types/types';
import { usePortfolio } from '../lib/portfolioContext';
import { createPortfolio as createPortfolioFirebase, updatePortfolio as updatePortfolioFirebase, getPortfolios } from '../lib/firebase';
import { useAuth } from '../lib/authContext';

const DashboardContent: React.FC = () => {
  const { portfolios, addPortfolio, updatePortfolio, setPortfolios } = usePortfolio();
  const [chartData, setChartData] = useState<{ date: string; open: number; high: number; low: number; close: number; volume: number }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchPortfolios = useCallback(async () => {
    if (user && portfolios.length === 0) {
      try {
        const fetchedPortfolios = await getPortfolios(user.id);
        setPortfolios(fetchedPortfolios);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
        setError('Error fetching portfolios');
      }
    }
  }, [user, portfolios.length, setPortfolios]);

  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  const createPortfolio = useCallback(async (name: string, assets: Asset[], creator: string) => {
    try {
      const initialValue = assets.reduce((sum, asset) => sum + asset.amount * asset.initialPrice, 0);
      const newPortfolio: Omit<Portfolio, 'id'> = {
        name,
        assets,
        creator,
        creatorName: user?.displayName || 'Anonymous',
        isPublic: false,
        initialValue,
        value: initialValue,
        gain: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        type: 'default',
        data: []
      };
      
      const portfolioId = await createPortfolioFirebase(newPortfolio);
      const createdPortfolio = { ...newPortfolio, id: portfolioId };
      
      addPortfolio(createdPortfolio);
    } catch (error) {
      console.error('Error creating portfolio:', error);
      throw error;
    }
  }, [user, addPortfolio]);

  const calculatePortfolioValue = useCallback((assets: Asset[]): number => {
    return assets.reduce((total, asset) => total + (asset.amount * asset.currentPrice), 0);
  }, []);

  const removeDuplicateAssets = useCallback((assets: Asset[]): Asset[] => {
    const uniqueAssets = new Map<string, Asset>();
    assets.forEach(asset => {
      if (!uniqueAssets.has(asset.symbol) || asset.dateAdded > uniqueAssets.get(asset.symbol)!.dateAdded) {
        uniqueAssets.set(asset.symbol, asset);
      }
    });
    return Array.from(uniqueAssets.values());
  }, []);

  const updatePortfolioValues = useCallback(async () => {
    const updatedPortfolios = portfolios.map((portfolio) => {
      const uniqueAssets = removeDuplicateAssets(portfolio.assets);
      const newValue = calculatePortfolioValue(uniqueAssets);
      if (portfolio.value !== newValue || portfolio.assets.length !== uniqueAssets.length) {
        return {
          ...portfolio,
          assets: uniqueAssets,
          value: newValue,
          gain: newValue - portfolio.initialValue
        };
      }
      return portfolio;
    });

    if (JSON.stringify(updatedPortfolios) !== JSON.stringify(portfolios)) {
      setPortfolios(updatedPortfolios);
      const changedPortfolios = updatedPortfolios.filter((updatedPortfolio, index) => 
        JSON.stringify(updatedPortfolio) !== JSON.stringify(portfolios[index])
      );
      await Promise.all(changedPortfolios.map(portfolio => 
        updatePortfolioFirebase(portfolio.id, portfolio)
      ));
    }
  }, [portfolios, calculatePortfolioValue, removeDuplicateAssets, setPortfolios]);

  useEffect(() => {
    updatePortfolioValues();
  }, [updatePortfolioValues]);

  const totals = useMemo(() => {
    let totalValue = 0;
    let totalInitialValue = 0;

    portfolios.forEach((portfolio) => {
      totalValue += portfolio.value;
      totalInitialValue += portfolio.initialValue;
    });

    const totalGain = totalValue - totalInitialValue;
    return { totalValue, totalInitialValue, totalGain };
  }, [portfolios]);

  const fetchStockData = useCallback(async (symbol: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/stock-price', {
        params: { symbol },
      });
      setChartData(response.data);
    } catch (error) {
      setError('Error fetching stock data');
      console.error('Error fetching stock data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleStatusChange = useCallback(async (id: string, isPublic: boolean) => {
    const updatedPortfolio = portfolios.find(p => p.id === id);
    if (updatedPortfolio) {
      const newPortfolio = { ...updatedPortfolio, isPublic };
      updatePortfolio(newPortfolio);
      await updatePortfolioFirebase(id, { isPublic });
    }
  }, [portfolios, updatePortfolio]);

  const handleUpdateValue = useCallback(async (id: string, newValue: number) => {
    const updatedPortfolio = portfolios.find(p => p.id === id);
    if (updatedPortfolio) {
      const newPortfolio = { 
        ...updatedPortfolio, 
        value: newValue, 
        gain: newValue - updatedPortfolio.initialValue 
      };
      updatePortfolio(newPortfolio);
      await updatePortfolioFirebase(id, newPortfolio);
    }
  }, [portfolios, updatePortfolio]);

  return (
    <div className="min-h-screen bg-gray-100">
      <TickerTape />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <PortfolioDataWidget 
          totalValue={totals.totalValue} 
          totalInitialValue={totals.totalInitialValue}
          totalGain={totals.totalGain} 
        />
        <CreatePortfolioForm createPortfolio={createPortfolio} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {portfolios.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              {...portfolio}
              onStatusChange={handleStatusChange}
              onUpdateValue={handleUpdateValue}
            />
          ))}
        </div>
        <div className="mt-8">
          <SearchInstrument onSelect={fetchStockData} />
          <InstrumentChart data={chartData} />
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};
const Dashboard: React.FC = () => (
  <ProtectedRoute>
    <DashboardContent />
  </ProtectedRoute>
);

export default Dashboard;