import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk, FaPhoneAlt, FaVoicemail } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className='container mx-auto my-24 bg-[#f2f2f2]'>
            <div className='md:w-1/3 mx-auto text-center'>
                <h1 className='text-4xl font-semibold pt-4'>Contact Us</h1>
                <p className='text-gray-600 mt-4'>A Good idlom for kids is it's ralning Cats and Dogs. Kids Know what Cats and Dogs an early age so they can understand. It's not literally raining Cats and Dogs</p>

            </div>
            <div>
                <div className='flex flex-wrap justify-center gap-6 p-5'>
                    <div className='w-60 h-60 border-2 flex flex-col items-center justify-center gap-3 hover:shadow-xl'>
                        <FaPhoneAlt className='text-3xl' />
                        <h3>Phone</h3>
                        <p>+8801xxxxxxxx</p>
                    </div>
                    <div className='w-60 h-60 border-2 flex flex-col items-center justify-center gap-3 hover:shadow-xl'>
                        <FaMailBulk className='text-3xl' />
                        <h3>Email</h3>
                        <p>toyzone@gmail.com</p>
                    </div>
                    <div className='w-60 h-60 border-2 flex flex-col items-center justify-center gap-3 hover:shadow-xl'>
                        <FaFacebook className='text-3xl' />
                        <h3>FaceBook</h3>
                        <p>www.Facebook.com</p>
                    </div>
                    <div className='w-60 h-60 border-2 flex flex-col items-center justify-center gap-3 hover:shadow-xl'>
                        <FaInstagram className='text-3xl' />
                        <h3>Instargam</h3>
                        <p>www.Instagram.com</p>
                    </div>
                    <div className='w-60 h-60 border-2 flex flex-col items-center justify-center gap-3 hover:shadow-xl'>
                        <FaLinkedin className='text-3xl' />
                        <h3>Linkedin</h3>
                        <p>www.Linkedin.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;