import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Login = () => {
    const { userLogIn } = useContext(AuthContext)
    const handleLogIn = (event)=>{
            event.preventDefault()
            const form = event.target;
            const email  = form.email.value;
            const password  = form.password.value;
            const loginuser = {email, password}
            console.log(loginuser);
            userLogIn(email, password)
            .then(result =>{
              console.log(result.user);
            })
            .catch(error=>{
              console.log(error);
            })
           
    }
    return (
        <div>
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
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;