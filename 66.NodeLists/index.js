    //NodeList =Static collection of HTML elements by (id, class, element)
    //          Can be created by using querySelectorAll()
    //          Similar to an array,but no(map,filter,reduce)
    //          NodeList won't update to automatically reflect changes

    let btns = document.querySelectorAll(".myBtns");//co the bang button
    /* Add html/css properties
    btns.forEach(btn=>{
        btn.style.backgroundColor = "tomato";
        btn.textContent += "🐔";
    }) */
    /* Add Event Listener
    btns.forEach(btn =>{
        btn.addEventListener("click", event =>{
            event.target.style.backgroundColor = "yellow";
        });
    }) */

    /* Mouseover & mouseout event
    
    btns.forEach(btn =>{
        btn.addEventListener("mouseover", event =>{
                event.target.style.backgroundColor = " hsl(63, 100%, 70%)"
        })
    });
    btns.forEach(btn =>{
        btn.addEventListener("mouseout", event =>{
                event.target.style.backgroundColor = " hsl(63, 100%, 50%)"
        })
    }); */

    /* Add an element 

    const newBtn = document.createElement("button"); 
    newBtn.textContent = "Button 5";
    newBtn.classList = "myBtns";
    document.body.appendChild(newBtn);

btns = document.querySelectorAll(".myBtns");

console.log(btns);*/

/* Remove an element */

btns.forEach(btn =>{
    btn.addEventListener("click", event =>{
        event.target.remove();
        btns = document.querySelectorAll(".myBtns");
        console.log(btns);
    })
})