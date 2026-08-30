// Sum of Digits
// Find the sum of the digits of a number using a loop.

var num = 1234;
var sum = 0;

while (num > 0) {
  sum += num % 10;          // Get last digit and add it to sum
  num = Math.floor(num / 10); // Remove the last digit
}

console.log(sum); // Output: 10 (1 + 2 + 3 + 4)