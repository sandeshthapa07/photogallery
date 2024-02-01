import { createBrowserRouter } from "react-router-dom";
import WishlistPage from "../components/Whishlist";
import Home from "../pages/Home";
import List from "../pages/List";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/image/:id",
    element: <WishlistPage />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);
