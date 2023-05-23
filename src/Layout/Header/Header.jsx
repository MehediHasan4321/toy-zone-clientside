import React, { useContext, useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import Banner from './Banner';
import Loading from '../ShareCompo/Loading/Loading';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Header = () => {
    const {banners} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)
    
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
   
    return (
        <Slider {...settings}>
            {
                banners.map(banner => <Banner key={banner._id} banner={banner} />)
            }
        </Slider>


    );
};

export default Header;