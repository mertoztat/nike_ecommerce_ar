import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchQuery: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
