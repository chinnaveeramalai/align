import { useState } from "react";
import"../Customerprofile/Customerprofile.css";
import CustomerTable from "../../CustomerTable/CustomerTable";

export default function Customerprofile(){
    const[detail,setDetails] = useState({ userName: '',Age: ''})
    
    let handleSubmit =()=>{
        alert('data saved' + JSON.stringify(detail))
    }


    let handleData = (e) => {
        let { name, value } = e.target;
        let d = { ...detail };
        d[name] = value;
        
        setDetails(d);
    }
        // let handleData =(e)=>{
        //     let{name,value}=e.target;
        //     let d={...detail};
        //     d[name]= value;
        // }
    return(
        <div>
            <fieldset id="the_first">
                <h2 id="one">Customer details</h2>
                <div id="two">
                    <input type="text" id="cs_name" name="userName"
                    placeholder="Customer Name"value= {detail.userName}
                    onInput={handleData}/>
                    <input type="text" id="cs_age" name="Age"
                    placeholder="Customer Age" value= {detail.useAge} 
                    onInput={handleData}/>
          <button id="cs_ass" onClick={handleSubmit}>Add</button>
                </div>

            </fieldset>
            <CustomerTable/>
        </div>
    )
}
