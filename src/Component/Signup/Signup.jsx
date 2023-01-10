import { useState } from "react";
import { Link } from "react-router-dom";
import"./Signup.css";
export default function Signup(){
    const [details,setDetails]=useState({uname:'',email:'',password:''})
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(details)
    }
    let handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        console.log(name,value);
        let d={...details}
        d[name]=value;
        setDetails(d);
    }
    return(
        <form onSubmit={handleSubmit}>
        <div className="signup">
         <h3> Signup page</h3>  
        <label>Name</label>
            <input type="text" name="uname" placeholder="Enter name" id="name" onInput={handleInput} value={details.uname}></input>
            <label>Email</label>
        <input type="email" name="email" placeholder="@gmail.com"id="email"/>
        <label>Password</label>
            <input type="text" name="password" placeholder="Enter password" id="password"></input>
            <button type="button">Signup</button>
            <Link to="/login"> you already have account please Login</Link> 
        </div>
        </form>
    )

}