import React from 'react';
import NavBar from '../ShareCompo/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../ShareCompo/Footer/Footer';

const LogRegCompo = () => {
    return (
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default LogRegCompo;