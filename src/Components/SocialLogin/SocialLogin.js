import React from 'react';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle,user] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    if(user)
    {
        navigate('/')

    }
    return (
        <div>
            <div className='w-50 m-auto rounded-5'>
                <button onClick={()=>signInWithGoogle()} bg="info" type="submit" className='d-block w-50 mx-auto'>
                    <FcGoogle size={35}></FcGoogle> Google Sign-in
                </button>

            </div>
            
        </div>
    );
};

export default SocialLogin;