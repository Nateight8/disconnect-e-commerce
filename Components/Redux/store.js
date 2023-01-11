import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
