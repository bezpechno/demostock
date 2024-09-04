// components/Dashboard/PortfolioDataWidget.tsx
import React from 'react';

interface PortfolioDataWidgetProps {
  totalValue: number;
  totalInitialValue: number;
  totalGain: number;
}

const PortfolioDataWidget: React.FC<PortfolioDataWidgetProps> = ({ totalValue, totalInitialValue, totalGain }) => {
  return (
    <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold">Portfolio Data</h3>
      <p className="mt-2">Total Initial Value: ${totalInitialValue.toFixed(2)}</p>
      <p className="mt-2">Total Current Value: ${totalValue.toFixed(2)}</p>
      <p className="mt-2">Total Gain: ${totalGain.toFixed(2)} ({((totalGain / totalInitialValue) * 100).toFixed(2)}%)</p>
    </div>
  );
};

export default PortfolioDataWidget;
