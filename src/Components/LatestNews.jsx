import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-5 items-center bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-1' pauseOnHover={true}speed={60}> <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores  </p></Marquee>
           
        </div>
    );
};

export default LatestNews;