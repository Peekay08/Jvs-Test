const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let x, y;

rl.question('Enter the first number: ', (answer1) => {
  x = parseFloat(answer1);

  rl.question('Enter the second number: ', (answer2) => {
    y = parseFloat(answer2);

      function multiplication() {
    return x + " * " + y + " = " + x*y;
}

function addition() {
    return x + " + " + y + " = " + x+y;
}

function modulo() {
    return x + " % " + y + " = " + x%y;
}

function subtraction() {
    if (x<y) {
      let z = y-x;
        return x + " - " + y + " = " + "-" + z;
    } else {
      let z = x-y;
        return x + " - " + y + " = " + z;
    }
}

function division() {
    return x + " / " + y + " = " + x/y;
}

console.log(multiplication());
console.log(addition());
console.log(modulo());
console.log(subtraction());
console.log(division());
    rl.close();
  });
});