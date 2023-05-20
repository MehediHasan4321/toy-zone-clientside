import React from 'react';
import Rating from '../ShareCompo/Rating/Rating';
import { Link } from 'react-router-dom';

const ToyCart = ({ toy }) => {
    const { name, img, rating, price,_id } = toy
    return (
        <div className='w-96 h-[520px] border-[1px] rounded-md relative'>
            <div className='w-full h-80 bg-[#F2F2F2] p-3'>
                <img className='w-full h-full' src={img} alt="" />
            </div>
            <div className='p-4'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <div className='flex justify-between items-center mt-5'>
                    <h4 className='text-lg font-semibold'>Price : ${price}</h4>
                    <Rating num={rating}/>
                </div>
                <Link to={`/toyDetails/${_id}`} className='bg-amber-400 w-[350px] py-2 font-semibold text-lg absolute bottom-2 rounded-md text-center'>View Details</Link>
            </div>
        </div>
    );
};

export default ToyCart;