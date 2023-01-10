import React,{ useEFFect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
export default function Login() {
    let signupDetails=[{name:'veera',password:'1234'},{name:'chinna',password:'5678'}]
    
    const[userName,setUserName] = useState(''); 
    const[password,setPassword] = useState('');
    
    const navigate = useNavigate();

    let handleLogin = () => {
        alert("login successfully");
        navigate("/my-app/home");
     
    }
    //    let uname="veera";
       let handleUserName=(e)=>{
            console.log(e,e.traget.value);
            setUserName(e.traget.value);
        }
        let handlePassword=(e)=>{
            console.log(e,e.traget.value);
            setPassword(e.traget.value);
        }  
    return (
           
           <div className="login">
            <h3>Login page</h3>
            <label>usernSame</label>
            <input type="text" name="username" placeholder="Enter name" id='name'value={userName}onInput={handleUserName} />
            <label>Password</label>
            <input type="text" name="password" placeholder="Enter password" id='password'value={password}onInput={handlePassword} />
            <button type="button" onClick={handleLogin}>Login</button>
            <Link to="/sign-up">you dont have account please signup</Link>
        </div>
        )
    }