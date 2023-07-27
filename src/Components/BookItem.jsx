import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice'
import styles from '../Styles/BookItem.module.css'

export default function BookItem({item_id, title, author, category}) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <button onClick={() => dispatch(removeBook({item_id}))}>delete</button>
        {title} - {author}
      </div>
    </li>
  )
}

BookItem.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};