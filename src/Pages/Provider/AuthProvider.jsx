import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const registerUser = (name, email, password, photoUrl) =>{
        return createUserWithEmailAndPassword(auth, name, email, password, photoUrl)
    }


    const authInfo = {}
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;