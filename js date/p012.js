// 12.Write a JavaScript function to get the minimum date from an array of dates. 
// Test Data : 
// console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03'])); 
// Output : 
// "2015/01/03"
// Solution - 

const minDate = (arr) => {
    let minDate = new Date().getTime();
    for (let element of arr) {
        let time = new Date(element).getTime();

        if (time < minDate) {
            minDate = time;
        }
    }
    for (let i in arr) {
        if (new Date(arr[i]).getTime() === minDate)
            return arr[i];
    }
}

console.log(minDate(['2015/02/01', '2015/02/02', '2015/01/03']));