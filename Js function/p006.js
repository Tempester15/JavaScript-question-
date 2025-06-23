// 6.Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'
// Solution - 

let string1 = 'asdasdasdasfasdascasc Web Development Tutorial asdasfdfasfasf';
function maxString(string) {
    string = string.split(" ");
    console.log(string);
    let maxStr = null;
    for (let i of string) {
        for (let j of string) {
            if (j.length > i.length) {
                maxStr = j;
            }
        }
    }
    return maxStr;

}

console.log(maxString(string1));