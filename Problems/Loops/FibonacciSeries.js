// Fibonacci Series
// Generate the first n terms of the Fibonacci sequence using a loop.

var n = 10;
var a = 0, b = 1;

for (let index = 1; index <= n; index++) {
    console.log(a); //Print First Number
    var next = a + b; //Get next number
    a = b; //Next number
    b = next; //Next to next number
}
