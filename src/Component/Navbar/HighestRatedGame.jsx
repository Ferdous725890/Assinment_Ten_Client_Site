import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HighestGame from './HighestGame';

const HighestRatedGame = () => {
    const data = useLoaderData();

    // সর্বোচ্চ রেটিং প্রাপ্ত গেম ফিল্টার এবং সাজানো
    const highestRatedGames = data
        .sort((a, b) => b.gameRating - a.gameRating) // বড় থেকে ছোট রেটিং অনুযায়ী সাজানো
        .slice(0, 6); // সর্বোচ্চ ৬টি গেম নির্বাচন করা

    return (
        <div className='grid grid-cols-3 gap-4 p-4'>
            {highestRatedGames.map((game) => (
                <HighestGame highestGame={game} key={game._id}></HighestGame>
            ))}
        </div>
    );
};

export default HighestRatedGame;
