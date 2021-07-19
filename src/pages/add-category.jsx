import React from 'react';
import AddCategory from '../components/add-category/add-category';
import Page from '../layouts/page'

export default function AddCategoryPage () {
  const handleChange = () => {

  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Page>
      <AddCategory onSubmit={handleSubmit} onChange={handleChange} />
    </Page>
  )
}
