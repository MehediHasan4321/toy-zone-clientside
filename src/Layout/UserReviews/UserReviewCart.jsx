import React from 'react';
import Rating from '../ShareCompo/Rating/Rating';

const UserReviewCart = ({ review }) => {
    return (
        <div className='md:w-1/3 my-24 gap-4' data-aos="fade-up" data-aos-duration="1000">
            <div className='flex flex-col items-center'>
                <img className='w-32 h-32 rounded-full ' src={review?.img} alt="User Images" />
                <h3 className='font-semibold'>{review?.name}</h3>
                <Rating num={review?.rating} />
            </div>
            <p className='p-3'>{review?.review}</p>
        </div>
    );
};

export default UserReviewCart;