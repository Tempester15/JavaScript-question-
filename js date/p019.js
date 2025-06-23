// 19.Write a JavaScript function to get the day of the month, 2 digits with leading zeros. 
// Test Data : 
// d= new Date(2015, 10, 1); 
// console.log(day_of_the_month(d)); 
// "01"
// Solution - 

function dayOfTheMonth(date) {
    return ("0" + date.getDate()).slice(-2);
}
d = new Date(2015, 10, 1);
console.log(dayOfTheMonth(d)); 