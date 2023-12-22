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
  reducers: {
    reset(state) {
      state.data = {};
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(queryApi.endpoints.getProducts.matchFulfilled, (state, { payload }) => {
      if (payload[0]) state.data = payload[0];
    });
  }
});
