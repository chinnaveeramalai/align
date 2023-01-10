let content="the rain SPAIN stays mailny in the rain plain"
//string to array--->split
let split_content=content.split("SPAIN");
console.log(split_content); 

//findIndex/indexOf---> -1 --->push to new content(string)
//push,split,join
let newcontent=[];
for(let i in split_content){
    console.log(split_content[i],newcontent)
}

//array to string-----> join()
let joincontent=split_content.join("SPAIN");
console.log(split_content,joincontent);

//array methods
let fruits=['apple','orange'];
console.log(fruits);

//adding last position
fruits.push('graphes','guva');
console.log(fruits);

//adding first position
fruits.unshift('mango','dragon');
console.log(fruits);

//removing last position
fruits.pop();
console.log(fruits)

//removing first position
fruits.shift();
console.log(fruits)

//add & remove particular index
fruits.splice(1,2,'pineapple');
console.log(fruits)

//add only
fruits.splice(3,0,'watermelon');
console.log(fruits)
//remove only
fruits.splice(1,1);
console.log(fruits)

//slice--->extracting particualr part 1,2
let getfruits=fruits.slice(1,3);
console.log(getfruits)

//items-any elemnt iterate-if condent satifised--->return element else undefined
let findElement=fruits.find(item=>item=='dragon');
console.log(findElement)

//finIndex-if content satifised-->return element index else -1
let findElementIndex=fruits.findIndex(item=>item=='graphes');
console.log(findElementIndex)

let x=4;
x+-5;
console.log(x)

//18 > 18
let age=14;
if(age>18){
    console.log('eligiblie')
    }else{
        console.log('not eligiblie') 
    }
//ternary operactor
//condn ? exp1:exp2

let place='chennai';
let agestatus=(age >-18 && place.toLocaleUpperCase()=="CHENNAI") ? 'eligiblie':'not eligiblie';
console.log(agestatus);