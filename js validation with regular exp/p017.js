function isHexColor(value) {

    return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
}


console.log(isHexColor("#fff"));
console.log(isHexColor("#123ABC"));
console.log(isHexColor("123ABC"));
