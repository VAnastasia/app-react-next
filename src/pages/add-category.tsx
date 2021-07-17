import { useRouter } from 'next/router';
import React from 'react';
import AddCategory from '../components/add-category/add-category';
import Page from '../layouts/page';
import {api} from '../service/api';

const AddCategoryPage = () => {
  const router = useRouter();

  const handleChange = () => {

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      income: event.target.income.checked,
      expense: event.target.expense.checked
    };

    if (formData.name && (formData.expense || formData.income)) {
      api.createCategory(formData)
        .then((response) => {
          if (response) {
            router.push('/categories');
          };
        })
      }
  };

  return (
    <Page>
      <AddCategory onSubmit={handleSubmit} onChange={handleChange} />
    </Page>
  )
}

export default AddCategoryPage;
