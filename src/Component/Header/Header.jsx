import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEFFect,useState } from "react";
import"./Header.css";
export default function Header(){

    let handleLogout=()=>{
    localStorage.removeItem('userDetails');
    alert("App is getting Logged out");
    navigator("/");
}
    return(
        <div>
        <h1>header</h1>
        <nav className="navbar">
        <ul className="nav-menu">
            <li className="nav-item">
                <Link to="/my-app/home" className="nav-link">Home</Link>
                </li>
            <li className="nav-item">
                <Link to="/my-app/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/my-app/Coustomerprofile">Customer</Link>

            </li>
          <li className="nav-item">
        <button type="text"onClick={handleLogout}>logout</button>
        </li>
        </ul>
        </nav>
        </div>
    )
}
