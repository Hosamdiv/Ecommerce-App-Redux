/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces";
import axiosInstance from "../../config/axios.config";

interface IProductState {
  loading: boolean;
  productList: IProduct[];
  error: any;
}

const initialState: IProductState = {
  loading: true,
  productList: [],
  error: null,
};


export const getProductList = createAsyncThunk(
  "getProductList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    // ** GET Request
    try {
      const { data } = await axiosInstance.get(
        "/products?limit=10&select=title,price,thumbnail"
      );
      console.log(data);
      
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productListSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      console.log(action.payload);
        
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.loading = false;
        state.productList = [];
        state.error = action.error; // Use action.error instead of action.payload for rejected cases
      });
  },
});

export default productListSlice.reducer;



