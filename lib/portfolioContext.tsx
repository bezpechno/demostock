import React, { createContext, useContext, useState } from 'react';
import { Portfolio } from '../types/types';

export interface PortfolioContextType {
  portfolios: Portfolio[];
  addPortfolio: (portfolio: Portfolio) => void;
  updatePortfolio: (updatedPortfolio: Portfolio) => void;
  setPortfolios: React.Dispatch<React.SetStateAction<Portfolio[]>>;
}

export const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);

  const addPortfolio = (portfolio: Portfolio) => {
    setPortfolios((prevPortfolios) => [...prevPortfolios, portfolio]);
  };

  const updatePortfolio = (updatedPortfolio: Portfolio) => {
    setPortfolios((prevPortfolios) =>
      prevPortfolios.map((portfolio) =>
        portfolio.id === updatedPortfolio.id ? updatedPortfolio : portfolio
      )
    );
  };

  return (
    <PortfolioContext.Provider value={{ portfolios, addPortfolio, updatePortfolio, setPortfolios }}>
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