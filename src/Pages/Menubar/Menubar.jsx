import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menubar.css'
import { AuthContext } from '../Provider/AuthProvider';

const Menubar = () => {

    const { user } = useContext(AuthContext)
    console.log(user);

    return (
        <div className='d-flex justify-content-between container align-content-center p-4'>
            <div>
                <h4><span className='text-danger'>BF</span> Recipes Zone</h4>
            </div>

            <div>
                <Link className='me-4 text-black' to="/">Home</Link>
                <Link to="/blog">Blog</Link>
            </div>

            <div>
                {user?.email? (
                    <img className='w-10 h-10' src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="" />
                ) : 
                (<Link to="/login">Login</Link>)}
                
            </div>
        </div>
    );
};

export default Menubar;