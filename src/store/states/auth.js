import { createSlice } from "@reduxjs/toolkit";

export const initialUserState = {
    email: '',
    role: '',
    token: '',
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialUserState,
    reducers: {
        setAuth: (state, action) => action.payload,
        clearAuth: () => initialUserState
    }
})

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;