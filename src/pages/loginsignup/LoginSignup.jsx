import React from 'react'
import './LoginSignup.css'
import email from '../../assets/LoginSignup/email.png'
import password from '../../assets/LoginSignup/password.png'
import User_Login from '../../assets/LoginSignup/User_Login.png'
import { useState } from 'react'

export default function LoginSignup() {
    const [action, setAction] = React.useState("Log In"); // 
    const [formData, setFormData] = useState({ email: "", password: ""});

    const inputHandle = (event) => {

        console.log(formData);
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
        
  return (
    <div className="container">
        <div className="header">
             <div className="text">{action}</div>
                 <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Log In" ? <div></div>:
            
            <div className="input">
                <img src={User_Login} alt= "" className="icon"/>
                <input type="text" placeholder="Name"/>
            </div>
            // If action = Log In, return empty div, else return Name input
            }
            
            <div className="input">
                <img src={email} alt= "" className="icon"/>
                <input type="email" name='email' placeholder="Email" value={formData.email}  onChange={inputHandle}/>
            </div>
            <div className="input">
                <img src={password} alt= ""  className="icon"/>
                <input type="password" name='password' placeholder="Password" value={formData.password}  onChange={inputHandle}/>
            </div>
         </div>
         {action === "Sign Up" ? <div></div>: 
         <div className="forgot">Forgot Password? <span>Click Here!</span></div>
         // If action = Sign Up, return empty div, else return Forgot Password
         }
         
        

         <div className="submit-container">

            <div className={action==="Log In"?"submit gray":"submit"}  onClick={() => setAction("Sign Up")}>Sign Up</div>
                {/* If action = login, use gray for sign up else uses class submit */}
            <div className={action==="Sign Up"?"submit gray":"submit"}  onClick={() => setAction("Log In")}>Login</div>
                {/*Click Sign Up, Sets action to Sign up, makes LogIn gray.*/}
            
         </div>
    </div>

  )
}
