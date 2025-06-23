// 3.Write a JavaScript function to get the number of days in a month. 
// Test Data : 
// console.log(getDaysInMonth(1, 2012)); 
// console.log(getDaysInMonth(2, 2012)); 
// console.log(getDaysInMonth(9, 2012)); 
// console.log(getDaysInMonth(12, 2012));
// Solution - 
const getDaysInMonth = (month, year) => {
    let dateObj = new Date(year, month, 0).getDate();
    return dateObj
}
console.log(getDaysInMonth(2, 2012));