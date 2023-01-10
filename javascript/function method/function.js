function greeting(){
window.alert("welcome");
console.log(window)
}

function getCurrentDate(){
    let today=new Date();
    document.querySelector('#today').innerHTML=today;
    console.log("hii veera",today)
}
getCurrentDate();