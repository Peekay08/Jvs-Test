const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input the first number ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});


let x = prompt("please enter the first number:");
let y;

function multiplication() {
    return x * y;
}

function addition() {
    return x + y;
}

function modulo() {
    return x % y;
}

function subtraction() {
    return x - y;
}

function division() {
    return x / y;
}

console.log(multiplication());
console.log(addition());
console.log(modulo());
console.log(subtraction());
console.log(division());