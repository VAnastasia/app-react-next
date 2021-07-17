import Link from 'next/link';
import React from 'react';

const Transactions = ({transactions}) => {
  return (
    <>
      <Link href='/add-transaction'><a className='button-link'>Добавить транзакцию</a></Link>
      <ul className='transactions__list'>
        {transactions.map(({id, date, kind, category, sum, source, comment}) => (
          <li key={id} className='transactions__item'>
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

export default Transactions;
