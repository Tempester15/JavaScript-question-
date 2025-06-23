// 35.Write a JavaScript function to get minutes with leading zeros (00 to 59). Test Data : 
// dt = new Date(1989, 10, 1); 
// console.log(minutes_with_leading_zeros(dt)); 
// "00"
// Solution - 

const minutesWithLeadingZeros = (date) => {
    return String(date.getMinutes()).padStart(2, '0');
}

console.log(minutesWithLeadingZeros(new Date(1989, 10, 1)));