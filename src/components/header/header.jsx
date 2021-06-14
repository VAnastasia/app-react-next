import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {Link as LinkRouter} from 'react-router-dom';

export default function Header() {
  return (
    <AppBar color='primary' position='fixed'>
      <nav className='page__nav'>
        <ul>
          <li>
            <LinkRouter to='/'>
              <Typography variant='h6' component='span'>Главная</Typography>
            </LinkRouter>
          </li>
          <li>
            <LinkRouter to='/dashboard'>
              <Typography variant='h6' component='span'>Дашборд</Typography>
            </LinkRouter>
          </li>
          <li>
            <LinkRouter to='/transactions'>
              <Typography variant='h6' component='span'>Транзакции</Typography>
            </LinkRouter>
          </li>
          <li>
            <LinkRouter to='/reports'>
              <Typography variant='h6' component='span'>Отчеты</Typography>
            </LinkRouter>
          </li>
          <li>
            <LinkRouter to='/categories'>
              <Typography variant='h6' component='span'>Категории</Typography>
            </LinkRouter>
          </li>
          <li>
            <LinkRouter to='/auth'>
              <Typography variant='h6' component='span'>Авторизация</Typography>
            </LinkRouter>
          </li>
        </ul>
      </nav>
    </AppBar>
  );
}
