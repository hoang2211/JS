// const person ={
//     fullName: "lucas dante",
//     age:22,
//     isStudent :true,
//     hobbies:["game","sport","cooking"],
//     address:{
//         street:"12 conch st.",
//         city: "Nevada",
//         country:"USA"
//     }
// }

// console.log(person.hobbies[0]);
// console.log(person.address);
// console.log(person.address.city);

// for(const property in person.address){
//     console.log(person.address[property]);
// }
class Person{
    constructor(name, age , ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
const person1 = new Person("lucas dante",22,"124 counch st.",
                            "neveda","Chicago"

)

console.log(person1.address);