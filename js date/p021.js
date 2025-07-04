// 21.Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday). 
// Test Data : 
// dt = new Date(2015, 10, 1); 
// console.log(long_Days(dt)); 
// "Sunday"
// Solution - 

function longDays(date) {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

console.log(longDays(new Date(2015, 10, 1)));