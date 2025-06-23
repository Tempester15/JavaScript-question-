// 42.Write a JavaScript function to add specified weeks to a date. 
// Test Data : 
// dt = new Date(2014,10,2); 
// console.log(add_weeks(dt, 10).toString()); 
// Output : 
// "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"
// Solution - 

const addWeeks = (date, weeks) => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + weeks * 7);
    return newDate;
}

const dt42 = new Date(2014, 10, 2);
console.log(addWeeks(dt42, 10).toString());