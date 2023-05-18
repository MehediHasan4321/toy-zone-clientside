import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleLogin = () => {
    const [error,setError] = useState('')
    setTimeout(()=> setError(''),7000)
    const handleGoogleLogin = ()=>{

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