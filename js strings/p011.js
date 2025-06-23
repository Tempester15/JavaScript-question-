function camelize(str) {
    let result = '';
    let capitalizeNext = false;
  
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
  
      if (ch === ' ' || ch === '-' || ch === '_') {
        capitalizeNext = true;
      } else {
        if (capitalizeNext) {
          result += ch.toUpperCase();
          capitalizeNext = false;
        } else {
          result += ch;
        }
      }
    }
  
    return result;
  }
  
  console.log(camelize("java_script-exercises")); 
  console.log(camelize("JavaScript Exercises"));
  