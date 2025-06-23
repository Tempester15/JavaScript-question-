// 36.Write a JavaScript function to move an array element from one position to another. 
// Test Data : 
// console.log(move([10, 20, 30, 40, 50], 0, 2)); 
// [20, 30, 10, 40, 50] 
// console.log(move([10, 20, 30, 40, 50], -1, -2)); 
// [10, 20, 30, 50, 40]
// Solution - 

let arr = [10, 20, 30, 40, 50];

function move(arr, index1, index2) {
    if (index1 < 0) {
        index1 = index1 + arr.length;
    }
    if (index2 < 0) {
        index2 = index2 + arr.length;
    }
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

console.log(move(arr, -3, -2));