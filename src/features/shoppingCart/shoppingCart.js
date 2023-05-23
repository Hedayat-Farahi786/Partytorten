import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToShoppingCart(state, action) {

        for(let i = 0; i < state.cart.length; i++){
            if(state.cart[i].product._id === action.payload._id){
                state.cart[i].quantity += 1;
                return
            }
        }
      state.cart.push({product: action.payload, quantity: 1});
    },
    removeFromShoppingCart(state, action) {
        for (let i = 0; i < state.cart.length; i++) {
            if (state.cart[i].product._id === action.payload._id) {
                state.cart[i].quantity -= 1;
                if (state.cart[i].quantity === 0) {
                    state.cart.splice(i, 1);
                }
                return;
            }
        }
    },
    incrementQuantity(state, action) {
        for (let i = 0; i < state.cart.length; i++) {
            if (state.cart[i].product._id === action.payload._id) {
                state.cart[i].quantity += 1;
                return;
            }
        }
    },
    clearCart(state){
        state.cart = [];
    }
  },
});

export const { addToShoppingCart, removeFromShoppingCart, incrementQuantity, clearCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
