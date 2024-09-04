// components/Dashboard/PortfolioList.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { Portfolio, Asset } from '../../types/types';

interface PortfolioListProps {
  portfolios: Portfolio[];
  viewPortfolio: (portfolio: Portfolio) => void;
  onStatusChange: (id: string, isPublic: boolean) => Promise<void>;
}

const PortfolioList: React.FC<PortfolioListProps> = ({ portfolios, viewPortfolio, onStatusChange }) => {
  const router = useRouter();

  const handleStatusToggle = (id: string, currentStatus: boolean) => {
    if (!currentStatus) {
      onStatusChange(id, true);
    } else {
      alert('You cannot make a public portfolio private again.');
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Your Portfolios</h2>
      <ul>
        {portfolios.map((portfolio) => (
          <li key={portfolio.id} className="mt-2">
            <div onClick={() => viewPortfolio(portfolio)} className="cursor-pointer bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-bold">{portfolio.name}</h2>
              <p>Value: ${portfolio.value.toFixed(2)}</p>
            </div>
            <label className="block text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                checked={portfolio.isPublic}
                onChange={() => handleStatusToggle(portfolio.id, portfolio.isPublic)}
              />
              Public
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
