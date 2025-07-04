// 5.Write a JavaScript function to compare dates (i.e. greater than, less than or equal to). 
// Test Data :
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); 
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'))); 
// Output : 
// "Date1 = Date2" 
// "Date1 > Date2" 
// "Date2 > Date1"
// Solution - 

const compareDate = (date1, date2) => {
    let time1 = date1.getTime();
    let time2 = date2.getTime();
    if (time1 === time2) {
        return "Date1 = Date2";
    }
    else if (time1 > time2) {
        return "Date1 > Date2";
    }
    else {
        return "Date2 > Date1";
    }
}
console.log(compareDate(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compareDate(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compareDate(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'))); 