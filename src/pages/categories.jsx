import React from 'react';
import Categories from '../components/categories/categories';
import Page from '../layouts/page';

const categories = [
  {
    id: 1, name: 'Категория 1', income: true, expense: false,
  },
  {
    id: 2, name: 'Категория 2', income: false, expense: true,
  },
  {
    id: 3, name: 'Категория 3', income: true, expense: true,
  },
];

export default function CategoriesPage () {
  return (
    <Page>
      <Categories categories={categories} />
    </Page>
  )
}
