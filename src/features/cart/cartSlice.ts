import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [], total: 0, amount: 0 };

const cartSlice = createSlice({ name: "cart", initialState, reducers: {} });

export default cartSlice.reducer;
