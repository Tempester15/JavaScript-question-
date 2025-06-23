function getAllMethods(obj) {

    return Object.getOwnPropertyNames(obj)
      .filter(prop => typeof obj[prop] === 'function');
  }
  

  console.log(getAllMethods(Array));  // ["from", "isArray", "of", ...]
  