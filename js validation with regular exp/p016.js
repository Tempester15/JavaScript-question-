function isHexValue(value) {
    return /^0x[0-9a-f]+$/i.test(value);
}


console.log(isHexValue("0x1A3F"));
console.log(isHexValue("1A3F"));
