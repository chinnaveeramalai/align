import { useState } from "react";
import { StatusContext } from "../../Context/StatusContext";
import Disclaimer from "../Disclaimer/Disclaimer";

export default function StatusDetails(){
    const [statusName,setStatusName] =useState('');
    const [status,setStatus] =useState([]);

    const title="Haii";

    let handleAdd=()=>{
        let s=[...status];
        s.push(statusName);
        setStatus(s);
        alert(`${statusName} added successfully`);
        setStatusName('');
    }

    let deleteByIndex=(i)=>{
      let s=[...status];
      s.splice(i,1);
      setStatus(s);
    }
    let greeting=(name)=>{
        alert("Welcome "+name);
    }
    return(
        <div>
            <section className="my-content">
                <h3>Status Details</h3>
                <input  type="text" placeholder="status Name" name="statusName" value={statusName} onInput={(e)=>setStatusName(e.target.value)}/>
                <button type="button" onClick={handleAdd}>Add</button>
            </section>

            <StatusContext.Provider value={{status,deleteByIndex,title,greeting}}>
            <Disclaimer/>
            </StatusContext.Provider>

        </div>
    )
}