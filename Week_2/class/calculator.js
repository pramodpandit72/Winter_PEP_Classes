function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

let num1 = 10;
let num2 = 5;

console.log("Add:", add(num1, num2));         
console.log("Subtract:", subtract(num1, num2)); 
console.log("Multiply:", multiply(num1, num2)); 
console.log("Divide:", divide(num1, num2));     



// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function calculator(a, b, operator) {
//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return b === 0 ? "Error: Division by zero!" : a / b;
//     default:
//       return "Invalid operator";
//   }
// }

// rl.question("Enter the first number: ", (num1) => {
//   rl.question("Enter the second number: ", (num2) => {
//     rl.question("Enter the operator (+, -, *, /): ", (operator) => {
//       const a = parseFloat(num1);
//       const b = parseFloat(num2);

//       const result = calculator(a, b, operator);
//       console.log("Result:", result);

//       rl.close(); 
//     });
//   });
// });
