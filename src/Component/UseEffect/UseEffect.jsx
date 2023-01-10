import { useState,useEffect } from "react";
import React from "react";

function Timer(){
const [count,setCount]=useState(0);


useEffect(() =>{
    setTimeout(()=>{
   setCount((count)=>count +1);
    },100)
}
)}