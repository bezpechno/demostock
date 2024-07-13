import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PortfolioDetails from '@components/Dashboard/PortfolioDetails';
import InstrumentChart from '@components/Charts/InstrumentChart';
import ProtectedRoute from '@components/ProtectedRoute';
import axios from 'axios';

interface Portfolio {
  id: string;
  name: string;
  value: number;
  gain: number;
  type: string;
  data: { date: string; equity: number }[];
}

const PortfolioPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [chartData, setChartData] = useState<
    { date: string; open: number; high: number; low: number; close: number; volume: number }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/portfolio?id=${id}`)
        .then((response) => {
          setPortfolio(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching portfolio:', error);
          setLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (portfolio) {
      axios
        .get(`/api/stock-price`, { params: { symbol: portfolio.name } })
        .then((response) => {
          setChartData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching stock data:', error);
        });
    }
  }, [portfolio]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!portfolio) {
    return <div>Portfolio not found</div>;
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-4">
          <PortfolioDetails portfolio={portfolio} />
          <div className="mt-8">
            <InstrumentChart data={chartData} />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default PortfolioPage;
