// 4.Write a JavaScript function to get the month name from a particular date. 
// Test Data : 
// console.log(month_name(new Date("10/11/2009"))); 
// console.log(month_name(new Date("11/13/2014"))); 
// Output : 
// "October" 
// "November"
// Solution - 
const getMonthName = (obj) => {
    let date = obj.getMonth();
    months = [
        'January', 'february',
        'march', 'april',
        'may', 'june',
        'july', 'august',
        'september', 'october',
        'november', 'december'
    ]
    return months[date];

}
console.log(getMonthName(new Date("10/11/2009")));
console.log(getMonthName(new Date("11/13/2014")));