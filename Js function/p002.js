// 2.Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
// Solution - 

function checkPallindrome(str) {
    let str1 = str.split("").reverse().join("");
    if (str == str1) {
        console.log(string + " is palliondrome")
    }
    else {
        console.log(string + " is not a pallindrome")
    }

}
let string = "123421"
checkPallindrome(string);