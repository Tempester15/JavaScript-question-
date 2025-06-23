// 17.Write a JavaScript function to get the number of occurrences of each letter in specified string.
// Solution - 

let string = "thequickbrownfoxjumpsoverthelazydog";

const countUnique = (str) => {
    console.log(str);
    let alphabet = {};
    for (let i of str.toLowerCase()) {
        if (alphabet.hasOwnProperty(i)) {
            alphabet[i] += 1;
        }
        else {
            alphabet[i] = 1;
        }
    }
    return alphabet;
}

console.log(countUnique(string));