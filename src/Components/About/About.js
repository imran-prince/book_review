import React from 'react';
import './About.css'
import mypic from '../../images/imran.jpg'
import { Card, Col } from 'react-bootstrap';

const About = () => {
    return (
        <div className='w-50 m-auto my-5 '>
            <Col>

                <Card className='text-center border-0 '>
                    <Card.Img variant="top" style={{ borderRadius: '50%' }} src={mypic} />
                    <Card.Body>
                        <Card.Title>Name: Md  Imran Hossain</Card.Title>
                        <hr />

                        <h2>Carear Goal:</h2> <small>“Self-motivated, highly passionate and hardworking fresher looking for an opportunity to work in a challenging organization to utilize my skills and knowledge to work for the growth of the organisation.”
                            “A highly technical and knowledgeable Software Engineer, seeking an entry-level position in an organization that offers good growth prospects. Have an internship experience of 3 months and advanced knowledge of programming as well as UI and UX designing.”</small>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default About;