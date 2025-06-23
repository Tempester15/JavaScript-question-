// 9.Write a JavaScript function which accepts an argument and returns the type. 
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
// Solution - 

const returnType = (argument) => {
    return typeof argument;
}

console.log(returnType([1, 2, 3, 4, 5]))