import { configureStore } from "@reduxjs/toolkit";
import { queryApi } from "./query-api";
import { productSlice } from "./product-slice";

// used to create useTypedSelector hook
type Store = ReturnType<typeof createStore>;
export type RootStoreState = ReturnType<Store["getState"]>;

// createStore is used instead of `export const store = configureStore...` to allow for isolated testing
// see src/components/product/product.stories.ts for an example of why this is important
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
