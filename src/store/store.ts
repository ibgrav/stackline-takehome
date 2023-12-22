import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { productSlice } from "./product-slice";

export type RootStoreState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [productSlice.reducerPath]: productSlice.reducer
  },
  // add the product api middleware to the store
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
