import { render, screen } from '@testing-library/react';
import React from 'react';
import Auth from './auth';

describe('Auth', () => {
  it('renders Auth component', () => {
    render(<Auth />);

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Пароль/i)).toBeInTheDocument();
    expect(screen.getByText(/Запомнить меня/i)).toBeInTheDocument();
    expect(screen.getByText(/Войти/i)).toBeInTheDocument();
    expect(screen.getByText(/Забыли пароль/i)).toBeInTheDocument();
    expect(screen.getByText(/Зарегистрироваться/i)).toBeInTheDocument();
  });
});
