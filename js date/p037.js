// 37.Write a JavaScript function to get Timezone. 
// Test Data : 
// dt = new Date(); 
// console.log(seconds_with_leading_zeros(dt)); 
// "India Standard Time"
// Solution - 

const timezoneName = (date) => {
    const match = date.toString().match(/\(([^)]+)\)$/);
    return match ? match[1] : '';
}

console.log(timezoneName(new Date()));