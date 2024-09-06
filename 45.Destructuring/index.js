// destructuring = extract values from arrays and obj,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform obj destructuring

let a = 1;
let b = 2;

[a,b] = [b,a];
console.log(a);
console.log(b);

const colors = ["red","green","blue","black","white"];

[colors[0],colors[4]]=[colors[4],colors[0]];

console.log(colors);

const[firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

function displayPersons({firstName, lastName, age, job}){
        console.log(`name: ${firstName} ${lastName}`);
        console.log(`age:${age}`);
        console.log(`job: ${job}`);
        
}
const person1 = {
    firstName:"Nguyen",
    lastName:"Hoang",
    age:22,
    job :"College",
}
const person2 = {
    firstName:"Z",
    lastName:"KL",
    age:22,
    
}

const{firstName, lastName,age , job="unemployed"} = person2;


console.log(firstName);
console.log(job);
displayPersons(person1);