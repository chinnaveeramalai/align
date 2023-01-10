import { useContext } from "react"
import { StatusContext } from "../../Context/StatusContext"

export default function StatusView(){
    const {status,deleteByIndex,greeting} = useContext(StatusContext);

    let handleDelete=(i)=>{
        alert("deleted succesffully");
        deleteByIndex(i);
    }
    return(
        <div>
            <section className="my-content">
                <h3>StatusView</h3>
                {JSON.stringify(status)}

                <ul>
                    {
                        status.map((item,i)=>(
                         <li key={i}>{item} <button onClick={()=>handleDelete(i)}>X</button></li>
                        )
                        )
                    }
                </ul>
                <button type="button" onClick={()=>greeting('Pradeep')}>alert</button>
            </section>
        </div>
    )
}