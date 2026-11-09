// Assignment-3 :- CallBack-Based Utility System. 

// 1. processArray() Function
function processArray(arr, callback) {
    let result = [];

    for (let element of arr) {
        let value = callback(element);

        if (value !== undefined) {
            result.push(value);
        }
    }

    return result;
}

// 2. Square every number
let numbers = [1, 2, 3, 4, 5];

let squares = processArray(numbers, function (n) {
    return n * n;
});

console.log("Squares:", squares);

// 3. Return only even numbers
let evenNumbers = processArray(numbers, function (n) {
    if (n % 2 === 0) {
        return n;
    }
});

console.log("Even Numbers:", evenNumbers);

// 4. processString() Function
function processString(str, callback) {
    return callback(str);
}

// 5. Convert string to uppercase
let upper = processString("hello world", function (str) {
    return str.toUpperCase();
});

console.log("Uppercase:", upper);

// 6. Count words
let words = processString("JavaScript callback functions are useful", function (str) {
    return str.trim().split(" ").length;
});

console.log("Word Count:", words);

// 7. calculate() Function
function calculate(a, b, callback) {
    return callback(a, b);
}

// 8. Arithmetic Operations

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Addition:", calculate(10, 5, add));
console.log("Subtraction:", calculate(10, 5, subtract));
console.log("Multiplication:", calculate(10, 5, multiply));
console.log("Division:", calculate(10, 5, divide));

// 9. findElement() Function
function findElement(arr, callback) {
    for (let element of arr) {
        if (callback(element)) {
            return element;
        }
    }
    return undefined;
}
let firstEven = findElement(numbers, function (n) {
    return n % 2 === 0;
});
console.log("First Even Number:", firstEven);


// =============================
// BONUS CHALLENGE
// Menu Driven Calculator
// =============================

// Arithmetic Operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Division by Zero is not allowed";
    }
    return a / b;
}

// Callback Function
function calculate(a, b, callback) {
    return callback(a, b);
}

// Array Analysis
function arrayAnalysis(arr, callback) {
    return callback(arr);
}

// Callback Functions for Arrays
function sumArray(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum;
}

function maxArray(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}

function minArray(arr) {
    let min = arr[0];

    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }

    return min;
}

function averageArray(arr) {
    return sumArray(arr) / arr.length;
}

// Sample Data
let numberss = [10, 20, 30, 40, 50];

// ===== Arithmetic Menu =====
console.log("===== Arithmetic Operations =====");

console.log("Addition :", calculate(20, 10, add));
console.log("Subtraction :", calculate(20, 10, subtract));
console.log("Multiplication :", calculate(20, 10, multiply));
console.log("Division :", calculate(20, 10, divide));

// ===== Array Analysis Menu =====
console.log("\n===== Array Analysis =====");

console.log("Array :", numberss);

console.log("Sum :", arrayAnalysis(numberss, sumArray));
console.log("Maximum :", arrayAnalysis(numberss, maxArray));
console.log("Minimum :", arrayAnalysis(numberss, minArray));
console.log("Average :", arrayAnalysis(numberss, averageArray));

