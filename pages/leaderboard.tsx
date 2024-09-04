// pages/leaderboard.tsx
import React, { useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import LeaderboardTable from '../components/Leaderboard/LeaderboardTable';

const Leaderboard: React.FC = () => {
  const [portfolios, setPortfolios] = useState([
    { name: 'Tech Stocks', value: 10000, gain: 500 },
    { name: 'Energy Stocks', value: 8000, gain: 300 },
    // Добавьте больше данных по необходимости
  ]);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">Leaderboard</h1>
          <LeaderboardTable portfolios={portfolios} />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Leaderboard;
