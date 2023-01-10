import axios from "axios";
import React,{useEffect,useState} from "react";
import { useLocation,useNavigate } from "react-router-dom";
import{ENV_URL}from"../APIURL";
import'../Profile/profile.css';

const initialValues ={
    aboutuserdetails:{
        name:"",
        age:"",
        mobileno:"",
        dob:"",
    },
    userparentsdetails:{
        fathername:"",
        mothername:"",
    },
    address:{
        city:"",
        pincode:"",
        state:"",
    },
    republic:{
        mothertongue:"",
        nationality:"",
    },
};
export default function profile() {
    const[values,setValues] =useState(initialValues);
    const[isUpdate,setIsUpdate] =useState(false);
    const[id,setId]=useState(0);

    const navigate =useNavigate();
    const location=useLocation();

    useEffect(()=>{
        console.log(location.state);
        if(location.state !=null){
           if(location.state.details !==null){
               setValues(location.state.details);
               setId(location.state.details.id);
               setIsUpdate(true);
           }
        }
       },[])
   
       let handleProfile=(e)=>{
           e.preventDefault();
           if(!isUpdate){
               handleSubmit();
           }else{
               handleUpdate();
           }
       }
   
       let handleSubmit = () => {
           axios.post(ENV_URL,values).then(response=>{
               alert('data saved succesfully');
               navigate("/my-app/profile-view")
           }).catch(err=>{
               alert(err.message);
           })
       }
   
       let handleUpdate = () => {
           console.log(id);
           axios.put(ENV_URL+"/"+id,values).then(response=>{
               alert('data updated succesfully');
               navigate("/my-app/profile-view")
           }).catch(err=>{
               alert(err.message);
           })
       }
   
       const handleInputChange = (e) => {
           const { name, value } = e.target;
   
           if (name === 'Name' || name === "Age" || name === "MobileNO" || name === "DOB") {
               let a = { ...values };
               a.aboutuserdetails[name] = value;
               setValues(a)
           } else if (name === 'City' || name === "State" || name === "Pincode") {
               let b = { ...values };
               b.address[name] = value;
               setValues(b)
           } else if (name === 'FatherName' || name === "MotherName") {
               let c = { ...values };
               c.userparentsdetails[name] = value;
               setValues(c)
           } else if (name === "Mothertongue" || name === "Nationality") {
               let d = { ...values };
               d.republic[name] = value;
               setValues(d)
               // setValues({
               //     ...values,
               //     [name]: value,
               // });
           }
       };
   
       return (
           <form className="this_details">
               <fieldset id="outerline" >
                   <h2>PERSONAL DETAILS</h2>
                   <div id="div_personal">
                       <label htmlFor="Name" id="personal_details_input" >Name</label>
                       <input
                           value={values.aboutuserdetails.Name}
                           onChange={handleInputChange}
                           name="Name"
                           label="Name"
                           placeholder="Name"
                       />
                   </div>
                   <div id="div_personal">
                       <label htmlFor="Age" id="personal_details_input">Age</label>
                       <input
                           value={values.aboutuserdetails.Age}
                           onChange={handleInputChange}
                           name="Age"
                           label="Age"
                           placeholder="Age"
   
                       />
                   </div>
                   <div id="div_personal">
                       <label htmlFor="MobileNo" id="personal_details_input">MobileNo</label>
                       <input
                           value={values.aboutuserdetails.MobileNO}
                           onChange={handleInputChange}
                           name="MobileNO"
                           label="MobileNO"
                           placeholder="MobileNo"
   
                       />
                   </div>
                   <div id="div_personal">
                       <label htmlFor="DOB" id="personal_details_input">DOB</label>
                       <input
                           value={values.aboutuserdetails.DOB}
                           onChange={handleInputChange}
                           name="DOB"
                           label="DOB"
                           placeholder="DOB"
   
                       />
                   </div>
                   <div id="div_personal">
                       <label htmlFor="FatherName" id="personal_details_input">FatherName</label>
                       <input
                           value={values.userparentsdetails.FatherName}
                           onChange={handleInputChange}
                           name="FatherName"
                           label="FatherName"
                           placeholder="FatherName"
   
                       />
                   </div>
                   <div id="div_personal">
                       <label htmlFor="" id="personal_details_input">MotherName</label>
                       <input
                           value={values.userparentsdetails.MotherName}
                           onChange={handleInputChange}
                           name="MotherName"
                           label="MotherName"
                           placeholder="MotherName"
   
                       />
                   </div>
                   <div id="div_personal">
                       <label htmlFor="City" id="personal_details_input">City</label>
                       <input
                           value={values.address.City}
                           onChange={handleInputChange}
                           name="City"
                           label="City"
                           placeholder="City"
   
                       />
                   </div>
                   <div id="div_personal">
                       <label htmlFor="Pincode" id="personal_details_input">Pincode</label>
                       <input
                           value={values.address.Pincode}
                           onChange={handleInputChange}
                           name="Pincode"
                           label="Pincode"
                           placeholder="Pincode"
   
   
                       />
                   </div>
                   <div id="div_personal">
                       <label htmlFor="State" id="personal_details_input">State</label>
                       <input
                           value={values.address.State}
                           onChange={handleInputChange}
                           name="State"
                           label="State"
                           placeholder="State"
   
                       />
                   </div>
                   <div id="div_personal">
                       <label htmlFor="Mothertongue" id="personal_details_input">Mothertongue</label>
                       <input
                           value={values.republic.Mothertongue}
                           onChange={handleInputChange}
                           name="Mothertongue"
                           label="Mothertongue"
                           placeholder="Mothertongue"
   
                       />
                   </div>
                   <div id="div_personal">
                       <label htmlFor="Nationality" id="personal_details_input">Nationality</label>
                       <input
                           value={values.republic.Nationality}
                           onChange={handleInputChange}
                           name="Nationality"
                           label="Nationality"
                           placeholder="Nationality"
   
                       />
                   </div>
   
                   <button id="btn_personal" type="submit" onClick={handleProfile}> {isUpdate? 'Update':'Submit'} </button>
               </fieldset>
           </form>
       );
   }