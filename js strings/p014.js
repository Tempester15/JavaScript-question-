// Write a JavaScript function to insert a string within a string at a particular 
// position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."
// Solution - 
function insert(mainStr, subStr = '', pos = 1) {
    return mainStr.slice(0, pos) + subStr + mainStr.slice(pos);
  }
  

  console.log(insert('We are doing some exercises.'));                          
  console.log(insert('We are doing some exercises.', 'JavaScript '));          
  console.log(insert('We are doing some exercises.', 'JavaScript ', 18));  