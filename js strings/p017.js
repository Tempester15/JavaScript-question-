// Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

function string_chop(str, size) {
    if (!size) return [str];

    let chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }
    return chunks;
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));