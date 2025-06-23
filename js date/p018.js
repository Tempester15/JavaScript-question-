// 18.Write a JavaScript program to calculate age. 
// Test Data : 
// console.log(calculate_age(new Date(1982, 11, 4))); 
// 32 
// console.log(calculate_age(new Date(1962, 1, 1))); 
// 53
// Solution - 

function calculate_age(dob) {
    const diff = Date.now() - dob.getTime();
    return new Date(diff).getUTCFullYear() - 1970;

}

console.log(calculate_age(new Date(1962, 1, 1)));
console.log(calculate_age(new Date(1982, 11, 4)));