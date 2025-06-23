// 16.Write a JavaScript function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog" 
// Expected Output : "thequickbrownfxjmpsvlazydg"
// Solution - 
let string = "thequickbrownfoxjumpsoverthelazydog";
let countUnique = (str) => {
    let string1 = "";
    for (let i = 0; i < str.length; i++) {
        if (string1.includes(str[i])) {
            continue;
        }
        else {
            string1 += str[i];
        }
    }
    return string1;
}

console.log(countUnique(string));