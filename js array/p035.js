// 35.Write a JavaScript function to create a specified number of elements with pre-filled string value array. 
// Test Data : 
// console.log(array_filled(3, 'default value')); 
// ["default value", "default value", "default value"] 
// console.log(array_filled(4, 'password')); 
// ["password", "password", "password", "password"]
// Solution - 

function arrayFilledWithStrings(size, string) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(string);
    }
    return arr;
}

console.log(arrayFilledWithStrings(6, "passsword"));