import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    currentPage: 0,
    totalPages: 0,
  },
  reducers: {
    next: (state, action) => {
      // increment 1 in page value
      state.currentPage = state.currentPage + 1
    },
    previous: (state, action) => {
      // decrement 1 in page value
      state.currentPage = state.currentPage - 1
    },
    allProductsCount: (state, action) => {
      state.totalPages = (action.payload.total / 12);
    },
    setPage: (state, action) => {
      state.currentPage = action.payload.page;
    }
  }
})

export const { next, previous, allProductsCount, setPage } = pageSlice.actions;
export default pageSlice.reducer;
