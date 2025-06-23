// 22.Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'w3resource.com', 'o' 
// Expected output : 2
// Solution - 
const countOcc = (string, char) => {
    let count = 0;
    for (let i of string) {
        if (i === char) {
            count++;
        }
    }
    return count;
}

let str = "w3resource.com";
let character = 'c';

console.log(countOcc(str, character));