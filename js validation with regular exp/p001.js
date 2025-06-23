// Write a JavaScript program to test the first character of a string is uppercase 
// or not

function isFirstCharUpper(str) {

    return /^[A-Z]/.test(str);
}


console.log(isFirstCharUpper("Hello"));  // true
console.log(isFirstCharUpper("hello"));  // false
