import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../pages/app';
import '@testing-library/jest-dom';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('../lib/authContext', () => require('../__mocks__/authContext'));

describe('Dashboard', () => {
  it('renders the dashboard', () => {
    render(<Dashboard />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('allows users to create a new portfolio', () => {
    render(<Dashboard />);
    fireEvent.click(screen.getByText('Create New Portfolio'));
    expect(screen.getByText('Portfolio Name')).toBeInTheDocument();
  });

  it('allows users to view a portfolio', () => {
    render(<Dashboard />);

    // Создание нового портфеля
    fireEvent.change(screen.getByLabelText(/portfolio name/i), { target: { value: 'My Portfolio' } });
    fireEvent.click(screen.getByText('Create Portfolio'));

    // Просмотр созданного портфеля
    fireEvent.click(screen.getByText('View Portfolio'));
    expect(screen.getByText('Portfolio Details')).toBeInTheDocument();
  });
});
