const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");
// function changeColor(event){
//  event.target.style.backgroundColor ="tomato";
//  event.target.textContent = "OUCH";
// }

myBtn.addEventListener("click", function (event) /* event => */ {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "who move first is ";
});

myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it";
});

myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "pink";
    myBox.textContent = "🌈";
});