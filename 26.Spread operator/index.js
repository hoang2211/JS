// spread operator=        ...allow an iterable such as an 
//                         array or string to be expanded 
//                         into seperate elements
//                         (unpack the element)

let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);


console.log(numbers);
console.log(maximum);
console.log(minimum);

let username = "Zoek Lis"
let letters = [...username].join("-");

console.log(letters);

let fruits =["apple","orange","banana"];
let vegetable = ["carrot","celery","potatoes"];

let foods =[...fruits,...vegetable,"eggs","meat"];

console.log(foods);