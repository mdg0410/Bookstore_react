import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem'

export default function BookList({booksProps, handleChange, delBook, setUpdate}) {

  return (
    <ul style={{display:'flex', flexDirection: 'column', width:'60%', padding:'0', gap: '1.5vh'}}>
     {booksProps.map((book) => (
      <BookItem 
      key={book.id} 
      itemProp={book} 
      handleChange={handleChange}
      delBook={delBook}
      setUpdate={setUpdate}
      />
     ))}
    </ul>
  )
}

BookList.propTypes = {
  booksProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  delBook: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
