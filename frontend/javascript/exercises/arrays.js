var arr = [1, 2, 3, 4, 5];

console.log(arr[0]); // Outputs: 1
console.log(arr[-1]); // Outputs: 5

arr[2] = 10;
console.log(arr); // Outputs: [1, 2, 10, 4, 5]

// Looping through array

for (let i = 0; i < arr.length; i++) {
    console.log("Index " + i + ": " + arr[i]);
}

for (let value of arr) {
    console.log("Value: " + value);
}

for (let index in arr) {
    console.log("Index: " + index + ", Value: " + arr[index]);
}

for (let i = arr.length - 1; i >= 0; i-=2) {
    console.log("Index " + i + ": " + arr[i]);
}   

// Array transformations

let doubled = arr.map(function(value) {
    return value * 2;
});

console.log("Doubled Array: " + doubled); // Outputs: [2, 4, 20, 8, 10]

let evens = arr.filter(function(value) {
    return value % 2 === 0;
});

console.log("Even Numbers: " + evens); // Outputs: [2, 10, 4]

let sum = arr.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0); 

console.log("Sum of Array: " + sum); // Outputs: 22

let found = arr.find(function(value) {
    return value > 3;
});

console.log("First Value Greater than 3: " + found); // Outputs: 10

let index = arr.findIndex(function(value) {
    return value === 10;
});

console.log("Index of Value 10: " + index); // Outputs: 2

// Mutation vs Immutation

let originalArray = [1, 2, 3];
console.log("Original Array: " + originalArray);

// Mutation
originalArray.push(4);
console.log("After Mutation (push 4): " + originalArray); // Outputs: [1, 2, 3, 4]

// Immutation
let newArray = originalArray.concat([5]);
console.log("After Immutation (concat 5): " + newArray); // Outputs: [1, 2, 3, 4, 5]
console.log("Original Array after Immutation: " + originalArray); // Outputs: [1, 2, 3, 4]

// Sparse arrays
// Typed arrays

let sparseArray = [];
sparseArray[0] = 1;
sparseArray[3] = 4;

console.log("Sparse Array: " + sparseArray); // Outputs: [1, empty × 2, 4]

let typedArray = new Uint8Array([10, 20, 30]);
console.log("Typed Array: " + typedArray); // Outputs: Uint8Array(3) [10, 20, 30]

// Array chaining

const nextArr = [1, 2, 3, 4, 5];

let chainedResult = nextArr
    .filter(function(value) {
        return value % 2 !== 0;
    })
    .map(function(value) {
        return value * 3;
    })
    .reduce(function(accumulator, current) {
        return accumulator + current;
    }, 0); // Outputs: (1*3) + (3*3) + (5*3) = 3 + 9 + 15 = 27

console.log("Chained Result (Sum of tripled odd numbers): " + chainedResult); // Outputs: 27