// 1. what is a function
var x = 25;

function addNumbers(a, b) {
    return a + b;
}

function isEven(num) {
    return num % 2 === 0;
}

console.log("Value of x:", x);
console.log("Adding 10 to x:", addNumbers(x, 10)); // Outputs: 35
console.log("Is x even?", isEven(x)); // Outputs: false

// 2. function basic implementation
let y = 40;

console.log("Value of y:", y);

function modifiesIt(y) {
    console.log("Before modifying y:", y);
    y = y + 10;
    console.log("After modifying y:", y);
    return y;
}

y = modifiesIt(y);

console.log("Value of y:", y);

// 3. paramters vs arguments

function greet(name, message) {
    return message + ", " + name + "!";
}

let userName = "Alice";
let greetMessage = "Hello";

console.log(greet(userName, greetMessage)); // Outputs: Hello, Alice!

userName = "Bob";
greetMessage = "Welcome";

console.log(greet(userName, greetMessage)); // Outputs: Welcome, Bob!

// 4. function declaration vs expression

console.log("Multiplying 5 and 10:", multiply(5, 10)); // Outputs: 50

// Function Declaration
function multiply(a, b) {
    return a * b;
}

// Function Expression
const divide = function(a, b) {
    return a / b;
};

console.log("Dividing 20 by 4:", divide(20, 4)); // Outputs: 5

// 5. pure vs impure functions

let z = 100;

// Pure Function
function pureAdd(a, b) {
    return a + b;
}

console.log("Pure Function Add 10 and 20:", pureAdd(10, 20)); // Outputs: 30

// Impure Function
function impureAdd(a) {
    z = z + a; // modifies external variable
    return z;
}

console.log("Impure Function Add 50 to z:", impureAdd(50));
console.log("Current value of z:", z); // Outputs: 150

// 6. functions calling functions

function square(num) {
    return num * num;
}

function sumOfSquares(a, b) {
    return square(a) + square(b);
}

console.log("Sum of squares of 3 and 4:", sumOfSquares(3, 4)); // Outputs: 25