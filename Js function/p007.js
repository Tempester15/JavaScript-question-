// 7.Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
// Solution - 

let s = 'The quick brown fox';
const countVowels = (string) => {
    let vowelCount = 0;
    string = string.toLowerCase();
    for (let i of string) {
        if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(countVowels(s));