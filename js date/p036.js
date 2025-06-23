// 36.Write a JavaScript function to get seconds with leading zeros (00 through 59). 
// Test Data : 
// dt = new Date(1989, 10, 1); 
// console.log(seconds_with_leading_zeros(dt)); 
// "00"
// Solution - 

const secondsWithLeadingZeros = (date) => {
    return String(date.getSeconds()).padStart(2, '0');
}

console.log(secondsWithLeadingZeros(new Date(1989, 10, 1)));