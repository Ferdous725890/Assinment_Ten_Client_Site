import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { userLogIn, googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const hendleGooglebtn = () => {
    googleLogIn()
      .then((result) => {
        console.log("Google Login Successful:", result.user);
        navigate("/"); // সফল হলে হোমপেজে রিডিরেক্ট করবে
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
      });
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginuser = { email, password };
    console.log(email, password);
    console.log(loginuser);
    userLogIn(email, password)
      .then((result) => {
        console.log(result.user, "user creating ");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginuser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "user data");
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleLogIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>

                <p>
                  Creating Account
                  <Link to="/rejister">Register</Link>
                </p>

                <div>
                  <button
                    className="btn"
                    type="button"
                    onClick={hendleGooglebtn}
                  >
                    Google Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
