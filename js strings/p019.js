// Write a JavaScript function to escape a HTML string.
// Test Data :
// console.log(escape_HTML('<a href="javascript-string-exercise-17.php" 
// target="_blank">'));
// Output :
// "&lt;a href=&quot;javascript-string-exercise-17.php&quot; 
// target=&quot;_blank&quot;&gt;"
function escape_HTML(str) {

    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };


    return str.replace(/[&<>"']/g, function (m) {
        return map[m];
    });
}