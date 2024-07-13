import React from 'react';

interface LeaderboardTableProps {
  portfolios: { name: string; value: number; gain: number }[];
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ portfolios }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Value</th>
          <th className="py-2 px-4 border-b">Gain</th>
        </tr>
      </thead>
      <tbody>
        {portfolios.map((portfolio, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b">{portfolio.name}</td>
            <td className="py-2 px-4 border-b">${portfolio.value.toFixed(2)}</td>
            <td className="py-2 px-4 border-b">${portfolio.gain.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderboardTable;
