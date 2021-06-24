import {AppBar, Typography}  from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <AppBar color='primary' position='fixed'>
      <nav className='page__nav'>
        <ul>
          <li>
            <Link to='/'>
              <Typography variant='h6' component='span'>Главная</Typography>
            </Link>
          </li>
          <li>
            <Link to='/dashboard'>
              <Typography variant='h6' component='span'>Дашборд</Typography>
            </Link>
          </li>
          <li>
            <Link to='/transactions'>
              <Typography variant='h6' component='span'>Транзакции</Typography>
            </Link>
          </li>
          <li>
            <Link to='/reports'>
              <Typography variant='h6' component='span'>Отчеты</Typography>
            </Link>
          </li>
          <li>
            <Link to='/categories'>
              <Typography variant='h6' component='span'>Категории</Typography>
            </Link>
          </li>
          <li>
            <Link to='/auth'>
              <Typography variant='h6' component='span'>Авторизация</Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </AppBar>
  );
}
