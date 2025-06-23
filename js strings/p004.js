// 4.Write a JavaScript function to remove specified number of characters from a string. 
// Test Data : 
// console.log(truncate_string("Robin Singh",4))
// Solution - 

const truncateString = (str, length) => {
    return str.substring(0, length);
}
console.log(truncateString("Robin Singh", 4));