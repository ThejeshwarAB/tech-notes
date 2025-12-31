// Block scope 

function scopeTest() {
    var globalVar = "I am a global variable";
    
    function innerFunction() {
        var localVar = "I am a local variable";
        console.log(globalVar); // Accessible
        console.log(localVar);  // Accessible
    }
    innerFunction();

    console.log(globalVar); // Accessible
    // console.log(localVar); // Unaccessible, would throw an error
}

scopeTest();

// Shadowing

var simple = "Global";

function shadowTest() {
    var simple = "Local"; 
    console.log("Inside function:", simple); // Logs: Local
}

shadowTest();
console.log("Outside function:", simple); // Logs: Global

// Closures

function makeCounter() {
    var count = 0;
    return function() {
        count++;
        return count;
    };
}

var counter = makeCounter();

console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3



