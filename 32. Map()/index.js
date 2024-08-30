//.map() = accepts a callback and applies that funcion
//         to each elements of an array, then return a new array

// const numbers =[1,2,3,4,5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(squares);

// function square(element){
//     return Math.pow(element, 2);
// }
// function cube(element){
//     return Math.pow(element, 3);
// }

// const students = ["Hoang","San","Long","Bach","Phuc"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);

// console.log(studentsLower);

// function upperCase(element){
//     return element.toUpperCase();   
// }
// function lowerCase(element){
//     return element.toLowerCase();   
// }

const dates =["2024-1-10","2025-2-20","2026-3-30"];
const formattedDate = dates.map(formatDate);

console.log(formattedDate);

function formatDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}