import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginLayout from '../Layout/LoginLayout';
import Home from '../Pages/Home/Home';
import RecipesLayout from '../Layout/RecipesLayout';
import Blog from '../Pages/Blog/Blog';

const Router = createBrowserRouter([
    {
        path: '/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            }
        ]
    },

    {
        path:'recipes',
        element:<RecipesLayout></RecipesLayout>,
        children:[
            {
                path:'recipe',
                element:<Home></Home>
            }            
        ]
    }
])

export default Router;