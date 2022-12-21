import { createSlice } from "@reduxjs/toolkit";

export const sideMenuSlice = createSlice({
  name: "side_menu",
  initialState: {
    showSidebar: false,
    showReviewbar: false,
    showFilter: false
  },
  reducers: {
    toggleSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
    toggleReviewbar(state) {
      state.showReviewbar = !state.showReviewbar;
    },
    toggleFilter(state) {
      state.showFilter = !state.showFilter;
    },
  },
});

export const { toggleSidebar, toggleReviewbar, toggleFilter } = sideMenuSlice.actions;

export default sideMenuSlice.reducer;
