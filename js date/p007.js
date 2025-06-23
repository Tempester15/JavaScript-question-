// 7.Write a JavaScript function to test whether a date is a weekend. 
// Note : Use standard Saturday/Sunday definition of a weekend. 
// Test Data : 
// console.log(is_weekend('Nov 15, 2014')); 
// console.log(is_weekend('Nov 16, 2014')); 
// console.log(is_weekend('Nov 17, 2014')); 
// Output : 
// "weekend"
// Solution - 

const checkWeekend = (date) => {
    date = new Date(date);
    let day = date.getDay();
    if (day === 0 || day === 6) {
        return true;
    }
    else {
        return false;
    }

}

console.log(checkWeekend('Nov 15, 2014'));
console.log(checkWeekend('Nov 16, 2014'));
console.log(checkWeekend('Nov 17, 2014'));