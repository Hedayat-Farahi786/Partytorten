import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    categories: [],
    products: [],
  },
  reducers: {
    addCategories(state, action) {
        state.categories = action.payload;
        state.categories.unshift({
          name: "All",
          image: "https://cdn.shopify.com/s/files/1/1734/9571/collections/Screenshot20180710-154626Chrome_1024x1024.jpg?v=1557860801"
        });
    },
    addProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { addCategories, addProducts } = productSlice.actions;

export default productSlice.reducer;
