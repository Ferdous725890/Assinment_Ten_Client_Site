import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../../Pages/Footer";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import Rating from "./testsone";



// react icons
import { FaStar } from "react-icons/fa";

const AddReviews = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);


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
      user_email: user?.email,
    };

    console.log(newReviewAdd, "add review");

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
          // Show success SweetAlert
          Swal.fire({
            title: "Success!",
            text: "Review submitted successfully!",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset(); // Clear form after submission
        }
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
        // Show error SweetAlert
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl border-gray-200 px-20 py-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-green-500">
              Submit Your Review
            </h2>
            <p className="text-sm text-gray-500 mt-2">{user?.email}</p>
          </div>
          <form onSubmit={handleReviewSubmit}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="relative block">
                  <input
                    type="text"
                    name="gametitle"
                    id="gametitle"
                    className="peer border-gray-300 border rounded-md px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none placeholder-transparent"
                  />
                  <span className="absolute top-3 left-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white peer-focus:px-1 transition-all text-gray-500">
                    Game Title
                  </span>
                </label>
              </div>
              <div>
                <label className="relative block">
                  <input
                    type="url"
                    name="coverimage"
                    id="coverimage"
                    className="peer border-gray-300 border rounded-lg px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none"
                  />
                  <span className="absolute top-3 left-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white peer-focus:px-1 transition-all text-gray-500">
                    Game Cover Image (URL)
                  </span>
                </label>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Publishing Year
                </label>
                <input
                  type="date"
                  name="publishingyear"
                  id="publishingyear"
                  className="border-gray-300 border rounded-lg px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none"
                  required
                />
              <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;
        return (
          <FaStar
            key={starRating}
            className={`cursor-pointer ${
              starRating <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            size={24}
            onClick={() => {
              setRating(starRating);
              console.log(`You clicked on ${starRating} star`);
            }}
          />
        );
      })}
    </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Game Rating (Out of 10)
                <p>
                  hel {rating}
                </p>
                </label>
                
                <Rating> </Rating>
                <input
                  type="text"
                  placeholder=" Game Rating (Out of 10)"
                  name="gamingReating"
                  id="gamingReating"
                  className="border-gray-300 border rounded-lg px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none"
                  min="1"
                  max="5"
                  required
                />
              </div>





            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">
                Review Description
              </label>
              <textarea
                name="desCritption"
                id="desCritption"
                placeholder="Write a short description..."
                className="border-gray-300 border rounded-lg px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none resize-none h-32"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <Footer />
      </footer>
    </div>
  );
};

export default AddReviews;







                                










// import React, { useContext } from "react";
// import Navbar from "./Navbar";
// import Footer from "../../Pages/Footer";
// import { AuthContext } from "./AuthProvider";

// const AddReviews = () => {
//   const { user, userLogOut } = useContext(AuthContext);

//   const handleReviewSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const gameTitle = form.gametitle.value;
//     const gameRating = form.gamingReating.value;
//     const description = form.desCritption.value;
//     const coverimage = form.coverimage.value;
//     const publishingyear = form.publishingyear.value;

//     const newReviewAdd = {
//       gameTitle,
//       gameRating,
//       description,
//       coverimage,
//       publishingyear,
//       user_email: user?.email,
//     };

//     console.log(newReviewAdd, "add review ");

//     // Sending data to the backend
//     fetch("http://localhost:5000/addUser", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newReviewAdd),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           alert("Review submitted successfully!");
//           form.reset(); // ✅ Clear form after submission
//         }
//       })
//       .catch((error) => console.error("Error submitting review:", error)); // ✅ Improved Error Handling
//   };

//   return (
//     // <div>
//     //   <header>
//     //     <Navbar></Navbar>
//     //   </header>

//     //   <div className="border border-red-500">
//     //     <div className="text-center">
//     //       <h2 className="text-2xl font-bold mb-4">Submit Your Review</h2>
//     //       <h2>{user?.email}</h2>
//     //     </div>
//     //     <div className="border border-red-500 flex mx-auto w-8/12 mb-20 ">
//     //       <form onSubmit={handleReviewSubmit}>
//     //         <div className="">
//     //           <div className=" border border-blue-500 flex">
//     //             <div className="w-[330px] ml-2 mr-10">
//     //               {/* <label htmlFor="gametitle" className="block font-medium mb-1">
//     //                 Game Title
//     //               </label>
//     //               <input
//     //                 id="gametitle"
//     //                 type="text"
//     //                 placeholder="Type here"
//     //                 name="gametitle"
//     //                 className="input input-bordered max-w-md w-full border border-red-50"
//     //                 required
//     //               /> */}

//     //               <label className="relative w-[80%]">
//     //                 <input
//     //                   type="text"
//     //                   name="gametitle"
//     //                   id="gametitle"
//     //                   className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
//     //                 />
//     //                 <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
//     //                   Your name
//     //                 </span>
//     //               </label>
//     //             </div>
//     //             <div className="w-[330px]  mr-10">
//     //               {/* <label htmlFor="gametitle" className="block font-medium mb-1">
//     //                 Game Cover Image
//     //               </label>
//     //               <input
//     //                 id="coverimage"
//     //                 type="url"
//     //                 placeholder="You Cover Image Link"
//     //                 name="coverimage"
//     //                 className="input input-bordered w-full max-w-md"
//     //                 required
//     //               /> */}

//     //               <label className="relative w-[80%]">
//     //                 <input
//     //                   type="url"
//     //                   name="coverimage"
//     //                   id="coverimage"
//     //                   className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
//     //                 />
//     //                 <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
//     //                   Game Cover Image
//     //                 </span>
//     //               </label>
//     //             </div>
//     //           </div>
//     //         </div>

//     //         <div className="flex  border border-yellow-500 mt-10 w-full space-x-5">
//     //           <div className="mb-4">
//     //             <label htmlFor="gametitle" className="block font-medium mb-1">
//     //               Publishing year
//     //             </label>
//     //             <input
                
//     //               id="publishingyear"
//     //               type="date"
//     //               placeholder="Publishing year"
//     //               name="publishingyear"
//     //               className="input input-bordered max-w-md w-[400px] "
//     //               required
//     //             />
//     //           </div>

//     //           <div className="mb-4">
//     //             <label
//     //               htmlFor="gamingReating"
//     //               className="block font-medium mb-1"
//     //             >
//     //               Game Rating
//     //             </label>
//     //             <input
//     //               id="gamingReating"
//     //               type="number"
//     //               placeholder="Rate out of 10"
//     //               name="gamingReating"
//     //               className="input input-bordered  max-w-md  w-[400px]"
//     //               min="1"
//     //               max="10"
//     //               required
//     //             />
//     //           </div>
//     //         </div>

//     //         <div className="mb-4 w-full border border-red-500 ">
//     //           <label htmlFor="desCritption" className="block font-medium mb-1">
//     //             Review Description
//     //           </label>
//     //           <textarea
//     //             id="desCritption"
//     //             placeholder="Write a short description"
//     //             name="desCritption"
//     //             className="textarea textarea-bordered max-w-md w-[800px]"
//     //             required
//     //           ></textarea>
//     //         </div>
//     //         <button type="submit" className="btn btn-primary">
//     //           Submit Review
//     //         </button>
//     //       </form>
//     //     </div>
//     //   </div>

//     //   <footer>
//     //     <Footer></Footer>
//     //   </footer>
//     // </div>

// <div className="min-h-screen flex flex-col">
//   <header>
//     <Navbar />
//   </header>

  

//   <main className="flex-grow py-8 bg-gray-50">

//     <div className="max-w-5xl mx-auto bg-white rounded-xl  shadow-2xl  border-gray-200 px-20 py-10">
//     <div className="text-center mb-10">
//       <h2 className="text-2xl font-extrabold  text-green-500">Submit Your Review</h2>
//       <p className="text-sm text-gray-500 mt-2">{user?.email}</p>
//     </div>
//       <form onSubmit={handleReviewSubmit}>
//         {/* Row 1 */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ">
//           <div>
//             <label className="relative block">
//               <input
//                 type="text"
//                 name="gametitle"
//                 id="gametitle"
//                 className="peer border-gray-300 border rounded-md px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none placeholder-transparent"
//               />
//               <span className="absolute top-3 left-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white peer-focus:px-1 transition-all text-gray-500">
//                 Game Title
//               </span>


              
//             </label>
//           </div>
//           <div>
//             <label className="relative block">
//               <input
//                 type="url"
//                 name="coverimage"
//                 id="coverimage"
//                 className="peer border-gray-300 border rounded-lg px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none"
//               />
//               <span className="absolute top-3 left-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white peer-focus:px-1 transition-all text-gray-500">
//                 Game Cover Image (URL)
//               </span>
//             </label>
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           <div>
//             <label className="block text-gray-700 mb-2 font-medium">
//               Publishing Year
//             </label>
//             <input
//               type="date"
//               name="publishingyear"
//               id="publishingyear"
//               className="border-gray-300 border rounded-lg px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 mb-2 font-medium">
//               Game Rating (Out of 10)
//             </label>
//             <input
//               type="number"
//               placeholder=" Game Rating (Out of 10)"
//               name="gamingReating"
//               id="gamingReating"
//               className="border-gray-300 border rounded-lg px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none"
//               min="1"
//               max="10"
//               required
//             />
//           </div>
//         </div>

//         {/* Description */}
//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2 font-medium">
//             Review Description
//           </label>
//           <textarea
//             name="desCritption"
//             id="desCritption"
//             placeholder="Write a short description..."
//             className="border-gray-300 border rounded-lg px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none resize-none h-32"
//             required
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
//           >
//             Submit Review
//           </button>
//         </div>
//       </form>
//     </div>
//   </main>

//   <footer className="bg-gray-800 text-white py-6">
//     <Footer />
//   </footer>
// </div>



//   );
// };

// export default AddReviews;
