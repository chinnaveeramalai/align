import React,{useState} from "react";

export default function App(){
    //react states
    const [errorMessages,setErrorMessages]=useState({});
    const [isSubmitted,setIsSubmitted]=useState(false);
    const database=[
        {
            username:"veera",
            password: "12345"
        },
        {
            username: "chinna",
            password: "67890"
        }
    ];
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    const handleSubmit =(event) => {
        //Prevent page reload
        Event.preventDefault();

        var {uname,pass} = document.forms[0];
        //Find user login info
        const userData = database.find((user)=> user.username ===uname.value);
        
        if(userData){
            if(userData.password !== pass.value){

                setErrorMessages ({ name:"pass", message: errs.pass});

            }else{
                setIsSubmitted(true);
            }
        }else{
            setErrorMessages({ name:"uname",message:errorMessages.uname});
        }
    };
    const renderErrorMessage =(name)=>
    name ===errorMessages.name &&(
        <div className="error">{errorMessages.message}</div>
        );

        const renderForm=(
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Username</label>
                          <input type="text" name="uname" required/>
                          {renderErrorMessage("uname")}
                          </div>
                          <div className="input-container">
                            <label>password</label>
                            <input type="password"name="pass" required/>
                            {renderErrorMessage("pass")}
                            </div>
                            <div className="button-container">
                                <input type="submit"/>
                                </div>
                                </form>
                                </div>
);
return(
    <div className="app">
        <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in </div> :renderForm}
</div>

    </div>
);
}