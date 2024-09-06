let numbers = [1 ,10,2,9,3,8,4,7,5,6];


numbers.sort((a,b) => a - b); //b-a lon den be


console.log(numbers);

const people = [{name: "Hoang",age :22, gpa:3.0},
                {name: "Bach",age :24, gpa:4.0},
                {name: "Long",age :60, gpa:2.0},
                {name: "San",age :39, gpa:3.5}]
//people.sort((a,b) => a.gpa - b.gpa);
people.sort((a,b) => a.name.localeCompare(b.name));

console.log(people);