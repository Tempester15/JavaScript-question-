// 3.Write a JavaScript function to split a string and convert it into an array of words. 
// Test Data : 
// console.log(string_to_array("Robin Singh")); 
// ["Robin", "Singh"]
// Solution - 

const splitSring = (str) => {
    let stringArray = [];
    let word = ""
    for (let i = 0; i < str.length; i++) {
        word += str[i];
        if (str[i] === " " || i === str.length - 1) {
            stringArray.push(word);
            word = ""
        }
        console.log(word);
    }
    return stringArray;
}

console.log(splitSring("My Name is Amey Kelkar"));