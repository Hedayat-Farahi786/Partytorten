import { createSlice } from "@reduxjs/toolkit";


export const userAccountSlice = createSlice({
    name: 'showuseraccount',
    initialState: {
        showUserAccount: false,
        loggedIn: false,
        user: [],
    },
    reducers: {
        toggleShowUserAccount(state) {
            state.showUserAccount = !state.showUserAccount;
        },
        toggleLoggedIn(state, action){
            state.loggedIn = action.payload;
        },
        loginUser(state, action){
            state.user = action.payload;
        },
        logoutUser(state){
            localStorage.removeItem('token');
            state.loggedIn = false
            state.user = [];
        }
    }
})


export const { toggleShowUserAccount, toggleLoggedIn, loginUser, logoutUser } = userAccountSlice.actions;
export default userAccountSlice.reducer;