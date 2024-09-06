// // function sayHello(){
// //     window.alert("Hello");  
// // }

// // setTimeout(sayHello, 3000);


// //setTimeout(function(){window.alert("Hello")},3000);

// const timeoutID = setTimeout(() => window.alert("hello"),5000);

// clearTimeout(timeoutID);
let timeoutID; 

function startTimer(){
   timeoutID = setTimeout( ()=> window.alert("hello"),3000);
}

function clearTimer(){
    clearTimeout(timeoutID);
    window.alert("Clear");
}