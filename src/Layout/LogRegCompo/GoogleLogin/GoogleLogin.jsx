import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const {createAccountWithGoogle} =useContext(AuthContext)
    const [error,setError] = useState('')
    setTimeout(()=> setError(''),7000)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const handleGoogleLogin = ()=>{
        createAccountWithGoogle()
        .then(()=>{
            navigate(from)
        })
        .catch(err=>setError(err.message))
    }
    return (
        <>
            <div className='mt-4 flex justify-center items-center gap-2'>
                <hr className='border-[1px] w-1/3' />
                <p className='text-gray-600'>Or</p>
                <hr className='border-[1px] w-1/3' />
            </div>
            <div onClick={handleGoogleLogin} className='w-full py-2 flex justify-center items-center gap-3 bg-purple-400 text-white rounded-md mt-6 font-semibold cursor-pointer'>
                <FaGoogle />
                <p>Continue With Google</p>
            </div>
            <small className='text-red-500'>{error}</small>
        </>

    );
};

export default GoogleLogin;