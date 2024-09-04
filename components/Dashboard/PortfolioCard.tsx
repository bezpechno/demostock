import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import ConfirmPublicModal from './ConfirmPublicModal';
import axios from 'axios';
import { Asset } from '../../types/types';

interface PortfolioCardProps {
  id: string;
  name: string;
  initialValue: number;
  value: number;
  isPublic: boolean;
  assets: Asset[];
  creator: string;
  onStatusChange: (id: string, isPublic: boolean) => void;
  onUpdateValue: (id: string, newValue: number) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  name,
  initialValue,
  value,
  assets = [],
  creator,
  isPublic,
  onStatusChange,
  onUpdateValue
}) => {
  const router = useRouter();
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const lastUpdateTime = useRef(0);
  const updateInterval = 60000; // 1 minute

  const fetchAssetPrices = async () => {
    const now = Date.now();
    if (now - lastUpdateTime.current < updateInterval) {
      return;
    }

    setIsLoading(true);
    setError(null);
    let newValue = 0;
    const uniqueSymbols = Array.from(new Set(assets.map(asset => asset.symbol)));
    
    try {
      const prices = await Promise.all(
        uniqueSymbols.map(async symbol => {
          try {
            const response = await axios.get(`/api/current-price?symbol=${symbol}`);
            return { 
              symbol, 
              price: response.data.price, 
              isLastKnown: response.data.isLastKnown,
              isFallback: response.data.isFallback
            };
          } catch (error) {
            console.error(`Error fetching price for ${symbol}:`, error);
            return { symbol, price: 0, isLastKnown: false, isFallback: false };
          }
        })
      );

      const priceMap = new Map(prices.map(item => [item.symbol, item]));

      let hasLastKnownPrice = false;
      let hasFallbackPrice = false;
      for (const asset of assets) {
        const priceData = priceMap.get(asset.symbol) || { price: 0, isLastKnown: false, isFallback: false };
        newValue += asset.amount * priceData.price;
        if (priceData.isLastKnown) hasLastKnownPrice = true;
        if (priceData.isFallback) hasFallbackPrice = true;
      }

      setCurrentValue(newValue);
      onUpdateValue(id, newValue);
      
      if (hasFallbackPrice) {
        setError('Using estimated prices due to API unavailability');
      } else if (hasLastKnownPrice) {
        setError('Some prices may not be up to date');
      }
    } catch (error) {
      console.error('Error updating asset prices:', error);
      setError('Failed to update asset prices');
    } finally {
      setIsLoading(false);
      lastUpdateTime.current = now;
    }
  };

  useEffect(() => {
    fetchAssetPrices();
    const interval = setInterval(fetchAssetPrices, updateInterval);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    router.push(`/portfolio/${id}`);
  };

  const handleStatusChangeClick = () => {
    if (!isPublic) {
      setIsConfirmModalOpen(true);
    } else {
      onStatusChange(id, !isPublic);
    }
  };

  const confirmStatusChange = () => {
    onStatusChange(id, !isPublic);
    setIsConfirmModalOpen(false);
  };

  const gain = currentValue - initialValue;
  const gainPercentage = initialValue !== 0 ? (gain / initialValue) * 100 : 0;

  const displayAssets = assets.slice(0, 5); // Отображаем только первые 5 ассетов

  return (
    <>
      <div onClick={handleClick} className="cursor-pointer bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>Creator: {creator}</p>
        <p>Initial Value: ${initialValue.toFixed(2)}</p>
        {isLoading ? (
          <p>Loading current value...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <p>Current Value: ${currentValue.toFixed(2)}</p>
            <p>Gain: ${gain.toFixed(2)} ({gainPercentage.toFixed(2)}%)</p>
          </>
        )}
        <p>Assets: {displayAssets.map(asset => `${asset.amount} ${asset.symbol}`).join(', ')}</p>
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={handleStatusChangeClick}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">Public</span>
        </label>
      </div>
      <ConfirmPublicModal
        isOpen={isConfirmModalOpen}
        onRequestClose={() => setIsConfirmModalOpen(false)}
        onConfirm={confirmStatusChange}
      />
    </>
  );
};

export default PortfolioCard;
