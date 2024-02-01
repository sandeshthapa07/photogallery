import { useSelector } from "react-redux";

const List = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wishlist = useSelector((state: any) => state.wishlist.wishlist);
  return (
    <div className="flex flex-col justify-center items-center">
      <p>Items in wishlist: {wishlist.length}</p>
    </div>
  );
};

export default List;
