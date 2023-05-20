import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#F2F2F2]'>
            <div className="container mx-auto">
                <div className="footer flex justify-between flex-wrap p-10 bg-base-200 text-base-content">
                    <div>
                        <span className="footer-title text-3xl">Toy Zone</span>
                        <span>Follow Us On</span>
                        <div className='flex gap-3'>
                            <FaFacebook className='text-2xl' />
                            <FaTwitter className='text-2xl' />
                            <FaInstagram className='text-2xl' />
                            <FaLinkedin className='text-2xl' />
                        </div>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to={'/'} className="link link-hover">Home</Link>
                        <Link to={'/blog'} className="link link-hover">Blog</Link>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>

                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                    <div>
                        <span className="footer-title">Toy Zone Newsletter</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="Example@gmail.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className='border-[1px] w-full my-4' />
                    <p className='text-center py-8'>Copyright © 2023 - All right reserved by Toy Zone</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;