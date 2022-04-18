import React, { useEffect } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleService.css'
import AOS from 'aos';


const SingleService = ({ service }) => {
    const { id, name, price, img, reviews } = service
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className='single-service '
            data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1500" >
            <Col className=''
                data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <Card className='text-center'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text>
                            Price: $ {price}
                        </Card.Text>
                        <Card.Text>
                            <span style={{ color: 'red' }}>Short Description:</span> <small>{reviews}</small>
                        </Card.Text>
                        <Button onClick={() => { navigate(`/checkout/${id}`) }} variant="primary">Check-Out</Button>
                    </Card.Body>

                </Card>
            </Col>

        </div>
    );
};

export default SingleService;