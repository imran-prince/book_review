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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={baner2}
                        alt="Second slide"
                        
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={baner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Baner;