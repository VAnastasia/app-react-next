import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Auth from '../../components/auth/auth.jsx';
import Dashboard from '../../components/dashboard/dashboard.jsx';
import Page from '../../layouts/page.jsx';
import AddCategory from '../add-category/add-category.jsx';
import AddTansaction from '../add-transaction/add-transaction.jsx';
import Categories from '../categories/categories.jsx';
import Transactions from '../transactions/transactions.jsx';

const transactions = [
  {
    id: 1, date: '2021-06-15', kind: 1, category: 1, sum: 1000, source: 1,
  },
];

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

export default function App() {
  return (
    <Router>
      <div className='page'>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/addTransaction'>
            <Page>
              <AddTansaction />
            </Page>
          </Route>
          <Route path='/transactions'>
            <Page>
              <Transactions transactions={transactions} />
            </Page>
          </Route>
          <Route path='/reports'>
            <Page>
              <div>Отчеты</div>
            </Page>
          </Route>
          <Route path='/addCategory'>
            <Page>
              <AddCategory />
            </Page>
          </Route>
          <Route path='/categories'>
            <Page>
              <Categories categories={categories} />
            </Page>
          </Route>
          <Route path='/auth'>
            <Auth/>
          </Route>
          <Route path='/'>
            <Page>
              <div>Главная</div>
            </Page>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
