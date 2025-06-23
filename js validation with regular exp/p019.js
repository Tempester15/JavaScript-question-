function isHTML(value) {
    return /<("[^"]*"|'[^']*'|[^'">])*>/.test(value);
}


console.log(isHTML("<div>Hello</div>"));
console.log(isHTML("Just text"));
