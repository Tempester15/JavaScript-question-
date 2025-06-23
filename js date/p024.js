// 24.Write a JavaScript function to get ISO-8601 week number of year, weeks starting on Monday. 
// Example : 42 (the 42nd week in the year) 
// Test Data : 
// dt = new Date(2015, 10, 1); 
// console.log(ISO8601_week_no(dt)); 
// 44
// Solution - 

function ISO8601_week_no(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}


console.log(ISO8601_week_no(new Date(2015, 10, 1)));