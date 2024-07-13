// pages/app.tsx

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProtectedRoute from '../components/ProtectedRoute';
import TickerTape from '../components/Dashboard/TickerTape';
import PortfolioCard from '../components/Dashboard/PortfolioCard';
import PortfolioDataWidget from '../components/Dashboard/PortfolioDataWidget';
import InstrumentChart from '../components/Charts/InstrumentChart';
import CreatePortfolioForm from '../components/Dashboard/CreatePortfolioForm';
import SearchInstrument from '@components/Dashboard/SearchInstrument';
import { usePortfolio } from '@lib/portfolioContext';
import axios from 'axios';

const DashboardContent: React.FC = () => {
  const [viewingPortfolio, setViewingPortfolio] = useState<any>(null);
  const { portfolios, addPortfolio } = usePortfolio();
  const [chartData, setChartData] = useState<{ date: string; price: number }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPortfolio = (name: string, type: string) => {
    const id = uuidv4();
    const newPortfolio = { id, name, value: 0, gain: 0, type, data: [] };
    addPortfolio(newPortfolio);
  };

  const fetchStockData = async (symbol: string) => {
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
  };

  const totalValue = portfolios.reduce((acc, portfolio) => acc + portfolio.value, 0);
  const totalGain = portfolios.reduce((acc, portfolio) => acc + portfolio.gain, 0);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <TickerTape />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="mt-4">
            <CreatePortfolioForm createPortfolio={createPortfolio} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {portfolios.map((portfolio) => (
              <PortfolioCard key={portfolio.id} id={portfolio.id} name={portfolio.name} value={portfolio.value} data={portfolio.data} />
            ))}
          </div>
          <PortfolioDataWidget totalValue={totalValue} totalGain={totalGain} />
          <div className="mt-8">
            <SearchInstrument onSelect={fetchStockData} />
            <InstrumentChart data={chartData} />
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

const Dashboard: React.FC = () => (
  <DashboardContent />
);

export default Dashboard;
