// 4.Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.
// Solution - 
let arr = [80, 77, 88, 95, 68];
let sum = 0;
for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
}
let average = sum / arr.length;
console.log(average);
if (average < 100 && average >= 90) {
    console.log("A");
}
else if (average < 90 && average >= 80) {
    console.log("B");
}
else if (average < 80 && average >= 70) {
    console.log("C");
}
else if (average < 70 && average >= 60) {
    console.log("D");
}
else if (average < 60) {
    console.log("F");
}
else {
    console.log("May god help you");
}