import React, { useContext } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadContext } from '../../App';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';


const CheckOut = () => {
    const[user]=useAuthState(auth)
    const [services] = useContext(LoadContext)
    const { id } = useParams()

    const singleService = services.find((service) => service.id == id)
    const navigate = useNavigate()
    const bokkingHandaler=e=>{
        e.preventDefault()
        navigate(`/booking`)
        
    }
   


    return (
        <div className='container d-lg-flex justify-content-around mt-5  '>

            <div className='w-50 m-auto my-5'>
                <Col>
                <h2 className='mb-3'>{singleService?.name} service</h2>
                <Card className='text-center'>
                    <Card.Img variant="top" src={singleService?.img} />
                    <Card.Body>
                        <Card.Title>Name: {singleService?.name}</Card.Title>
                        <Card.Text>
                            Price: $ {singleService?.price}
                        </Card.Text>


                    </Card.Body>

                </Card>
            </Col>
            </div>
            <div className='text-center'>
                <h2>For Booking Information</h2>
                <Form onSubmit={bokkingHandaler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type='text' placeholder="ab@gmail.com" required />
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={user?.email} placeholder="Enter email" readOnly />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicnumber">
                        <Form.Label>Your Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="01715-203265" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Your Address</Form.Label>
                        <Form.Control type="text" placeholder="satkhira,khulna" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Booking
                </Button>






                </Form>
                
            </div>

        </div>
    );
};

export default CheckOut;