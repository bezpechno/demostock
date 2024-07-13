import React from 'react';
import Link from 'next/link';

const LandingCTA: React.FC = () => {
  return (
    <div className="bg-primary-700 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-xl mb-8">Join thousands of traders learning the market with DemoStock.</p>
        <Link href="/signup" className="bg-white text-primary-800 py-3 px-6 rounded-lg font-semibold hover:bg-secondary-100 transition duration-300">
          Create Free Account
        </Link>
      </div>
    </div>
  );
};

export default LandingCTA;