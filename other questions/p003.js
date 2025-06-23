function getUniqueCharacters(str) {
    let unique = '';
    for (let char of str) {
        if (!unique.includes(char)) {
            unique += char;
        }
    }
    return unique;
}

let input = "thequickbrownfoxjumpsoverthelazydog";
let result = getUniqueCharacters(input);
console.log(result); // Output: "thequickbrownfxjmpsvlazydg"
