import { render, screen } from '@testing-library/react';
import React from 'react';
import Copyright from './copyright';

describe('Copyright', () => {
  it('renders Copyright component', () => {
    render(<Copyright />);

    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
    expect(screen.getByText(/your website/i)).toBeInTheDocument();
    expect(screen.getByText(/2021/i)).toBeInTheDocument();
  });
});
