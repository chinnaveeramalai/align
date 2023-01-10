import { Navigate, Route,Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Home from "../Home/Home";
import About from "../About/About";
import profile from "../Profile/Profile";
import NoPage from "../Nopage/Nopage";
import Customerprofile from "../Student/Customerprofile/Customerprofile";
//external css
import "./Main.css"; 
import CustomerTable from "../CustomerTable/CustomerTable";

export default function Main(){
    return(
            <Routes>
            <Route path='/'element={<Navigate to="/login"/>}/>
                <Route path='/login'element={<Login/>}/>
                <Route path='/sign-up'element={<Signup/>}/>

                <Route path="/my-app"element={<Dashboard/>}>
                
                <Route path="home" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="profile" element={<profile/>}/>
                <Route path="customerprofile" element={<Customerprofile/>}/>
                {/* <Route path="custable" element={<CustomerTable/>}/> */}
               
                <Route path="*" element={<NoPage/>}/>
                </Route>
               
            </Routes>
            // </Router>
            )
}
