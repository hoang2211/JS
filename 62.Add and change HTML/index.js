// // --------- EXP 1 <h1> -------------------

// // STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");
const newListItem = document.createElement("li");


// // STEP 2 ADD ATTRIBUTES/PROPERTIES

// newH1.textContent="New H1 has add";
// newH1.id="myH1";
// newH1.style.color ="tomato";
// newH1.style.textAlign ="center";

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight="bold";
newListItem.style.backgroundColor="lightgreen";

// console.log(newH1);


// // STEP 3 APPEND ELEMENT TO DOM 
// document.body.append(newListItem);
// //document.body.append(newH1);//sinh ra la last child
// //document.body.prepend(newH1);// sinh ra la first child
document.getElementById("box1").append(newH1);


// const  orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem,orange);

// const apple = document.getElementById("apple");
//     document.getElementById("fruits").insertBefore(newListItem,apple);


//khi xoa id cua danh sach
// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// //document.getElementById("box1").prepend (newH1);

// // const box2 = document.getElementById("box2");
// // document.body.insertBefore(newH1, box2);

// //sau khi xoa id cua box
// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1, boxes[1]);


// // REMOVE HTML ELEMENT (optional)
// //document.body.removeChild(newH1);
document.getElementById("fruits").removeChild(newListItem);


 