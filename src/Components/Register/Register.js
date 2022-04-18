import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';

const Register = () => {
    const navigate=useNavigate()
    const [ createUserWithEmailAndPassword, user,error,loading ] = useCreateUserWithEmailAndPassword(auth);
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const [customerror,setCustomerror]=useState('')
    const [password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    if(loading)
    {
        <Loading></Loading>
    }
    const nameHandaler=(e)=>{
        setName(e.target.value)
    }
    const emailHandaler=(e)=>{
        setEmail(e.target.value)
    }
    const passwordHandaler=(e)=>{
        setPassword(e.target.value)
    }
    const confirmPasswordHandaler=e=>{
        setConfirmPassword(e.target.value)
    }
    const reisterHandaler=e=>{
        e.preventDefault()
        if(password !== confirmPassword)
        {
           setCustomerror('Sorry your password didnt match')
        }
        else{
            createUserWithEmailAndPassword(email,password)
 
        }
        
    }
    if(user)
    {
        navigate('/') 
    }

    return (
        <>
            <Form className='w-50 m-auto  ' onSubmit={reisterHandaler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" onBlur={nameHandaler}  placeholder="Your Name" required/>
                   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onBlur={emailHandaler} placeholder="Enter email"  required/>
                     
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onBlur={passwordHandaler}  placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" onBlur={confirmPasswordHandaler}  placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {
                    user ?<p>Account ceated successfullay</p> :<p style={{color:'red'}}>{customerror}</p>
                }
                <Button  variant="primary" type="submit">
                 Register
                </Button>
            </Form>
            <div className='w-50 m-auto  '>
                <p>Already have an account <Link to='/login'>Login</Link> </p>
            </div>
        </>
    );
};

export default Register;