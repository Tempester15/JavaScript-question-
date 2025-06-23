// 41.Write a JavaScript function to add specified years to a date. 
// Test Data : 
// dt = new Date(2014,10,2); 
// console.log(add_years(dt, 10).toString()); 
// Output : 
// "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"
// Solution - 
const add_years = (date, years) => {
    let newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
}

const dt41 = new Date(2014, 10, 2);
console.log(add_years(dt41, 10).toString());