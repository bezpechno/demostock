// components/Dashboard/SearchInstrument.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface SearchInstrumentProps {
  onSelect: (symbol: string, price: number) => void;
}


const SearchInstrument: React.FC<SearchInstrumentProps> = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ symbol: string; name: string; price: number }[]>([]);
  const [error, setError] = useState<string | null>(null);

  const search = async () => {
    setError(null);
    try {
      const response = await axios.get('/api/search', {
        params: { query },
      });
      setResults(response.data);
      console.log('Search results:', response.data);
    } catch (error) {
      setError('Error fetching search results');
      console.error('Error fetching search results:', error);
    }
  };

  const handleSelect = (symbol: string, price: number) => {
    console.log('Instrument selected:', symbol);
    setQuery('');
    setResults([]);
    onSelect(symbol, price);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for an instrument"
        className="px-4 py-2 border rounded"
      />
      <button onClick={search} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Search
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {results.length > 0 && (
        <ul className="mt-2 border rounded bg-white">
          {results.map((result) => (
            <li
              key={result.symbol}
              onClick={() => handleSelect(result.symbol, result.price)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            >
              {result.name} ({result.symbol})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInstrument;
