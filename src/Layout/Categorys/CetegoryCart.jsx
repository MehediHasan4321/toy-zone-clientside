import React from 'react';
import { Link } from 'react-router-dom';

const CetegoryCart = ({ cate }) => {
    const { name, category, img } = cate || {}
    return (
        <Link to={`/categoryToys/${category}`}>
            <div className='w-[370px] h-[420px] p-5 border-2 bg-[#F2F2F2] hover:shadow-xl'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <img className='w-full h-80 my-3' src={img} alt="" />
                <small>Shop Now</small>
            </div>
        </Link>
    );
};

export default CetegoryCart;