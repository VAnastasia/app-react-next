import React, {useEffect} from 'react';
import Transactions from '../components/transactions/transactions';
import Page from '../layouts/page';
import {observer} from 'mobx-react-lite';
import transactionsStore from '../store/transactions';

const TransactionsPage = observer(() => {
  const {transactions, fetchTransactions} = transactionsStore;

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
  <Page>
    <Transactions transactions={transactions} />
  </Page>
  )
});

export default TransactionsPage;
