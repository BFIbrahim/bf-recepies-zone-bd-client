import React, { useEffect, useState } from 'react';
import Header from '../Banner/Banner';
import Recipes from '../Recipes/Recipes';


const Home = () => {

    const [chef, setChef] = useState([])

    useEffect(() => {
        fetch("http://localhost:3400/alldata")
        .then((res) => res.json())
        .then((data) => setChef(data));
    },[])

    console.log(chef)

    return (
        <div>
            <Header></Header>

            <div className='recipies'>
                {
                    chef.map(singleChef => <Recipes 
                        key = {singleChef.id}
                        singleChef = {singleChef}
                    ></Recipes>)
                }
            </div>
            
        </div>
    );
};

export default Home;