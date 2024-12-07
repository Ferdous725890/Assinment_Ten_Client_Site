import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Navbar from "./Navbar";
import { Link,  } from "react-router-dom";
import { updateProfile } from "firebase/auth";


const Register = () => {
  const { userRejister } = useContext(AuthContext);

  const handelSubmite = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const registerUser = { name, photo, email, password };
    console.log(registerUser);

    // Register user
    userRejister(email, password)
      .then((result) => {
        const user = result.user;

        // Update profile with name and photo URL
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            console.log("Profile updated successfully!");
            console.log("Updated User:", user);
         
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });

         

      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handelSubmite} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;












// import { useContext } from "react";
// import { AuthContext } from "./AuthProvider";
// import Navbar from "./Navbar";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const { userRejister } = useContext(AuthContext);
//   const handelSubmite = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const photo = form.photo.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const registerUser = { name, photo, email, password };

//     console.log(registerUser);
//     userRejister(email, password)
//       .then((result) => {
//         console.log(result.user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Login now!</h1>
//           </div>
//           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//             <form onSubmit={handelSubmite} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   name="name"
//                   type="text"
//                   placeholder="Enter Your Name"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Photo URL</span>
//                 </label>
//                 <input
//                   name="photo"
//                   type="url"
//                   placeholder="Photo_URL"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   name="password"
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                 />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">Login</button>
//               </div>

//               <p>
//                 Already Have An Account
//                 <Link to="/login">Login here</Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
