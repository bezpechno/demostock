// components/LandingHero.tsx
import React from 'react';
import Link from 'next/link';

const LandingHero: React.FC = () => {
  return (
    <div className="bg-primary-800 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-4">Trade Stocks Risk-Free</h1>
        <p className="text-xl mb-8">Learn the ins and outs of stock trading without risking real money.</p>
        <Link href="/app" className="bg-secondary-100 text-primary-800 py-3 px-6 rounded-lg font-semibold hover:bg-secondary-200 transition duration-300">
          Start Trading Now
        </Link>
      </div>
    </div>
  );
};

export default LandingHero;