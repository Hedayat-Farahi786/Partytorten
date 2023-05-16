import { configureStore } from "@reduxjs/toolkit";
import userSignSlice from "../features/userSign/userSign"
import userAccountSlice from "../features/userAccount/userAccount";
import shoppingCartSidebarSlice from "../features/shoppingCartSidebar/shoppingCartSidebar";
import sideMenuSlice from "../features/sideMenu/sideMenu";
import shoppingCartSlice  from "../features/shoppingCart/shoppingCart";

export const store = configureStore({
    reducer: {
        userSign: userSignSlice,
        userAccount: userAccountSlice,
        shoppingCartSidebar: shoppingCartSidebarSlice,
        sideMenu: sideMenuSlice,
        shoppingCart: shoppingCartSlice
    }
})