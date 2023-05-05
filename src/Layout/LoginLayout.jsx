import React from 'react';
import Menubar from '../Pages/Menubar/Menubar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;