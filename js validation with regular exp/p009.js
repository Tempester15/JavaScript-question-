function is_valid_url(str) {
    const pattern = /^(https?:\/\/)?([a-z\d-]+\.)+[a-z]{2,6}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
    return pattern.test(str);
}


console.log(is_valid_url('https://example.com'));
console.log(is_valid_url('ftp://example.com'));
