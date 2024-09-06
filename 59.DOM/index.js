// //document obj model(DOM)
// document.title ="my website";
// document.body.style.backgroundColor="hsl(0,0%,15%)";
// // console.log(document);
// console.dir(document);

const username= "";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username ==="" ? `Guest` : username;