import { render, screen } from '@testing-library/react';
import React from 'react';
import AddTransaction from './add-transaction';

describe('AddTransaction', () => {
  it('renders AddTransaction component', () => {
    render(<AddTransaction />);

    expect(screen.getByLabelText(/Дата/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Сумма/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Комментарий/i)).toBeInTheDocument();
    expect(screen.getByText(/Сохранить/i)).toBeInTheDocument();
    expect(screen.getByText(/Отменить/i)).toBeInTheDocument();
  });
});
