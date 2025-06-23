// 33.Write a JavaScript function to get 12-hour format of an hour with leading zeros. 
// Test Data : 
// dt = new Date(1989, 10, 1); 
// console.log(hours_with_zeroes(dt)); 
// "12"
// Solution - 

const hoursWithZeroes = (date) => {
    let hour = date.getHours() % 12;
    hour = hour === 0 ? 12 : hour;
    return String(hour).padStart(2, '0');
}

console.log(hoursWithZeroes(new Date(1989, 10, 1)));
console.log(hoursWithZeroes(new Date(1989, 10, 1, 3)));
