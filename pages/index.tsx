//pages/index.ts
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import LandingHero from '../components/LandingHero';
import LandingFeatures from '../components/LandingFeatures';
import LandingCTA from '../components/LandingCTA';
import LandingFooter from '../components/LandingFooter';

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>DemoStock - Trade Stocks Risk-Free</title>
        <meta name="description" content="Learn stock trading without risking real money. DemoStock provides a realistic trading experience with virtual currency." />
      </Head>
      <LandingHero />
      <LandingFeatures />
      <LandingCTA />
      <LandingFooter />
    </>
  );
};

export default LandingPage;