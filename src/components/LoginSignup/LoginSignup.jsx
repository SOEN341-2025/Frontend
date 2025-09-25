import React from 'react'
import './LoginSignup.css'
import email from '../assets/email.png'
import password from '../assets/password.png'
import User_Login from '../assets/User_Login.png'

export const LoginSignup = () => {
  return (
    <div className="container">
        <div className="header">
             <div className="text">Sign Up</div>
                 <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={User_Login} alt= "" className="icon"/>
                <input type="text" placeholder="Name"/>
            </div>
            <div className="input">
                <img src={email} alt= "" className="icon"/>
                <input type="email" placeholder="Email"/>
            </div>
            <div className="input">
                <img src={password} alt= ""  className="icon"/>
                <input type="password" placeholder="Password"/>
            </div>
         </div>
         <div className="forgot">Forgot Password? <span>Click Here!</span></div>

         <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
         </div>
    </div>

  )
}
