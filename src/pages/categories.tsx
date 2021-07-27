import { observer } from 'mobx-react-lite';
import React, {useEffect} from 'react';
import Categories from '../components/categories/categories';
import Page from '../layouts/page';
import {categoriesStore} from '../store';

const CategoriesPage = observer(() => {
  const {categories, fetchCategories} = categoriesStore;

  useEffect(() => {
    fetchCategories();
  }, [])

  return (
    <Page>
      <Categories categories={categories} />
    </Page>
  )
})

export default CategoriesPage;
