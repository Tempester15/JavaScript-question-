/*1.Write a JavaScript program to display the current day and time in the following 
format. 
Sample Output : Today is : Friday. 
Current time is : 4 PM : 50 : 22
Solution -*/ 

let days = ["sunday", 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let day = new Date();

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
const ampm = hours > 12 ? "PM" : "AM"
const hours12 = hours > 12 ? hours -= 12 : hours;

console.log(`Today is ${days[day.getDay()]}`);
console.log(`Time is : ${hours} ${ampm} : ${minutes} : ${seconds}`)