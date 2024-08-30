//let username ="";

// while(username === "" || username === null){
//     username = window.prompt(`Enter your name`);

// } 
// let username;
// do{
//     username = window.prompt(`Enter your name`);
// } while(username === "" || username === null)
//  console.log(`Hello ${username}`);

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//    username = window.prompt(`Enter your username`);
//    password = window.prompt(`Enter your password`);

//    if(username === "abc" && password ==="123"){
//        loggedIn = true;
//        console.log("You are logged in!")
//    }else{
//        console.log("Invalid credentials! Please try again");
//    }
// }

let loggedIn = true;
let username;
let password;

do{
   username = window.prompt(`Enter your username`);
   password = window.prompt(`Enter your password`);

   if(username === "abc" && password ==="123"){
       loggedIn = true;
       console.log("You are logged in!")
   }else{
       console.log("Invalid credentials! Please try again");
   }
}while(!loggedIn)
