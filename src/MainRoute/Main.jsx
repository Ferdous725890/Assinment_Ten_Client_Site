import {createBrowserRouter, } from "react-router-dom";
import Home from "../Pages/Home";
import AllReviews from "../Component/AllReviews";
import MyReviews from "../Component/Navbar/MyReviews";
import GameWatchList from "../Component/Navbar/GameWatchList";
import AddReviews from "../Component/Navbar/AddReviews";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>
    },
  
    {
      path: "/allreciews",
      element:<AllReviews></AllReviews>
    },
    {
      path: "/addReviews",
      element:<AddReviews></AddReviews>
    },
    {
      path: "/myReviews",
      element:<MyReviews></MyReviews>
    },
    {
      path: "/gameWatchList",
      element:<GameWatchList></GameWatchList>
    },
  ]);

  export default router