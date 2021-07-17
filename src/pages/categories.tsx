import React, {useEffect} from 'react';
import Categories from '../components/categories/categories';
import Page from '../layouts/page';
import { observer } from 'mobx-react-lite';
import categoriesStore from '../store/categories';

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
