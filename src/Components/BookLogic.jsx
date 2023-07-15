import { useState, useEffect } from 'react';
import BookList from './BookList'
import InputTodo from './InputBook'
import { v4 as uuidv4 } from "uuid";

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3vh 0',
};

export default function BookLogic() {

  const [books, setBooks] = useState(getInitialTodos());

  function getInitialTodos() {
    const temp = localStorage.getItem('books');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };

  useEffect(() => {
    const temp = JSON.stringify(books);
    localStorage.setItem('books', temp);
  }, [books]);

  const handleChange = (id) => {
    setBooks((prevState) =>
      prevState.map((book) => {
        if (book.id === id) {
          return {
            ...book,
            completed: !book.completed,
          };
        }
        return book;
      })
    );
  };

  const delBook = (id) => {
    setBooks([
      ...books.filter((book) => {
        return book.id !== id;
      }),
    ]);
  };

  const addBookItem = (title) => {
    const newBook = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setBooks([...books, newBook]);
  };

  const setUpdate = (updatedTitle, id) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          book.title = updatedTitle;
        }
        return book;
      })
    );
  };

  return (
    <div style={container}>
      <InputTodo addBookItem={addBookItem}/>
      <BookList 
      booksProps={books} 
      handleChange={handleChange} 
      delBook={delBook}
      setUpdate={setUpdate}
      />
    </div>
  )
}
