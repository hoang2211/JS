//1. document.getElementById() //element or null
//2. document.getElementsClassName() // HTML COLLECTION
//3. document.getElementsByTagName() // HTML COLLECTION
//4. document.querySelector() //ELEMENT OR NULL
//5. document.quertSelectorAll() //NODELIST
/*1
const myH1 = document.getElementById("myH1");
myH1.style.backgroundColor = "yellow";
myH1.style.textAlign = "center";

console.log(myH1);
*/
/*2
const fruits = document.getElementsByClassName("fruits");


// fruits[0].style.backgroundColor="yellow";

// for(let fruit of fruits){
//     fruit.style.backgroundColor="yellow";
// }
Array.from(fruits).forEach(fruit =>{
    fruit.style.backgroundColor="yellow";
});


// console.log(fruits);
*/

/*3
const  myH4Elements = document.getElementsByTagName("h4");
const  myLiElements = document.getElementsByTagName("li");

// for(let myH4Element of myH4Elements){
//     myH4Element.style.backgroundColor ="yellow";
// }

// for(let myLiElement of myLiElements){
//     myLiElement.style.backgroundColor ="Green";
// }

Array.from(myH4Elements).forEach(myH4Element=>{
    myH4Element.style.backgroundColor ="yellow";
})

Array.from(myLiElements).forEach(myLiElement=>{
     myLiElement.style.backgroundColor ="Green";

})
     */
/*5
const element = document.querySelector(".fruits");

element.style.backgroundColor = "yellow";
*/

const fruits = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});
