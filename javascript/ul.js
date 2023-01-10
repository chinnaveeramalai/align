// let li=document.getElementById('list').getElementsByTagName("li");
// li[0].style.color="red";
let title="red"
let a=document.getElementById('a');
console.log(a);
a.innerText=title;

let head="green"
let b=document.getElementById('b');
console.log(b);
b.innerText=head;

let list="blue"
let c=document.getElementById('c');
console.log(c);
c.innerText=list;

// let li=document.getElementById('out').getElementsByTagName("li");
// li[0].style.color="yellow";

let profile=document.createElement('iframe');
document.body.append(profile);
console.log(profile)
profile.src="../idcard.html"
profile.style.width="50%";
profile.style.height="70%";

heading.innerHTML="<mark id='name'>veera</mark>malai";
heading.style.backgroundColor="green";
heading.style.fontFamily="cursive";
heading.style.fontSize="bold";
document.querySelector('#name').style.backgroundColor="green"