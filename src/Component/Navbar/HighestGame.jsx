import React from "react";
import { useNavigate } from "react-router-dom";
// react icons
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

const HighestGame = ({ highestGame }) => {
  const { _id, gameTitle, gameRating, coverimage, description } = highestGame;
  const navigate = useNavigate();

  const handleDetails = (_id) => {
    navigate(`/review/${_id}`); // ডিটেইলস পেজে নেভিগেট
  };

  return (
    <div className="">
      <div>
        <div className="w-full sm:w-[80%] lg:w-[90%] shadow-md h-[500px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group">
          {/*  icons  */}
          <div className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
            <FaRegHeart className="text-[1.1rem] text-gray-600" />
            <div className="flex items-center gap-[5px]">
              <MdOutlineTimer className="text-orange-700 text-[1.1rem]" />
              <p className="text-[1rem] text-orange-700">5 min</p>
            </div>
          </div>

          {/*  image  */}
          <img
            src={coverimage}
            alt="animated_card"
            className="w-full h-[70%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out"
          />

          {/*  texts  */}
          <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full">
            <p className="text-[1rem] uppercase text-gray-600">Game Title : {gameTitle}</p>
            <p className="text-[0.9rem] text-gray-600 mt-2">Game Reating :{gameRating}</p>

            {/* 
                <button
        onClick={() => handleDetails(_id)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Explore Details
      </button> */}

            <button
             onClick={() => handleDetails(_id)}
            className="relative inline-flex items-center border border-gray-300 hover:border-none justify-center px-6 py-1 overflow-hidden font-mono  tracking-tighter text-gray-500 rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-300"></span>
              <span className="relative text-text group-hover:text-white">
              Explore Details
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* <img
        src={coverimage}
        alt={gameTitle}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{gameTitle}</h2>
      <p className="text-gray-600">Rating: {gameRating}</p>
      <p className="text-sm text-gray-500">{description?.slice(0, 100)}...</p>
      <button
        onClick={() => handleDetails(_id)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Explore Details
      </button> */}
    </div>
  );
};

export default HighestGame;

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // useNavigate হুক ইম্পোর্ট করা

// const HighestGame = ({ highestGame }) => {
//     const { _id, gameTitle, gameRating, coverimage, description } = highestGame;
//  console.log({_id, gameTitle, gameRating, coverimage, description});
//     const navigate = useNavigate();

//     const handleDetails = (_id) => {
//         console.log("Button clicked, _id:", _id);

//         navigate(`/review/${_id}`);
//     };

//     return (
//         <div className='border p-4 rounded shadow'>

//             helow
//             <img src={coverimage}  className='w-full h-40 object-cover rounded' />
//             <h2 className='text-lg font-bold mt-2'>{gameTitle}</h2>
//             <p className='text-gray-600'>Rating: {gameRating}</p>
//             <p className='text-sm text-gray-500'>{description?.slice(0, 100)}...</p>
//             <p>hello</p>
//             <button
//                 onClick={() => handleDetails(_id)}
//                 className='mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
//                 Explore Details
//             </button>
//         </div>
//     );
// };

// export default HighestGame;
