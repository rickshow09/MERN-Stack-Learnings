// Problem Statement
// Take a student's marks as input and print their grade using conditions:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// < 60: F

var Marks = 89;

if (Marks >= 90) {
    console.log("Your Grade is A");

} else if (Marks >= 80) {
    console.log("Your Grade is B");
} else if (Marks >= 70) {
    console.log("Your Grade is C");
}
else if (Marks >= 60) {
    console.log("Your Grade is D");
}
else {
    console.log("Your Grade is F");
}