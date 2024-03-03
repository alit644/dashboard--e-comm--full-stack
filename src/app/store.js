import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import { productsApi } from "./features/cart/cartApiSlice";
import globalSlice from "./features/global";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    global: globalSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productsApi.middleware),
});
