import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    currentPage: 0,
    totalPages: 0,
    filter: 'Todos os produtos',
    filteredPages: 0,
    filteredCurrentPage: 0,
  },
  reducers: {
    next: (state, action) => {
      // increment 1 in page value
      state.currentPage += 1;
    },
    previous: (state, action) => {
      // decrement 1 in page value
      state.currentPage -= 1;
    },
    allProductsCount: (state, action) => {
      state.totalPages = Math.round((action.payload.total / 12));
    },
    setPage: (state, action) => {
      state.currentPage = action.payload.page;
    },
    nextFiltered: (state, action) => {
      state.filteredCurrentPage += 1;
    },
    prevFiltered: (state, action) => {
      state.filteredCurrentPage -= 1;
    },
    allFilteredProductsCount: (state, action) => {
      state.filteredPages = Math.round((action.payload.total / 12));
    },
    setFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
});

export const {
  next,
  previous,
  allProductsCount,
  setPage,
  setFilter,
} = pageSlice.actions;
export default pageSlice.reducer;
