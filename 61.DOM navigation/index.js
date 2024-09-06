//------- .firstElementChild-------

const fElement = document.getElementById("fruits");
const firstChild = fElement.firstElementChild;
firstChild.style.backgroundColor="yellow";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "lightgreen";
});

//--------- .lastElementChild--------------

const lElement = document.getElementById("fruits");
const lastChild = lElement.lastElementChild;
lastChild.style.backgroundColor = "gray";

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "gray";

});

//---------- .nextElementSibling--------------

const nElemnt = document.getElementById("apple");
const nextSibling = nElemnt.nextElementSibling;
nextSibling.style.backgroundColor="orange";


//------------ .previousSibling---------------

const prElement = document.getElementById("orange");
const preSibling = prElement.previousElementSibling;
preSibling.style.backgroundColor = "lightblue";

//previous vs next neu duoc so sanh 
//cac lop vs nhau thi tuong tu xay ra 

//-------------- .parentElement ---------------

const paElement = document.getElementById("tomatoes");
const parent = paElement.parentElement;
parent.style.backgroundColor = "orangered";

//---------------- .children------------------
const childElement = document.getElementById("Age");
const drakeFav = childElement.children;

Array.from(drakeFav).forEach(child =>{
    child.style.backgroundColor = "pink";
})