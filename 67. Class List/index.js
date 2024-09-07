// ClassList = Element property in JS used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classess for many elements
//             across your webpage

//add()
//remove()
//toggle(Remove if present, Add if not)
//replace(oldClass,newClass)
//contains()

// const myBtn = document.getElementById("myBtn");
// const myH1 = document.getElementById("myH1");
// // myBtn.classList.add("enabled");
// // myBtn.classList.remove("enabled");

// // myBtn.addEventListener("mouseover", event =>{
// //     event.target.classList.toggle("hover");
// // });
// // myBtn.addEventListener("mouseout", event =>{
// //     event.target.classList.remove("hover");
// // });
// myH1.classList.add("enabled");
// myBtn.classList.add("enabled");

// myH1.addEventListener("click",event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🛠️";
//     }
//     else{
//     event.target.classList.replace("enabled","disabled");
//     }
// });

// myBtn.addEventListener("click",event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🛠️";
//     }
//     else{
//     event.target.classList.replace("enabled","disabled");
//     }
// });

let btns = document.querySelectorAll(".myBtns");

btns.forEach(btn =>{
    btn.classList.add("enabled");
});
btns.forEach(btn =>{
    btn.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover");
    });
});
btns.forEach(btn =>{
    btn.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    });
});
btns.forEach(btn =>{
    btn.addEventListener("click", event =>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🛠️";
        }
        else{
        event.target.classList.replace("enabled","disabled");
    }
    });
});