import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    value: 1
  },
  reducers: {
    nextPage: (state, action) => {
      // increment 1 in page value
      state.value = state.value + 1
      console.log(state.value)
    },
    previousPage: (state, action) => {
      // decrement 1 in page value
      state.value = state.value - 1
      console.log(state.value)
    }
  }
})

export const { nextPage, previousPage } = pageSlice.actions;
export default pageSlice.reducer;
