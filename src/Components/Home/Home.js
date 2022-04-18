import React from 'react';
import Baner from '../Baner/Baner';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
 

const Home = () => {
    return (
        <div>
            <h1 className='text-center'>Exceptional Photographer</h1>
            <Baner></Baner>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;