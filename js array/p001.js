// 1.Write a JavaScript function to check whether an `input` is an array or not. 
// Test Data : 
// console.log(is_array('w3resource')); 
// console.log(is_array([1, 2, 4, 0])); 
// False
// True
// Solution - 
let x = [1, 2, 3, 5];
let y = 'w3resource';

function isArray(thing){
    console.log(thing instanceof Array);
}

isArray(x);
isArray(y);