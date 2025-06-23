function isSSN(value) {
    return /^\d{3}-\d{2}-\d{4}$/.test(value);
}


console.log(isSSN("123-45-6789"));
console.log(isSSN("123456789"));
