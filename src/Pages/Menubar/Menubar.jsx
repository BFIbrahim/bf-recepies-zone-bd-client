import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menubar.css'

const Menubar = () => {
    return (
        <div className='d-flex justify-content-between container align-content-center'>
            <div>
                <Link className='me-4 text-black' to="/">Home</Link>
                <Link to="/blog">Blog</Link>
            </div>

            <div>
                <h4><span className='text-danger'>BF</span> Recipes Zone</h4>
            </div>

            <div>
                <img src="" alt="" />
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Menubar;