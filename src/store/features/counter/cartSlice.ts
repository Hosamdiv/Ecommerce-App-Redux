import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import { addItemToShoppingCart } from "../../../utils/functions";

interface CounterState {
  cartItem: IProduct[];
}

const initialState: CounterState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ** Actions
    addItemToCartAction: (state, action: PayloadAction<IProduct>) => {
      state.cartItem = addItemToShoppingCart(state.cartItem, action.payload);
    },
  },
});

export const { addItemToCartAction } = cartSlice.actions;

export default cartSlice.reducer;
