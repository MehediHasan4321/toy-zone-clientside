import React from 'react';

const ImgGallary = () => {
    return (
        <div className='container mx-auto my-24'>
            <h1 className='text-center text-4xl font-semibold'>Our Images Gallary</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-24'>
                <div className='w-[370px] h-80 m-2 bg-[#F2F2F2]' data-aos="fade-up" data-aos-duration="1000">
                    <img className='w-full h-full p-2' src='https://m.media-amazon.com/images/I/61w7TOn0YyL.jpg' alt="Gallary Images" />
                </div>
                <div className='w-[370px] h-80 m-2 bg-[#F2F2F2]' data-aos="fade-up" data-aos-duration="1000">
                    <img className='w-full h-full p-2' src="https://m.media-amazon.com/images/I/61VSQNCI4RL._SX466_.jpg" alt="Gallary Images" />
                </div>
                <div className='w-[370px] h-80 m-2 bg-[#F2F2F2]' data-aos="fade-up" data-aos-duration="1000">
                    <img className='w-full h-full p-2' src="https://m.media-amazon.com/images/I/91iUn9jPMYL._AC_UF894,1000_QL80_.jpg" alt="Gallary Images" />
                </div>
                <div className='w-[370px] h-80 m-2 bg-[#F2F2F2]' data-aos="fade-up" data-aos-duration="1000">
                    <img className='w-full h-full p-2' src="https://m.media-amazon.com/images/I/81vNqNswHGL._SL1500_.jpg" alt="Gallary Images" />
                </div>
                <div className='w-[370px] h-80 m-2 bg-[#F2F2F2]' data-aos="fade-up" data-aos-duration="1000">
                    <img className='w-full h-full p-2' src="https://m.media-amazon.com/images/I/61Y1shuHJsL._AC_UF894,1000_QL80_.jpg" alt="Gallary Images" />
                </div>
                <div className='w-[370px] h-80 m-2 bg-[#F2F2F2]' data-aos="fade-up" data-aos-duration="1000">
                    <img className='w-full h-full p-2' src="https://m.media-amazon.com/images/I/81GOmHTaSWL._SL1500_.jpg" alt="Gallary Images" />
                </div>
                <div className='w-[370px] h-80 m-2 bg-[#F2F2F2]' data-aos="fade-up" data-aos-duration="1000">
                    <img className='w-full h-full p-2' src="https://m.media-amazon.com/images/I/81GOmHTaSWL._SL1500_.jpg" alt="Gallary Images" />
                </div>
                <div className='w-[370px] h-80 m-2 bg-[#F2F2F2]' data-aos="fade-up" data-aos-duration="1000">
                    <img className='w-full h-full p-2' src="https://m.media-amazon.com/images/I/81GOmHTaSWL._SL1500_.jpg" alt="Gallary Images" />
                </div>

            </div>
        </div>
    );
};

export default ImgGallary;