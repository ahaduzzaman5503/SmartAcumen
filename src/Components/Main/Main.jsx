import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div className='bg-white'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;