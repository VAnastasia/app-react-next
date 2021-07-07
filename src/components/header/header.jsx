import {AppBar, Typography}  from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <AppBar color='primary' position='fixed'>
      <nav className='page__nav'>
        <ul>
          <li>
            <Link href='/'>
              <a><Typography variant='h6' component='span'>Главная</Typography></a>
            </Link>
          </li>
          <li>
            <Link href='/dashboard'>
              <a><Typography variant='h6' component='span'>Дашборд</Typography></a>
            </Link>
          </li>
          <li>
            <Link href='/transactions'>
              <a><Typography variant='h6' component='span'>Транзакции</Typography></a>
            </Link>
          </li>
          <li>
            <Link href='/reports'>
              <a><Typography variant='h6' component='span'>Отчеты</Typography></a>
            </Link>
          </li>
          <li>
            <Link href='/categories'>
              <a><Typography variant='h6' component='span'>Категории</Typography></a>
            </Link>
          </li>
          <li>
            <Link href='/auth'>
              <a><Typography variant='h6' component='span'>Авторизация</Typography></a>
            </Link>
          </li>
        </ul>
      </nav>
    </AppBar>
  );
}
