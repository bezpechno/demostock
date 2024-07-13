// components/Dashboard/CreatePortfolioForm.tsx
import React, { useState } from 'react';

interface CreatePortfolioFormProps {
  createPortfolio: (name: string, type: string) => void;
}

const CreatePortfolioForm: React.FC<CreatePortfolioFormProps> = ({ createPortfolio }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('private');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      createPortfolio(name, type);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Portfolio Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Create Portfolio
      </button>
    </form>
  );
};

export default CreatePortfolioForm;
