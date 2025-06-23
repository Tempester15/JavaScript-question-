// 46.Write a JavaScript function to get time differences in days between two dates. 
// Test Data : 
// dt1 = new Date("October 13, 2014 08:11:00"); 
// dt2 = new Date("October 19, 2014 11:13:00"); 
// console.log(diff_days(dt1, dt2)); 
// 6
// Solution - 

const diffDays = (date1, date2) => {
    const diffMs = date2 - date1;
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

const dt46a = new Date("October 13, 2014 08:11:00");
const dt46b = new Date("October 19, 2014 11:13:00");
console.log(diffDays(dt46a, dt46b)); 