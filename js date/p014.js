// 14.Write a JavaScript function to get the amount of days of a year. 
// Test Data : 
// console.log(days_of_a_year(2015)); 
// 365 
// console.log(days_of_a_year(2016)); 
// 366
// Solution - 
const daysOfaYear = (year) => {
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        date = new Date(year, i, 0).getDate();
        sum += date;
    }
    return sum;
}

console.log(daysOfaYear(2015));
console.log(daysOfaYear(2016));