//Arrow functions = dung de viet function expressions
//                  cho chuc nang don gian ma chi dung 1 lan
//                  (parameters)=>somecode

// function hello(){
//     console.log("hello");
// }

const hello = (name) => {console.log(`Hello ${name}`)}
                        console.log(`You are ${age} years old`);
hello("Hoang",22);

setTimeout(() => console.log("Hello") ,3000);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element)=> Math.pow(element,2));
const evenNums = numbers.filter ((element)=> element%2===0);
console.log(squares);

