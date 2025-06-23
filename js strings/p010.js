function swapcase(str) {
    return str.split('').map(char =>
      char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase()
    ).join('');
  }
  
  console.log(swapcase('AaBbc'));