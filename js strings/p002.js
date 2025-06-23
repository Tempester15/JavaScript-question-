// 2.Write a JavaScript function to check whether a string is blank or not. 
// Test Data : 
// console.log(is_Blank('')); 
// console.log(is_Blank('abc')); 
// true 
// false
// Solution - 

const isStringBlank = (str) => {
    if (typeof str === "string") {
        if (str.length == 0) {
            return "String is empty"
        }
        else {
            return "Please input string"
        }
    }
}

console.log(isStringBlank('Amey'))