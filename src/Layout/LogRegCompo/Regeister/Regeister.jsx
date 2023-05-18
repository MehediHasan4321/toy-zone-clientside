import React, { useContext, useState } from 'react';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth'
import app from '../../../Firebase/firebase.config';
const Regeister = () => {
    const { createAccountWithEmail } = useContext(AuthContext)
    const [error, setError] = useState('')
    setTimeout(() => setError(''), 7000);
    const navigate = useNavigate()
    const auth = getAuth(app)
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.url.value
        createAccountWithEmail(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                })
                    .then(() => { })
                    .catch(err => setError(err.message))
                navigate('/')
                form.reset()
            })
            .catch(err => {
                setError(err.message)
            })
    }
    return (
        <div className='container mx-auto my-24 flex justify-center gap-8'>
            <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="login Images" />
            <div className='p-5 shadow-xl w-96 min-h-96'>
                <div>
                    <h1 className='text-2xl font-semibold text-center'>Create An Account</h1>
                    <p className='text-gray-600 mt-3'>Already Have An Account ? <Link className='text-purple-400 text-lg font-semibold' to={'/logReg/login'}>Sign In</Link></p>
                </div>
                <form onSubmit={handleSignUp}>
                    <div className='my-4'>
                        <label className=' font-semibold text-lg' htmlFor="email">Name</label>
                        <input type="name" required name="name" id="name" className='border-[1px] py-2 w-full rounded-md px-3 mt-3' placeholder='Enter Your name' />
                    </div>
                    <div className='my-4'>
                        <label className=' font-semibold text-lg' htmlFor="email">Email</label>
                        <input type="email" required name="email" id="email" className='border-[1px] py-2 w-full rounded-md px-3 mt-3' placeholder='Enter Your Email' />
                    </div>
                    <div className='my-4'>
                        <label className=' font-semibold text-lg' htmlFor="password">Password</label>
                        <input type="password" required name="password" id="password" className='border-[1px] py-2 w-full rounded-md px-3 mt-3' placeholder='Enter Your Password' />
                    </div>
                    <div className='my-4'>
                        <label className=' font-semibold text-lg' htmlFor="url">Photo URL</label>
                        <input type="url" name="url" id="url" className='border-[1px] py-2 w-full rounded-md px-3 mt-3' placeholder='Your Photo URL' />
                    </div>
                    <div className='my-4'>
                        <input className='border-[1px] py-2 w-full rounded-md px-3 mt-3 bg-purple-400 text-white font-semibold text-lg' type="submit" value="Create Account" />
                    </div>
                </form>

                <GoogleLogin />
                <small className='text-red-500'>{error}</small>
            </div>
        </div>
    );
};

export default Regeister;