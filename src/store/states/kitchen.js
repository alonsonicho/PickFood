import { createSlice } from "@reduxjs/toolkit";

export const kitchenSlice = createSlice({
    name: "kitchen",
    initialState: [],
    reducers: {
        setKitchen: (state, action) => action.payload,
    }
})

export const { setKitchen } = kitchenSlice.actions;
export default kitchenSlice.reducer;