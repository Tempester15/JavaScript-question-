// 3.Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// [] 
// Solution - 
const first = (arr, n = 1) => {
    let ans = [];
    if (n > 1) {
        for (let i = 0; i < n; i++) {
            if (i >= arr.length) {
                continue;
            }
            ans.push(arr[i]);

        }
    }
    if (n === 1) {
        return arr[0];
    }
    return ans;

}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));