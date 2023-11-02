import { createSlice } from "@reduxjs/toolkit";

export const ordersTableSlice = createSlice({
    name: "ordersTable",
    initialState: [],
    reducers: {
        setOrdersTable: (state, action) => action.payload,
    },
});

export const { setOrdersTable } = ordersTableSlice.actions;
export default ordersTableSlice.reducer;