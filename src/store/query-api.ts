import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductData } from "@/types/product";
import { PRODUCTS_API_PATH } from "../lib/constants";

export const queryApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductData[], void>({
      // api paths are defined as constants to be shared with testing libraries
      query: () => PRODUCTS_API_PATH
    })
  })
});
