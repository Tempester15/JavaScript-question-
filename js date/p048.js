// 48.Write a JavaScript function to get time differences in months between two dates. 
// Test Data : 
// dt1 = new Date("June 13, 2014 08:11:00"); 
// dt2 = new Date("October 19, 2014 11:13:00"); 
// console.log(diff_months(dt1, dt2)); 
// 5
// Solution - 

const diffMonths = (date1, date2) => {
    let years = date2.getFullYear() - date1.getFullYear();
    let months = date2.getMonth() - date1.getMonth();
    return years * 12 + months;
}

const dt48a = new Date("June 13, 2014 08:11:00");
const dt48b = new Date("October 19, 2014 11:13:00");
console.log(diffMonths(dt48a, dt48b));