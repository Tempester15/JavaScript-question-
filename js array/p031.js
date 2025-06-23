// 31.Write a JavaScript function to remove a specific element from an array.
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