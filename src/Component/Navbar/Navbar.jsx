import { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { auth } from "../Firebase.init";
import ChangeThem from "./ThemChang";


const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };
  return (
    <div>
      <div class="navbar bg-base-100 border  justify-between">
        <div class=" border ">
          <Link to="/" class="text-xl">Game Review</Link>
          {/* <p className="ml-10 font-bold text"> {user?.email} </p> */}
          <p className="ml-10 font-bold text text red "> {user?.email} </p>
         
        </div>
        <div>
          <div className="navbar-center  lg:flex">
            <ul className="menu menu-horizontal px-1">
              <Link className="text-blue-700 font-bold text-center ml-5 border py-3 px-4 rounded-lg" to="/">Home</Link>
              <Link className="text-blue-700 font-bold text-center ml-5 border py-3 px-4 rounded-lg" to="/allreciews">All Reviews</Link>
              <Link className="text-blue-700 font-bold text-center ml-5 border py-3 px-4 rounded-lg" to="/addReviews">Add Reviews</Link>
              <Link className="text-blue-700 font-bold text-center ml-5 border py-3 px-4 rounded-lg" to="/myReviews">My Reviews</Link>
              <Link className="text-blue-700 font-bold text-center ml-5 border py-3 px-4 rounded-lg" to="/gameWatchList">Game WatchList</Link>
             
            </ul>
          </div>
        </div>
        <div class="flex-none">
            {/* // ! LogIN  */}
           
          <div class="dropdown justify-end">
           <ChangeThem></ChangeThem>
          </div>
          {
            user ? 
            <div class="dropdown dropdown-end">
          
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div class="w-10 rounded-full">
               {
                user?  <img src={user.photoURL} alt="" /> :"user nei"
               }
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
              <p className="ml-10 font-bold text text red "> {user?.displayName} </p>

              </li>
              <>
               <button onClick={handleLogOut}>Logout</button>
              </>
            </ul>
          </div>
            :
            <div>
            <Link to="/login">
            Login
              </Link>
            </div>
          }




          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
