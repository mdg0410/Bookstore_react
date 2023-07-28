import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/booksSlice"; // Asegúrate de proporcionar la ruta correcta
import BookItem from "./BookItem"; // Asegúrate de proporcionar la ruta correcta
import InputBook from "./InputBook";

const BookLogic = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.data);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBooks());
    }
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (  
    <div>
      <InputBook />
      {[...books].map((book) => (
        <BookItem key={book.item_id} book={book} />
      ))}
    </div>
  );
};

export default BookLogic;