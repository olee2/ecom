import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
  return result;
};

const store = configureStore({
  reducer: { cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
