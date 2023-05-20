import React from 'react';

const Banner = ({ banner }) => {
    return (
        <div className='h-[60vh]  container mx-auto flex items-center md:pl-32 rounded-lg' style={{ backgroundImage: `linear-gradient(80deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${banner.img})`, backgroundPosition: 'right',backgroundRepeat:'no-repeat' }}>
            <div className='text-white w-full text-center md:text-left md:w-[60%]'>
                <h1 className='text-2xl md:text-6xl font-semibold md:leading-[70px]'>{banner.title ? banner.title : ''}</h1>
                <p className='my-8 md:leading-8'>{banner.description}</p>
                <button className='text-md font-semibold bg-[#ff3811] text-white px-5 py-3 rounded-md'>Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;