// Reverse a Number
// Write a program to reverse the digits of a number using a loop.

var num = 87985;
var dividend = num;
var reverse = 0;

while (dividend > 0) {
    let remainder = dividend % 10;
    reverse = (reverse * 10) + remainder;
    dividend = parseInt(dividend / 10);
}

console.log(`Reverse of ${num} is ${reverse}`);
