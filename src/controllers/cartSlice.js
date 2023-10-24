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
        if (action.payload.addQuantity) {
          state.carts[itemIndex].qty += action.payload.qty;
          state.totalPrice =
            state.totalPrice + action.payload.price * action.payload.qty;
        } else {
          state.carts[itemIndex].qty += 1;
          state.totalPrice = state.totalPrice + action.payload.price;
        }
        state.carts[itemIndex].prodTotalPrice =
          state.carts[itemIndex].qty * action.payload.price;
      } else {
        const tempItem = {
          ...action.payload,
          qty: action.payload.qty,
          prodTotalPrice: action.payload.price * action.payload.qty,
        };

        return {
          ...state,
          carts: [...state.carts, tempItem],
          totalPrice:
            state.totalPrice + action.payload.price * action.payload.qty,
        };
      }
    },

    removeCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      // REMOVE ALL FROM CART
      if (action.payload.clear || state.carts[itemIndex].qty === 1) {
        const items = state.carts.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          carts: [...items],
          totalPrice: state.totalPrice - state.carts[itemIndex].prodTotalPrice,
        };
      }
      // DECRESE FROM CART
      else {
        state.carts[itemIndex].qty -= 1;
        state.carts[itemIndex].prodTotalPrice -= state.carts[itemIndex].price;
        state.totalPrice = state.totalPrice - action.payload.price;
      }
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
