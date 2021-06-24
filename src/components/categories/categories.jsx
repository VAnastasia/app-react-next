import Radio from '@material-ui/core/Radio';
import React from 'react';
import {Link} from 'react-router-dom';

export default function Categories({categories}) {
  return (
    <>
      <Link to='/addCategory'>Добавить категорию</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>Название</th>
            <th>Доход</th>
            <th>Расход</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(({id, name, income, expense}) => (
            <tr key={id}>
              <td>{name}</td>
              <td>
                <Radio
                  checked={income}
                  value='false'
                  name='income'
                  inputProps={{ 'aria-label': 'Доход' }}
                />
              </td>
              <td>
                <Radio
                  checked={expense}
                  value='false'
                  name='expense'
                  inputProps={{ 'aria-label': 'Расход' }}
                />
              </td>
            </tr>),
          )}
        </tbody>
      </table>
    </>
  );
}
