// 45.Write a JavaScript function to get time differences in hours between two dates. 
// Test Data : 
// dt1 = new Date("October 13, 2014 08:11:00"); 
// dt2 = new Date("October 13, 2014 11:13:00"); 
// console.log(diff_hours(dt1, dt2)); 
// 3
// Solution - 

const diffHours = (date1, date2) => {
    const diffMs = date2 - date1;
    return Math.floor(diffMs / (1000 * 60 * 60));
}

const dt45a = new Date("October 13, 2014 08:11:00");
const dt45b = new Date("October 13, 2014 11:13:00");
console.log(diffHours(dt45a, dt45b));