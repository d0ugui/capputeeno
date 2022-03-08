import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers: {
    addItem: (state, action) => {
      // Check if product is already exist
      const exist = state.value.find((x) => x.id === action.payload.product.id);
      console.log(exist);
      state.value.push(action.payload.product);
    }
  }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
