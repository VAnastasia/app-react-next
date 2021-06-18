//import List from '@material-ui/core/List';
import React from 'react';
import {Link as LinkRouter} from 'react-router-dom';

export default function Transactions({transactions}) {
  return (
    <>
      <LinkRouter to='/addTransaction'>Добавить транзакцию</LinkRouter>
      <ul>
        {transactions.map(({id, date, kind, category, sum, source, comment}) => (
          <li key={id}>
            <p>Дата: {date}</p>
            <p>Вид: {kind}</p>
            <p>Категория: {category}</p>
            <p>Сумма: {sum}</p>
            <p>Наличные/карта: {source}</p>
            <p>Комментарий: {comment}</p>
          </li>))}
      </ul>
    </>
  );
}
