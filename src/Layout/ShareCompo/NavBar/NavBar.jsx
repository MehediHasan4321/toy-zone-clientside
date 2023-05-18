import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const NavBar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
    }
    return (
        <div className='bg-gray-200 h-24'>
            <div className="container mx-auto h-full flex justify-between items-center">
                <Link to={'/'} className='text-2xl font-bold cursor-pointer'>Toy Zone</Link>
                <div className='flex items-center gap-6 font-semibold'>
                    <NavLink to={'/'}>Home</NavLink>
                    {user && <NavLink>All Toy</NavLink>}
                    {user && <NavLink>Add Toy</NavLink>}
                    <NavLink>Blog</NavLink>
                    {user ? <div><button onClick={handleLogOut} className='bg-amber-400 px-4 py-2 font-semibold'>Logout</button></div>:<NavLink  to={'/logReg/login'}>Log in</NavLink>}
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;