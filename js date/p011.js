// 11.Write a JavaScript function to get the maximum date from an array of dates. 
// Test Data : 
// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])); 
// Output : 
// "2015/02/02"
// Solution - 

const maxDate = (arr) => {
    let maxDate = 0;
    for (let element of arr) {
        let time = new Date(element).getTime();

        if (time > maxDate) {
            maxDate = time;
        }
    }
    for (let i in arr) {
        if (new Date(arr[i]).getTime() === maxDate)
            return arr[i];
    }
}

console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));