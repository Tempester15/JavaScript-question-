// 34.Write a JavaScript function to create a specified number of elements with pre-filled numeric value array. 
// Test Data : 
// console.log(array_filled(6, 0)); 
// [0, 0, 0, 0, 0, 0] 
// console.log(array_filled(4, 11)); 
// [11, 11, 11, 11]
// Solution - 
function arrayFilled(size, integer) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(integer);
    }
    return arr;
}

console.log(arrayFilled(6, 20000));