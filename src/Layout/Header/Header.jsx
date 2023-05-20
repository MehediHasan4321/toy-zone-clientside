import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import Banner from './Banner';
import Loading from '../ShareCompo/Loading/Loading';
const Header = () => {
    const [banners, setBanners] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://my-toy-shop-server.vercel.app/banners')
            .then(res => res.json())
            .then(data => setBanners(data))
            .finally(() => setIsLoading(false))
    }, [])
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
    if (!isLoading) {
        return (
            <Slider {...settings}>
                {
                    banners.map(banner => <Banner key={banner._id} banner={banner} />)
                }
            </Slider>


        );
    }else {
        return <Loading/>
    }
};

export default Header;