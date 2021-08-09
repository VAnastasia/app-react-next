import { useRouter } from 'next/router';
import React from 'react';
import AddCategory from '../components/add-category/add-category';
import Page from '../layouts/page';
import {api} from '../service/api';

const AddCategoryPage: React.FunctionComponent = () => {
  const router = useRouter();

  const handleChange = () => {};

  const handleSubmit = (evt: React.SyntheticEvent<EventTarget>) => {
    evt.preventDefault();
    const formData = {
      name: evt.target.title.value,
      income: evt.target.income.checked,
      expense: evt.target.expense.checked
    };

    if (formData.name && (formData.expense || formData.income)) {
      api.createCategory(formData)
        .then((response) => {
          if (response) {
            router.push('/categories');
          }
        })
        .catch((error) => {
          console.log(error)
        });
      }
  };

  return (
    <Page>
      <AddCategory onSubmit={handleSubmit} onChange={handleChange} />
    </Page>
  )
}

export default AddCategoryPage;
