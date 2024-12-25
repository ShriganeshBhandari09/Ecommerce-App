import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../assets/assets";

const initialState = {
  cartList: products.slice(0, 4),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
