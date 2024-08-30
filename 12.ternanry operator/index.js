//ternanry operator = shortcut if{} and else{}
//                    base on a condition ? codeIfTrue: codeIfFalse

let age =21;
let message = age >= 18 ?"You're an adult":"You're a minor";
console.log(message);

let time=16;
let greeting = time <12 ?"Good morning" : "Good afternoon";
console.log(greeting);

let isStudent = true;
let notice= isStudent? "You're a student":"You're not a student";
console.log(notice);

let purchaseAmount = 99;
let discount = purchaseAmount >100? 10: 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount *(discount/100)}`);
