// 20.Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun). 
// Test Data : 
// dt = new Date(2015, 10, 1); 
// console.log(short_Days(dt)); 
// "Sun"
// Solution - 

function short_Days(date) {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
}

dt = new Date(2015, 10, 1);
console.log(short_Days(dt));