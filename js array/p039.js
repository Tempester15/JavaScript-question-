// 39.Write a JavaScript function to generate an array between two integers of 1 step length. 
// Test Data : 
// console.log(rangeBetwee(4, 7)); 
// [4, 5, 6, 7] 
// console.log(rangeBetwee(-4, 7)); 
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
// Solution - 

function rngBetween(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(rngBetween(-4, 7));