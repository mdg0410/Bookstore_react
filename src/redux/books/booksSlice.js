import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    "item_id": "item1",
    "title": "The Great Gatsby",
    "author": "John Smith",
    "category": "Fiction"
  },
  {
    "item_id": "item2",
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "category": "Fiction"
  },
  {
    "item_id": "item3",
    "title": "The Selfish Gene",
    "author": "Richard Dawkins",
    "category": "Nonfiction"
  }
]


const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = {
        "item_id": `item${state.length+1}`,
        "title": action.payload.title,
        "author": action.payload.author,
        "category": "Undefined"
      }
      state.push(book);
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.item_id !== action.payload.item_id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;