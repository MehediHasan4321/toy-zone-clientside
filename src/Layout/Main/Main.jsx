import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import useTitle from '../../CustomLoader/UseTitle';
import Header from '../Header/Header';
import Categorys from '../Categorys/Categorys';

const Main = () => {
    useTitle('Home')
    return (
        <>
            <NavBar/>
            <Header/>
            <Categorys/>
            <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default Main;