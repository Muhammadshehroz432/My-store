import { createSlice } from "@reduxjs/toolkit";

const ProductDataSlice = createSlice({
  name: "productdata",
  initialState: {
    productData: {},
  },
  reducers: {
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
    RemoveproductData: (state, action) => {
      for (const items in state.productData) {
        if (items === action.payload) {
          delete state.productData[items];
        }
      }
    },
  },
});

export const ProductDataSliceActions = ProductDataSlice.actions;
export default ProductDataSlice;
