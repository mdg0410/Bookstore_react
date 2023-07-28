/* eslint-disable react/prop-types */

import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/books/booksSlice.js"; // Asegúrate de proporcionar la ruta correcta

const BookItem = ({ book, bookId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(bookId));
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <button onClick={handleDelete}>Eliminar</button>
      <hr />
    </div>
  );
};

export default BookItem;