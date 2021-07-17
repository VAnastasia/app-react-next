import Radio from '@material-ui/core/Radio';
import Link from 'next/link';
import React from 'react';

const Categories = ({categories}) => {
  return (
    <>
      <Link href='/add-category'><a className='button-link'>Добавить категорию</a></Link>
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

export default Categories;
