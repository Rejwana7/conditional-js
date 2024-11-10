/**
 * MUlti level condition
 */
// const price = 5000;
// if (price >= 5000){
//     const discount= price *10/100;
//     console.log("Your Discount is = " + discount);
//     const payamount = price - discount;
//     console.log(payamount)
// }
// else if (price > 2000) {
//     // 5% discount
//     discount = (price * 5) / 100;
//     console.log("Your Discount is = " + discount);
  
//     const payAmount = price - discount;
//     console.log("Your New Price is = " + payAmount);
//   } else {
//     console.log("Your Price is = " + price);
//   }

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question(`Enter the price:` , (input) =>{
    const price = parseFloat(input);

    if (price >= 5000) {
        const discount = price * 10 / 100;
        console.log("Your Discount is = " + discount);
        const payAmount = price - discount;
        console.log("Pay amount: " + payAmount);
      } else if (price > 2000) {
        const discount = (price * 5) / 100;
        console.log("Your Discount is = " + discount);
    
        const payAmount = price - discount;
        console.log("Pay amount: " + payAmount);
      } else {
        console.log("Your price is: " + price);
      }
    
      rl.close();
})