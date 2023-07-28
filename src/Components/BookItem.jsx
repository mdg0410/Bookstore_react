/* eslint-disable react/prop-types */

import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/books/booksSlice.js"; // Asegúrate de proporcionar la ruta correcta

const BookItem = ({ item_id, title, author }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(item_id));
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <button onClick={handleDelete}>Eliminar</button>
      <hr />
    </div>
  );
};

export default BookItem;