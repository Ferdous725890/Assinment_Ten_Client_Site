import React from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "./Reviews";
import Navbar from "./Navbar/Navbar";
import Footer from "../Pages/Footer";

const AllReviews = () => {
  const allReviewsData = useLoaderData();

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <h2>All-Reviews</h2>
      <div className="grid grid-cols-3">
        {allReviewsData.map((review) => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AllReviews;
