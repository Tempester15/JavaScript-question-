// 44.Write a JavaScript function to get time differences in minutes between two dates. 
// Test Data : 
// dt1 = new Date("October 13, 2014 11:11:00");
// dt2 = new Date("October 13, 2014 11:13:00"); 
// console.log(diff_minutes(dt1, dt2)); 
// 2
// Solution - 

const diffMinutes = (date1, date2) => {
    const diffMs = date2 - date1;
    return Math.floor(diffMs / 60000);
}

const dt44a = new Date("October 13, 2014 11:11:00");
const dt44b = new Date("October 13, 2014 11:13:00");
console.log(diffMinutes(dt44a, dt44b));
