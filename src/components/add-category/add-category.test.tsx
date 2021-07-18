import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import AddCategory from './add-category';

const handleSubmit = jest.fn();
const handleChange = jest.fn();

describe('AddCategory', () => {
  it('renders AddCategory component', () => {
    render(<AddCategory onSubmit={handleSubmit} onChange={handleChange} />);

    expect(screen.getByLabelText(/Название/i)).toBeInTheDocument();
    expect(screen.getByText(/Доход/i)).toBeInTheDocument();
    expect(screen.getByText(/Расход/i)).toBeInTheDocument();
    expect(screen.getByText(/Сохранить/i)).toBeInTheDocument();
  });

  it('sends form on click button save', async () => {

    render(<AddCategory onSubmit={handleSubmit} onChange={handleChange} />);

    fireEvent.click(screen.getByText(/Сохранить/i));

    expect(handleSubmit).toHaveBeenCalled();
  });

  it('changes form on change', async () => {

    render(<AddCategory onSubmit={handleSubmit} onChange={handleChange} />);

    fireEvent.change(screen.getByLabelText(/Название/i), { target: { value: 'Название' } });

    expect(handleChange).toHaveBeenCalled();
  });
});
