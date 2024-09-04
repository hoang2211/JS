// object = A collection of related properties and/or methods
//          Can represent real world obj (pp,products,places)
//          obj = {key:value,
//                      function()}

const product1 = {
    pName :"Pen",
    pID :"P01",
    pPrice:"1.25",
    pAvailable: true,
    pDesc: function(){console.log("Is a pen")},
    pFunction: function(){console.log("Use to write,note")},
}

const product2 = {
    pName :"Camera",
    pID:"C01",
    pPrice:"20.50",
    pAvailable: false,
    pDesc: () => console.log("Is a camera"),
    pFunction: () => console.log("It use to capture pictures"),
}

product1.pDesc();
product2.pDesc();
product1.pFunction();
product2.pFunction();
