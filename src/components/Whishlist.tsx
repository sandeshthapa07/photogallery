// src/components/WishlistPage.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/slice/wishlistSlice";

const WishlistPage: React.FC = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wishlist = useSelector((state: any) => state.wishlist.wishlist);

  const handleAddToWishlist = () => {
    dispatch(addToWishlist("Item 1"));
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeFromWishlist("Item 1"));
  };

  return (
    <div>
      <h1>Wishlist</h1>
      <p>Items in wishlist: {wishlist.length}</p>
      <button onClick={handleAddToWishlist}>Add to Wishlist</button>
      <button onClick={handleRemoveFromWishlist}>Remove from Wishlist</button>
      {/* Add more buttons or UI elements as needed */}
    </div>
  );
};

export default WishlistPage;
