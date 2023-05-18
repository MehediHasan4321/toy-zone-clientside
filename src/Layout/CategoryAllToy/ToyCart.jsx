import React from 'react';

const ToyCart = ({ toy }) => {
    const { name, img, rating, price } = toy
    return (
        <div className='w-96 h-[520px] border-[1px] rounded-md relative'>
            <div className='w-full h-80 bg-gray-300 p-3'>
                <img className='w-full h-full' src={img} alt="" />
            </div>
            <div className='p-4'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <div className='flex justify-between items-center mt-5'>
                    <h4 className='text-lg font-semibold'>Price : ${price}</h4>
                    <h4>Rating{rating}</h4>
                </div>
                <button className='bg-amber-400 w-[350px] py-2 font-semibold text-lg absolute bottom-2 rounded-md'>View Details</button>
            </div>
        </div>
    );
};

export default ToyCart;