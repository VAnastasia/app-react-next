import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import Auth from '../../components/auth/auth.jsx';
import Dashboard from '../../components/dashboard/dashboard.jsx';
import Page from '../../layouts/page.jsx';

function App() {
  return (
    <Router>
      <div className='page'>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/addTransaction'>
            <Page>
              <div>Добавить</div>
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

export default App;
