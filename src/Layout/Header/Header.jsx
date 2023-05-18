import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import Banner from './Banner';
const Header = () => {
    const [banners, setBanners] = useState([])

    useEffect(() => {
        fetch('https://my-toy-shop-server.vercel.app/banners')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])

    console.log(banners)
    const settings = {
        dots: true,
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