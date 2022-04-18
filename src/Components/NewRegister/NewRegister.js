import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { auth } from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast, ToastContainer } from 'react-toastify';

const NewRegister = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')
    const [cpass, setCpass] = useState('')
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const emailHandaler = (e) => {
        setEmail(e.target.value)

    }
    const nameHandaler = (e) => {
        setName(e.target.value)

    }

    const passHandaler = (e) => {
        setPass(e.target.value)

    }

    const cpassHandaler = (e) => {
        setCpass(e.target.value)

    }

    const registerHandaler = (e) => {
        e.preventDefault()
        if (pass !== cpass) {
            toast('Password didnt match')
        }
        else {
            createUserWithEmailAndPassword(email, pass)
            toast('sent emial varifaction')
        }
    }



    if (user) {
        navigate('/')
    }
    return (
        <>
         
            <div className='container w-50 m-auto  my-5'>
                <h1 className='text-center text-primary mb-3'>New Account Create </h1>
                <Form onSubmit={registerHandaler}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="imran" required onBlur={nameHandaler} />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onBlur={emailHandaler} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onBlur={passHandaler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCPassword">
                        <Form.Label>Confirm-Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onBlur={cpassHandaler} />
                    </Form.Group>

                    {
                        user ? <p style={{ color: 'green' }}>Account Created Successfullay.</p> :
                            <p style={{ color: "red" }}>{error?.message}</p>
                    }


                    <Button className='login' variant="primary" type="submit">
                        Register
                    </Button>
                    <p className='mt-3'>Already have an Account <Link style={{ textDecoration: 'none', colo: 'blue' }} to='/login'>Login</Link></p>

                </Form>



            </div>

            <div className='d-flex w-50 m-auto align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-100'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-100'></div>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>

        </>
    );
};



export default NewRegister;