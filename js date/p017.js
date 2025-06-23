// 17.Write a JavaScript function to convert a Unix timestamp to time. 
// Test Data : 
// console.log(days_passed(new Date(2015, 0, 15))); 
// 15 
// console.log(days_passed(new Date(2015, 11, 14))); 
// 348
// Solution - 

const daysPassed = (date) => {
    const nowTime = new Date(date).getTime()
    const initialTime = new Date(date.getFullYear(), 0, 0).getTime();
    timePassed = nowTime - initialTime;
    return timePassed / (1000 * 60 * 60 * 24);
}

console.log(daysPassed(new Date(2015, 0, 15)));
console.log(daysPassed(new Date(2015, 11, 14)));