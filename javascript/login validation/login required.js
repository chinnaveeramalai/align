let handlesubmit=()=>{
    alert("login successfully");
    window.location.href="../component/form.html"
}

let handleEmail=()=>{
    let emailError=document.getElementById('emailError');
    let email=document.getElementById('email');
    if(! email.checkValidity()){
        emailError.innerText=email.validationMessage;
        }else{
            emailError.innerText="";
        }
    }
    let handlename=()=>{
        let nameError=document.getElementById('nameError');
        let name=document.getElementById('name');
        if(! name.checkValidity()){
            nameError.innerText=email.validationMessage;
            }else{
                nameError.innerText="";
            }
        }
 let handlepassword=()=>{
        let passwordError=document.getElementById('ageError');
        let password=document.getElementById('age');
        if(!age.checkValidity()){
            passwordError.innerText=age.validationMessage;
            
        }else{
            passwordError.innerText="";
        }
    }
    let handleage=()=>{
        let ageError=document.getElementById('ageError');
        let age=document.getElementById('age');
        if(!age.checkValidity()){
            ageError.innerText=age.validationMessage;
            
        }else{
            ageError.innerText="";
        }
    }