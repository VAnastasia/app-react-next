import {
  Container,
  Grid,
  Paper
} from '@material-ui/core';
import React from 'react';

const Dashboard = () => {
  return (
    <div className='dashboard__wrapper'>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className='paper'>
              Мои счета
              <br />
              Баланс
              <br />
              Наличные
              <br />
              Карты
              <br />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Paper className='paper'>Баланс</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className='paper'>Прогноз</Paper>
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default Dashboard;
