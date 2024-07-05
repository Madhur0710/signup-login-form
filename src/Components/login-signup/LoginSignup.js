import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {

    const[action,setaction] = useState("Sign Up")


    return(<div className='container'>
       <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action === "Login"?<div></div>:<div className='input'>
                <img src='https://www.nicepng.com/png/full/128-1280406_user-icon-png.png' alt='' />
                <input type='text' placeholder='Name'/>
            </div>}
            <div className='input'>
                <img src='https://tse2.mm.bing.net/th?id=OIP.5FurmRhoxyRXmZG_a5gmZwHaHa&pid=Api&P=0&h=180' alt='' />
                <input type='email' placeholder='Email'/>
            </div>
            <div className='input'>
                <img src='https://tse4.mm.bing.net/th?id=OIP.z9AY9RIx479B44Ayy0N63QHaGc&pid=Api&P=0&h=180' alt='' />
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        {action === "Sign Up"?<div></div>:
        <div className='forgot-password'>Lost Password? <span>Click Here</span></div>}
        <div className='submit-container'>
            <div className={action === "Login"?"submit gray":"submit"} onClick={() => {setaction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up"?"submit gray":"submit"} onClick={() => {setaction("Login")}}>Login</div>
        </div>
   </div>

    );
}

export default LoginSignup;
