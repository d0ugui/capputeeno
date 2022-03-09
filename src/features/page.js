import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    currentPage: 1,
    totalPages: 0,
  },
  reducers: {
    next: (state, action) => {
      // increment 1 in page value
      state.currentPage = state.currentPage + 1
      console.log(state.currentPage)
    },
    previous: (state, action) => {
      // decrement 1 in page value
      state.currentPage = state.currentPage - 1
      console.log(state.currentPage)
    },
    allProductsCount: (state, action) => {
      state.totalPages = 20;
      console.log(state.currentPage)
    },
    setPage: (state, action) => {
      state.currentPage = action.payload.page;
    }
  }
})

export const { next, previous, allProductsCount, setPage } = pageSlice.actions;
export default pageSlice.reducer;
