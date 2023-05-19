import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Rating from '../../Layout/ShareCompo/Rating/Rating';
import { FaCar, FaCashRegister, FaChartBar, FaFacebookMessenger, FaInfo, FaInfoCircle, FaLocationArrow } from 'react-icons/fa';

const ToyDetails = () => {
    const toy = useLoaderData({})
    return (
        <div className='container mx-auto my-24 flex justify-between'>
            <img className='w-[450px] h-[550px] border-[1px] p-2' src={toy?.img} alt="Toy Images" />
            <div className='ml-12 space-y-3 w-[450px]'>
                <h1 className='text-2xl font-semibold'>{toy?.name}</h1>
                <p className='text-xl font-semibold'>Price : ${toy?.price}</p>
                <p className='text-lg'>Rating : {toy?.rating}<Rating num={toy?.rating} /></p>
                <p className='text-lg font-semibold'>{toy.quantity? toy.quantity : 'Sold Out'}</p>
                <p>Stock : {toy?.details}</p>
                <div className='flex gap-4 mt-8'>
                    <button className='px-6 py-2 bg-amber-400 font-semibold'>Add To Cart</button>
                    <button className='px-6 py-2 bg-amber-400 font-semibold'>Buy Now</button>
                </div>
            </div>
            <div className='w-[450px] border-[1px] p-6 bg-gray-50'>
                <div>
                    <small>Delevery</small>
                    <div className='flex justify-between'>
                        <div className='flex gap-3 items-center'>
                            <FaLocationArrow />
                            <p>Dhaka, Dhaka North,<br /> Banani Road No. 12 - 19</p>
                        </div>
                        <p className='font-semibold text-purple-400 cursor-pointer'>Change?</p>
                    </div>
                </div>
                <hr className='border-[1px] my-4' />
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <FaCar />
                        <h1>Free Delevary</h1>
                    </div>
                    <h1 className='font-semibold text-purple-400'>Available</h1>
                </div>
                <hr className='border-[1px] my-4' />
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <FaCashRegister />
                        <h1>Cash On Delevary</h1>
                    </div>
                    <h1 className='font-semibold text-purple-400'>Available</h1>
                </div>
                <div className='mt-4 space-y-3'>
                    <div className='flex justify-between items-center'>
                        <small>Service</small>
                        <FaInfo />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaInfoCircle />
                        <div>
                            <h1>7 Days Return</h1>
                            <small className='text-gray-600'>Change On Mind applicable</small>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaInfoCircle />
                        <h1 className='text-gray-600'>Warranty not available</h1>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <div >
                        <small className='text-gray-600'>Sold By</small>
                        <p>{toy?.seller}</p>
                    </div>
                    <FaFacebookMessenger className='text-2xl text-purple-400'/>
                </div>
                <div className='mt-6 flex justify-between'>
                    <div className='w-32 border-2 px-2 '>
                        <small className='text-center'>Positive Seller Ratings</small>
                        <h1 className='text-2xl font-semibold text-center'>85%</h1>
                    </div>
                    <div className='w-32 border-2 px-2 '>
                        <small className='text-center'>Ship On Time</small>
                        <h1 className='text-2xl font-semibold text-center'>98%</h1>
                    </div>
                    <div className='w-32 border-2 px-2 '>
                        <small className='text-center'>Chat Response Rate</small>
                        <h1 className='text-2xl font-semibold text-center'>85%</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;