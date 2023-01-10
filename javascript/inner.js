let title="party,veera"
let heading=document.getElementById('heading');
console.log(heading);
// innerhtml
heading.innerHTML=title+"<mark>hi</mark>"
// innertex
// heading.innerText=title+"<mark>hi</mark>"

let firstname=document.querySelector('#firstname');
firstname.value="veera"
firstname.className='my-input';

let subtitle=document.getElementById('subtitle');
subtitle.innerText=title;

let mytext=document.querySelector('.my-text');
console.log(mytext)

mytext.innerText="welcome veera";
mytext.style.color="green";
mytext.style.backgroundcolor='red';

let link=document.createElement('a');
link.href="../../assets/a.png";
link.innerText="click me";
document.body.append(link)
let profile=document.createElement('img');
profile.src="../../assets/c.png";
document.body.append(profile);
console.log(profile)