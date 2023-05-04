import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
        </div>
    );
};

export default Menubar;