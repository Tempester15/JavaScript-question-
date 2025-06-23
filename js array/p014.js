// 14.Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
// Solution - 
let arr = [1, 2, 3, 4, 5, 8, 1, 1, 1, 4, 5, 1, 2, 3, 6, 7];
let uniqueArray = [];
for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i])
    }
}

console.log(uniqueArray);