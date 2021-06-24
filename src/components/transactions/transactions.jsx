import React from 'react';
import {Link} from 'react-router-dom';

export default function Transactions({transactions}) {
  return (
    <>
      <Link to='/addTransaction'>Добавить транзакцию</Link>
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
