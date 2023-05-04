import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menubar = () => {
    return (
        <div className=''>
            <div>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
            </div>

            <div>
                <img src="" alt="" />
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Menubar;