import React from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import PortfolioDetails from '../components/Dashboard/PortfolioDetails';
import InstrumentChart from '../components/Charts/InstrumentChart';

interface Portfolio {
    id: string;
    name: string;
    value: number;
    gain: number;
    type: string;
    data: { date: string; equity: number }[];
}

const PortfolioPage: React.FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          <PortfolioDetails portfolio={portfolio} />
          <div className="mt-8">
            <InstrumentChart data={portfolio.data} />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default PortfolioPage;
