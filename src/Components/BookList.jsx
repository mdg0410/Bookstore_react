/* eslint-disable react/prop-types */
import React from 'react'
import BookItem from './BookItem'

// eslint-disable-next-line react/prop-types
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