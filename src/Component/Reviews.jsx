import React, { useContext } from "react";
import { auth } from "./Firebase.init";
import { AuthContext } from "./Navbar/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Reviews = ({ review }) => {

const navigate = useNavigate()
  const {_id,coverimage, gameTitle,gameRating, description } = review;
  const handelreviewsDtails = (_id) =>{
    console.log(_id, "details btn click");
    navigate(`/review/${_id}`);

  }
  return (
    <div>
    

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={coverimage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          {gameTitle}
            <div className="badge text-blue-500lue">Pro Game</div>
          </h2>
          <p>{ gameRating}</p>
          <p>  {description}</p>
          <div className="card-actions justify-end">
            <div onClick={()=>handelreviewsDtails(_id)} className="badge badge-outline">Reviews Details</div>
            <div className="badge badge-outline">Explore Details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
