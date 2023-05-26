import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaBars } from 'react-icons/fa';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [show,setShow] = useState(false)
    const handleLogOut = () => {
        logOut()
    }
    return (
        <>
            <div className='bg-[#F2F2F2] h-24 relative'>
                <div className="container mx-auto h-full flex justify-between items-center px-2">
                    <Link to={'/'} className='text-2xl font-bold cursor-pointer'> Toy Zone</Link>
                    <FaBars onClick={()=>setShow(!show)} className='text-2xl cursor-pointer md:hidden' />
                    <div className=' hidden md:visible md:flex items-center gap-6 font-semibold'>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/allToy'}>All Toy</NavLink>
                        {user && <NavLink to={`/myToys`}>My Toys</NavLink>}
                        {user && <NavLink to={'/addToys'}>Add Toy</NavLink>}
                        <NavLink to={'/blog'}>Blog</NavLink>
                        {user ? <div className='flex items-center gap-5'>{user?.photoURL ? <img title={user?.displayName} className='w-10 h-10 rounded-full border-[1px] border-[#ff3811]' src={user.photoURL} alt='User' /> : <p title={user?.displayName} className='w-10 h-10 rounded-full border-[1px] border-[#ff3811] text-center text-2xl font-extrabold'>{'M'}</p>}<button onClick={handleLogOut} className='bg-amber-400 px-4 py-2 font-semibold'>Logout</button></div> : <NavLink to={'/logReg/login'}>Log in</NavLink>}

                    </div>

                </div>
            </div>
            <div className='flex flex-col pl-2 gap-3 h-80 w-48 border-2 z-30 bg-[#f2f2f2] transition-all absolute md:hidden' style={{left:`${show ? '0px':"-192px"}`}}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/allToy'}>All Toy</NavLink>
                {user && <NavLink to={`/myToys`}>My Toys</NavLink>}
                {user && <NavLink to={'/addToys'}>Add Toy</NavLink>}
                <NavLink to={'/blog'}>Blog</NavLink>
                {user ? <div className='flex items-center gap-5'>{user?.photoURL ? <img title={user?.displayName} className='w-10 h-10 rounded-full border-[1px] border-[#ff3811]' src={user.photoURL} alt='User' /> : <p title={user?.displayName} className='w-10 h-10 rounded-full border-[1px] border-[#ff3811] text-center text-2xl font-extrabold'>{'M'}</p>}<button onClick={handleLogOut} className='bg-amber-400 px-4 py-2 font-semibold'>Logout</button></div> : <NavLink to={'/logReg/login'}>Log in</NavLink>}
            </div>
        </>);
};

export default NavBar;
