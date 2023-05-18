import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Login = () => {
    const handleLogin = e=>{
        e.preventDefault()
        const form = e.target;
        const email= form.email.value;
        const password = form.password.value
        console.log(email,password)
    }
    return (
        <div className='container mx-auto my-24 flex justify-center gap-8'>
            <div className='p-5 shadow-xl w-96 min-h-96'>
                <div>
                    <h1 className='text-2xl font-semibold text-center'>Login Your Account</h1>
                    <p className='text-gray-600 mt-3'>Don't Have An Account Yet ? <Link className='text-purple-400 text-lg font-semibold' to={'/logReg/regeister'}>Sign Up</Link></p>
                </div>
                <form onSubmit={handleLogin}>
                    <div className='my-4'>
                        <label className=' font-semibold text-lg' htmlFor="email">Email</label>
                        <input type="email" required name="email" id="email" className='border-[1px] py-2 w-full rounded-md px-3 mt-3' placeholder='Enter Your Email' />
                    </div>
                    <div className='my-4'>
                        <label className=' font-semibold text-lg' htmlFor="password">Password</label>
                        <input type="password" required name="password" id="password" className='border-[1px] py-2 w-full rounded-md px-3 mt-3' placeholder='Enter Your Password' />
                    </div>
                    <div className='my-4'> 
                        <p className='text-lg font-semibold text-purple-400 cursor-pointer'>Forget Password ?</p>
                    </div>
                    <div className='my-4'> 
                        <input className='border-[1px] py-2 w-full rounded-md px-3 mt-3 bg-purple-400 text-white font-semibold text-lg' type="submit" value="Login" />
                    </div>
                </form>
                
                <GoogleLogin/>
            </div>
            <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" />
        </div>
    );
};

export default Login;