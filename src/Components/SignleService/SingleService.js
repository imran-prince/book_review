import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { id, name, price, img,reviews } = service
    const navigate=useNavigate()
    return (
        <div>
            <Col>
                <Card className='text-center'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text>
                             Price: $ {price}
                        </Card.Text>
                        <Card.Text>
                             <span style={{color:'red'}}>Short Description:</span> <small>{reviews}</small>
                        </Card.Text>
                        <Button onClick={()=>{navigate(`/checkout/${id}`)}} variant="primary">Check-Out</Button>
                    </Card.Body>

                </Card>
            </Col>

        </div>
    );
};

export default SingleService;