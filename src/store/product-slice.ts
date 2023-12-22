import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "@/types/product";
import { api } from "@/store/api";

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
    builder.addMatcher(api.endpoints.getProducts.matchFulfilled, (state, { payload }) => {
      if (payload[0]) state.data = payload[0];
    });
  }
});
