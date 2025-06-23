// 15.Write a JavaScript program to display the colors in the following way : 
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]; 
// o = ["th","st","nd","rd"] 
// Output - 
// "1st choice is Blue ." 
// "2nd choice is Green." 
// "3rd choice is Red."
// Solution - 

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    if (i === 0) {
        console.log(`${i + 1}${o[1]} choice is ${color[i]}.`);
    }
    else if (i === 1) {
        console.log(`${i + 1}${o[2]} choice is ${color[i]}.`);
    }
    else if (i === 2) {
        console.log(`${i + 1}${o[3]} choice is ${color[i]}.`);
    }
    else {
        console.log(`${i + 1}${o[0]} choice is ${color[i]}.`);
    }
}