import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2sej3jbQQhqZtWYvtwCl/books";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await axios.get(BASE_URL);
  const data = response.data
  const transformedData = Object.entries(data).map(([item_id, itemData]) => ({
    item_id,
    title: itemData[0].title,
    author: itemData[0].author,
    category: itemData[0].category,
  }));
  console.log(transformedData);
  return transformedData;
});

export const addBook = createAsyncThunk("books/addBook", async (newBook) => {
  const response = await axios.post(BASE_URL, newBook);
  return newBook;
});

export const deleteBook = createAsyncThunk("books/deleteBook", async (bookId) => {
  await axios.delete(`${BASE_URL}/${bookId}`);
  console.log(bookId);
  return bookId;
});

const booksSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = [...state.data, action.payload];
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter((book) => book.item_id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;