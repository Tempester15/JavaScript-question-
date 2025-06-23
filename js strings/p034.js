// Write a JavaScript function to convert a string to title case.
// Test Data :
// console.log(sentenceCase('PHP exercises. python exercises.'));
// "Php Exercises. Python Exercises."
function sentenceCase(str) {
    return str
        .split('. ')
        .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase())
        .join('. ');
}


console.log(sentenceCase('PHP exercises. python exercises.'));

