// src/redux/wishlistSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  wishlist: string[];
}

const loadInitialState = (): WishlistState => {
  const storedState = localStorage.getItem("wishlistState");
  return storedState ? JSON.parse(storedState) : { wishlist: [] };
};

const initialState: WishlistState = loadInitialState();

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<string>) => {
      console.log(action.payload, "payt");
      state.wishlist.push(action.payload);
      console.log(state.wishlist.push(action.payload), "state");
      localStorage.setItem("wishlistlist", JSON.stringify(state));
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist.filter((item) => item !== action.payload);
      localStorage.setItem("wishlistlist", JSON.stringify(state));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
