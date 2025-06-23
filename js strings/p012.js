function uncamelize(str, separator = ' ') {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        if (ch === ch.toUpperCase() && ch !== ch.toLowerCase()) {
            result += separator + ch.toLowerCase();
        } else {
            result += ch;
        }
    }

    return result;
}

console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld', '-'));
console.log(uncamelize('helloWorld', '_'));