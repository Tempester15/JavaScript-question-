function countWords(str) {
    const cleaned = str
        .replace(/^\s+|\s+$/g, '')
        .replace(/\s{2,}/g, ' ')
        .replace(/\n\s*/g, ' ');

    return cleaned ? cleaned.split(' ').length : 0;
}


console.log(countWords("   Hello   world!\n This  is  JS.  "));