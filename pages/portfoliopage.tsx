// pages/portfoliopage.tsx
import React from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import PortfolioDetails from '../components/Dashboard/PortfolioDetails';
import InstrumentChart from '../components/Charts/InstrumentChart';
import { Portfolio } from '../types/types';
import api from '../lib/api';

const transformData = (data: { date: string; value: number }[]) => {
  return data.map(item => ({
    date: item.date,
    open: item.value,
    high: item.value,
    low: item.value,
    close: item.value,
    volume: 0
  }));
};

const fetchPrice = async (symbol: string): Promise<number> => {
  try {
    const response = await api.get(`/api/current-price?symbol=${symbol}`);
    return response.data.price;
  } catch (error) {
    console.error(`Error fetching price for ${symbol}:`, error);
    return 0;
  }
};

const PortfolioPage: React.FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          <PortfolioDetails 
            portfolio={portfolio} 
            onAddInvestment={() => {/* Implement this */}}
            fetchPrice={fetchPrice}
          />
          <div className="mt-8">
            <InstrumentChart data={transformData(portfolio.data)} />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default PortfolioPage;