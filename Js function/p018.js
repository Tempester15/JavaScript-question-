// 18.Write a function for searching JavaScript arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
// Solution - 

let binSearch = (target, array) => {
    let low = 0;
    let high = array.length - 1;
    let mid = Math.floor((low + high) / 2);
    while (low <= high) {
        if (target === array[mid]) {
            return mid;
        }
        else if (target === array[low]) {
            return low;
        }
        else if (target === array[high]) {
            return high;
        }
        else if (target > array[mid]) {
            low = mid + 1;
        }
        else if (target < array[mid]) {
            high = mid - 1;
        }
        else {
            return -1;
        }
        mid = Math.floor((low + high) / 2);
    }
    return -1;

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(binSearch(8, arr));