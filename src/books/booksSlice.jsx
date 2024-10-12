import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  savedBooks: [], 
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    likeBook: (state, action) => {
      const book = state.books.find((book) => book.id === action.payload);
      if (book) {
        book.likes += 1;
      }
    },
    saveBook: (state, action) => {
      const bookToSave = action.payload;
      if (!state.savedBooks.find((book) => book.id === bookToSave.id)) {
        state.savedBooks.push(bookToSave); 
      }
    },
    removeBook: (state, action) => {
      state.savedBooks = state.savedBooks.filter((book) => book.id !== action.payload);
    },
  },
});

export const { setBooks, likeBook, saveBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
