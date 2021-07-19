import React from 'react';
import AddTransaction from '../components/add-transaction/add-transaction';
import Page from '../layouts/page'

export default function AddTransactionPage () {
  const handleChange = () => {

  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Page>
      <AddTransaction onSubmit={handleSubmit} onChange={handleChange} />
    </Page>
  )
}
