// components/LandingFeatures.tsx
import { ChartBarIcon, AcademicCapIcon, ShieldCheckIcon } from '@heroicons/react/outline';
import React from 'react';

const features = [
  { icon: ChartBarIcon, title: 'Real-Time Data', description: 'Get access to real-time stock market data.' },
  { icon: AcademicCapIcon, title: 'Learn Safely', description: 'Practice trading strategies without financial risk.' },
  { icon: ShieldCheckIcon, title: 'Secure Platform', description: 'Your data and virtual assets are always protected.' },
];

export default function LandingFeatures() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to trade stocks
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <dt>
                  <feature.icon className="absolute h-6 w-6 text-indigo-500" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
