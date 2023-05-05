import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../Pages/Menubar/Menubar';
import Footer from '../Pages/Footer/Footer';

const RecipesLayout = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecipesLayout;