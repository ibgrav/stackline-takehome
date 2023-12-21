// I could have used the redux package directly, but redux toolkit is now the recommend approach for a new app
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./products-api";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer
  },
  // add the product api middleware to the store
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});
