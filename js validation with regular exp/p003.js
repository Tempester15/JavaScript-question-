function isValidEmail(email) {
    const regex = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
    return regex.test(email);
  }
  

  console.log(isValidEmail("john.doe@example.com")); 
  console.log(isValidEmail(".john@example.com"));     
  