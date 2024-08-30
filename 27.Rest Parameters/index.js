// rest parameters =(...rest) allow a function work with a variable
//                  number of arguments by  bundling them into an array

// spread = expands an array into seperate elements
// rest = bundle seperate elements into an array 
// function openFridge(...foods){
//     console.log(foods);
// }
// function getFood(...foods){
//     return foods;
// }


// const food1 ="pizza";   
// const food2 ="hamburger";
// const food3 ="hotdog";
// const food4 ="sushi";

//openFridge(food1,food2,food3,food4);

// const foods = getFood(food1,food2,food3,food4);

// console.log(foods);

// function sum(...numbers){
//     let results = 0;
//     for(let number of numbers){
//         results+= number;
//     }
//     return results;
// }

// function getAaverage(...numbers){
//     let results = 0;
//     for(let number of numbers){
//         results+= number;
//     }
//     return results / numbers.length;
// }
//  const total = getAaverage(75, 100, 20, 90,100);
// console.log(total);
// const total = sum(1,2,3,4);
// console.log(`Your total is ${total}`);

function combineSrings(...strings){
    return strings.join(" ");
}

const fullName = combineSrings("Mr.","JohnWick","Baba","Yaga");

console.log(fullName);