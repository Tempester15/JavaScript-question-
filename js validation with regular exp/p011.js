function is_time_string(str) {
    const pattern = /^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/;
    return pattern.test(str);
}


console.log(is_time_string("14:30"));
console.log(is_time_string("23:59:59"));
console.log(is_time_string("24:00"));
