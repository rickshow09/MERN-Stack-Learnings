// Maximum of Three Numbers
// Find the largest of three numbers using nested if statements.

var a = 5, b = 10, c = 20;
var max;

if (a > b) {
    if (a > c) {
        max = a;
    }
    else {
        max = c;
    }
}
else {
    if (b > c) {
        max = b;
    }
    else {
        max = c;
    }
}

console.log("By Method One :");
console.log(`${max} is biggest number...!`);

if (a > b && a > c) {
    max = a;
}
else if (b > a && b > c) {
    max = b;
}
else {
    max = c;
}

console.log("By Method Two :");
console.log(`${max} is biggest number...!`);


