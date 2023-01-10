import axios from "axios";
import { useEffect, useState } from "react"
import { ENV_URL } from "../APIURL";
import '../ProfileView/ProfileViewCart.css';

    
export default function ProfileViewCart(){
    const [profileDetails,setProfileDetails] =useState([]);
    useEffect(()=>{

        axios.get(ENV_URL).then(response=>{
         console.log("response",response)
         setProfileDetails(response.data)
        }).catch(err=>{
         console.log("err",err)
        })
 
     },[])
    
    return(
    <div>
        <body id='body_profile'>
            <div className='Cart_container'>
             <h2>welcome</h2>
             {profileDetails.map =(item)=>{
                <h4>{item.aboutuserdetails}</h4>
             }}
             
            </div>
            
        </body>
    </div>

        )
}