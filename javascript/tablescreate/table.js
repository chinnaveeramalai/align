let person={
    firstname:'shankar',
    lastname:'chinna',
    age:24,
    phonenumber:9778654321,
    email:'shankarchinna@gmail.com'
}
for(let[j,k] of Object.entries(person)){
    let list=document.createElement('li');
    list.innerText=j+" "+k;
    console.log(list)
    let addressContent=document.querySelector('#addressContent')
    addressContent.appendChild(list);
    console.log(addressContent)
}
//----------------------------studentTable----------------------------//

let studentDetail=[{id:1,name:"veeramalai",city:'chennai',pincode:'09987'},
{id:2,name:"chinna",city:'madurai',pincode:'75634'},
{id:3,name:"vicky",city:'trichy',pincode:'323456'},
{id:4,name:"vishnu",city:'chennai',pincode:'908765'}]
let studentTable=document.querySelector('.student-table');
let studentContent=document.createElement('tbody');
console.log(studentTable)

for(let i in studentDetail){
    console.log(studentDetail[i].id,studentDetail[i].name);
    let row=document.createElement('tr');

    let col1=document.createElement('td');
    col1.innerText=studentDetail[i].id;
    row.appendChild(col1);

    let col2=document.createElement('td');
    col2.innerText=studentDetail[i].name.toLocaleUpperCase();
    row.appendChild(col2);
    
    let col3=document.createElement('td');
    col3.innerText=studentDetail[i].city.toLocaleUpperCase();
    row.appendChild(col3);
    
    let col4=document.createElement('td');
    col4.innerText=studentDetail[i].pincode.toLocaleUpperCase();
    row.appendChild(col4);

    studentContent.appendChild(row);
    console.log(studentContent);
}

studentTable.appendChild(studentContent);

//-------------------------markdetails-------------------------//
//-----------------------------------------------------------//

let studentmark=[{id:1,name:"chinna",tamil:50,english:88,maths:58,science:70,social:99},
{id:2,name:"veera",tamil:90,english:88,maths:96,science:80,social:76},
{id:3,name:"shankar",tamil:80,english:58,maths:45,science:70,social:78},
{id:4,name:"vicky",tamil:90,english:76,maths:98,science:77,social:99},
{id:5,name:"vishnu",tamil:40,english:58,maths:67,science:66,social:67},]
let markdetails=document.querySelector('.markdetails');
let markContent=document.createElement('tbody');
console.log(markdetails)
for(let i in studentmark){
    console.log(studentmark[i].id,studentmark[i].name);
    let row=document.createElement('tr');

    let col1=document.createElement('td');
    col1.innerText=studentmark[i].id;
    row.appendChild(col1);

    let col2=document.createElement('td');
    col2.innerText=studentmark[i].name.toLocaleUpperCase();
    row.appendChild(col2);
    
    let col3=document.createElement('td');
    col3.innerText=studentmark[i].tamil;
    row.appendChild(col3);

    let col4=document.createElement('td');
    col4.innerText=studentmark[i].english;
    row.appendChild(col4);

    let col5=document.createElement('td');
    col5.innerText=studentmark[i].maths;
    row.appendChild(col5);
    let col6=document.createElement('td');
    col6.innerText=studentmark[i].science;
    row.appendChild(col6);
    let col7=document.createElement('td');
    col7.innerText=studentmark[i].social;
    row.appendChild(col7);

    let total=studentmark[i].tamil + studentmark[i].english + studentmark[i].maths + studentmark[i].science + studentmark[i].social;
    let precentage=(total / 5);

    let col8=document.createElement('td');
    col8.innerText=total;
    row.appendChild(col8);

    let col9=document.createElement('td');
    col9.innerText=precentage + " % ";
    row.appendChild(col9);

    let col10=document.createElement('td');
    col10.innerText= precentage >= 70 ? 'A': (precentage >50 && precentage < 70) ? 'B':'C';
    row.appendChild(col10);
    
    markContent.appendChild(row);
    console.log(markContent);
}
markdetails.appendChild(markContent);
