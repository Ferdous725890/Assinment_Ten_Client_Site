import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "../../Pages/Footer";
import { AuthContext } from "./AuthProvider";

const AddReviews = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const gameTitle = form.gametitle.value;
    const gameRating = form.gamingReating.value;
    const description = form.desCritption.value;
    const coverimage = form.coverimage.value;
    const publishingyear = form.publishingyear.value;
    const newReviewAdd = {
      gameTitle,
      gameRating,
      description,
      coverimage,
      publishingyear,
      user_email: user.email,
    
    };

    // Sending data to the backend
    fetch("http://localhost:5000/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReviewAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Review submitted successfully!");
          form.reset(); // ✅ Clear form after submission
        }
      })
      .catch((error) => console.error("Error submitting review:", error)); // ✅ Improved Error Handling
  };

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Submit Your Review</h2>
        <h2>{user.email}</h2>
        <form onSubmit={handleReviewSubmit}>
          <div className="mb-4">
            <label htmlFor="gametitle" className="block font-medium mb-1">
              Game Cover Image
            </label>
            <input
              id="coverimage"
              type="url"
              placeholder="You Cover Image Link"
              name="coverimage"
              className="input input-bordered w-full max-w-md"
              required
            />
            <label htmlFor="gametitle" className="block font-medium mb-1">
              Game Title
            </label>
            <input
              id="gametitle"
              type="text"
              placeholder="Type here"
              name="gametitle"
              className="input input-bordered w-full max-w-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gametitle" className="block font-medium mb-1">
              Publishing year
            </label>
            <input
              id="publishingyear"
              type="date"
              placeholder="Publishing year"
              name="publishingyear"
              className="input input-bordered w-full max-w-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gamingReating" className="block font-medium mb-1">
              Game Rating
            </label>
            <input
              id="gamingReating"
              type="number"
              placeholder="Rate out of 10"
              name="gamingReating"
              className="input input-bordered w-full max-w-md"
              min="1"
              max="10"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="desCritption" className="block font-medium mb-1">
              Review Description
            </label>
            <textarea
              id="desCritption"
              placeholder="Write a short description"
              name="desCritption"
              className="textarea textarea-bordered w-full max-w-md"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Review
          </button>
        </form>
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AddReviews;
