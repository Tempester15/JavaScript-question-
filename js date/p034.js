// 34.Write a JavaScript function to get 24-hour format of an hour without leading zeros. 
// Test Data : 
// dt = new Date(1989, 10, 1); 
// console.log(hours_without_zeroes(dt));
// Solution - 

const hoursWithoutZeroes = (date) => {
    return date.getHours();
}

console.log(hoursWithoutZeroes(new Date(1989, 10, 1)));
console.log(hoursWithoutZeroes(new Date(1989, 10, 1, 15)));