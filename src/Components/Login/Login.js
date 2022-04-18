import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendPasswordResetEmail } from 'firebase/auth';
const Login = () => {
    const [signInWithGithub] = useSignInWithGithub(auth);
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailHandaler = (e) => {
        setEmail(e.target.value)

    }
    const resetPasswordHandaler=()=>{
        sendPasswordResetEmail(email)
        alert('sent  mail')
    }


    const passHandaler = (e) => {
        setPass(e.target.value)

    }
    const loginHandaler = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, pass)
    }
  


    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    
    


    return (
        <>
            <Form onSubmit={loginHandaler} className='w-50 m-auto text-center'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" required onBlur={emailHandaler} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required onBlur={passHandaler} placeholder="Password" />
                </Form.Group>


                {
                    user ? <p style={{ color: 'green' }}>Login Successfullay.</p> :
                        <p style={{ color: "red" }}>{error?.message}</p>
                }
                <Button variant="primary" type="submit">
                    Log-in
                </Button>
            </Form>
            <div className='w-50 m-auto  '>
                <p>Create New User <Link style={{ textDecoration: 'none', color: 'blue' }} to='/newregister'>Register</Link> </p>
                
            </div>
            <div className='d-flex w-50 m-auto align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-100'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-100'></div>
            </div>
            <SocialLogin></SocialLogin>
          
            
        </>

    );
};

export default Login;