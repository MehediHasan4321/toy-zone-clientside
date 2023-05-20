import React from 'react';

const ImgGallaryCart = ({img}) => {
    return (
        <div className='w-[370px] h-80 m-2 bg-[#F2F2F2]'data-aos="zoom-in-down" data-aos-duration="3000">
            <img className='w-full h-full p-2 hover:scale-110' src={img.img} alt="Gallary Images" />
        </div>
    );
};

export default ImgGallaryCart;