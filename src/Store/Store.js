import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./Item";

import searchSlice from "./Search";

import SizeSlice from "./Size";
import ProductDataSlice from "./Productdata";

const Store = configureStore({
  reducer: {
    items: ItemSlice.reducer,
    search: searchSlice.reducer,
    size: SizeSlice.reducer,

    productdata: ProductDataSlice.reducer,
  },
});

export default Store;
