import { render, screen } from '@testing-library/react';
import React from 'react';
import Transactions from './transactions';

const transactions = [
  {
    id: 1, date: '2021-06-15', kind: '1', category: '1', sum: 1000, source: '1', comment: ''
  },
];

describe('Transactions', () => {
  it('renders Transactions component', () => {
    render(<Transactions transactions={transactions} />);

    expect(screen.getByText(/Добавить транзакцию/i)).toBeInTheDocument();
    expect(screen.getByText(/Дата/i)).toBeInTheDocument();
    expect(screen.getByText(/Вид/i)).toBeInTheDocument();
    expect(screen.getByText(/Категория/i)).toBeInTheDocument();
    expect(screen.getByText(/Сумма/i)).toBeInTheDocument();
    expect(screen.getByText(/Наличные/i)).toBeInTheDocument();
    expect(screen.getByText(/Комментарий/i)).toBeInTheDocument();
  });
});
