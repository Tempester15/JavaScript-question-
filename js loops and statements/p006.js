// 6.Write a JavaScript program to find the armstrong numbers of 3 digits. Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
// Solution - 
let number = parseInt(prompt("enter the number : "));
// let number = 371;
let x = number;
let rem, sum = 0;
while (number > 0) {
    rem = number % 10;
    sum += rem ** 3;
    number = Math.floor(number / 10);
}
if (x === sum) {
    console.log(x + " is an armstrong number");
}
else {
    console.log(x + " is not an armstrong number");
}