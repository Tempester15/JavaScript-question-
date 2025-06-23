function trimString(str) {
    return str.replace(/^\s+|\s+$/g, '');
}


console.log(trimString("   hello world   "));
