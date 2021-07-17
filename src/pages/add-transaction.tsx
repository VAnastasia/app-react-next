import {useRouter} from 'next/router';
import {observer} from 'mobx-react-lite';
import React, {useState, useEffect} from 'react';
import AddTransaction from '../components/add-transaction/add-transaction';
import Page from '../layouts/page';
import categoriesStore from '../store/categories';
import {api} from '../service/api';

const AddTransactionPage = observer(() => {
  const {categories, fetchCategories} = categoriesStore;
  const router = useRouter();

  const [categoriesOfKind, setCategoriesOfKind] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, [])

  const handleChange = (evt) => {
    if (evt.target.name === 'kind' && evt.target.name) {
      setCategoriesOfKind(categories.filter((category) => category[evt.target.value]));
    } else {
      setCategoriesOfKind(categories);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      date: event.target.date.value,
      kind: event.target.kind.value,
      category: event.target.category.value,
      source: event.target.source.value,
      sum: Number(event.target.sum.value),
      comment: event.target.comment.value,
    }

    if (formData.kind && formData.category && formData.source && formData.sum) {
      api.createTransaction(formData)
        .then((response) => {
          if (response) {
            router.push('/transactions');
          };
        });
    }
  };

  return (
    <Page>
      <AddTransaction categories={categoriesOfKind} onSubmit={handleSubmit} onChange={handleChange} />
    </Page>
  )
})


export default AddTransactionPage;
