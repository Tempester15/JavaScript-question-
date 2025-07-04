// 43.Write a JavaScript function to add specified months to a date. 
// Test Data : 
// dt = new Date(2014,10,2); 
// console.log(add_months(dt, 10).toString()); 
// Output : 
// "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"

// Solution - 

const addMonths = (date, months) => {
    let newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
}

const dt43 = new Date(2014, 10, 2);
console.log(addMonths(dt43, 10).toString());