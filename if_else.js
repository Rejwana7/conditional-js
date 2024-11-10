/**
 * if(condition) {
 *      execute code if condition above is true
 * }
 * else {
 *      execute code if the condition is false
 * }
*/
// var weight = 20;

// if(weight < 20){
//     console.log('I will carry it by myself');
// }
// else{
//     console.log('i will rent a rickshaw')
// }
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for the weight
rl.question("Enter the weight: ", (weightInput) => {
  // Convert the input to a number
  var weight = parseFloat(weightInput);

  // Check the condition based on the weight
  if (weight < 20) {
    console.log('I will carry it by myself');
  } else {
    console.log('I will rent a rickshaw');
  }

  // Close the readline interface
  rl.close();
});
