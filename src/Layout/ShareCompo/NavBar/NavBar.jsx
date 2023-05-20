import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const NavBar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
    }
    return (
        <div className='bg-[#F2F2F2] h-24'>
            <div className="container mx-auto h-full flex justify-between items-center">
                <Link to={'/'} className='text-2xl font-bold cursor-pointer'>Toy Zone</Link>
                <div className='flex items-center gap-6 font-semibold'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/allToy'}>All Toy</NavLink>
                    {user && <NavLink to={`/myToys/${user?.email}`}>My Toys</NavLink>}
                    {user && <NavLink to={'/addToys'}>Add Toy</NavLink>}
                    <NavLink>Blog</NavLink>
                    {user ? <div className='flex items-center gap-5'>{user?.photoURL?<img title={user?.displayName} className='w-10 h-10 rounded-full border-[1px] border-[#ff3811]' src={user.photoURL} alt='User' />:<p title={user?.displayName} className='w-10 h-10 rounded-full border-[1px] border-[#ff3811] text-center text-2xl font-extrabold'>{user?.displayName.slice(0,1)}</p>}<button onClick={handleLogOut} className='bg-amber-400 px-4 py-2 font-semibold'>Logout</button></div>:<NavLink  to={'/logReg/login'}>Log in</NavLink>}
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;
