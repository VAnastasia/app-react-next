import React from "react";
import {Link as LinkRouter} from "react-router-dom";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Page = ({children}) => {
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © `}
        <Link color="inherit" href="#">
          Your Website
        </Link>{` `}
        {new Date().getFullYear()}
        {`.`}
      </Typography>
    );
  }
  return (
    <>
      <header>
        <nav className="page__nav">
          <ul>
            <li>
              <LinkRouter to="/">Главная</LinkRouter>
            </li>
            <li>
              <LinkRouter to="/dashboard">Дашборд</LinkRouter>
            </li>
            <li>
              <LinkRouter to="/addTransaction">Добавить</LinkRouter>
            </li>
            <li>
              <LinkRouter to="/auth">Авторизация</LinkRouter>
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
};

export default Page;
