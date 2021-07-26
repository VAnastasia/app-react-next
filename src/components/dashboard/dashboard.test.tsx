import { render, screen } from '@testing-library/react';
import React from 'react';
import Dashboard from './dashboard';

describe('Dashboard', () => {
  it('renders Dashboard component', () => {
    render(<Dashboard />);

    expect(screen.getByText(/Мои счета/i)).toBeInTheDocument();
    expect(screen.getByText(/Прогноз/i)).toBeInTheDocument();
  });
});
