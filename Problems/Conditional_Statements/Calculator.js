// Calculator Program
// Perform addition, subtraction, multiplication, or division based on user input (e.g., using if-else or switch).

var num1 = 9, num2 = 7, result;
var operation = "add";

switch (operation.toLowerCase()) {
    case "add":
        console.log(`Addition of ${num1} and ${num2} is ${num1 + num2}`);
        break;
    case "subtract":
        console.log(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`);
        break;
    case "multiply":
        console.log(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`);
        break;
    case "divide":
        console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`);
        break;
    default:
        console.log("Please Enter Proper Operation..!")
        break;
}