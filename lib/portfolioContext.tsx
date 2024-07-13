import React, { createContext, useContext, useState } from 'react';

interface Portfolio {
  id: string;
  name: string;
  value: number;
  gain: number;
  type: string;
  data: { date: string; equity: number }[];
}

interface PortfolioContextType {
  portfolios: Portfolio[];
  addPortfolio: (portfolio: Portfolio) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  const addPortfolio = (portfolio: Portfolio) => {
    setPortfolios((prevPortfolios) => [...prevPortfolios, portfolio]);
  };

  return (
    <PortfolioContext.Provider value={{ portfolios, addPortfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
