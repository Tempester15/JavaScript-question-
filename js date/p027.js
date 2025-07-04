// 27.Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec). 
// Test Data : 
// dt = new Date(2015, 10, 1); 
// console.log(short_months(dt)); 
// "Nov"
// Solution - 

const shortMonths = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short' });
}

console.log(shortMonths(new Date(2015, 10, 1)));