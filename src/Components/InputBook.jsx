import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import { nanoid } from 'nanoid';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categories] = useState([
    'Fiction',
    'Sci-Fi',
    'Fantasy',
    'Drama',
]);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      const book = {
        item_id:nanoid(),
        title: title,
        author:author,
        category:categories[Math.floor(Math.random() * categories.length)],
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
    <div className="form">
      <h2 className="add-book-title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" value={title} onChange={handleChangeTitle} required />
        <input type="text" name="author" placeholder="Author" value={author} onChange={handleChangeAuthor} required />
        <button type="submit" className="add-book-btn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default InputBook;
