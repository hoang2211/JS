function walkDog() {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
            if(dogWalked){
                resolve("You walk the dog");
            }else{
                reject("You didn't walk the dog");
            }
        }, 1500);
    })
}

function cleanKitchen() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned= true;
            if(kitchenCleaned){
                resolve("You clean the kitchen");

            }else{
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    })
}

function takeoutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false;
            if(trashTakenOut){
                resolve("You take out the trash");

            }else{
                reject("You didnt take out the trash");
            }

        }, 500);
    })

}

walkDog().then(value => { console.log(value); return cleanKitchen ()})
    .then(value => { console.log(value); return takeoutTrash() })
    .then(value => { console.log(value); console.log("you finished all the chords") })
    .catch(error => console.error(error));