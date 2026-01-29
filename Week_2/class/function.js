// function Sum(a = 2, b = 4){
//     return a + b;
// }

// console.log(Sum());
// console.log(Sum(4, 5));


// x = findMax(1,123,500,145,44,48)

// function findMax() {
//     let max = -Infinity;
//     for(let i = 0; i < arguments.length; i++){
//         if(arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }

// console.log(findMax(1,2,3));


// function multiply(a, b) {
//     return a*b;
// }
// console.log(multiply(2)); // output: NaN


// function myFunction(x, y) {
//     if(y == undefined) {
//         y = 2;
//     }
//     return x*y;
// }
// console.log(myFunction(2));


// function Sum(...args) {
//     let sum = 0;
//     for(let arg of args) sum += arg;
//         return sum;
// }
// let x = Sum(1,2,3,4,5,6);
// console.log(x);


// const x = function (a, b) { return a + b };
// console.log(x(2,3));

// const add = function sum(a, b) { return a + b};
// console.log(add(2,3));


// function run(fn) {
//     return fn();
// }
// const sayHello = function() {
//     return "Hello";
// };
// console.log(run(sayHello)); // "Hello"



// Arrow Function

// let myFunction = (a, b) => a + b;
// console.log(myFunction(2,2));


// let square = x => x*x;
// console.log(square(2));

const calculator = (n1, n2, operator) => {
  let result;

  switch (operator) {
    case "+":
      result = n1 + n2;
      break;

    case "-":
      result = n1 - n2;
      break;

    case "*":
      result = n1 * n2;
      break;

    case "/":
      result = n1 / n2;
      break;

    default:
      result = "Invalid operator";
  }

  return result;
};

let a = 10;
let b = 5;
let operator = "+";

let ans = calculator(a, b, operator);
console.log(ans);
