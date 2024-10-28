import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productListSlice from "./features/productSlice";
import cartSlice from "./features/counter/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
