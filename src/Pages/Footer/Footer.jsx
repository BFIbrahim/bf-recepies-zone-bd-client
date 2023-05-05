import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark'>
            <div className='p-6 row'>
                <div className='col-md-6 text-white-50 '>
                    <div>
                        <h4>About BF Recipes Zone</h4>
                        <p className=''>Recipies Master is a website . In this website your can see recipies details items. But the condition is first you need to register</p>
                    </div>
                    <div className='col-md-6'>
                        <h4>You can find me on:</h4>
                        <p>Email: mdibrahim36194@gmail.com</p>
                        <p>Phone: 01956633205</p>
                    </div>
                </div>
                <p className='text-center bg-dark text-white-50  '>Copyright@ BF Ibrahim</p>
            </div>
        </div>
    );
};

export default Footer;