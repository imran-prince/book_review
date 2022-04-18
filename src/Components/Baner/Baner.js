import React from 'react';
import { Carousel } from 'react-bootstrap';

import baner1 from '../../images/baner1.jpg'
import baner2 from '../../images/baner2.jpg'
import baner3 from '../../images/baner3.jpg'

 
 

const Baner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img  
                        className="d-block w-100"
                        src={baner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>I am shooter</h3>
                        <p>Actually i like event photoshoot</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={baner2}
                        alt="Second slide"
                        
                    />

                    <Carousel.Caption>
                        <h3>Educational spot</h3>
                        <p>I like educational photoshoot.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={baner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>clear understand camera lence</h3>
                        <p>I like action photoshoot.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Baner;