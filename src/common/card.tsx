/* eslint-disable @typescript-eslint/no-explicit-any */
// ImageCard.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/slice/wishlistSlice";

import { FaHeart, FaRegHeart } from "react-icons/fa";

interface ImageCardProps {
  imageUrl: string;
  title: string;
  id: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, id }) => {
  //   const isItemInWishlist = useSelector((state: any) =>
  //     state.wishlist.items.includes(id)
  //   );

  const isItemInWishlist = useSelector((state: any) =>
    state.wishlist.wishlist.includes(id)
  );

  const dispatch = useDispatch();

  const handleAddToWishlist = (id: number) => {
    dispatch(addToWishlist(id.toString()));
  };

  //   const handleRemoveFromWishlist = () => {
  //     dispatch(removeFromWishlist("Item 1"));
  //   };

  return (
    <Link
      to={`/products/${id}`}
      className="border relative border-gray-300  rounded p-4 m-4 w-full cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {/* Wishlist button */}
      <button
        className={`absolute top-2 right-2 ${
          isItemInWishlist ? "text-red-500" : "text-gray-500"
        }`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleAddToWishlist(id);
          console.log("clicked"); // Prevent the Link from triggering
          // Add your wishlist logic here
        }}
      >
        {isItemInWishlist ? <FaRegHeart /> : <FaHeart />}
      </button>
      <figure className="m-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded"
        />
        <figcaption className="mt-2 font-medium">
          {title.charAt(0).toUpperCase() + title?.slice(1)}
        </figcaption>
      </figure>
    </Link>
  );
};

export default ImageCard;
