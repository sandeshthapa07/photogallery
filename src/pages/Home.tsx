/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Skeleton from "../common/Skeleton";
import ImageCard from "../common/card";
import useApi from "../hooks/useApi";
import { getPhotoList } from "../services/photolist";
import useDebounce from "../hooks/useDebounce";
import SearchPhoto from "../common/SearchPhoto";
import { PhotoList } from "../dtos/allproductsDTO";
import { useSelector } from "react-redux";

const Home = () => {
  const { loading, error, data } = useApi(getPhotoList);
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(inputValue, 500);

  // Filter data based on the search term (case-insensitive)
  const filteredData: PhotoList[] = data?.filter((item) =>
    item.title.toLowerCase().includes((debouncedValue || "").toLowerCase())
  );

  const wishlist = useSelector((state: any) => state.wishlist.wishlist);
  console.log(wishlist);

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="flex flex-col gap-10 px-16">
      <h1>Home</h1>
      <SearchPhoto inputValue={inputValue} setInputValue={setInputValue} />

      <section className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {loading
          ? Array.from({ length: 25 }, (_, index) => (
              <Skeleton height="h-[270px]" width="w-[300px]" key={index} />
            ))
          : filteredData?.map((imageData) => (
              <ImageCard
                key={imageData.id}
                id={imageData.id}
                imageUrl={imageData.thumbnailUrl}
                title={imageData.title}
              />
            ))}
      </section>
    </div>
  );
};

export default Home;
