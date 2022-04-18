import React from 'react';
import Baner from '../Baner/Baner';
 
import Service from '../Service/Service';
 

const Home = () => {
    return (
        <div>
            <h1 className='text-center'>Exceptional Photographer</h1>
            <Baner></Baner>
            <Service></Service>
            
        </div>
    );
};

export default Home;