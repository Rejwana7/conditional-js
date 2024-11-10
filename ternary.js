// condition ? trueExpression : falseExpression

const age = 50;

// normal if-else
// if(age >=18){
//     console.log('You can vote.')
// }
// else {
//     console.log('Ghumai thako')
// }

// ternary

// age >=18 ? console.log('you can vote') :  console.log('ghumay thako')

let price=500;
const isLeader = false;

// if(isLeader === true){
//     price=0;
// }
// else{
//     price+=100;
// }
// console.log(price);

// price = isLeader === true ? 0 : price+=100;
// console.log(price);

// optional
// if(isLeader === true){
//     if(price > 1000) {
//         price = price /2;
//     }
//     else {
//         price = 0;
//     }
// }
// else {
//     price = price + 1000;
// }
// price>1000 ? price/2 : 0
price = isLeader === true ? (price > 1000 ? price / 2 : 0)  : price+=1000;
console.log(price)