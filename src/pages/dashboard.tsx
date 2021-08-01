import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import Dashboard from '../components/dashboard/dashboard';
import Page from '../layouts/page';
import {transactionsStore} from '../store';

const DashboardPage: React.FunctionComponent = observer(() => {
  const {balanceCard, balanceCash, fetchTransactions} = transactionsStore;

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <Page>
      <Dashboard
        balanceCash={balanceCash}
        balanceCard={balanceCard}
      />
    </Page>
  )
});

export default DashboardPage;
