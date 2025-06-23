// 10.Write a JavaScript function which returns the n rows by n columns identity matrix.

const idMatrix = (order) => {
    let mat = [];
    for (let i = 0; i < order; i++) {
        let row = [];
        for (let j = 0; j < order; j++) {
            if (i === j) {
                row.push(1);
            }
            else {
                row.push(0);
            }
        }
        mat.push(row);
    }
    return mat;
}

console.log(idMatrix(5));