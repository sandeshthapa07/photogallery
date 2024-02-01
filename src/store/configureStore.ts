// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../redux/slice/wishlistSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;
