import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  carts: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    // ADD TO CART
    addCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1;
        state.carts[itemIndex].prodTotalPrice =
          state.carts[itemIndex].qty * state.carts[itemIndex].price;
        state.totalPrice = state.totalPrice + action.payload.price;
      } else {
        const tempItem = {
          ...action.payload,
          qty: 1,
          prodTotalPrice: action.payload.price,
        };
        return {
          ...state,
          carts: [...state.carts, tempItem],
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
    },
    // DECRESE FROM CART

    // REMOVE ALL FROM CART
    removeCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload
      );
      const items = state.carts.filter((item) => item.id !== action.payload);
      return {
        ...state,
        carts: [...items],
        totalPrice: state.totalPrice - state.carts[itemIndex].prodTotalPrice,
      };
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
