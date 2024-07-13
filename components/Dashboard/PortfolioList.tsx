import React from 'react';

interface PortfolioListProps {
  portfolios: { name: string }[];
  viewPortfolio: (portfolio: { name: string }) => void;
}

const PortfolioList: React.FC<PortfolioListProps> = ({ portfolios, viewPortfolio }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Your Portfolios</h2>
      <ul>
        {portfolios.map((portfolio, index) => (
          <li key={index} className="mt-2">
            <span>{portfolio.name}</span>
            <button
              onClick={() => viewPortfolio(portfolio)}
              className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              View Portfolio
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
