import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSidebarSlice = createSlice({
  name: "shopping_cart_sidebar_slice",
  initialState: {
    showShoppingCartSidebar: false,
  },
  reducers: {
    toggleShoppingCartSidebar(state) {
      state.showShoppingCartSidebar = !state.showShoppingCartSidebar;
    },
  },
});

export const { toggleShoppingCartSidebar } = shoppingCartSidebarSlice.actions;
export default shoppingCartSidebarSlice.reducer;
