import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PortfolioDetails from '../components/Dashboard/PortfolioDetails';

test('renders portfolio details', () => {
  const portfolio = { name: 'My Portfolio', stocks: [] };
  const { getByText } = render(<PortfolioDetails portfolio={portfolio} />);

  expect(getByText(/portfolio details/i)).toBeInTheDocument();
  expect(getByText(/my portfolio/i)).toBeInTheDocument();
});
