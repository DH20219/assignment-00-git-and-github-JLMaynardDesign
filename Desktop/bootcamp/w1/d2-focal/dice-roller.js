//write a program that takes a single parameter from the command line, a number, and rolls that many (as indicated) six-sided dice

//takes a single parameter from the command line
const rollRepetition = process.argv.slice(2);

//declare empty array - and here's the output
let rollDiceResult = [];

//for loop
for (let i = 0; i < rollRepetition; i++) {
  //using Math.random
  let rollDiceRandomly = Math.floor(Math.random() * 6) + 1;
  rollDiceResult.push(rollDiceRandomly); 
}

console.log(`Rolled ${rollRepetition} dice: ${rollDiceResult}`);


