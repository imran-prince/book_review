import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';


const Login = () => {
    const location=useLocation()
    const navigate=useNavigate()
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
    if(loading)
    {
        return <Loading></Loading>
    }
    
    const passHandaler = (e) => {
        setPass(e.target.value)

    }
    const loginHandaler=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,pass)
    }
    
 
    const from = location.state?.from?.pathname || "/";
    if(user)
    {
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log-in
                </Button>
            </Form>
            <div className='w-50 m-auto  '>
                <p>Create New User <Link to='/register'>Register</Link> </p>
            </div>
        </>

    );
};

export default Login;