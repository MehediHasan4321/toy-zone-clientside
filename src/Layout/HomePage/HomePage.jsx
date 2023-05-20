import React from 'react';
import Header from '../Header/Header';
import Categorys from '../Categorys/Categorys';
import ImgGallary from '../ImgGallary/ImgGallary';
import UserReviews from '../UserReviews/UserReviews';
import ContactUs from '../ContactUs/ContactUs';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Categorys/>
            <ImgGallary/>
            <UserReviews/>
            <ContactUs/>
        </div>
    );
};

export default HomePage;