// 5.Write a JavaScript function that accepts a string as a parameter and converts 
// the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '
// Solution - 
let str = "the quick brown fox";
function titleCase(string) {
    string = string.split(" ");
    let string1 = [];
    for (let word of string) {
        word = word.replace(word[0], word[0].toUpperCase());
        string1.push(word);
    }
    string1 = string1.join(" ");
    return string1;

}

console.log(titleCase(str));