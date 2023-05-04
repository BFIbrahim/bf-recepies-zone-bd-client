import React from 'react';

const Header = () => {
    return (
        <div fluid className="p-0">
            <div className="m-0">
                <div className="p-0">
                    <div
                        className="banner-image"
                        style={{
                            backgroundImage:
                                "https://i.postimg.cc/sDXLHmPS/istockphoto-1147077210-170667a.jpg"
                        }}
                    >
                        <div className="overlay"></div>
                        <div className="banner-text">
                            <h1>Welcome to our Food Recipe Website</h1>
                            <p>Discover delicious recipes to try at home</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;