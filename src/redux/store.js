import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/booksSlice";
import categoriesReducer from "./categories/categoriesSlice";

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

export default store;