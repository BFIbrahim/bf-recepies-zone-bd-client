import React from 'react';
import './Banner.css'

const Header = () => {
    return (
        <div fluid className="p-0">
            <div className="m-0">
                <div className="p-0">
                    <div className="banner-image">
                        <div className='background'>
                            <div className="overlay"></div>
                            <div className="banner-text py-5 text-white container">
                                <h1>Welcome To <br /><span className='text-danger'>BF</span> Recipes Zone</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;