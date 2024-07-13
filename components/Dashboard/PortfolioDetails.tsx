// components/Dashboard/PortfolioDetails.tsx
import React from 'react';

interface Portfolio {
  id: string;
  name: string;
  value: number;
  gain: number;
  type: string;
  data: { date: string; equity: number }[];
}

interface PortfolioDetailsProps {
  portfolio: Portfolio;
}

const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({ portfolio }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">{portfolio.name} Details</h2>
      <p>Value: ${portfolio.value.toFixed(2)}</p>
      <p>Gain: ${portfolio.gain.toFixed(2)}</p>
      <p>Type: {portfolio.type}</p>
      <div>
        <h3 className="text-lg font-bold mt-4">Equity Data</h3>
        {/* Вы можете добавить график или другие данные по вашему желанию */}
      </div>
    </div>
  );
};

export default PortfolioDetails;
