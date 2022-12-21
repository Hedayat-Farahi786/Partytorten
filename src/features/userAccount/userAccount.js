import { createSlice } from "@reduxjs/toolkit";


export const userAccountSlice = createSlice({
    name: 'showuseraccount',
    initialState: {
        showUserAccount: false,
    },
    reducers: {
        toggleShowUserAccount(state) {
            state.showUserAccount = !state.showUserAccount;
        }
    }
})


export const { toggleShowUserAccount } = userAccountSlice.actions;
export default userAccountSlice.reducer;