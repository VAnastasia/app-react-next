import { render, screen } from '@testing-library/react';
import React from 'react';
import Categories from './categories';

const categories = [
  {
    id: 1, name: 'Категория 1', income: true, expense: false,
  },
  {
    id: 2, name: 'Категория 2', income: false, expense: true,
  },
  {
    id: 3, name: 'Категория 3', income: true, expense: true,
  },
];

describe('Categories', () => {
  it('renders Categories component', () => {
    render(<Categories categories={categories} />);

    expect(screen.getByText(/Добавить категорию/i)).toBeInTheDocument();
    expect(screen.getByText(/Название/i)).toBeInTheDocument();
    expect(screen.getByText(/Доход/i)).toBeInTheDocument();
    expect(screen.getByText(/Расход/i)).toBeInTheDocument();
  });
});
