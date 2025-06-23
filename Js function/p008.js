// 8.Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Solution - 

const checkPrime = (a) => {
    if (a <= 3) {
        return true;
    }
    else if (a % 2 == 0 && a > 3) {
        return false;
    }
    else {
        for (let i = 2; i <= Math.floor(a / 2); i++) {
            if (a % i == 0) {
                return false;
            }
        }
        return true;
    }

}

console.log(checkPrime(37));