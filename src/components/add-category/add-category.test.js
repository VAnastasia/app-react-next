import { render, screen } from '@testing-library/react';
import React from 'react';
import AddCategory from './add-category';

describe('AddCategory', () => {
  it('renders AddCategory component', () => {
    render(<AddCategory />);

    expect(screen.getByLabelText(/Название/i)).toBeInTheDocument();
    expect(screen.getByText(/Доход/i)).toBeInTheDocument();
    expect(screen.getByText(/Расход/i)).toBeInTheDocument();
    expect(screen.getByText(/Сохранить/i)).toBeInTheDocument();
  });
});
