// Count Digits in a Number
// Count the number of digits in a given number using a loop.

var num = 1234567890;
var cnum = num;
var cnt = 0;

while (cnum > 0){
    cnum = parseInt(cnum / 10);
    cnt++;
}

console.log(`Number of digits in ${num} is ${cnt}`);