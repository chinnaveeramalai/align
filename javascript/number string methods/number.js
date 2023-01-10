let mark1=10
let mark2=50
console.log(mark1+mark2)

//string to number conversion
let tot=Number(mark1)+Number(mark2);
console.log(typeof tot,tot)

let salary=8798.98
//rond-off&decimal allow 0,1
console.log(salary,salary.toFixed(0),salary.toFixed(1));

//in value returns
let pfAmt=496.95;
console.log(parseInt(pfAmt));

let esf=496.95;
console.log(parseFloat(esf));
// string + result string
console.log(60+80);
console.log(60-80);

// access particular character=[index]
//total no of character-length
let greeting="hello world welcome"
console.log(greeting[1]);
console.log(greeting.length);

//extracting particular part
//substring,slice(starIndex,endIndex) (0,4) -0,1,2,3
console.log(greeting.substring(0,7));
console.log(greeting.slice(4,8));
console.log(greeting.slice(-7,-1));
console.log(greeting.slice(6,11));
console.log(greeting.slice(-13,-8))

let address=" k k nagar ";
console.log(address);
let newAddress=address.trim();
console.log(newAddress);

//replace
let content="good morning good afternoon";
let my_content=content.replace("good","happy");
console.log(content,my_content);

//replace--->g
let my_content2=content.replace(/good/g,"happy");
console.log(content,my_content);

let getaddresss=address.replace(/ /g,'');
console.log(address);

//index---->  particular character return
console.log(content.charAt(5));
console.log(content.charAt(5),content.charCodeAt(5));

//-1 not present in the world; finding character return index
console.log(content.indexOf('m'))
console.log(content.indexOf('u'))

// it includes - true (or)false (contains) return bollean
console.log(content.includes('morning'))

//search methods - word return bollen
console.log(content.search('mo'),content.search('u'))

console.log(getaddresss.toLocaleUpperCase(),getaddresss.toLocaleLowerCase());

let str=content.concat(my_content2,address,"haii",64345," ",123997);
console.log(str);

var greetings="world are the beautiful and the world are wonderful"
console.log(greetings.length);
console.log(greetings.slice(26,42));