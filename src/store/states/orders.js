import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    setOrders: (state, action) => action.payload,
  },
});

export const { setOrders } = orderSlice.actions;
export default orderSlice.reducer;
