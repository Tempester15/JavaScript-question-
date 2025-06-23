// 32.Write a JavaScript function to find an array contains a specific element. 
// Test data : 
// console.log(remove_array_element([2, 5, 9, 6], 5)); 
// [2, 9, 6]
// Solution - 
function removeArrayElement(arr, element) {
    index = arr.indexOf(element);
    let arr1 = arr.slice(0, index);
    let arr2 = arr.slice(index + 1, arr.length);
    arr = arr1.concat(arr2);
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(removeArrayElement(arr, 2));