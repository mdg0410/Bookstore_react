import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice'

import styles from '../Styles/BookItem.module.css'

// eslint-disable-next-line react/prop-types
export default function BookItem({item_id, title, author, category}) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <button onClick={() => dispatch(removeBook({item_id}))}>delete</button>
        {title} - {author} - {category} - {item_id}
      </div>
    </li>
  )
}
