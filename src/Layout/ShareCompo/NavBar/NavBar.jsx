import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='bg-gray-200 h-24'>
            <div className="container mx-auto h-full flex justify-between items-center">
                <Link to={'/'} className='text-2xl font-bold cursor-pointer'>Toy Zone</Link>
                <div className='flex items-center gap-6 font-semibold'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink>All Toy</NavLink>
                    <NavLink>Add Toy</NavLink>
                    <NavLink>Blog</NavLink>
                    <NavLink to={'/logReg/login'}>Log in</NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;