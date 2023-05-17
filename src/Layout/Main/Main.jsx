import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import useTitle from '../../CustomLoader/UseTitle';
import Header from '../Header/Header';

const Main = () => {
    useTitle('Home')
    return (
        <>
            <NavBar/>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default Main;