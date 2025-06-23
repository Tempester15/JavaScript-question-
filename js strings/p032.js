// Write a JavaScript function to remove non-printable ASCII chars.
// Test Data :
// console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
// "PHP-MySQL"

function remove_non_ascii(str) {
    return str.replace(/[^\x20-\x7E]/g, '');
}


console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));  // "PHP-MySQL"
