// function declaration = define a reusable block of code 
//                        that performs a specific task
function hello(){
    console.log("Hello");
}


// function expressions = a way to define functions as
//                        value or variable

setTimeout(hello,3000);

setTimeout(function(){
    console.log("Hello")
},3000);


const numbers = [1,2,3,4,5,6];
// const squares =numbers.map(square);
// function square(element){
//     return Math.pow(element, 2);
// } function expressions

//function declaration

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squares);

function cube(element){
    return Math.pow(element, 3);
}