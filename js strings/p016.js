// Write a JavaScript function to truncates a string if it is longer than the 
// specified number of characters. Truncated strings will end with a translatable 
// ellipsis sequence ("…") (by default) or specified characters.
// Test Data :
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
// "We are doing JS string exercises."
// "We are doing JS ..."
// "We are doing !!"
function text_truncate(str, length = str.length, ending = '…') {
    if (str.length <= length) return str;
    return str.slice(0, length - ending.length) + ending;
  }
  
 
  console.log(text_truncate('We are doing JS string exercises.'));           
  console.log(text_truncate('We are doing JS string exercises.', 19));       
  console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));