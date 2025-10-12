import React from 'react'
import './LoginSignup.css'
import email from '../../assets/LoginSignup/email.png'
import password from '../../assets/LoginSignup/password.png'
import User_Login from '../../assets/LoginSignup/User_Login.png'
import { useState } from 'react'
import Header from '../../components/Header'

function LoginSignup() {
    const [action, setAction] = React.useState("Log In"); // 
    const [formData, setFormData] = useState({ email: "", password: ""});
    //TO DO: Finish Sign Up Input Handle 

    const inputHandle = (event) => {

        console.log(formData);
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

       // Sign up (create user)
    const handleSignUp = async () => {
        setMessage("");
        try {
            const res = await fetch('http://localhost:3000/api/user/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formData.name, email: formData.email, password: formData.password })
            });
            const data = await res.json();
            if (res.ok) setMessage("Signup successful — please log in");
            else setMessage(data.error || data.message || "Signup failed");
        } catch {
            setMessage("Network error");
        }
    };



// NEW: call backend login and save JWT
    const handleLogin = async () => {
        setMessage("")
        try {
            const res = await fetch('http://localhost:3000/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email, password: formData.password })
            });
            const data = await res.json();
            if (res.ok && data.token) {
                //NOT SURE How this should be stored...
                localStorage.setItem('jwtToken', data.token);
                setMessage("Login successful");
                // TODO: redirect or update auth context / state
            } else {
                setMessage(data.error || data.message || "Login failed");
            }
        } catch (err) {
            setMessage("Network error");
        }
    }



        
  return (
    <div className="container">
        <div className="header">
           <div className={`text ${action === "Log In" ? "login-text" : ""}`}>{action}</div>
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

export default function LoginPage(){

    return (

        <>
        <Header/>
        <LoginSignup />

        </>
    )

}
