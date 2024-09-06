// try{
//     console.log(x);
// }

// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("this always executes");
// }


// console.log("you have reached the end!");

try{
const dividend = Number(window.prompt("enter the dividend:"));
const divisor = Number(window.prompt("enter a divisor:"));
if(divisor ==0){
    throw new Error("you can't divide by zero!");
} if (isNaN(dividend) || isNaN(divisor) ){
    throw new Error("Value must be a number");
}

const result = dividend / divisor;
console.log(result);
}
catch(error){
    console.error(error);
}

console.log("you have reach the end!");