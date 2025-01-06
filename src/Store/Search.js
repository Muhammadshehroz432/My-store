import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false, // Adjusted casing for consistency
    searchval: "",
  },
  reducers: {
    OpenSearch(state) {
      state.showSearch = true;
    },
    CloseSearch(state) {
      state.showSearch = false;
    },
    setSearch(state, action) {
      state.searchval = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions; // Renamed for clarity
export default searchSlice; // Export only the reducer
