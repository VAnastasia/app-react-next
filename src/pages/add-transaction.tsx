import {observer} from 'mobx-react-lite';
import {useRouter} from 'next/router';
import React, {useState, useEffect} from 'react';
import AddTransaction from '../components/add-transaction/add-transaction';
import Page from '../layouts/page';
import {api} from '../service/api';
import {categoriesStore} from '../store';

const AddTransactionPage: React.FunctionComponent = observer(() => {
  const {categories, fetchCategories} = categoriesStore;
  const router = useRouter();

  const [categoriesOfKind, setCategoriesOfKind] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, [])

  const handleChange = (evt: React.SyntheticEvent<EventTarget>) => {
    if (evt.target.name === 'kind' && evt.target.name) {
      setCategoriesOfKind(categories.filter((category) => category[evt.target.value]));
    } else {
      setCategoriesOfKind(categories);
    }
  };

  const handleSubmit = (evt: React.SyntheticEvent<EventTarget>) => {
    evt.preventDefault();

    const formData = {
      date: evt.target.date.value,
      kind: evt.target.kind.value,
      category: evt.target.category.value,
      source: evt.target.source.value,
      sum: Number(evt.target.sum.value),
      comment: evt.target.comment.value,
    }

    if (formData.kind && formData.category && formData.source && formData.sum) {
      api.createTransaction(formData)
        .then((response) => {
          if (response) {
            router.push('/transactions');
          }
        })
        .catch((error) => {
          console.log(error)
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
