let handleRegister=()=>{
    if(isuserValid && ispwdValid && isemailValid){
        alert("register successfully");
    }
    else{
        alert("falied");
        handleuname();
        handlepassword();
        handleConfirmpasword();
        handleEmail();
    }
}
 
let isuserValid=false;
let ispwdValid=false;
let isConfirmpwd=false;
let isemailValid=false;

let name=document.getElementById('username');

let handleuname=(e)=>{
    handleuserkey(e)
let username=document.getElementById('usernameError');
if(username.value == ""){
usernameError.innerText="uname is required";
 isuserValid=false;
}else if(username.value.lenght<5){
    usernameError.innerText="uname should be greater than 8 character";
    isuserValid=false;
}else{
    usernameError.innerText="";
    isuserValid=true;
   }
}

let email=document.getElementById('email');
let handleEmail=()=>{
let email=document.getElementById('email');
if(email.value == ""){
emailError.innerText="email is required";
//  isuserValid=false;
}else if(email.value.lenght<5){
    emailError.innerText="uname should be greater than 8 character";
    // isuserValid=false;
}else{
    emailError.innerText="";
    // isuserValid=true;
   }
}

let password=document.getElementById('password');
let handlepassword=()=>{
let password=document.getElementById('password');
console.log(password.passwordError)
if(password.value == ""){
passwordError.innerText="password is required";
//  isuserValid=false;
}else if(password.value.lenght<5){
    passwordError.innerText="uname should be greater than 8 character";
    // isuserValid=false;
}else{
    passwordError.innerText="";
    // isuserValid=true;
   }
}

let handleIcon=()=>{
    let close=document.getElementById('close');
    let open=document.getElementById('open');
    // console.log(open,close)

    if(password.type = "password"){
        password.type="text";
        open.style.display='none';
        close.style.display="inline";
    }else{
        password.type == "password"
        password.type="text";
        open.style.display='none';
        close.style.display="inline";
    }
}
 let handleConfirmpasword=()=>{
 let confirmpassword=document.getElementById('confirmpassword');
 let confirmpwdError=document.getElementById('confirmpwdError');
 console.log(confirmpassword,confirmpwdError,confirmpassword.value,password.value)
 if(confirmpassword.value == ""){
    confirmpwdError.innerText="confirmpaaword is required";
    isConfirmpwd=false;
 }else if(confirmpassword.value.lenght<8){
    confirmpwdError.innerText="confirmpassword should be greater than 8 character";
    isConfirmpwd=false;
}else if(confirmpassword.value !=password.value){
    confirmpwdError.innerText="confirm password not matched with password";
    isConfirmpwd=false;
}
else{
    confirmpwdError.innerText="";
    isConfirmpwd=true;
   }
}