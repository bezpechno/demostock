import React from 'react';

interface PortfolioDataWidgetProps {
  totalValue: number;
  totalGain: number;
}

const PortfolioDataWidget: React.FC<PortfolioDataWidgetProps> = ({ totalValue, totalGain }) => {
  return (
    <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Portfolio Data</h3>
      <p className="mt-2">Total Value: ${totalValue.toFixed(2)}</p>
      <p className="mt-2">Total Gain: ${totalGain.toFixed(2)}</p>
    </div>
  );
};

export default PortfolioDataWidget;
