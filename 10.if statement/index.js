let age1 = 25;

if(age1 >= 18){
    console.log("Your are old enough to enter this site");
} else{
    console.log("Your must be 18+ to enter this site");
}

let isStudent = true;

if(isStudent){
    console.log("Your are a student");
}else{
    console.log("Your are not a student");
}

let age2 =22;
let hasLiscense = true;

if(age2 >= 18){
    console.log("Your are old enough to drive")
    if(hasLiscense){
        console.log("you have your license");
    }else{
        console.log("you don't have a license");
    }
}else{
    console.log("You must be 18+ to have a license");
}

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age3 ;

mySubmit.onclick= function(){
    age=myText.value;
    age=Number(age);
    if(age3 => 100 ){
        result.textContent = `you are TOO OLD to enter this site`;
    }
    else if(age == 0){ 
        result.textContent = `You can't enter. You were just born`;
    }
    else if(age3 => 18){
        result.textContent = `Your are old enough to enter this site`;

    }else if(age3 <0){
        result.textContent = `Your age can't be below 0`;
    }
    else{
        result.textContent = `Your must be 18+ to enter this site`;
    }
}