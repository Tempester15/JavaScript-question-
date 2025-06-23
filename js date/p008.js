// 8.Write a JavaScript function to get difference between two dates in days. 
// Test Data : 
// console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
// console.log(date_diff_indays('12/02/2014', '11/04/2014')); 
// Output : 
// 216 
// -28

// Solution - 

const dateDifferenceInDays = (date1, date2) => {
    date1 = new Date(date1);
    date2 = new Date(date2);
    let time1 = date1.getTime();
    let time2 = date2.getTime();
    return (time2 - time1) / (1000 * 60 * 60 * 24);
}

console.log(dateDifferenceInDays('04/02/2014', '11/04/2014'));
console.log(dateDifferenceInDays('12/02/2014', '11/04/2014'));