import React from 'react';
import Transactions from '../src/components/transactions/transactions';
import Page from '../src/layouts/page';

const transactions = [
  {
    id: 1, date: '2021-06-15', kind: 1, category: 1, sum: 1000, source: 1,
  },
];

export default function TransactionsPage () {
  return (
  <Page>
    <Transactions transactions={transactions} />
  </Page>
  )
}
