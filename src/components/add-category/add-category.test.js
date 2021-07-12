import { render, screen, fireEvent } from '@testing-library/react';
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

  it('sends form on save', async() => {
    const handleSubmit = jest.fn();
    render(<AddCategory onSubmit={handleSubmit} />);

    fireEvent.click(screen.getByText(/Сохранить/i));

    expect(handleSubmit).toHaveBeenCalled();
  });

  it('changes form on change', async() => {
    const handleChange = jest.fn();
    render(<AddCategory onChange={handleChange} />);

    fireEvent.change(screen.getByLabelText(/Название/i), { target: { value: 'Название' } });

    expect(handleChange).toHaveBeenCalled();
  });
});
