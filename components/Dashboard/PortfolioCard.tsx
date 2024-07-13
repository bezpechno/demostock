import React from 'react';
import { useRouter } from 'next/router';

interface PortfolioCardProps {
  id: string;
  name: string;
  value: number;
  data: { date: string; equity: number }[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ id, name, value, data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/portfolio/${id}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Value: ${value.toFixed(2)}</p>
      {/* Добавьте график для отображения данных о портфеле */}
    </div>
  );
};

export default PortfolioCard;
