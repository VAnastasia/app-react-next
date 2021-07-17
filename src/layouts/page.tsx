import Box from '@material-ui/core/Box';
import React from 'react';
import Copyright from '../components/copyright/copyright';
import Header from '../components/header/header';

const Page = ({children}) => {
  return (
    <div className='page'>
      <Header/>
      <main>
        {children}
      </main>
      <footer>
        <Box pt={4}>
          <Copyright />
        </Box>
      </footer>
    </div>
  );
}

export default Page;
