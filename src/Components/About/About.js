import React from 'react';
import './About.css'
import mypic from '../../images/imran.jpg'
import { Card, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div className='w-50 m-auto my-5 '>
            <Col>
                
                <Card className='text-center border-0 '>
                    <Card.Img variant="top" style={{borderRadius:'50%'}} src={mypic} />
                    <Card.Body>
                        <Card.Title>Name:  imran</Card.Title>
                      <hr />

                    <h2>Carear Goal:</h2> <small>My name is Md Imran Hossain.</small>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default About;