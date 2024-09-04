// components/Dashboard/PortfolioDetails.tsx
import React, { useEffect, useState } from 'react';
import { Portfolio, Asset } from '../../types/types';

interface PortfolioDetailsProps {
  portfolio: Portfolio;
  onAddInvestment: () => void;
  fetchPrices: (symbols: string[]) => Promise<Record<string, number>>;
}

const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({ portfolio, onAddInvestment, fetchPrices }) => {
  const [totalValue, setTotalValue] = useState(0);
  const [assets, setAssets] = useState<Asset[]>(portfolio.assets);

  useEffect(() => {
    const updateAssetPrices = async () => {
      const symbols = portfolio.assets.map(asset => asset.symbol);
      const prices = await fetchPrices(symbols);
      
      const updatedAssets = portfolio.assets.map(asset => ({
        ...asset,
        currentPrice: prices[asset.symbol] || asset.currentPrice
      }));

      const newTotalValue = updatedAssets.reduce((total, asset) => total + asset.amount * asset.currentPrice, 0);

      setAssets(updatedAssets);
      setTotalValue(newTotalValue);
    };

    updateAssetPrices();
  }, [portfolio.assets, fetchPrices]);

  if (!portfolio) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{portfolio.name}</h2>
      <p>Total Value: ${totalValue.toFixed(2)}</p>
      <h3>Assets:</h3>
      <ul>
        {assets.map((asset, index) => (
          <li key={index}>
            {asset.amount} {asset.symbol} (${asset.currentPrice.toFixed(2)})
          </li>
        ))}
      </ul>
      <button onClick={onAddInvestment}>Add Investment</button>
    </div>
  );
};

export default PortfolioDetails;