export default function Eligiblestudent(){
    let eligiblestudent =[{id:1,name:'veera',age:24},{id:2,name:'chinna',age:14},
{id:3,name:'shankar',age:26},{id:4,name:'vishnu',age:16}]
    return(
<table>
    <thead>
     <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Eligiblestudent</th>
        </tr>
    </thead>
    <tbody>
        {
            eligiblestudent.map(item => {
         return(
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.age >=18 ?'adult':'child'}</td>
            </tr>
         )
            })
        }
    </tbody>
 </table>
    )
}