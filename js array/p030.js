// 30.Write a JavaScript function to merge two arrays and removes all duplicates elements. 
// Test data : 
// var array1 = [1, 2, 3]; 
// var array2 = [2, 30, 1]; 
// console.log(merge_array(array1, array2)); 
// [3, 2, 30, 1]
// Solution - 

let arr1 = [1, 2, 3];
let arr2 = [2, 30, 1];

const mergeArray = (array1, array2) => {
    let uniqueArray = [];
    array1 = array1.concat(array2);
    for (let i = 0; i < array1.length; i++) {
        if (!uniqueArray.includes(array1[i])) {
            uniqueArray.push(array1[i]);
        }
    }

    return uniqueArray;
}

console.log(mergeArray(arr1, arr2));