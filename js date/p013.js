// 13.Write a JavaScript function that will return the number of minutes in hours and minutes. 
// Test Data : 
// console.log(timeConvert(200)); 
// Output : 
// "200 minutes = 3 hour(s) and 20 minute(s)."
// Solution - 

const timeConvert = (minutes) => {
    hours = Math.floor(minutes / 60);
    remainingMinutes = minutes - (hours * 60);
    return `${hours} hour(s) and ${remainingMinutes} minute(s).`
}

console.log(timeConvert(200));