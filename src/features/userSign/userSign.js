import { createSlice } from "@reduxjs/toolkit";

export const userSignSlice = createSlice({
    name: 'usersign',
    initialState: {
        isLogin: true
    },
    reducers: {
        toggleIsLogin: (state) => {
            state.isLogin = !state.isLogin;
        }
    }
})

export const { toggleIsLogin } = userSignSlice.actions;
export default userSignSlice.reducer;