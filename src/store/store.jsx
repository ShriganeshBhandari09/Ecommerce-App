import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../features/products/ProductSlice";
import { cartSlice } from "../features/cart/CartSlice";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer
  },
});

export default store;
