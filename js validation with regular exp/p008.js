function count_vowels(str) {
    const matches = str.match(/[aeiouAEIOU]/g);

    return matches ? matches.length : 0;
}


console.log(count_vowels("United States"));
