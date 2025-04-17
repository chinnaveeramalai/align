const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirm password");

form.addEventListener('submit',e=>{
  e.preventDefault();
  checkInput();
});
function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
    
    if(usernameValue === ''){
        setError(username,'username cannot Be Blank');
    }
    else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email,'Email Cannot Be Blank')
    }
    else if(!isEmail(emailValue))
    {
        setError(email,'not a valid Email');
    }
    else{
        setSuccess(email)
    }

    if(passwordValue === ''){
        setError(password,'password cannot Be Blank');
    }
    else{
        setSuccess(password);
    }

    if(confirmpasswordValue === ''){
        setError(confirmpassword,'confirmpassword cannot Be Blank');
    }
    else if(passwordValue !== confirmpassword){
        setError(confirmpassword,'password does not match')
    }
    else{
        setSuccess(confirmpassword);
    }
    function setError(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className ='form-control error';
        small.innerText=message; 
    }

    // function isEmail(email){
    //     return
    // }
}