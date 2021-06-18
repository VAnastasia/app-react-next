import Radio from '@material-ui/core/Radio';
import React from 'react';
import {Link as LinkRouter} from 'react-router-dom';

export default function Categories({categories}) {
  return (
    <>
      <LinkRouter to='/addCategory'>Добавить категорию</LinkRouter>
      <table className='table'>
        <thead>
          <th>Название</th>
          <th>Доход</th>
          <th>Расход</th>
        </thead>
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
      </table>
    </>
  );
}
