import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginLayout from '../Layout/LoginLayout';
import Home from '../Pages/Home/Home';
import RecipesLayout from '../Layout/RecipesLayout';
import Blog from '../Pages/Blog/Blog';
import RecipeDetails from '../Pages/RecipeDetails/RecipeDetails';
import Login from '../Pages/Login/Login';
import Registation from '../Pages/Registration/Registation';

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
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Registation></Registation>
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
            },
            {
                path:'recipeDetails',
                element: <RecipeDetails></RecipeDetails>
            }            
        ]
    }
])

export default Router;