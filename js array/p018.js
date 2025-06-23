// 18.Write a JavaScript program to perform a binary search. 
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value. 
// Sample array : 
// var items = [1, 2, 3, 4, 5, 7, 8, 9]; 
// Expected Output : 
// console.log(binary_Search(items, 1)); //0 
// console.log(binary_Search(items, 5)); //4
// Solution - 

const binary_search = (arr, target) => {
    low = 0;
    high = arr.length - 1;
    mid = Math.round((low + high / 2));
    while (low <= high) {
        if (target === arr[mid]) {
            return mid;
        }
        else if (target === arr[low]) {
            return low;
        }
        else if (target === arr[high]) {
            return high;
        }
        else if (target > arr[mid]) {
            low = mid + 1;
        }
        else if (target < arr[mid]) {
            high = mid - 1;
        }
        else {
            return -1;
        }
        mid = Math.round((low + high / 2));
    }
}

let items = [1, 2, 3, 4, 5, 7, 8, 9]
console.log(binary_search(items, 1));