import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg-gray-200 h-24'>
            <div className="container mx-auto h-full flex justify-between items-center">
                <Link to={'/'} className='text-2xl font-bold cursor-pointer'>Toy Zone</Link>
                <div className='flex items-center gap-6 font-semibold'>
                    <Link>Home</Link>
                    <Link>All Toy</Link>
                    <Link>Add Toy</Link>
                    <Link>Blog</Link>
                    <Link>Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;