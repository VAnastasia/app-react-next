import {
  Container,
  Grid,
  Paper
} from '@material-ui/core';
import React from 'react';
import {formatNumberCurrency} from '../../utils/format-number';


interface Props {
  balanceCash: number,
  balanceCard: number
}

const Dashboard: React.FunctionComponent<Props> = ({balanceCash, balanceCard}: Props) => {
  return (
    <div className='dashboard__wrapper'>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className='paper'>
              <h2 className='dashboard__title'>Мои счета</h2>
              <p className='dashboard__subtitle'>Баланс</p>
              <p className='dashboard__text'>{formatNumberCurrency(balanceCash + balanceCard)}</p>

              <p className='dashboard__subtitle'>Наличные</p>
              <p className='dashboard__text'>{formatNumberCurrency(balanceCash)}</p>

              <p className='dashboard__subtitle'>Карты</p>
              <p className='dashboard__text'>{formatNumberCurrency(balanceCard)}</p>

            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Paper className='paper'><h2 className='dashboard__title'>Баланс</h2></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className='paper'><h2 className='dashboard__title'>Прогноз</h2></Paper>
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default Dashboard;
