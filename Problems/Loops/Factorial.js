// Factorial of a Number
// Calculate the factorial of a given number using a for loop.

var num = 5;
var fact = 1;

for (let index = num; index > 0; index--) {
    fact = fact * index;
}

console.log(`Factorial of ${num} is ${fact}`);