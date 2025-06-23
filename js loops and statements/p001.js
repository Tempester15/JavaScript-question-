// 1.Write a JavaScript program that accept two integers and display the larger.
// Solution - 
x = parseInt(prompt("enter first number: "));
y = parseInt(prompt("enter second number: "));

if(x > y){
    console.log(x + " is greator than " + y);
}
else if(x < y){
    console.log(y + " is greator than " + x);
}
else if(x === y){
    console.log(x + " and " + y + " are equal");
}
else{
    console.log("error! please try again");
}