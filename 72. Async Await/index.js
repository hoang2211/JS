function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
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
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You take out the trash");

            }else{
                reject("You didnt take out the trash");
            }

        }, 500);
    })

}

async function doChores() {
    try{
        const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeoutTrashResult = await takeoutTrash();
    console.log(takeoutTrashResult);

    console.log("You finished all the chores");
    }
    catch(error){
        console.error(error) ;
    }
    
}

doChores();