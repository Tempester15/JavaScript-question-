function sortStringAlphabetically(str) {
     str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return str.split('').sort().join('');
}

let result = sortStringAlphabetically("OpenAI");
console.log(result); 