import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = () => {
    const navigate=useNavigate()
    return (
        <div>
           retew  
           <button  onClick={()=>navigate('/checkout')}>checkout</button>
        </div>
    );
};

export default Service;