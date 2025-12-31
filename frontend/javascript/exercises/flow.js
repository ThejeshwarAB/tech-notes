var x = prompt("Enter a number:");

// Conditional logic

if(isNaN(x)) {
    console.log("Please enter a valid number.");
} else {
    x = Number(x);
    if (x > 0) {
        console.log("The number is positive.");
    } else {
        console.log("The number is negative.");
    }
}

// switch statement

var person = prompt("Enter your name:");

switch(person) {
    case "Alice":
        console.log("Hello, Alice!");
        break;
    case "Bob":
        console.log("Welcome back, Bob!");
        break;
    default:
        console.log("Hi there, stranger!");
}

// Loops

// for loop

for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration: " + i);
}

// while loop

let count = 0;
while (count < 5) {
    console.log("While Loop Count: " + count);
    count++;
}

// Loop with break

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i = " + i);
        break;
    }
    console.log("Loop Iteration: " + i);
}

// Loop with continue

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Odd Number: " + i);
}

// function 

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

var numberToCheck = prompt("Enter a number to check if it's prime:");
if (isNaN(numberToCheck)) {
    console.log("Please enter a valid number.");
} else {
    numberToCheck = Number(numberToCheck);
    if (isPrime(numberToCheck)) {
        console.log(numberToCheck + " is a prime number.");
    } else {
        console.log(numberToCheck + " is not a prime number.");
    }
}

// guard clauses

function checkAge(age) {
    if (isNaN(age) || age < 0) {
        console.log("Please enter a valid age.");
        return;
    }
    if (age < 18) {
        console.log("You are a minor.");
        return;
    }
    console.log("You are an adult.");
}

var userAge = prompt("Enter your age:");
checkAge(Number(userAge));
