import { configureStore } from "@reduxjs/toolkit";
import { queryApi } from "./query-api";
import { productSlice } from "./product-slice";

type Store = ReturnType<typeof createStore>;
export type RootStoreState = ReturnType<Store["getState"]>;

export function createStore() {
  return configureStore({
    reducer: {
      [queryApi.reducerPath]: queryApi.reducer,
      [productSlice.reducerPath]: productSlice.reducer
    },
    // add the product api middleware to the store
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(queryApi.middleware)
  });
}
