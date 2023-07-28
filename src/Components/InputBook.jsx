import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import { nanoid } from 'nanoid';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      const book = {
        item_id:nanoid(),
        title: title,
        author:author,
        category:"t3rr"
      };  
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
      setMessage('');
    } else {
      setMessage('Please add both title and author.');
    }
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Book..."
          className="input-text"
          value={title}
          onChange={handleChangeTitle}
        />
        <input
          type="text"
          placeholder="Add Author..."
          className="input-text"
          value={author}
          onChange={handleChangeAuthor}
        />
        <button className="input-submit" type="submit">Submit</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputBook;
