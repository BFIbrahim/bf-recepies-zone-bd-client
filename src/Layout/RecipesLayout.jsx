import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../Pages/Menubar/Menubar';

const RecipesLayout = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
        </div>
    );
};

export default RecipesLayout;