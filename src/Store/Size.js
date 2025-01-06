import { createSlice } from "@reduxjs/toolkit";

const SizeSlice = createSlice({
  name: "size",
  initialState: "", // Stores an array of selected sizes
  reducers: {
    setSize: (state, action) => {
      return (state = action.payload); // Adds a new size to the array
    },
  },
});

export const SizeSliceActions = SizeSlice.actions;

export default SizeSlice;
