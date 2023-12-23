import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "@/types/product";
import { queryApi } from "@/store/query-api";

interface ProductState {
  data: Partial<ProductData>;
}

const initialState: ProductState = {
  data: {}
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // allow any child component to consume the api data without worry of duplicate network requests
    // requires a parent to call useGetProductsQuery
    builder.addMatcher(queryApi.endpoints.getProducts.matchFulfilled, (state, { payload }) => {
      if (payload[0]) state.data = payload[0];
    });
  }
});
