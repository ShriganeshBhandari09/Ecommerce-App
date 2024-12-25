import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../features/products/ProductSlice";

const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

export default store;
