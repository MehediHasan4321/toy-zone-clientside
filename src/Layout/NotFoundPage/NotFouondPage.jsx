import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../CustomLoader/UseTitle';

const NotFouondPage = () => {
    useTitle('404 Page')
    return (
        <div className='container mx-auto flex justify-center items-center'>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/001/857/111/original/error-404-page-not-found-landing-page-concept-for-mobile-and-pc-free-vector.jpg" alt="404 page images" />
                <div className='text-center'>
                    <Link className='bg-[#f2f2f2] px-6 py-2 rounded'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFouondPage;