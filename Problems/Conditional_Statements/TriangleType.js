// Triangle Type
// Determine the type of triangle (Equilateral, Isosceles, or Scalene) based on the lengths of its sides.

var side1 = 7.5;
var side2 = 7.5;
var side3 = 7.5;

if (side1 == side2 && side2 == side3) {
    console.log("It's an Equilateral triangle");
} else if (side1 == side2 || side2 == side3 || side1 == side3) {
    console.log("It's an Isosceles triangle");
}
else {
    console.log("It's a Scalene triangle");
}