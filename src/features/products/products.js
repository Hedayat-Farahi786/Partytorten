import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProducts(state, action) {
        state.products = action.payload;
    },
  },
});

export const { addProducts } = productSlice.actions;

export default productSlice.reducer;
