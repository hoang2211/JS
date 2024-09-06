// // function outer() {
// //     let message = "Hello";
// //     function inner() {
// //         console.log(message);
// //     }
// //     inner();

// //     ;
// // }

// // outer();
// function createCounter(){ 
//     let count =0;
//     function increment(){
        
//         count ++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount(){
//         return count;
//     }
// return{increment,getCount};
// }

// const counter = createCounter();

// counter.increment();

// console.log(counter.count());
function createGame(){
    let score =0;

    function increaseSScore(points){
        score += points;
        console.log(`${points}pts`);
    }
    function decreaseScore(points){
        score == points;
        console.log(`${points}pts`);
    }
    
    function getScore(){
        return score;
    }
    return {increaseSScore,decreaseScore,getScore};
}

const game = createGame()   