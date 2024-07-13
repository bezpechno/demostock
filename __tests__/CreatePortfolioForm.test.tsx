import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CreatePortfolioForm from '../components/Dashboard/CreatePortfolioForm';

test('renders form and creates a new portfolio', () => {
  const createPortfolio = jest.fn();
  const { getByLabelText, getByText } = render(<CreatePortfolioForm createPortfolio={createPortfolio} />);

  fireEvent.change(getByLabelText(/portfolio name/i), { target: { value: 'My Portfolio' } });
  fireEvent.click(getByText(/create portfolio/i));

  expect(createPortfolio).toHaveBeenCalledWith('My Portfolio');
});
