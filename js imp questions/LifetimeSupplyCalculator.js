function calculateSupply(age, amountPerDay) {
    const maxAge = 100;
    const yearsRemaining = maxAge - age;
    const total = Math.round(amountPerDay * 365 * yearsRemaining);
    console.log(`You will need ${total} to last you until the ripe old age of ${maxAge}`);
  }
  
  calculateSupply(25, 2.5);
  calculateSupply(40, 1);
  calculateSupply(60, 3.25);
  