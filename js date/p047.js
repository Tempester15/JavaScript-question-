// 47.Write a JavaScript function to get time differences in weeks between two dates. 
// Test Data : 
// dt1 = new Date("June 13, 2014 08:11:00"); 
// dt2 = new Date("October 19, 2014 11:13:00"); 
// console.log(diff_weeks(dt1, dt2)); 
// 18
// Solution - 

const diffWeeks = (date1, date2) => {
    const diffMs = date2 - date1;
    return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
}

const dt47a = new Date("June 13, 2014 08:11:00");
const dt47b = new Date("October 19, 2014 11:13:00");
console.log(diffWeeks(dt47a, dt47b));