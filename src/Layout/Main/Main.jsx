import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import useTitle from '../../CustomLoader/UseTitle';


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