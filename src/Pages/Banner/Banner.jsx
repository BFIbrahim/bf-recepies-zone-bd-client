import React from 'react';
import './Banner.css'

const Header = () => {
    return (
        <div fluid className="p-0">
            <div className="m-0">
                <div className="p-0">
                    <div className="banner-image">
                        <div className='background row'>
                            <div className="overlay"></div>
                            <div className="banner-text py-5 col-md-6 text-white ms-5">
                                <h1>Welcome To <br /><span className='text-danger'>BF</span> Recipes Zone</h1>
                                <p>Discover the ultimate culinary experience at BF Food Zone! Indulge in delicious flavors, expertly crafted dishes, and satisfying meals that will tantalize your taste buds. Order online now!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;