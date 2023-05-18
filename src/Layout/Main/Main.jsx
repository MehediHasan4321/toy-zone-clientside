import React from 'react';
import { Outlet } from 'react-router-dom';
import useTitle from '../../CustomLoader/UseTitle';
import NavBar from '../ShareCompo/NavBar/NavBar';
import Footer from '../ShareCompo/Footer/Footer';


const Main = () => {
    useTitle('Home')
    return (
        <>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default Main;