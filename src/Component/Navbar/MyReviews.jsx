import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Navbar from "./Navbar";
import Edite from "./Edite";
import { Link, useNavigate } from "react-router-dom";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/myReviews?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching reviews:", error));
    }
  }, [user]);

  if (loading) {
    return <div>Loading your reviews...</div>;
  }

  const handleDeleted = (_id) => {
    console.log("button click", _id);
    fetch(`http://localhost:5000/myReviews/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(" Deleted Result ", data);
      });
  };


  // const handelEditOrUpdate = (_id) =>{
  //   console.log("Edit Button is Clicked", _id);
  //   navigate(`/Edite`)
    
  // }

  return (
    <div>
      <Navbar></Navbar>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">My Reviews</h2>
        {reviews.length > 0 ? (
          <table className="table-auto border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Game Title</th>
                <th className="border border-gray-300 px-4 py-2">Rating</th>
                <th className="border border-gray-300 px-4 py-2">
                  Description
                </th>
                <th className="border border-gray-300 px-4 py-2">Year</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.gameTitle}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.gameRating}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.publishingYear}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button onClick={() => handleDeleted(review._id)}>
                      deleted
                    </button>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link to={`/edit/${review._id}`}>
                      <button>Edit</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">You haven't added any reviews yet.</p>
        )}
      </div>

      <div className="overflow-x-auto"></div>
    </div>
  );
};

export default MyReviews;
