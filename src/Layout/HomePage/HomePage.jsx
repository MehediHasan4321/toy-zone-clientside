import React from 'react';
import Header from '../Header/Header';
import Categorys from '../Categorys/Categorys';
import ImgGallary from '../ImgGallary/ImgGallary';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Categorys/>
            <ImgGallary/>
        </div>
    );
};

export default HomePage;