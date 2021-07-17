import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import AddTransaction from './add-transaction';

describe('AddTransaction', () => {
  it('renders AddTransaction component', () => {
    render(<AddTransaction categories={[]} />);

    expect(screen.getByLabelText(/Дата/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Сумма/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Комментарий/i)).toBeInTheDocument();
    expect(screen.getByText(/Сохранить/i)).toBeInTheDocument();
    expect(screen.getByText(/Отменить/i)).toBeInTheDocument();
  });

  it('sends form on click button save', async () => {
    const handleSubmit = jest.fn();
    render(<AddTransaction categories={[]} onSubmit={handleSubmit} />);

    fireEvent.click(screen.getByText(/Сохранить/i));

    expect(handleSubmit).toHaveBeenCalled();
  });

  it('changes form on change', async () => {
    const handleChange = jest.fn();
    render(<AddTransaction categories={[]} onChange={handleChange} />);

    fireEvent.change(screen.getByLabelText(/Сумма/i), { target: { value: '1000' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it.todo('resets form on click "Отменить"');
});
