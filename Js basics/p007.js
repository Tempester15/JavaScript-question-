/*7.Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
Solution - */
for (let year = 2014; year <= 2050; year++) {
    let date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
        console.log(`Year in which 01 january is a sunday is : ${year}`);
    }
}