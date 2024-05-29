function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalk = false;
            if (dogWalk) {
                resolve('You walk the dog 🐕');
            } else {
                reject('You DIDNT walk the dog 🐕');
            }
        }, 1500);
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned) {
                resolve('You clean the kitchen 🧹');
            } else {
                reject('You DIDNT clean the kitchen 🧹');
            }
        }, 2500);
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if (trashTakenOut) {
                resolve('You take out the trash ♻');   
            } else {
                reject('You DIDNT take out the trash ♻');
            }
        }, 500);
    })
}

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        console.log('You finished all the chores');
    } catch (error) {
        console.error(error)
    }
}
// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log('You finished')})
//          .catch(error => console.error(error));

doChores();