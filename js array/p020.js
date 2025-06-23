// 20.Write a JavaScript program to find duplicate values in a JavaScript array.
// Solution - 

let arr = [1, 2, 3, 4, 5, 8, 1, 1, 1, 4, 5, 1, 2, 3, 6, 7];
let duplicateArray = [];
let duplicateElements = {};
for (let i = 0; i < arr.length; i++) {
    if (duplicateElements.hasOwnProperty(arr[i])) {
        duplicateElements[arr[i]] += 1;
    }
    else {
        duplicateElements[arr[i]] = 1;
    }
}
for (let key of Object.keys(duplicateElements)) {
    if (duplicateElements[key] > 1) {
        duplicateArray.push(key)
    }
}
console.log(duplicateArray);