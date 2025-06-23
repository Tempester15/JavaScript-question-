function range(x, y) {
    if (x + 1 >= y) return [];

    return [x + 1].concat(range(x + 1, y));
  }
  

  console.log(range(2, 9)); 
// Output: [3, 4, 5, 6, 7, 8]
