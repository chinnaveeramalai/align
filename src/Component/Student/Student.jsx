export default function Student() {
    let Name = 'veeramalai';
    let Age = 24;
    let isAppproved = true;
    let JobDetail = { companyName: 'IBM', location: 'chennai' };
    let favorateColor = ['blue', 'black', 'orange'];
    let addressDetails = [{ id: 1, city: 'Chennai', pincode: 687899 }, { id: 2, city: 'Madurai', pincode: 658797 }]
    
    //iterate the element using map() ->return elements 
    //( Each child in a list should have a unique "key - unique key provide either index/id)
    var handleclick = () => {
        alert('welcome veera');
    }
    return (
        <div style={{ border: "solid", borderColor: "red" }}>
            <h1 style={{ backgroundColor: "yellowgreen" }}>Student Detail</h1>
            <ol>
                <li>Name: {Name}</li>
                <li>Age:  {Age}</li>
                <li>Job:  {JobDetail.companyName}</li>
                <li>Approved Status :{isAppproved ? 'Approved' : 'Rejected'}</li>
            </ol>
            <h5>Colors</h5>
            <ol>
                {favorateColor.map((item, i) => {
                    return (
                        <li key={i}>{item}</li>
                    )
                })}
            </ol>
            <table>
                <thead>
                    <tr>
                        <th>Id</th><th>City</th><th>Pincode</th>
                    </tr>                
                    </thead>
                <tbody>
                    {
                        addressDetails.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.city}</td>
                                    <td>{item.pincode}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
        </table>
    <div className="mybutton">
  <button type="button" onClick={handleclick} style={{ color: "yellow", backgroundColor: "brown" }}>Alert</button>
        </div>
        </div>
    )
 }
 
