import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Dashboard from './dashboard';

describe('Dashboard', () => {
  it('renders Dashboard component', () => {
    render(<Dashboard />);

    expect(screen.getByText(/Дашборд/i)).toBeInTheDocument();
    expect(screen.getByText(/Мои счета/i)).toBeInTheDocument();
    expect(screen.getByText(/Прогноз/i)).toBeInTheDocument();
  });

  it('opens drawer', () => {
    render(<Dashboard />);

    expect(screen.queryByText(/Главная/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Транзакции/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Отчеты/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Категории/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
    expect(screen.getByText(/Транзакции/i)).toBeInTheDocument();
    expect(screen.getByText(/Отчеты/i)).toBeInTheDocument();
    expect(screen.getByText(/Категории/i)).toBeInTheDocument();
  })
});
