// 38.Write a JavaScript function to find whether or not the date is in daylights savings time.
// Test Data :
// dt = new Date();
// console.log(daylights_savings(dt));
// 1 
// Solution - 

const daylightsSavings = (date) => {
    const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
    const jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
    return Math.min(jan, jul) !== date.getTimezoneOffset() ? 1 : 0;
}

console.log(daylightsSavings(new Date()));