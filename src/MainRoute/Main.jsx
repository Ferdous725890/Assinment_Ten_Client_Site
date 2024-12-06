import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AllReviews from "../Component/AllReviews";
import MyReviews from "../Component/Navbar/MyReviews";
import GameWatchList from "../Component/Navbar/GameWatchList";
import AddReviews from "../Component/Navbar/AddReviews";
import Rejister from "../Component/Navbar/Register";
import Login from "../Component/Navbar/Login";
import HighestRatedGame from "../Component/Navbar/HighestRatedGame";
import ReviewsDetaisPageSpecifick from "../Component/Navbar/ReviewsDetaisPageSpecifick";
import Edite from "../Component/Navbar/Edite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HighestRatedGame></HighestRatedGame>,
        loader: () => fetch('http://localhost:5000/reviews')
      }
    ]
  },
  {
    path: "/allreciews",
    element: <AllReviews></AllReviews>,
    loader: () => fetch("http://localhost:5000/reviews")
  },
  {
    path: "/addReviews",
    element: <AddReviews></AddReviews>
  },
  {
    path: "/myReviews",
    element: <MyReviews></MyReviews>
  },
  {
    path: "/gameWatchList",
    element: <GameWatchList></GameWatchList>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/rejister",
    element: <Rejister></Rejister>
  },
  {
    path: "/review/:id", // এখানে id প্যারামিটার থাকবে
    element: <ReviewsDetaisPageSpecifick></ReviewsDetaisPageSpecifick>, 
  },
  {
    path:"edit/:id",
    element:<Edite></Edite>,
    loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)

  }
 
]);

export default router;
