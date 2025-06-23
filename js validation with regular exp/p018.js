function isDomain(value) {
    return /^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}$/.test(value);
}


console.log(isDomain("example.com"));
console.log(isDomain("sub.example.co.uk"));
console.log(isDomain("http://example"));
