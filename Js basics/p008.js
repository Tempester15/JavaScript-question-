// 8.Write a JavaScript program where the program takes a random integer 
// between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
// Solution - 

let randomNum = Math.round(Math.random() * 10);
userNum = parseInt(prompt("Guess the number : "));
if (userNm === randomNum) {
    console.log("Matched");
}
else {
    console.log("Not matched");
}