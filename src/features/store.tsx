import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import favoriteSlice from "./slices/favoriteSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    carts: cartSlice,
    favorites: favoriteSlice,
    search: searchSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
