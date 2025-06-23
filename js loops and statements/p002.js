// 2.Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. 
// Sample numbers : 3, -7, 2 
// Output : The sign is -
// Solution - 
a = parseInt(prompt("enter first number : "));
b = parseInt(prompt("enter second number : "));
c = parseInt(prompt("enter third number : "));
string = String(a) + String(b) + String(c);
let count = 0;
for (i of string) {
    if (i === '-') {
        count++;
    }
}
console.log(count);
if (count === 2) {
    console.log("The Sign is +");
}
else if (count === 3) {
    console.log("The Sign is -");
}
else if (count === 1) {
    console.log("The Sign is -");
}
else {
    console.log("The Sign is + ");
}