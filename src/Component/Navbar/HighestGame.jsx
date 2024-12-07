import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate হুক ইম্পোর্ট করা

const HighestGame = ({ highestGame }) => {
    const { _id, gameTitle, gameRating, coverimage, description } = highestGame;
    const navigate = useNavigate(); // নেভিগেট ফাংশন

    const handleDetails = (_id) => {
        console.log("Button clicked, _id:", _id);
        // নেভিগেট করা হবে ReviewsDetaisPageSpecifick পেজে
        navigate(`/review/${_id}`);
    };

    return (
        <div className='border p-4 rounded shadow'>
            <img src={coverimage} alt={gameTitle} className='w-full h-40 object-cover rounded' />
            <h2 className='text-lg font-bold mt-2'>{gameTitle}</h2>
            <p className='text-gray-600'>Rating: {gameRating}</p>
            <p className='text-sm text-gray-500'>{description?.slice(0, 100)}...</p>
            <p>hello</p>
            <button 
                onClick={() => handleDetails(_id)} 
                className='mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                Explore Details
            </button>
        </div>
    );
};

export default HighestGame;

