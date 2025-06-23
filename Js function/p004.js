// 4.Write a JavaScript function that returns a passed string with letters in 
// alphabetical order. 
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw' 
// Assume punctuation and numbers symbols are not included in the passed string.
// Solution - 

let string1 = "webmaster";

function arrangeLetters(string) {
    string = string.split("");
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[j].charCodeAt() > string[i].charCodeAt()) {
                let temp = string[j];
                string[j] = string[i];
                string[i] = temp;
            }
        }
    }
    string = string.join("")
    return string;
}

console.log(arrangeLetters(string1));