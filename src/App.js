import './App.css';
import Eligiblestudent from './Component/Student/Eligiblestudent';
import { College, School } from './Component/Student/Education';
import Student from './Component/Student/Student';
import Main from './Component/Main/Main';
import Customerprofile from './Component/Student/Customerprofile/Customerprofile';
import { BrowserRouter } from 'react-router-dom';


function App() {
  // const myStyle={backgroundColor:"red",color:'black'}
  return (
    <div className="App">
      {/* <h1 style={{backgroundColor:"red",color:'black'}}>My Project</h1>
      <h2 style={myStyle}>Hi Welcome</h2>
      <Student/>
      <School/>
      <College/>
      <Eligiblestudent/>
      <footer>@copyright 2022</footer> */}
       <BrowserRouter>
      <Main/>
      <Customerprofile/>
      </BrowserRouter>
    </div>
  )
}

export default App;
