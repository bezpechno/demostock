// components/Dashboard/PortfolioManager.tsx

import React, { useState, useEffect, useCallback } from 'react';
import PortfolioList from './PortfolioList';
import PortfolioDetails from './PortfolioDetails';
import AddInvestmentModal from './AddInvestmentModal';
import ConfirmPublicModal from './ConfirmPublicModal';
import CreatePortfolioForm from './CreatePortfolioForm';
import { getPortfolios, createPortfolio, updatePortfolio } from '../../lib/firebase';
import { Portfolio, Asset } from '../../types/types';
import { useAuth } from '../../lib/authContext'; 
import api from '../../lib/api';

const PortfolioManager: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(null);
  const [isInvestmentModalOpen, setIsInvestmentModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const { user } = useAuth();

  const fetchPrices = useCallback(async (symbols: string[]): Promise<Record<string, number>> => {
    try {
      const response = await api.get('/api/batch-prices', { params: { symbols: symbols.join(',') } });
      return response.data;
    } catch (error) {
      console.error('Error fetching prices:', error);
      return {};
    }
  }, []);

  const fetchPortfolios = useCallback(async () => {
    try {
      if (user && user.id) {
        const fetchedPortfolios = await getPortfolios(user.id);
        setPortfolios(fetchedPortfolios);
      }
    } catch (error) {
      console.error('Error fetching portfolios:', error);
    }
  }, [user]);

  const handleCreatePortfolio = async (name: string, assets: { symbol: string; amount: number }[]) => {
    const existingPortfolio = portfolios.find((portfolio) => portfolio.name === name);
    if (existingPortfolio) {
      alert('A portfolio with this name already exists. Please choose a different name.');
      return;
    }
  
    try {
      const newPortfolio: Omit<Portfolio, 'id'> = {
        name,
        assets: assets.map(asset => ({ 
          ...asset, 
          initialPrice: 0, 
          currentPrice: 0,
          dateAdded: new Date()
        })),
        isPublic: false,
        creator: user?.id || '',
        creatorName: user?.displayName || 'Anonymous',
        gain: 0,
        data: [],
        value: 0,
        initialValue: 0,
        type: 'default',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await createPortfolio(newPortfolio);
      fetchPortfolios();
    } catch (error) {
      console.error('Error creating portfolio:', error);
    }
  };

  const handleSelectPortfolio = (portfolio: Portfolio) => {
    setSelectedPortfolio(portfolio);
  };

  const handleAddInvestment = async (id: string, symbol: string, amount: number) => {
    try {
      const portfolio = portfolios.find(p => p.id === id);
      if (portfolio) {
        const updatedAssets = [...portfolio.assets, { 
          symbol, 
          amount, 
          initialPrice: 0, 
          currentPrice: 0,
          dateAdded: new Date()
        }];
        await updatePortfolio(id, { ...portfolio, assets: updatedAssets });
        fetchPortfolios();
      }
    } catch (error) {
      console.error('Error adding investment:', error);
    }
  };

  const handleStatusChange = async (id: string, isPublic: boolean) => {
    try {
      const portfolio = portfolios.find(p => p.id === id);
      if (portfolio) {
        await updatePortfolio(id, { ...portfolio, isPublic });
        fetchPortfolios();
      }
    } catch (error) {
      console.error('Error changing status:', error);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  return (
    <div>
      <CreatePortfolioForm createPortfolio={handleCreatePortfolio} />
      <PortfolioList
        portfolios={portfolios}
        viewPortfolio={handleSelectPortfolio}
        onStatusChange={handleStatusChange}
      />
      {selectedPortfolio && (
        <>
          <PortfolioDetails 
            portfolio={selectedPortfolio} 
            onAddInvestment={() => setIsInvestmentModalOpen(true)}
            fetchPrices={fetchPrices}
          />
          <AddInvestmentModal
            isOpen={isInvestmentModalOpen}
            onRequestClose={() => setIsInvestmentModalOpen(false)}
            onAddInvestment={handleAddInvestment}
            portfolioId={selectedPortfolio.id}
          />
          <ConfirmPublicModal
            isOpen={isConfirmModalOpen}
            onRequestClose={() => setIsConfirmModalOpen(false)}
            onConfirm={(isPublic) => handleStatusChange(selectedPortfolio.id, isPublic)}
          />
        </>
      )}
    </div>
  );
};

export default PortfolioManager;