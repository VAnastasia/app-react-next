import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './header';

describe('Header', () => {
  it('renders Header component', () => {
    render(<Header />);
    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
    expect(screen.getByText(/Дашборд/i)).toBeInTheDocument();
    expect(screen.getByText(/Транзакции/i)).toBeInTheDocument();
    expect(screen.getByText(/Отчеты/i)).toBeInTheDocument();
    expect(screen.getByText(/Категории/i)).toBeInTheDocument();
  });
});
