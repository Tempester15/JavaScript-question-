// 6.Write a JavaScript function to hide email addresses to protect from 
// unauthorized user. 
// Test Data : 
// console.log(protect_email("robin_singh@example.com")); 
// "robin...@example.com"
// Solution - 

const protect_email = (email) => {
    let [user, domain] = email.split("@");
    return user.substring(0, user.indexOf('.') + 1) + "...@" + domain;
}
console.log(protect_email("robin_singh@example.com"));