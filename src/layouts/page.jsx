import Box from '@material-ui/core/Box';
import React from 'react';
import {Link as LinkRouter} from 'react-router-dom';
import Copyright from '../components/copyright/copyright.jsx';

export default function Page({children}) {
  return (
    <>
      <header>
        <nav className='page__nav'>
          <ul>
            <li>
              <LinkRouter to='/'>Главная</LinkRouter>
            </li>
            <li>
              <LinkRouter to='/dashboard'>Дашборд</LinkRouter>
            </li>
            <li>
              <LinkRouter to='/addTransaction'>Добавить</LinkRouter>
            </li>
            <li>
              <LinkRouter to='/auth'>Авторизация</LinkRouter>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Box pt={4}>
          <Copyright />
        </Box>
      </footer>
    </>
  );
}
