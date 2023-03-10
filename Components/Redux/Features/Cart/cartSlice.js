import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  // amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);

      console.log(action);
    },

    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      //   cartItem.amount = cartItem.amount + 1;

      //   console.log(cartItem.amount);
    },

    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      //   cartItem.amount = cartItem.amount - 1;
    },

    cartTotal: (state) => {
      state.total = state.cartItems.reduce((acc, item) => acc + item.price, 0);

      // cartItems.reduce((acc, item) => acc + item.price, 0);
    },
  },
});

// console.log(cartSlice);

export const { addToCart, removeFromCart, increase, decrease, cartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
