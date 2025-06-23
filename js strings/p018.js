// Write a JavaScript function to count the occurrence of a substring in a string.
// Test Data :
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// 2
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
// Output :
1
function count(str, subStr, caseSensitive = true) {
    if (!caseSensitive) {
        str = str.toLowerCase();
        subStr = subStr.toLowerCase();
    }

    let count = 0;
    let pos = 0;

    while ((pos = str.indexOf(subStr, pos)) !== -1) {
        count++;
        pos += subStr.length;
    }

    return count;
}