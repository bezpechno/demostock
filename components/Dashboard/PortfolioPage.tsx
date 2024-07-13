// components/Dashboard/PortfolioPage.tsx
import React from 'react';
import PortfolioDetails from './PortfolioDetails';
import InstrumentChart from '../Charts/InstrumentChart';

interface Portfolio {
  id: string;
  name: string;
  value: number;
  gain: number;
  type: string;
  data: { date: string; equity: number }[];
}

interface PortfolioPageProps {
  portfolio: Portfolio;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ portfolio }) => {
  return (
    <div>
      <PortfolioDetails portfolio={portfolio} />
      <InstrumentChart data={portfolio.data} />
    </div>
  );
};

export default PortfolioPage;
