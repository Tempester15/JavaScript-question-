// 9.Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// Solution - 
let str = "The Quick Brown Fox";
let str1 = ""
for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
        str1 += str[i].toLowerCase();
    }
    else if (str[i] >= 'a' && str[i] <= 'z') {
        str1 += str[i].toUpperCase()
    }
    else {
        str1 += str[i];
    }
}

console.log(str1)