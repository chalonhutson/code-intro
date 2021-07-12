// boiler plate copy/paste
const readline = require('readline')
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
reader.question("Enter a number to see if it's Adam's favorite", function(num){
    if (+num === 12){
        console.log("That's Adam's favorite!")
    } else {
        console.log("Womp womp thanks for playing")
    }
});
reader.close



// I'm a total noob so this is where I am learning stuff.

console.log("Hello, world!");

let firstName = "Chalon";
const age = 30;

console.log(firstName, age);

const isCool = true;

let powerLevel;

console.log(powerLevel)

// Number data types
let x = 4;
let favNum = 13;
let favSqr = 13*13;
console.log(favNum*x);
console.log(favSqr);

// Strings

let favRobot = "MechaZilla"
let favDino = "Stego"

console.log(`${favRobot} would totally kick ${favDino}'s butt.`)
console.log(favRobot + " said jk and it really likes " + favDino + ".")







