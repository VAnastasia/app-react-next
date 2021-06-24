import Box from '@material-ui/core/Box';
import React from 'react';
import Copyright from '../components/copyright/copyright.jsx';
import Header from '../components/header/header.jsx';

export default function Page({children}) {
  return (
    <>
      <Header/>
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
