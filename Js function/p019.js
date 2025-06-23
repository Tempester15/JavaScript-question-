// 19.Write a JavaScript function that returns array elements larger than a number.
//     Solution -

    let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let lesserThan = (number, array) => {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= number) {
            return results;
        }
        else {
            results.push(array[i]);
        }
    }
    return results;

}

console.log(lesserThan(4, arr));