// 38.Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position. 
// Test Data : 
// console.log(array_range(1, 4)); 
// [1, 2, 3, 4] 
// console.log(array_range(-6, 4)); 
// [-6, -5, -4, -3]

// Solution - 

function arrayRange(start, size) {
    let arr = [];
    for (let i = start; size > 0; i++, size--) {
        arr.push(i);
    }
    return arr;
}
console.log(arrayRange(-6, 4));