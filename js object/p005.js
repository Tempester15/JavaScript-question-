class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
      
      return volume.toFixed(4);
    }
  }
  
  // Example usage:
  const cyl = new Cylinder(5, 10);
  console.log("Volume of the cylinder is:", cyl.getVolume());
  