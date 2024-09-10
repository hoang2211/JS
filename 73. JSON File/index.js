// const jsonNames = ["ZKL", "Luke","Asira","Jika","Dan"];

// const jsonPerson =`{"name":"ZKL","age":22,"isEmployed":false,
//                 "hobbies":["Gaming","Playing Guitar","Listening Music"]}`;

// const jsonPeople =`[{"name":"ZKL","age":22,"isEmployed":false},
//     {"name":"Luke","age":35,"isEmployed":true},
//     {"name":"Asira","age":19,"isEmployed":false},
//     {"name":"Jika","age":26,"isEmployed":true},
//     {"name":"Dan","age":29,"isEmployed":true}]`;

// const parsedData = JSON.parse(jsonNames);


fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)));

