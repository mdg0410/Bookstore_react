/* eslint-disable react/prop-types */
import React from "react";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/books/booksSlice.js"; 
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar/dist';
import "../Styles/BookItem.css";

const BookItem = ({ item_id, title, author, category }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(item_id));
  };

  const [randomPercentage] = useState(Math.floor(Math.random() * 100));

  return (
    <div className="book">
      <div>
        <span className="book-category">{category}</span>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
        <div className="book-actions">
          <button type="button">Comments</button>
          <button type="button" onClick={handleDelete}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <CircularProgressBar percent={randomPercentage} linearGradient={['#307bbe', '#379cf6']} size={100} number={false} colorCircle="#f5f6fa" />
        <div className="progress-stats">
          <span className="percentage">
            {randomPercentage}
            %
          </span>
          <span className="percentage-completed">Completed</span>
        </div>

      </div>
      <div className="chapter-info">
        <h3 className="current-chapter">CURRENT CHAPTER</h3>
        <span className="chapter">Chapter 17</span>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default BookItem;