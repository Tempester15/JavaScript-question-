// 13.Write a JavaScript function to compute the factors of a positive integer.
//     Solution - 

const factors = (num) => {
    let fac = [1];
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            fac.push(i);
        }
    }
    return fac;
}

console.log(factors(37));