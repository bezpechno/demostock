import React, { useState, useCallback } from 'react';
import AddAssetsModal from './AddAssetsModal';
import { useAuth } from '../../lib/authContext';
import { Asset } from '../../types/types';
import { usePortfolio } from '../../lib/portfolioContext';

interface CreatePortfolioFormProps {
  createPortfolio: (name: string, assets: Asset[], creator: string) => Promise<void>;
}

const aggregateAssets = (assets: { symbol: string; amount: number; price: number }[]): Asset[] => {
  const aggregatedMap = new Map<string, Asset>();
  
  assets.forEach(asset => {
    const existingAsset = aggregatedMap.get(asset.symbol);
    if (existingAsset) {
      existingAsset.amount += asset.amount;
      existingAsset.initialPrice = (existingAsset.initialPrice * existingAsset.amount + asset.price * asset.amount) / (existingAsset.amount + asset.amount);
      existingAsset.currentPrice = asset.price;
    } else {
      aggregatedMap.set(asset.symbol, {
        symbol: asset.symbol,
        amount: asset.amount,
        initialPrice: asset.price,
        currentPrice: asset.price,
        dateAdded: new Date()
      });
    }
  });

  return Array.from(aggregatedMap.values());
};

const CreatePortfolioForm: React.FC<CreatePortfolioFormProps> = ({ createPortfolio }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, signIn } = useAuth();
  const { portfolios } = usePortfolio();

  const handleCreatePortfolio = useCallback(async (name: string, assets: { symbol: string; amount: number; price: number }[]) => {
    if (!user) {
      console.error('User is not authenticated');
      try {
        await signIn();
      } catch (error) {
        console.error('Failed to sign in:', error);
        return;
      }
    }
    
    if (user) {
      try {
        // Проверка на существование портфолио с таким именем
        if (portfolios.some(p => p.name === name)) {
          alert(`Portfolio with name "${name}" already exists`);
          return;
        }

        const aggregatedAssets = aggregateAssets(assets);
        await createPortfolio(name, aggregatedAssets, user.id);
        setIsModalOpen(false); // Закрываем модальное окно после успешного создания
      } catch (error) {
        console.error('Error creating portfolio:', error);
        alert('Failed to create portfolio. Please try again.');
      }
    } else {
      console.error('Failed to get creator information');
    }
  }, [user, signIn, createPortfolio, portfolios]);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Create Portfolio
      </button>
      <AddAssetsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreatePortfolio={handleCreatePortfolio}
      />
    </div>
  );
};

export default CreatePortfolioForm;