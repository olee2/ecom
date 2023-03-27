import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICart from "../../models/ICart";
import IProduct from "../../models/IProduct";

const localStorageCart = localStorage.getItem("cart");

let initialState: ICart;

if (localStorageCart) {
  initialState = JSON.parse(localStorageCart);
} else {
  initialState = { cartItems: [], total: 0, amount: 0 };
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      const itemInCart = state.cartItems.find(
        (item: IProduct) => item.id === action.payload.id
      );
      if (itemInCart && itemInCart.amount) {
        itemInCart.amount += 1;
      } else {
        state.cartItems.push({ ...action.payload, amount: 1 });
      }
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount || 0;
        total += item.discountedPrice * (item.amount || 0);
      });
      state.amount = amount;
      state.total = Number(total.toFixed(2));
    },
  },
});

export const { addItem, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
