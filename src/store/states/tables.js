import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "tables",
  initialState: [],
  reducers: {
    setTables: (state, action) => action.payload,
  },
});

export const { setTables } = tableSlice.actions;
export default tableSlice.reducer;
