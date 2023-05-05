import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Provider/AuthProvider';
import { Navigate, useLoaderData } from 'react-router-dom';

const SecretRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLoaderData()
    if(user){
        return children
    }

    return <Navigate state={{from:location}} to="/login" replace></Navigate>
};

export default SecretRoute;