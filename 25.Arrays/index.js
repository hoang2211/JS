let fruits = ["apple","orange","banana","coconut"];

//fruits.push("coconut"); last in
//fruits.pop(); last out
//fruits.unshift("mango"); arraylist + 1 thay the vao vi tri [0]
//fruits.shift(); first out

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length;
// let index1 = fruits.indexOf('apple');
// let index2= fruits.indexOf('mango');


// console.log(index1);
// console.log(index2);

for(let i =0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let j =fruits.length - 1;  j >= 0 ; j--){
    console.log(fruits[j]);
}
for(let fruit of fruits){
    console.log(fruit);
}

fruits.sort().reverse();

//console.log(numOfFruits);
