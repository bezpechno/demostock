import React from 'react';
import Link from 'next/link';

const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-secondary-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">DemoStock</h3>
            <p className="text-secondary-300">Learn stock trading without risking real money.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/about" className="text-secondary-300 hover:text-white">About Us</Link></li>
              <li><Link href="/features" className="text-secondary-300 hover:text-white">Features</Link></li>
              <li><Link href="/pricing" className="text-secondary-300 hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li><Link href="/terms" className="text-secondary-300 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-secondary-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-secondary-300">support@demostock.com</p>
          </div>
        </div>
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} DemoStock. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;