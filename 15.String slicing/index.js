// const fullName = "Zoekal Lis";//ZoekLis
// console.log(fullName.length);

// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5, 8);

// let firstChar = fullName.slice(0,1);
// let lastChar = fullName.slice(-1);


// let firstName = fullName.slice(0, fullName.indexOf(" "));
// //thay vi minh dem string de nhan chu dau ta dung 
// //fullName.indexOf(" ") se dung den vi cua " "
// let lastName = fullName.slice(fullName.indexOf(" ")+1)


// console.log(firstName);
//  console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);


const email ="hoang5@gmail.com"

let UserName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
console.log(UserName);
console.log(extension);