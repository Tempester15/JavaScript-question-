// Write a JavaScript function to create a Zerofilled value with optional +, - sign.
// Test Data :
// console.log(zeroFill(120, 5, '-'));
// "+00120"
// console.log(zeroFill(29, 4));
// "0029"

function zeroFill(num, width, sign = '') {
    let absNum = Math.abs(num).toString();
    let zeroPadding = '0'.repeat(Math.max(width - absNum.length, 0));
    
    if (sign === '-') {
        
      return '+' + zeroPadding + absNum;
    } else if (sign === '+') {
      return '-' + zeroPadding + absNum;
    }
    
    return zeroPadding + absNum;
  }
  

  console.log(zeroFill(120, 5, '-')); 
  console.log(zeroFill(29, 4));      
  