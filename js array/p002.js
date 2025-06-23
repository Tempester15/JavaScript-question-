// 2.Write a JavaScript function to clone an array. 
// Test Data : 
// console.log(array_Clone([1, 2, 4, 0])); 
// console.log(array_Clone([1, 2, [4, 0]])); 
// [1, 2, 4, 0] 
// [1, 2, [4, 0]
// Solution - 

function arrayClone(arr) {
    let cloneArr = [];
    arr.forEach(element => {
        cloneArr.push(element);
    });
    return cloneArr;
}

console.log(arrayClone([1, 2, [4, 0]]));