
let age = 20;

if( age > 28 ){
document.write("<b>Qualifies for driving</b>");
}else{
    document.write("does not quqlifies for driving");
}


let book="maths book";
if (book=="history book") {
    document.write("history book");
    } else if(book=="maths book") {
    document.write("maths book");
}else if(book=="economics book"){
    document.write("economic book")
}else{
    document.write("unknowbook");
}
// switch case
var grade='A';
// document.write("enter switch blocked")
switch (grade)
{
    case'A':document.write("good job");
    break;
    case'B':document.write("pretty good");
    break;
    case'C':document.write("passed");
    break;
    case'D':document.write("not so good");
    break;
    case'E':document.write("failed");
    break;
    case'F':document.write("unknowgrate");
}
// while loop
let count=0;
document.write("starting loop");
while(count < 10){
    document.write("current count:"+count+"</br>");
    count++;
}
document.write("loop stopped!");
// do while loop
let count1=0;
document.write("starting loop");
do{
    document.write("current count:"+ count1 +"</br>");
    count1++;
}while(count1 < 10);
document.write("loop stopped!");
// return statement
function concatenate(first, last)
{
    var full;
    full = first + last;
    return full;
    }
    function secondFunction()
    {
    var result;
    result = concatenate('Zara', 'Ali');
    document.write (result );
    }
    // function
    function sayhello()
    {
        alert("hello there!");
        document.write("hello there!");
    }
    // calling function
    function sayhello()
    {
        document.write("hello there!");
    }
    // function parameters
    function veera(name,age)
    {
        document.write(name+"is"+age+"years old");
    }
    // cookies
    function WriteCookie()
{
if( document.myform.customer.value == "" ){
alert ("Enter some value!");
return;
}
cookievalue= escape(document.myform.customer.value) + " ";
document.cookie="name=" + cookievalue;
document.write ("Setting Cookies : " + "name=" + cookievalue );
}