function Circle(radius) {
    this.radius = radius;
  
    this.area = function () {
      return Math.PI * this.radius ** 2;
    };
  
    this.perimeter = function () {
      return 2 * Math.PI * this.radius;
    };
  }
  

  const c = new Circle(5);
  console.log("Area:", c.area().toFixed(2));        // Area: 78.54
  console.log("Perimeter:", c.perimeter().toFixed(2)); // Perimeter: 31.42
  