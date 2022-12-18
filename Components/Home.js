import React from 'react';
import'./Home.css';
import {useNavigate} from 'react-router-dom';

function Home(){

    
    const navigate=useNavigate();
    const RegisterUser=()=>
    {
    navigate('/register');
    }

    const Login= ()=>{
        navigate('/login');
    }
    return(
        <div class="container">
            <img src={require('../Images/back.jpg')}/>
            <button class="btn1" onClick={Login}>Sign-In</button>
            <button class="btn" onClick={RegisterUser}>Sign-Up</button>
        </div>
    );
}

export default Home;