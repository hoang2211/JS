// .reduce() = reduce the elemtns of an array to a single value

const prices =[5,30,10,25,15,20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumlator, element){
    return accumlator + element;
}
// function sum(previous, next){
//     return 0 + 5;(no cong lien tiep theo day array)
// } //co the rename 2 bien 

const grades =[75,80,90,80,65,95];

const maxium = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maxium);
console.log(minimum);

function getMax(A,B){
    return Math.max(A,B);
}
function getMin(D,F){
    return Math.max(D,F);
}