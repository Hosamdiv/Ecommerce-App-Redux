import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath:"products",
  tagTypes: ["products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builedr) => ({
    getProductList: builedr.query({
      query: () => {
        return {
          url: "/products",
        };
      },
    }),
  }),
});

export const { useGetProductListQuery } = productsApiSlice;
