import { render, screen } from '@testing-library/react';
import React from 'react';
import Dashboard from './dashboard';

describe('Dashboard', () => {
  it('renders Dashboard component', () => {
    render(<Dashboard balanceCash={100000} balanceCard={200000} />);

    expect(screen.getByText(/Мои счета/i)).toBeInTheDocument();
    expect(screen.getByText(/Прогноз/i)).toBeInTheDocument();
    expect(screen.getByText(/100 000/i)).toBeInTheDocument();
    expect(screen.getByText(/200 000/i)).toBeInTheDocument();
    expect(screen.getByText(/300 000/i)).toBeInTheDocument();
  });
});
