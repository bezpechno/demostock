// components/Dashboard/TickerTape.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Ticker {
  symbol: string;
  price: number | null;
}

const TickerTape: React.FC = () => {
  const [tickers, setTickers] = useState<Ticker[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/tickers');
        setTickers(response.data);
      } catch (err) {
        console.error('Error fetching tickers:', err);
        setError('Failed to fetch ticker data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ticker-tape-container">
      <div className="ticker-tape">
        {tickers.map((ticker) => (
          <span key={ticker.symbol} className="ticker-item">
            {ticker.symbol}: ${ticker.price !== null ? ticker.price.toFixed(2) : 'N/A'}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
