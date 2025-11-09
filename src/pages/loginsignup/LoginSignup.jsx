import { useNavigate } from 'react-router-dom'
import './LoginSignup.css'
import email from '../../assets/LoginSignup/email.png'
import password from '../../assets/LoginSignup/password.png'
import User_Login from '../../assets/LoginSignup/User_Login.png'
import Header from '../../components/Header'
import { useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth'

function LoginSignup() {
    const [action, setAction] = useState("Log In");
    const [formData, setFormData] = useState({ email: "", password: ""});
    const { userState } = useAuth();
    const { user, logIn, signUp } = userState();

    const inputHandle = (event) => {

        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitHandle = (e) => {
        const id = e.target.id;
        console.log(id);      
        
        if(id != action) {
            setAction(id)
            return
        }

        if(id == "Log In"){
            const wasOK = logIn(formData)
        }

        // Todo
        signUp(formData)

    }

    
    const navigate = useNavigate();


    useEffect(() => {
        if (user.token !== '') {
            navigate('/');
        }
    }, [user, navigate]);

        
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
            }

            <div className="submit-container">
               <div
                    id = "Sign Up"
                    className={action === "Log In" ? "submit gray" : "submit"}
                    onClick={submitHandle}
                >
                    Sign Up
                </div>

                <div
                    id ="Log In"
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={submitHandle}
                >
                    Login
                </div>
                
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
