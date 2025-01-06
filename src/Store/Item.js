import { createSlice } from "@reduxjs/toolkit";
import { products } from "../Data/assets";

const ItemSlice = createSlice({
  name: "items",
  initialState: products,
  reducer: {},
});

export const ItemAction = ItemSlice.actions;

export default ItemSlice;
